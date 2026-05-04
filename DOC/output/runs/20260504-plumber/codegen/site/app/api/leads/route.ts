import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body?.name || !body?.phone) {
    return NextResponse.json({ error: "Missing lead fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
