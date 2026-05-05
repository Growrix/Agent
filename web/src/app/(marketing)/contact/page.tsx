import { allContent } from "@/lib/content";
import { fallbackCards } from "@/lib/page-data";
import { MarketingPage } from "@/components/sections/MarketingPage";

export default function ContactPage() {
  return (
    <MarketingPage
      cards={fallbackCards}
      ctaPrimaryHref="/quote"
      ctaPrimaryLabel={allContent.actions.getQuote}
      ctaSecondaryHref="/"
      ctaSecondaryLabel={allContent.nav.home}
      ctaTitle={allContent.contact.title}
      sectionHeading={allContent.home.sections.trust}
      subtitle={allContent.contact.subtitle}
      testimonialHeading={allContent.home.sections.faq}
      title={allContent.contact.title}
    />
  );
}
