"use client";

import { useEffect, useState } from "react";
import { AIChatDrawer } from "@/components/global/AIChatDrawer";

export function FloatingContactDock() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-2 md:right-6">
        <button
          className={`rounded-full bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white shadow-lg ${
            pulse ? "animate-pulse" : ""
          }`}
          onClick={() => setOpen(true)}
          aria-label="Open AI chat assistant"
        >
          Ask Max
        </button>
        <a
          href="https://wa.me/61400000000?text=Hi%2C%20I%20need%20a%20plumber"
          className="rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg"
          aria-label="Chat on WhatsApp"
        >
          WhatsApp
        </a>
        <a
          href="tel:+611300758623"
          className="rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg"
          aria-label="Call now"
        >
          Call Now
        </a>
      </div>
      <AIChatDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
