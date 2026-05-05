import { createHmac } from "node:crypto";
import { describe, expect, test } from "vitest";
import { getAffectedRoutes } from "@/server/services/cms-webhook";

describe("getAffectedRoutes", () => {
  test("maps a service publish payload to service routes", () => {
    const body = JSON.stringify({ type: "service", slug: "emergency-plumbing" });
    const signature = createHmac("sha256", process.env.SANITY_WEBHOOK_SECRET ?? "demo-webhook-secret")
      .update(body)
      .digest("hex");

    expect(getAffectedRoutes(body, signature)).toEqual(["/", "/services", "/services/emergency-plumbing"]);
  });
});