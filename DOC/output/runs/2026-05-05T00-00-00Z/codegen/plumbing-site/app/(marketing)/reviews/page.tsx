import type { Metadata } from "next";
import { c } from "@/lib/content";
import { TESTIMONIALS, SITE, FAQ_ITEMS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FeatureSection from "@/components/sections/FeatureSection";
import StatBlock from "@/components/display/StatBlock";

export const metadata: Metadata = {
  title: c("seo.reviews.meta_title"),
  description: c("seo.reviews.meta_description"),
  openGraph: {
    title: c("seo.reviews.meta_title"),
    description: c("seo.reviews.meta_description"),
  },
};

const FEEDBACK_ITEMS = [
  { title: c("reviews.feedback.items.0.title"), body: c("reviews.feedback.items.0.body") },
  { title: c("reviews.feedback.items.1.title"), body: c("reviews.feedback.items.1.body") },
  { title: c("reviews.feedback.items.2.title"), body: c("reviews.feedback.items.2.body") },
];

export default function ReviewsPage() {
  const reviewsFaqs = FAQ_ITEMS.slice(0, 3);

  return (
    <>
      <HeroSection
        eyebrow={c("reviews.hero.eyebrow")}
        headline={c("reviews.hero.headline")}
        subheadline={c("reviews.hero.subheadline")}
      />

      <div className="bg-[--color-inset] border-y border-[--color-border] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12">
            <StatBlock value={SITE.aggregateRating} label={c("reviews.aggregate.rating_label")} />
            <StatBlock value={SITE.reviewCount} label="Reviews" />
          </div>
        </div>
      </div>

      <TestimonialSection
        heading={c("reviews.grid.heading")}
        body={c("reviews.grid.body")}
        testimonials={TESTIMONIALS}
      />

      <FeatureSection
        heading={c("reviews.feedback.heading")}
        items={FEEDBACK_ITEMS}
        columns={3}
        className="bg-[--color-inset]"
      />

      <FAQSection heading={c("reviews.faq.heading")} items={reviewsFaqs} />

      <CTASection
        heading={c("reviews.cta.heading")}
        body={c("reviews.cta.body")}
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
