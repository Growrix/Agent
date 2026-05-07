import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustBadgeBar } from "@/components/sections/TrustBadgeBar";
import { ReviewAggregateStrip } from "@/components/sections/ReviewAggregateStrip";
import { ServiceGridSection } from "@/components/sections/ServiceGridSection";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { MaterialComparisonSection } from "@/components/sections/MaterialComparisonSection";
import { FinancingSection } from "@/components/sections/FinancingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { NewsletterSignupSection } from "@/components/sections/NewsletterSignupSection";
import { CTABand } from "@/components/sections/CTABand";
import { ContactInfoStrip } from "@/components/sections/ContactInfoStrip";
import { t } from "@/lib/content";

export default function HomePage() {
  const homeFaq = [
    {
      question: "How fast can I get an inspection?",
      answer: "Most homeowners receive a response in under ten minutes during operating hours."
    },
    {
      question: "Do you support insurance claim documentation?",
      answer: "Yes. We provide photo documentation and scope details for adjuster review."
    },
    {
      question: "Can I compare material options before deciding?",
      answer: "Absolutely. We walk through asphalt, metal, and tile tradeoffs in plain language."
    }
  ];

  return (
    <main id="main-content">
      <HomeHero />
      <TrustBadgeBar />
      <ReviewAggregateStrip />
      <ServiceGridSection />
      <ProjectGallerySection />
      <MaterialComparisonSection />
      <FinancingSection />
      <TestimonialsSection />
      <FAQSection title={t("section.faq.title")} items={homeFaq} showAllLink />
      <NewsletterSignupSection />
      <ContactInfoStrip />
      <CTABand
        title={t("cta.band.title")}
        description={t("cta.band.description")}
        href="/contact"
        buttonText={t("cta.band.button")}
      />

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <Link href="/projects" className="text-primary-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
          Explore full project gallery
        </Link>
      </section>
    </main>
  );
}



