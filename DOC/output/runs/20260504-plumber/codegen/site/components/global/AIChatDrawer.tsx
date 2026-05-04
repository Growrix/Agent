"use client";

import { useState } from "react";

type Message = { role: "user" | "assistant"; text: string };

export function AIChatDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I am Max. Tell me what plumbing issue you are facing and your suburb.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "I can connect you right now. Tap Call Now." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="fixed bottom-24 right-4 z-[60] h-[560px] w-[360px] rounded-2xl border border-slate-200 bg-white shadow-2xl md:right-6">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div>
          <p className="font-bold text-[var(--primary)]">Ask Max</p>
          <p className="text-xs text-slate-500">Virtual plumbing assistant</p>
        </div>
        <button onClick={onClose} className="text-sm font-semibold text-slate-600">
          Close
        </button>
      </div>
      <div className="h-[430px] space-y-3 overflow-y-auto p-4 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "assistant" ? "rounded-lg bg-slate-100 p-3" : "rounded-lg bg-blue-50 p-3"}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 border-t border-slate-200 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              void sendMessage();
            }
          }}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Describe your issue"
        />
        <button
          onClick={() => void sendMessage()}
          disabled={loading}
          className="rounded-lg bg-[var(--primary)] px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </aside>
  );
}
