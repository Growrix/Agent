"use client";

import { FormEvent, useMemo, useState } from "react";

type AiAssistantPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function AiAssistantPanel({ isOpen, onClose }: AiAssistantPanelProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi. I can help with plumbing issues, pricing guides, and booking next steps.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSend) return;

    const nextMessage: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, nextMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, nextMessage] }),
      });

      const payload = (await response.json()) as { data?: { reply?: string }; error?: { message?: string } };
      const reply = payload.data?.reply ?? payload.error?.message ?? "I could not process that right now.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection issue. Please call us for urgent plumbing support." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <section className="fixed bottom-24 right-5 z-50 flex h-112 w-88 flex-col overflow-hidden rounded-2xl border border-primary/20 bg-surface shadow-2xl">
      <header className="flex items-center justify-between bg-primary px-4 py-3 text-white">
        <h3 className="font-semibold">AI Plumbing Assistant</h3>
        <button type="button" className="text-sm underline" onClick={onClose}>
          Close
        </button>
      </header>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((message, idx) => (
          <div
            key={`${message.role}-${idx}`}
            className={`rounded-xl p-3 text-sm ${message.role === "assistant" ? "bg-primary/10" : "bg-accent/25"}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <form className="border-t border-primary/10 p-3" onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="h-20 w-full rounded-lg border border-primary/20 p-2 text-sm outline-none focus:border-primary"
          placeholder="Describe your issue. For emergencies, call now."
        />
        <button
          type="submit"
          disabled={!canSend}
          className="mt-2 w-full rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Thinking..." : "Send"}
        </button>
      </form>
    </section>
  );
}
