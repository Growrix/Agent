import { NextResponse } from "next/server";
import { getRuntimeHealth } from "@/server/services/health";

export async function GET() {
  return NextResponse.json({
    ok: true,
    data: getRuntimeHealth(),
  });
}