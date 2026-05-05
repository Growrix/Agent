import { createHmac } from "node:crypto";
import { beforeEach, describe, expect, test, vi } from "vitest";

const revalidatePath = vi.fn();

vi.mock("next/cache", () => ({
  revalidatePath,
}));

describe("API routes", () => {
  beforeEach(() => {
    revalidatePath.mockReset();
  });

  test("GET /api/health returns ok", async () => {
    const { GET } = await import("@/app/api/health/route");
    const response = await GET();
    const payload = (await response.json()) as { ok: boolean; data: { status: string } };

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(payload.data.status).toBe("ok");
  });

  test("POST /api/leads accepts a valid quote payload", async () => {
    const { POST } = await import("@/app/api/leads/route");
    const request = new Request("http://localhost:3000/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Taylor",
        phone: "0400123123",
        service: "Emergency repairs",
        postcode: "2000",
        message: "Burst pipe under the sink.",
        source: "quote",
      }),
    });

    const response = await POST(request);
    const payload = (await response.json()) as { ok: boolean; data: { status: string } };

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(payload.data.status).toBe("received");
  });

  test("POST /api/webhooks/sanity revalidates matching routes", async () => {
    const { POST } = await import("@/app/api/webhooks/sanity/route");
    const body = JSON.stringify({ type: "service", slug: "emergency-plumbing" });
    const signature = createHmac("sha256", process.env.SANITY_WEBHOOK_SECRET ?? "demo-webhook-secret")
      .update(body)
      .digest("hex");

    const request = new Request("http://localhost:3000/api/webhooks/sanity", {
      method: "POST",
      headers: {
        "x-sanity-signature": signature,
      },
      body,
    });

    const response = await POST(request);
    const payload = (await response.json()) as { ok: boolean; data: { revalidated: string[] } };

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(payload.data.revalidated).toContain("/services/emergency-plumbing");
    expect(revalidatePath).toHaveBeenCalled();
  });
});