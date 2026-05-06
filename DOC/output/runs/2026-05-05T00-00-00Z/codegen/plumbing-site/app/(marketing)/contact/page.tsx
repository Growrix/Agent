import type { Metadata } from "next";
import { c } from "@/lib/content";
import { SITE } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: c("seo.contact.meta_title"),
  description: c("seo.contact.meta_description"),
  openGraph: {
    title: c("seo.contact.meta_title"),
    description: c("seo.contact.meta_description"),
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow={c("contact.hero.eyebrow")}
        headline={c("contact.hero.headline")}
        subheadline={c("contact.hero.subheadline")}
      />

      <section className="py-[--space-section-y-mobile] md:py-[--space-section-y-tablet]" aria-label="Contact information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="p-6 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1]">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Phone" size={20} className="text-[--color-primary]" aria-hidden="true" />
                <h2 className="font-semibold text-[--color-text]">{c("contact.call.heading")}</h2>
              </div>
              <p className="text-sm text-[--color-text-muted] mb-4">{c("contact.call.body")}</p>
              <a
                href={c("global.phone_link")}
                className="inline-flex items-center gap-2 text-[--color-primary] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] rounded"
              >
                {SITE.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="p-6 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1]">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Clock" size={20} className="text-[--color-primary]" aria-hidden="true" />
                <h2 className="font-semibold text-[--color-text]">{c("contact.hours.heading")}</h2>
              </div>
              <p className="text-sm text-[--color-text-muted]">{SITE.hours}</p>
            </div>

            {/* Area */}
            <div className="p-6 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1]">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="MapPin" size={20} className="text-[--color-primary]" aria-hidden="true" />
                <h2 className="font-semibold text-[--color-text]">{c("contact.areas.heading")}</h2>
              </div>
              <p className="text-sm text-[--color-text-muted]">{c("contact.areas.body")}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading={c("contact.form.heading")}
        body="Fill out the form below and we will follow up soon."
        ctaPrimary={{ label: c("contact.form.cta"), href: "/quote" }}
        ctaSecondary={{
          label: `${c("global.cta_primary")} — ${SITE.phone}`,
          href: c("global.phone_link"),
        }}
        variant="default"
      />
    </>
  );
}
