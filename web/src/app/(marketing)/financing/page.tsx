import Link from "next/link";
import { FinancingSection } from "@/components/sections/FinancingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadCaptureFormSection } from "@/components/sections/LeadCaptureFormSection";
import { CTABand } from "@/components/sections/CTABand";

export default function FinancingPage() {
  const financingFaq = [
    {
      question: "Do you offer 0% options?",
      answer: "Eligibility depends on partner terms at time of application."
    },
    {
      question: "Can financing be combined with warranty upgrades?",
      answer: "Yes, depending on selected roof system and partner program."
    },
    {
      question: "Will I know monthly payment ranges before approval?",
      answer: "We provide practical ranges and next-step clarity during estimate review."
    }
  ];

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-16">
      <section className="rounded-3xl border border-theme bg-surface-raised p-8">
        <h1 className="text-4xl font-semibold text-foreground">Financing And Warranty Options</h1>
        <p className="mt-4 max-w-[60ch] text-theme-secondary">Flexible payment paths and clear warranty coverage designed for large roofing investments.</p>
      </section>

      <FinancingSection />
      <TestimonialsSection />
      <FAQSection title="Financing Questions" items={financingFaq} />
      <LeadCaptureFormSection title="Get Payment Option Guidance" description="Share your project profile and we will walk through practical financing paths." compact />
      <CTABand title="Ready To Explore Financing?" description="Talk with our team and get a clear payment roadmap for your roof project." href="/contact" buttonText="Ask About Financing" />

      <section className="py-8">
        <Link href="/contact" className="inline-flex rounded-full bg-primary-600 px-6 py-3 text-theme-inverse">Ask About Financing</Link>
      </section>
    </main>
  );
}



