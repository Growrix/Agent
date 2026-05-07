import { TrustBadgeBar } from "@/components/sections/TrustBadgeBar";
import { ServiceGridSection } from "@/components/sections/ServiceGridSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";

export default function ServicesPage() {
  const serviceFaq = [
    {
      question: "Do I need replacement or repair?",
      answer: "Inspection findings guide this decision based on roof age, leak scope, and material condition."
    },
    {
      question: "How long does a replacement take?",
      answer: "Most residential replacements complete in one to two days depending on scope and weather."
    },
    {
      question: "Do you provide maintenance plans?",
      answer: "Yes. Seasonal checkups help prevent emergency failures and preserve warranty confidence."
    }
  ];

  return (
    <main id="main-content">
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-semibold text-foreground">Roofing Services</h1>
        <p className="mt-4 max-w-[60ch] text-theme-secondary">Service plans designed around roof condition, budget, and timeline priorities.</p>
      </section>
      <TrustBadgeBar />
      <ServiceGridSection />
      <ProcessTimelineSection />
      <TestimonialsSection />
      <FAQSection title="Service Questions" items={serviceFaq} />
      <CTABand
        title="Need Help Choosing The Right Service?"
        description="Request an inspection and get a clear recommendation based on your roof condition."
        href="/contact"
        buttonText="Request Inspection"
      />
    </main>
  );
}



