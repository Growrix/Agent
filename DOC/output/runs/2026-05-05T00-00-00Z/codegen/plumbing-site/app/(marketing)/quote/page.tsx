import type { Metadata } from "next";
import { c } from "@/lib/content";
import { SITE } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import FormSection from "@/components/sections/FormSection";
import StepIndicator from "@/components/display/StepIndicator";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: c("seo.quote.meta_title"),
  description: c("seo.quote.meta_description"),
  openGraph: {
    title: c("seo.quote.meta_title"),
    description: c("seo.quote.meta_description"),
  },
};

const NEXT_STEPS = [
  { title: c("quote.trust.items.0.title"), body: c("quote.trust.items.0.body") },
  { title: c("quote.trust.items.1.title"), body: c("quote.trust.items.1.body") },
  { title: c("quote.trust.items.2.title"), body: c("quote.trust.items.2.body") },
];

export default function QuotePage() {
  return (
    <>
      <HeroSection
        eyebrow={c("quote.hero.eyebrow")}
        headline={c("quote.hero.headline")}
        subheadline={c("quote.hero.subheadline")}
      />

      <div className="py-[--space-section-y-mobile] md:py-[--space-section-y-tablet]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FormSection
                heading={c("quote.form.heading")}
                ctaLabel={c("quote.form.cta")}
                variant="quote"
                className="py-0"
              />
            </div>
            <aside aria-label="What happens next" className="flex flex-col gap-6">
              {/* Call first */}
              <div className="p-5 bg-[--color-primary] text-white rounded-[--radius-card]">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Phone" size={16} aria-hidden="true" />
                  <h2 className="font-semibold">{c("quote.call.heading")}</h2>
                </div>
                <p className="text-sm text-white/80 mb-3">{c("quote.call.body")}</p>
                <a
                  href={c("global.phone_link")}
                  className="inline-block font-bold text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {SITE.phone}
                </a>
              </div>
              {/* What happens next */}
              <div className="p-5 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1]">
                <h2 className="font-semibold text-[--color-text] mb-4">{c("quote.trust.heading")}</h2>
                <StepIndicator steps={NEXT_STEPS} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
