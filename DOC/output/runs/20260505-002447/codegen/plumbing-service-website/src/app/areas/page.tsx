import Link from "next/link";
import { Button } from "@/components/marketing/shared/button";
import { ServiceCard } from "@/components/marketing/shared/service-card";
import { StatCard } from "@/components/marketing/shared/stat-card";
import { TestimonialCard } from "@/components/marketing/shared/testimonial-card";
import { TrustBadgeRow } from "@/components/marketing/shared/trust-badge-row";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getAreaCards, getAreaProofRollup, getAreaServiceCrossLinks, getAreasIndexPage } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.areas.meta_title"),
  description: copy("seo.areas.meta_description"),
  path: "/areas",
});

export default async function AreasPage() {
  const [heroData, areaCards, crossLinks, proofRollup] = await Promise.all([
    getAreasIndexPage(),
    getAreaCards(),
    getAreaServiceCrossLinks(),
    getAreaProofRollup(),
  ]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.get_quote"), href: "/quote", variant: "primary" },
          { label: copy("component.button.call_now"), href: "tel:+61400000000", variant: "secondary" },
        ]}
        body={copy("areas.hero.subheadline")}
        compact
        eyebrow={copy("areas.hero.eyebrow")}
        image={heroData.heroImage}
        title={copy("areas.hero.headline")}
      />

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-3xl font-semibold text-foreground">{copy("areas.intro.heading")}</h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{copy("areas.intro.body")}</p>
          <div className="mt-6">
            <TrustBadgeRow items={[copy("trust.areas"), copy("trust.response_time"), copy("trust.license")]} />
          </div>
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {areaCards.map((area) => (
            <Link className="surface-panel rounded-3xl p-6 transition-transform duration-150 hover:-translate-y-1" href={`/areas/${area.slug}`} key={area.slug}>
              <p className="font-display text-2xl font-semibold text-foreground">{area.name}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{area.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {crossLinks.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {proofRollup.reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
        <div className="grid gap-4">
          {proofRollup.stats.slice(0, 2).map((stat) => (
            <StatCard detail={stat.detail} key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl bg-brand px-6 py-10 text-white sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-semibold">{copy("areas.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("areas.final_cta.body")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote">{copy("component.button.get_quote")}</Button>
            <Button href="tel:+61400000000" variant="secondary">
              {copy("component.button.call_now")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}