import { HeroMediaStack } from "@/components/sections/HeroMediaStack";
import { CmsCardGrid } from "@/components/sections/CmsCardGrid";
import { TestimonialRail } from "@/components/sections/TestimonialRail";
import { CtaBand } from "@/components/sections/CtaBand";
import { QuoteCalculatorPanel } from "@/components/forms/QuoteCalculatorPanel";

type MarketingPageProps = {
  title: string;
  subtitle: string;
  sectionHeading: string;
  cards: Array<{ key: string; title: string; summary: string }>;
  testimonialHeading: string;
  ctaTitle: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export const MarketingPage = ({
  title,
  subtitle,
  sectionHeading,
  cards,
  testimonialHeading,
  ctaTitle,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
}: MarketingPageProps) => {
  return (
    <>
      <HeroMediaStack imageAlt={title} subtitle={subtitle} title={title} />
      <CmsCardGrid heading={sectionHeading} items={cards} />
      <TestimonialRail heading={testimonialHeading} />
      <QuoteCalculatorPanel />
      <CtaBand
        primaryHref={ctaPrimaryHref}
        primaryLabel={ctaPrimaryLabel}
        secondaryHref={ctaSecondaryHref}
        secondaryLabel={ctaSecondaryLabel}
        title={ctaTitle}
      />
    </>
  );
};
