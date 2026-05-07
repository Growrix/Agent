"use client";

import { useState } from "react";
import { t } from "@/lib/content";
import { ContactInfoStrip } from "@/components/sections/ContactInfoStrip";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AreasCoverageSection } from "@/components/sections/AreasCoverageSection";
import { CTABand } from "@/components/sections/CTABand";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const contactFaq = [
    {
      question: "How soon will I get a response?",
      answer: "Most inquiries receive a response in under ten minutes during operating hours."
    },
    {
      question: "Can I request a specific appointment window?",
      answer: "Yes. Include your preferred times in the notes and we will confirm availability."
    },
    {
      question: "Do you serve my neighborhood?",
      answer: "Share your address and we will confirm service coverage immediately."
    }
  ];

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-16">
      <ContactInfoStrip />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold text-foreground">{t("section.contact.title")}</h1>
          <p className="mt-4 max-w-[60ch] text-theme-secondary">Tell us what you are seeing and we will respond with a clear next step.</p>
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
              <label className="block text-sm text-theme-secondary">
                {t("form.email")}
                <input type="email" required className="mt-1 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
              </label>
              <label className="block text-sm text-theme-secondary">
                {t("form.address")}
                <input required className="mt-1 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
              </label>
              <label className="block text-sm text-theme-secondary">
                {t("form.notes")}
                <textarea className="mt-1 min-h-32 w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" />
              </label>
              <button className="w-full rounded-full bg-primary-600 px-5 py-3 font-semibold text-theme-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus" type="submit">
                {t("form.submit")}
              </button>
            </form>
          )}
        </div>
      </section>

      <FAQSection title="Contact Questions" items={contactFaq} />
      <TestimonialsSection />
      <AreasCoverageSection />
      <CTABand title="Prefer To Speak Right Away?" description="Call our team for immediate scheduling support." href="/storm-damage" buttonText="Emergency Contact" />
    </main>
  );
}



