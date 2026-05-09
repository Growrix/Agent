import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, seo, home } from "@/lib/content";
import { Reveal } from "@/components/primitives/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TrustBadgeCluster } from "@/components/ui/TrustBadgeCluster";

export const metadata: Metadata = {
  title: seo.services_title,
  description: seo.services_description,
};

const SERVICE_IMAGES: Record<string, string> = {
  "roof-installation": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "roof-repair": "https://images.unsplash.com/photo-1601077836997-3f03f71a6c4d?w=800&q=80",
  "roof-replacement": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  "emergency-repair": "https://images.unsplash.com/photo-1612198195072-e9c2f2853ee8?w=800&q=80",
};

export default function ServicesPage() {
  const serviceList = [
    services["roof-installation"],
    services["roof-repair"],
    services["roof-replacement"],
    services["emergency-repair"],
  ] as const;

  return (
    <>
      {/* Hero — Utility Dark (Pattern C) */}
      <section
        aria-label="Services overview hero"
        className="relative bg-[var(--color-dark-bg)] min-h-[50vh] flex items-center pt-24 lg:pt-32"
      >
        <div className="container-x py-[var(--space-16)] flex flex-col gap-[var(--space-6)]">
          <Reveal>
            <p className="text-overline text-[var(--color-accent)]">{services.overview.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display font-[800] text-white tracking-[-0.03em] leading-[1.05] max-w-[16ch]"
              style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
            >
              {services.overview.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[var(--color-dark-text-muted)] text-lg max-w-[52ch] leading-relaxed">
              {services.overview.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <TrustBadgeCluster variant="hero" />
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section aria-labelledby="services-list-heading" className="section-y bg-[var(--color-background)]">
        <div className="container-x">
          <h2 id="services-list-heading" className="sr-only">All roofing services</h2>
          <div className="grid grid-cols-1 gap-[var(--space-8)] sm:grid-cols-2 lg:grid-cols-4">
            {serviceList.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 0.06}>
                <ServiceCard
                  slug={svc.slug}
                  eyebrow={svc.eyebrow}
                  heading={svc.heading}
                  summary={svc.card_summary}
                  startsAt={svc.starts_at}
                  imageSrc={SERVICE_IMAGES[svc.slug]}
                  imageAlt={svc.hero.image_alt}
                  href={`/services/${svc.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section aria-labelledby="process-heading" className="section-y bg-[var(--color-inset)]">
        <div className="container-x">
          <Reveal className="text-center max-w-[40ch] mx-auto mb-[var(--space-12)]">
            <p className="text-overline mb-[var(--space-3)]">{home.process.eyebrow}</p>
            <h2 id="process-heading" className="font-display font-bold text-3xl text-[var(--color-text)] tracking-[-0.02em]">
              {home.process.heading}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-[var(--space-8)] md:grid-cols-3">
            {home.process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="flex flex-col gap-[var(--space-4)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-muted)] text-[var(--color-accent)] font-display font-bold text-lg" aria-hidden="true">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--color-text)]">{step.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section aria-labelledby="services-cta-heading" className="section-y bg-[var(--color-dark-bg)]">
        <div className="container-x text-center max-w-[48ch] mx-auto">
          <Reveal>
            <h2 id="services-cta-heading" className="font-display font-bold text-3xl text-white tracking-[-0.02em] mb-[var(--space-4)]">
              {home.cta_band.heading}
            </h2>
            <p className="text-[var(--color-dark-text-muted)] mb-[var(--space-8)]">
              {home.cta_band.subhead}
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-[var(--space-2)] px-[var(--space-6)] py-[var(--space-4)] rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-semibold transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:-translate-y-[2px] focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2"
            >
              Get Free Quote
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
