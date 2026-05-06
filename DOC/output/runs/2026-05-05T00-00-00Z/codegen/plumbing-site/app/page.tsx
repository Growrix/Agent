import type { Metadata } from "next";
import { c } from "@/lib/content";
import { SERVICES, TESTIMONIALS, FAQ_ITEMS } from "@/lib/data";
import HeroSection, { ProofStrip } from "@/components/sections/HeroSection";
import GridSection from "@/components/sections/GridSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: c("seo.home.meta_title"),
  description: c("seo.home.meta_description"),
  openGraph: {
    title: c("seo.home.meta_title"),
    description: c("seo.home.og_description"),
  },
};

export default function HomePage() {
  const serviceItems = SERVICES.map((s) => ({
    id: s.slug,
    title: s.title,
    body: s.shortDescription,
    href: `/services/${s.slug}`,
    icon: <Icon name={s.icon as IconName} size={18} aria-hidden="true" />,
  }));

  const previewAreas = [
    { id: "downtown", title: "Downtown", href: "/areas/downtown" },
    { id: "northside", title: "Northside", href: "/areas/northside" },
    { id: "westend", title: "West End", href: "/areas/westend" },
    { id: "east-district", title: "East District", href: "/areas/east-district" },
    { id: "south-valley", title: "South Valley", href: "/areas/south-valley" },
    { id: "lakeside", title: "Lakeside", href: "/areas/lakeside" },
  ];

  const previewFaqs = FAQ_ITEMS.slice(0, 4);

  return (
    <>
      <HeroSection
        eyebrow={c("home.hero.eyebrow")}
        headline={c("home.hero.headline")}
        subheadline={c("home.hero.subheadline")}
        ctaPrimary={{
          label: `${c("home.hero.cta_primary")} — ${c("global.phone")}`,
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("home.hero.cta_secondary"), href: "/quote" }}
        trustBadges={[
          c("trust.same_day_badge"),
          c("trust.licensed_badge"),
          c("trust.insured_badge"),
        ]}
      />

      <ProofStrip />

      <GridSection
        heading={c("home.services_preview.heading")}
        body={c("home.services_preview.body")}
        items={serviceItems}
        columns={3}
        ctaLabel={c("home.services_preview.cta")}
        ctaHref="/services"
      />

      <GridSection
        heading={c("home.areas_preview.heading")}
        body={c("home.areas_preview.body")}
        items={previewAreas}
        columns={3}
        ctaLabel={c("home.areas_preview.cta")}
        ctaHref="/areas"
        className="bg-[--color-inset]"
      />

      <TestimonialSection
        heading={c("home.reviews_preview.heading")}
        body={c("home.reviews_preview.body")}
        testimonials={TESTIMONIALS.slice(0, 3)}
        ctaLabel={c("home.reviews_preview.cta")}
        ctaHref="/reviews"
      />

      <FAQSection
        heading={c("home.faq_preview.heading")}
        body={c("home.faq_preview.body")}
        items={previewFaqs}
        ctaLabel={c("home.faq_preview.cta")}
        ctaHref="/faq"
      />

      <CTASection
        heading={c("home.cta_band.heading")}
        body={c("home.cta_band.body")}
        ctaPrimary={{
          label: `${c("home.cta_band.cta_primary")} — ${c("global.phone")}`,
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("home.cta_band.cta_secondary"), href: "/quote" }}
        variant="teal"
      />
    </>
  );
}

