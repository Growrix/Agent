import { NextResponse } from "next/server";
import { LeadCaptureError, submitLead } from "@/server/services/lead-capture";

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, unknown>;

  try {
    const result = await submitLead(payload);
    return NextResponse.json({ ok: true, data: result });
  } catch (error) {
    if (error instanceof LeadCaptureError) {
      const statusMap = {
        validation: 400,
        spam_guard: 403,
        delivery_failed: 502,
      } as const;

      return NextResponse.json(
        { ok: false, error: error.code },
        {
          status: statusMap[error.code],
        },
      );
    }

    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}