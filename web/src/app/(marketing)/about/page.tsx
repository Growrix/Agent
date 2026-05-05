import { allContent } from "@/lib/content";
import { fallbackCards } from "@/lib/page-data";
import { MarketingPage } from "@/components/sections/MarketingPage";

export default function AboutPage() {
  return (
    <MarketingPage
      cards={fallbackCards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/contact"
      ctaSecondaryLabel={allContent.nav.contact}
      ctaTitle={allContent.about.title}
      sectionHeading={allContent.home.sections.trust}
      subtitle={allContent.about.subtitle}
      testimonialHeading={allContent.home.sections.testimonials}
      title={allContent.about.title}
    />
  );
}
