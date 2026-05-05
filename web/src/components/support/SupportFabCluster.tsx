"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageCircleMore, Phone, Bot } from "lucide-react";
import { allContent } from "@/lib/content";
import { ChatAssistantModal } from "@/components/support/ChatAssistantModal";

export const SupportFabCluster = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
        <Link
          aria-label={allContent.support.phoneLabel}
          className="focusable rounded-full bg-emerald-800 p-3 text-white shadow-lg"
          href="tel:+10000000000"
        >
          <Phone size={18} />
        </Link>
        <Link
          aria-label={allContent.support.whatsappLabel}
          className="focusable rounded-full bg-green-600 p-3 text-white shadow-lg"
          href="https://wa.me/10000000000"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircleMore size={18} />
        </Link>
        <button
          aria-label={allContent.support.assistantLabel}
          className="focusable rounded-full bg-amber-500 p-3 text-white shadow-lg"
          onClick={() => setOpen(true)}
          type="button"
        >
          <Bot size={18} />
        </button>
      </div>
      <ChatAssistantModal onClose={() => setOpen(false)} open={open} />
    </>
  );
};
