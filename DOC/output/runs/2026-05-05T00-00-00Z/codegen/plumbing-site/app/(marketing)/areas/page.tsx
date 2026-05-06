import type { Metadata } from "next";
import { c } from "@/lib/content";
import { AREAS, FAQ_ITEMS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import GridSection from "@/components/sections/GridSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: c("seo.areas.meta_title"),
  description: c("seo.areas.meta_description"),
  openGraph: {
    title: c("seo.areas.meta_title"),
    description: c("seo.areas.meta_description"),
  },
};

export default function AreasPage() {
  const areaItems = AREAS.map((a) => ({
    id: a.slug,
    title: a.name,
    body: a.shortDescription,
    href: `/areas/${a.slug}`,
  }));

  const coverageFaqs = FAQ_ITEMS.filter((f) => f.category === "coverage");

  return (
    <>
      <HeroSection
        eyebrow={c("areas.hero.eyebrow")}
        headline={c("areas.hero.headline")}
        subheadline={c("areas.hero.subheadline")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
      />

      <GridSection
        heading={c("areas.grid.heading")}
        body={c("areas.grid.body")}
        items={areaItems}
        columns={4}
      />

      {coverageFaqs.length > 0 && (
        <FAQSection heading={c("areas.faq.heading")} items={coverageFaqs} />
      )}

      <CTASection
        heading={c("areas.cta.heading")}
        body={c("areas.cta.body")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
      />
    </>
  );
}
