import { notFound } from "next/navigation";
import { allContent } from "@/lib/content";
import { apiClient } from "@/lib/api-client";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { getServiceCards } from "@/lib/page-data";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await apiClient.getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const cards = await getServiceCards();

  return (
    <MarketingPage
      cards={cards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/blog"
      ctaSecondaryLabel={allContent.nav.blog}
      ctaTitle={post.title}
      sectionHeading={allContent.home.sections.services}
      subtitle={post.summary}
      testimonialHeading={allContent.home.sections.testimonials}
      title={post.title}
    />
  );
}
