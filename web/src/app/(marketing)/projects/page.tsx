import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { ReviewAggregateStrip } from "@/components/sections/ReviewAggregateStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";

export default function ProjectsPage() {
  const projectFaq = [
    {
      question: "Can I view before-and-after examples?",
      answer: "Yes. Each project card includes before/after visual comparison and scope notes."
    },
    {
      question: "Do you have projects in my area?",
      answer: "We can share local examples based on neighborhood and roof type."
    },
    {
      question: "What warranties were included on recent jobs?",
      answer: "Warranty details vary by system; we summarize coverage during inspection planning."
    }
  ];

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-16">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold text-foreground">Project Gallery</h1>
          <p className="mt-4 max-w-[60ch] text-theme-secondary">Explore recent roofing transformations with before-and-after snapshots and install notes.</p>
        </div>
        <div className="rounded-2xl border border-theme bg-surface-raised p-4">
          <p className="text-sm text-theme-secondary">Filters: Roof Type, Neighborhood, Completion Year</p>
        </div>
      </section>

      <ReviewAggregateStrip />
      <ProjectGallerySection />
      <TestimonialsSection />
      <FAQSection title="Project Gallery Questions" items={projectFaq} />
      <CTABand title="Want Similar Results?" description="Book an inspection and get a plan tailored to your roof condition." href="/contact" buttonText="Schedule Inspection" />
    </main>
  );
}



