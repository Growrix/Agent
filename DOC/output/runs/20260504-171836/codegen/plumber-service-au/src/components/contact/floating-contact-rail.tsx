"use client";

import { useState } from "react";
import { AiAssistantPanel } from "@/components/ai/ai-assistant-panel";

export function FloatingContactRail() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          className="rounded-full bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.01]"
          href="tel:+61000000000"
        >
          Call
        </a>
        <a
          className="rounded-full bg-success px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.01]"
          href="https://wa.me/61000000000"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <button
          type="button"
          className="rounded-full bg-accent px-4 py-3 text-sm font-bold text-primary shadow-lg transition hover:scale-[1.01]"
          onClick={() => setIsAssistantOpen((prev) => !prev)}
        >
          AI Chat
        </button>
      </div>
      <AiAssistantPanel isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </>
  );
}
