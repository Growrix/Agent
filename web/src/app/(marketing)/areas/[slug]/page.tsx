import Link from "next/link";
import { TrustBadgeBar } from "@/components/sections/TrustBadgeBar";
import { ServiceGridSection } from "@/components/sections/ServiceGridSection";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { LeadCaptureFormSection } from "@/components/sections/LeadCaptureFormSection";
import { CTABand } from "@/components/sections/CTABand";

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const areaName = slug.replace(/-/g, " ");

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-16">
      <section>
        <h1 className="text-4xl font-semibold text-foreground">Roofing In {areaName}</h1>
        <p className="mt-4 max-w-[60ch] text-theme-secondary">Local crews, local permit familiarity, and weather-aware system recommendations for your neighborhood.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-primary-600 px-6 py-3 text-theme-inverse">
          Schedule Local Inspection
        </Link>
      </section>

      <TrustBadgeBar />
      <ServiceGridSection />
      <ProjectGallerySection />
      <LeadCaptureFormSection title={`Request An Inspection In ${areaName}`} description="Share property details and we will confirm local scheduling windows." compact />
      <CTABand title="Ready To Get Started?" description="Book your local inspection and receive a clear roof action plan." href="/contact" buttonText="Schedule Inspection" />
    </main>
  );
}



