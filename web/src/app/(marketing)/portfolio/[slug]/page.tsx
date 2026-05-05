import { notFound } from "next/navigation";
import { allContent } from "@/lib/content";
import { apiClient } from "@/lib/api-client";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { getServiceCards } from "@/lib/page-data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await apiClient.getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const cards = await getServiceCards();

  return (
    <MarketingPage
      cards={cards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/portfolio"
      ctaSecondaryLabel={allContent.actions.viewProjects}
      ctaTitle={caseStudy.title}
      sectionHeading={allContent.home.sections.services}
      subtitle={caseStudy.metric}
      testimonialHeading={allContent.testimonials.title}
      title={caseStudy.title}
    />
  );
}
