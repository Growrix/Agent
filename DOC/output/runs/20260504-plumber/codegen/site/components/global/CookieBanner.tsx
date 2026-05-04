"use client";

import { useState } from "react";

export function CookieBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 text-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p>We use analytics cookies after consent to improve booking and support experience.</p>
        <button
          onClick={() => setHidden(true)}
          className="rounded-lg bg-[var(--primary)] px-3 py-1.5 font-semibold text-white"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
