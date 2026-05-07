import Link from "next/link";
import { AreasCoverageSection } from "@/components/sections/AreasCoverageSection";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { TrustBadgeBar } from "@/components/sections/TrustBadgeBar";
import { LeadCaptureFormSection } from "@/components/sections/LeadCaptureFormSection";
import { CTABand } from "@/components/sections/CTABand";

const areas = ["north-hills", "lakeview", "ridge-garden", "east-canyon"];

export default function AreasPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-16">
      <section>
        <h1 className="text-4xl font-semibold text-foreground">Areas We Serve</h1>
        <p className="mt-4 max-w-[60ch] text-theme-secondary">Explore local service coverage and neighborhood project highlights.</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {areas.map((slug) => (
            <li key={slug}>
              <Link href={`/areas/${slug}`} className="block rounded-2xl border border-theme bg-surface-raised px-5 py-4 text-foreground hover:border-(--color-primary-600) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
                {slug.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <TrustBadgeBar />
      <AreasCoverageSection />
      <ProjectGallerySection />
      <LeadCaptureFormSection title="Need Service In Your Area?" description="Send your address and we will confirm coverage and first available inspection slot." compact />
      <CTABand title="Confirm Local Availability" description="Talk with our local team and get your inspection scheduled." href="/contact" buttonText="Check Availability" />
    </main>
  );
}



