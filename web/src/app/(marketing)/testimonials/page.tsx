import { allContent } from "@/lib/content";
import { fallbackCards } from "@/lib/page-data";
import { MarketingPage } from "@/components/sections/MarketingPage";

export default function TestimonialsPage() {
  return (
    <MarketingPage
      cards={fallbackCards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/contact"
      ctaSecondaryLabel={allContent.actions.contactTeam}
      ctaTitle={allContent.testimonials.title}
      sectionHeading={allContent.home.sections.trust}
      subtitle={allContent.testimonials.subtitle}
      testimonialHeading={allContent.home.sections.testimonials}
      title={allContent.testimonials.title}
    />
  );
}
