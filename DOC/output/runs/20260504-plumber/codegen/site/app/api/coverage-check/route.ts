import { NextResponse } from "next/server";

const covered = new Set(["2150", "2148", "2112", "2067"]);

export async function GET(req: Request) {
  const url = new URL(req.url);
  const postcode = (url.searchParams.get("postcode") ?? "").trim();
  return NextResponse.json({ postcode, covered: covered.has(postcode) });
}
