import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const signature = request.headers.get("x-sanity-signature");
  const expected = process.env.SANITY_WEBHOOK_SECRET;

  if (!signature || !expected || signature !== expected) {
    return NextResponse.json({ error: { code: "INVALID_SIGNATURE", message: "Invalid signature" } }, { status: 400 });
  }

  return NextResponse.json({ data: { revalidated: true } });
}
