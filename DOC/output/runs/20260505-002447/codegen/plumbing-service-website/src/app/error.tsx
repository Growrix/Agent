"use client";

import { Button } from "@/components/marketing/shared/button";
import { copy } from "@/lib/content";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="section-shell pb-24 pt-10" id="main-content">
      <section className="surface-panel rounded-4xl p-10">
        <p className="eyebrow w-fit text-foreground">{copy("errors.network.title")}</p>
        <h1 className="mt-6 font-display text-4xl font-semibold text-foreground">{copy("errors.network.title")}</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{copy("errors.network.body")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={reset}>{copy("errors.network.retry")}</Button>
          <Button href="/contact" variant="ghost">
            {copy("component.sticky.contact")}
          </Button>
        </div>
      </section>
    </main>
  );
}