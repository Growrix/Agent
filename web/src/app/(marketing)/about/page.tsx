import { TrustBadgeBar } from "@/components/sections/TrustBadgeBar";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABand } from "@/components/sections/CTABand";

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-16">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold text-foreground">About Summit Ridge Roofing</h1>
          <p className="mt-4 max-w-[60ch] text-theme-secondary">We focus on trust-first roofing service with transparent recommendations and durable installation standards.</p>
        </div>
        <div className="rounded-2xl bg-[url('https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg')] bg-cover bg-center min-h-72" />
      </section>

      <TrustBadgeBar />
      <TeamSection />
      <ProcessTimelineSection />
      <TestimonialsSection />
      <CTABand title="Work With A Team You Can Trust" description="Schedule an inspection and meet the crew planning your project." href="/contact" buttonText="Schedule Inspection" />
    </main>
  );
}



