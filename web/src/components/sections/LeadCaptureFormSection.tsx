"use client";

import { useState } from "react";
import { t } from "@/lib/content";

type LeadCaptureFormSectionProps = {
  title: string;
  description: string;
  compact?: boolean;
};

export function LeadCaptureFormSection({ title, description, compact = false }: LeadCaptureFormSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">{title}</h2>
          <p className="mt-3 max-w-[60ch] text-theme-secondary">{description}</p>
        </div>
        <div className="rounded-2xl border border-theme bg-surface-raised p-6">
          {submitted ? (
            <p className="text-foreground">{t("form.success")}</p>
          ) : (
            <form className="space-y-3" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <label className="block text-sm text-theme-secondary">
                {t("form.name")}
                <input required className="mt-1 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
              </label>
              <label className="block text-sm text-theme-secondary">
                {t("form.phone")}
                <input required className="mt-1 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
              </label>
              {compact ? null : (
                <label className="block text-sm text-theme-secondary">
                  {t("form.email")}
                  <input type="email" required className="mt-1 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
                </label>
              )}
              <label className="block text-sm text-theme-secondary">
                {t("form.address")}
                <input required className="mt-1 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
              </label>
              <label className="block text-sm text-theme-secondary">
                {t("form.notes")}
                <textarea className="mt-1 min-h-28 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
              </label>
              <button className="w-full rounded-full bg-primary-600 px-5 py-3 font-semibold text-theme-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus" type="submit">
                {t("form.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
