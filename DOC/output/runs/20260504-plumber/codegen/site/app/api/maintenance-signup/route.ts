import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body?.email || !body?.optIn) {
    return NextResponse.json({ error: "Email and opt-in are required" }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Maintenance signup recorded" });
}
