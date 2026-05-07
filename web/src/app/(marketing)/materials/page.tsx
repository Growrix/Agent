import { MaterialComparisonSection } from "@/components/sections/MaterialComparisonSection";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";

export default function MaterialsPage() {
  const materialFaq = [
    {
      question: "Which material is best for storm resilience?",
      answer: "Selection depends on roof shape, local weather exposure, and budget strategy."
    },
    {
      question: "How should I think about lifecycle cost?",
      answer: "We compare upfront spend against maintenance profile and expected lifespan."
    },
    {
      question: "Can you show real examples by material type?",
      answer: "Yes. We provide nearby project references where available."
    }
  ];

  return (
    <main id="main-content">
      <section className="rounded-3xl bg-linear-to-b from-(--color-primary-50) to-background p-8">
        <h1 className="text-4xl font-semibold text-foreground">Compare Roofing Materials</h1>
        <p className="mt-4 max-w-[60ch] text-theme-secondary">Understand lifecycle, weather resistance, and maintenance profile before committing to a system.</p>
      </section>

      <MaterialComparisonSection />
      <ProjectGallerySection />
      <TestimonialsSection />
      <FAQSection title="Material Questions" items={materialFaq} />
      <CTABand title="Need Help Choosing A Material?" description="Book an inspection and receive a material recommendation aligned to your roof and budget." href="/contact" buttonText="Discuss Options" />
    </main>
  );
}



