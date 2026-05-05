import { allContent } from "@/lib/content";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { getCaseCards } from "@/lib/page-data";

export default async function PortfolioPage() {
  const cards = await getCaseCards();

  return (
    <MarketingPage
      cards={cards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/contact"
      ctaSecondaryLabel={allContent.actions.contactTeam}
      ctaTitle={allContent.portfolio.title}
      sectionHeading={allContent.home.sections.projects}
      subtitle={allContent.portfolio.subtitle}
      testimonialHeading={allContent.testimonials.title}
      title={allContent.portfolio.title}
    />
  );
}
