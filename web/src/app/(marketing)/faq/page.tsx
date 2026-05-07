import { FAQSection } from "@/components/sections/FAQSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LeadCaptureFormSection } from "@/components/sections/LeadCaptureFormSection";
import { CTABand } from "@/components/sections/CTABand";

export default function FaqPage() {
  const faqs = [
    {
      question: "How fast can I get an inspection?",
      answer: "Most requests receive a response in under 10 minutes during operating hours."
    },
    {
      question: "Do you help with insurance claims?",
      answer: "Yes. We provide documentation, scope detail, and process guidance."
    },
    {
      question: "How long does replacement usually take?",
      answer: "Typical residential replacements complete in one to two days depending on weather and complexity."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes. We provide partner-backed financing pathways and transparent terms."
    },
    {
      question: "Will I receive warranty documentation?",
      answer: "Yes. Material and labor warranty coverage is documented at handoff."
    }
  ];

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-16">
      <section>
        <h1 className="text-4xl font-semibold text-foreground">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-[60ch] text-theme-secondary">Answers to common planning, material, warranty, and emergency-response questions.</p>
      </section>

      <FAQSection title="Common Roofing Questions" items={faqs} />
      <ProcessTimelineSection />
      <TestimonialsSection />
      <LeadCaptureFormSection title="Still Have A Question?" description="Send your question and we will provide a clear answer and next step." compact />
      <CTABand title="Ready To Talk Through Your Roof?" description="Book an inspection and get practical recommendations quickly." href="/contact" buttonText="Book Inspection" />
    </main>
  );
}



