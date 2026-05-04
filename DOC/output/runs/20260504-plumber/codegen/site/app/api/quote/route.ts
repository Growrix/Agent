import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const required = ["service", "issue", "postcode", "name", "phone"];
  const missing = required.filter((key) => !body?.[key]);

  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing fields: ${missing.join(", ")}` }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Quote request received" });
}
