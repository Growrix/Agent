"use client";

import { Button } from "@/components/marketing/shared/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="section-shell pb-24 pt-10">
      <div className="surface-panel rounded-4xl p-8">
        <h1 className="font-display text-3xl font-semibold text-foreground">Area page unavailable</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">The area page could not be loaded right now.</p>
        <div className="mt-6 flex gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}