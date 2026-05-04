import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json()) as { message?: string };
  const message = (body.message ?? "").toLowerCase();

  if (
    message.includes("emergency") ||
    message.includes("burst") ||
    message.includes("gas") ||
    message.includes("flood")
  ) {
    return NextResponse.json({
      reply: "This sounds urgent. Please call now on 1300 758 623 for immediate dispatch.",
    });
  }

  return NextResponse.json({
    reply: "I can help with blocked drains, hot water, leaks, and gas fitting. Share your suburb and issue so we can schedule quickly.",
  });
}
