import { allContent } from "@/lib/content";
import { apiClient } from "@/lib/api-client";
import { MarketingPage } from "@/components/sections/MarketingPage";

export default async function HomePage() {
  const services = await apiClient.getServices();

  return (
    <MarketingPage
      cards={services.map((item) => ({ key: item.slug, title: item.title, summary: item.summary }))}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/portfolio"
      ctaSecondaryLabel={allContent.actions.viewProjects}
      ctaTitle={allContent.actions.contactTeam}
      sectionHeading={allContent.home.sections.services}
      subtitle={allContent.home.subtitle}
      testimonialHeading={allContent.home.sections.testimonials}
      title={allContent.home.title}
    />
  );
}
