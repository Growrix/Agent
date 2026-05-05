import type { Metadata } from "next";
import { c } from "@/lib/content";
import { SERVICES, FAQ_ITEMS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import GridSection from "@/components/sections/GridSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import StepIndicator from "@/components/display/StepIndicator";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: c("seo.services.meta_title"),
  description: c("seo.services.meta_description"),
  openGraph: {
    title: c("seo.services.meta_title"),
    description: c("seo.services.meta_description"),
  },
};

const PROCESS_STEPS = [
  { title: c("services.process.items.0.title"), body: c("services.process.items.0.body") },
  { title: c("services.process.items.1.title"), body: c("services.process.items.1.body") },
  { title: c("services.process.items.2.title"), body: c("services.process.items.2.body") },
];

export default function ServicesPage() {
  const serviceItems = SERVICES.map((s) => ({
    id: s.slug,
    title: s.title,
    body: s.shortDescription,
    href: `/services/${s.slug}`,
    icon: <Icon name={s.icon as IconName} size={18} aria-hidden="true" />,
  }));

  const serviceFaqs = FAQ_ITEMS.slice(0, 5);

  return (
    <>
      <HeroSection
        eyebrow={c("services.hero.eyebrow")}
        headline={c("services.hero.headline")}
        subheadline={c("services.hero.subheadline")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("global.cta_secondary"), href: "/quote" }}
      />

      <GridSection
        heading={c("services.grid.heading")}
        body={c("services.grid.body")}
        items={serviceItems}
        columns={3}
        emptyTitle={c("services.grid.empty_title")}
        emptyBody={c("services.grid.empty_body")}
      />

      <section className="py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] bg-[--color-inset]" aria-label={c("services.process.heading")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display] mb-8">
            {c("services.process.heading")}
          </h2>
          <StepIndicator steps={PROCESS_STEPS} className="max-w-xl" />
        </div>
      </section>

      <FAQSection
        heading={c("services.faq.heading")}
        items={serviceFaqs}
      />

      <CTASection
        heading={c("services.cta.heading")}
        body={c("services.cta.body")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("global.cta_secondary"), href: "/quote" }}
      />
    </>
  );
}
