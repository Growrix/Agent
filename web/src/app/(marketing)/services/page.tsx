import { allContent } from "@/lib/content";
import { getServiceCards } from "@/lib/page-data";
import { MarketingPage } from "@/components/sections/MarketingPage";

export default async function ServicesPage() {
  const cards = await getServiceCards();

  return (
    <MarketingPage
      cards={cards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/contact"
      ctaSecondaryLabel={allContent.nav.contact}
      ctaTitle={allContent.services.title}
      sectionHeading={allContent.home.sections.services}
      subtitle={allContent.services.subtitle}
      testimonialHeading={allContent.testimonials.title}
      title={allContent.services.title}
    />
  );
}
