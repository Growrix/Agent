import type { Metadata } from "next";
import { c } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: c("seo.terms.meta_title"),
  description: c("seo.terms.meta_description"),
};

export default function TermsPage() {
  const updated = new Date("2025-01-01").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <HeroSection
        headline={c("terms.hero.headline")}
        subheadline={c("terms.hero.subheadline")}
      />

      <section className="py-[--space-section-y-mobile] md:py-[--space-section-y-tablet]" aria-label="Terms of use content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[--color-text-muted] mb-6">
            <strong>{c("terms.updated_label")}:</strong> {updated}
          </p>
          <div>
            {c("terms.body")
              .split("\n\n")
              .map((paragraph, i) => (
                <p key={i} className="mb-4 text-base text-[--color-text] leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
          </div>
          <div className="mt-8 p-4 bg-[--color-inset] rounded-[--radius-card] text-sm text-[--color-text-muted]">
            <strong className="text-[--color-text]">{c("terms.contact_label")}:</strong>{" "}
            Use the contact information found on this site.
          </div>
        </div>
      </section>

      <CTASection
        heading="Questions?"
        body="Contact us if you have questions about these terms."
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
      />
    </>
  );
}
