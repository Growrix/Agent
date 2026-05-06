import type { Metadata } from "next";
import { c } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CTASection from "@/components/sections/CTASection";
import DetailSection from "@/components/sections/DetailSection";

export const metadata: Metadata = {
  title: c("seo.about.meta_title"),
  description: c("seo.about.meta_description"),
  openGraph: {
    title: c("seo.about.meta_title"),
    description: c("seo.about.meta_description"),
  },
};

const VALUES_ITEMS = [
  { title: c("about.values.items.0.title"), body: c("about.values.items.0.body"), icon: "Award" as const },
  { title: c("about.values.items.1.title"), body: c("about.values.items.1.body"), icon: "Shield" as const },
  { title: c("about.values.items.2.title"), body: c("about.values.items.2.body"), icon: "Headphones" as const },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow={c("about.hero.eyebrow")}
        headline={c("about.hero.headline")}
        subheadline={c("about.hero.subheadline")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("global.cta_secondary"), href: "/quote" }}
      />

      <DetailSection
        heading={c("about.mission.heading")}
        body={c("about.mission.body")}
      />

      <FeatureSection
        heading={c("about.values.heading")}
        items={VALUES_ITEMS}
        className="bg-[--color-inset]"
      />

      <DetailSection
        heading={c("about.team.heading")}
        body={c("about.team.body")}
      />

      <CTASection
        heading={c("about.cta.heading")}
        body={c("about.cta.body")}
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
