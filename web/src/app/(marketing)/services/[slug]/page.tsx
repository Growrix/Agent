import Link from "next/link";
import { TrustBadgeBar } from "@/components/sections/TrustBadgeBar";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { FinancingSection } from "@/components/sections/FinancingSection";
import { LeadCaptureFormSection } from "@/components/sections/LeadCaptureFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = slug.replace(/-/g, " ");
  const slotFaq = [
    {
      question: `How do you approach ${label} projects?`,
      answer: "We begin with inspection evidence, align scope to your priorities, and document next steps clearly."
    },
    {
      question: "Will I receive material recommendations?",
      answer: "Yes. We explain tradeoffs across lifecycle, weather resilience, and budget fit."
    },
    {
      question: "Do you provide warranty documentation?",
      answer: "Every completed scope includes warranty coverage details and maintenance guidance."
    }
  ];

  return (
    <main id="main-content">
      <section className="mx-auto w-full max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-semibold capitalize text-foreground">{label}</h1>
        <p className="mt-4 max-w-[60ch] text-theme-secondary">Detailed scope, project timeline, and material recommendations for this service category.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-primary-600 px-6 py-3 text-theme-inverse">
          Request Inspection
        </Link>
      </section>

      <TrustBadgeBar />

      <section className="mx-auto w-full max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-foreground">What Is Included</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-theme bg-surface-raised p-5">
            <h3 className="text-xl font-semibold text-foreground">Scope Walkthrough</h3>
            <p className="mt-2 text-sm text-theme-secondary">Clear breakdown of work areas, materials, and expected timeline.</p>
          </article>
          <article className="rounded-2xl border border-theme bg-surface-raised p-5">
            <h3 className="text-xl font-semibold text-foreground">Documentation</h3>
            <p className="mt-2 text-sm text-theme-secondary">Photo documentation and warranty handoff package at completion.</p>
          </article>
        </div>
      </section>

      <ProcessTimelineSection />
      <FinancingSection />
      <LeadCaptureFormSection title="Discuss Your Service Scope" description="Share your address and concern so we can prepare your inspection plan." compact />
      <FAQSection title="Service Detail FAQ" items={slotFaq} />
      <CTABand title="Ready To Schedule?" description="Book your inspection now and receive a clear recommendation." href="/contact" buttonText="Book Inspection" />
    </main>
  );
}



