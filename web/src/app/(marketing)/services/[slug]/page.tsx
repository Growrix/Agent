import { notFound } from "next/navigation";
import { allContent } from "@/lib/content";
import { apiClient } from "@/lib/api-client";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { getCaseCards } from "@/lib/page-data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await apiClient.getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const cards = await getCaseCards();

  return (
    <MarketingPage
      cards={cards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/contact"
      ctaSecondaryLabel={allContent.actions.contactTeam}
      ctaTitle={service.title}
      sectionHeading={allContent.home.sections.projects}
      subtitle={service.summary}
      testimonialHeading={allContent.home.sections.testimonials}
      title={service.title}
    />
  );
}
