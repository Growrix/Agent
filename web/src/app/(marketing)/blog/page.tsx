import { allContent } from "@/lib/content";
import { getPostCards } from "@/lib/page-data";
import { MarketingPage } from "@/components/sections/MarketingPage";

export default async function BlogPage() {
  const cards = await getPostCards();

  return (
    <MarketingPage
      cards={cards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/services"
      ctaSecondaryLabel={allContent.nav.services}
      ctaTitle={allContent.blog.title}
      sectionHeading={allContent.blog.title}
      subtitle={allContent.blog.subtitle}
      testimonialHeading={allContent.home.sections.testimonials}
      title={allContent.blog.title}
    />
  );
}
