"use client";

import { useState } from "react";

export function NewsletterSignupSection() {
  const [done, setDone] = useState(false);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-theme bg-surface-raised p-6">
        <h2 className="text-2xl font-semibold text-foreground">Roof Care Tips And Seasonal Alerts</h2>
        <p className="mt-2 text-sm text-theme-secondary">Get occasional guidance on maintenance windows, storm prep, and warranty reminders.</p>
        {done ? (
          <p className="mt-4 text-sm text-foreground">Thanks, you&apos;re subscribed.</p>
        ) : (
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setDone(true); }}>
            <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
            <button type="submit" className="rounded-full bg-primary-600 px-5 py-3 text-theme-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
