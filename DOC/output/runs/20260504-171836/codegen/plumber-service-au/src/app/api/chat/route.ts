import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatBody = {
  messages?: ChatMessage[];
};

function extractLatestUserMessage(messages: ChatMessage[]) {
  const userMessages = messages.filter((message) => message.role === "user");
  return userMessages[userMessages.length - 1]?.content ?? "";
}

function fallbackReply(query: string) {
  if (query.toLowerCase().includes("emergency")) {
    return "For immediate emergencies, please call now using the floating Call button. We prioritize burst pipes and active leaks.";
  }
  return "Thanks for your question. For urgent support, call now. For quotes, open the quote form and share suburb, postcode, and issue details.";
}

export async function POST(request: Request) {
  const body = (await request.json()) as ChatBody;

  if (!body.messages || !Array.isArray(body.messages)) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "messages must be an array" } },
      { status: 400 },
    );
  }

  const latest = extractLatestUserMessage(body.messages);

  return NextResponse.json({ data: { reply: fallbackReply(latest) } });
}
