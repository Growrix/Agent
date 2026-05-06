import type { Metadata } from "next";
import { c } from "@/lib/content";
import { FAQ_ITEMS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: c("seo.faq.meta_title"),
  description: c("seo.faq.meta_description"),
  openGraph: {
    title: c("seo.faq.meta_title"),
    description: c("seo.faq.meta_description"),
  },
};

export default function FAQPage() {
  return (
    <>
      <HeroSection
        eyebrow={c("faq.hero.eyebrow")}
        headline={c("faq.hero.headline")}
        subheadline={c("faq.hero.subheadline")}
      />

      <FAQSection
        heading="Scheduling"
        items={FAQ_ITEMS.filter((f) => f.category === "scheduling")}
      />

      <FAQSection
        heading="Pricing"
        items={FAQ_ITEMS.filter((f) => f.category === "pricing")}
        className="bg-[--color-inset]"
      />

      <FAQSection
        heading="Coverage & Credentials"
        items={FAQ_ITEMS.filter((f) => f.category === "coverage" || f.category === "credentials")}
      />

      <FAQSection
        heading="General"
        items={FAQ_ITEMS.filter((f) => f.category === "general")}
        className="bg-[--color-inset]"
      />

      <CTASection
        heading={c("faq.cta.heading")}
        body={c("faq.cta.body")}
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
