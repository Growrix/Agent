import Image from "next/image";
import { Button } from "@/components/marketing/shared/button";
import { StatCard } from "@/components/marketing/shared/stat-card";
import { TestimonialCard } from "@/components/marketing/shared/testimonial-card";
import { TrustBadgeRow } from "@/components/marketing/shared/trust-badge-row";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { ServiceGridSection } from "@/components/marketing/sections/service-grid-section";
import { siteConfig } from "@/config/site";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  getCoverageProofBlock,
  getFeaturedServices,
  getMarketingHomePage,
  getMarketingHomePageTestimonials,
  getMarketingStats,
} from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.home.meta_title"),
  description: copy("seo.home.meta_description"),
  path: "/",
});

export default async function Home() {
  const [homePage, testimonials, featuredServices, coverageBlock, stats] = await Promise.all([
    getMarketingHomePage(),
    getMarketingHomePageTestimonials(),
    getFeaturedServices(),
    getCoverageProofBlock(),
    getMarketingStats(),
  ]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("home.hero.cta_primary"), href: siteConfig.phoneHref, variant: "primary", eventName: "home_hero_call_clicked" },
          { label: copy("home.hero.cta_secondary"), href: "/quote", variant: "secondary", eventName: "home_hero_quote_clicked" },
        ]}
        badges={[copy("trust.license"), copy("trust.years"), copy("trust.areas")]}
        body={copy("home.hero.subheadline")}
        eyebrow={copy("home.hero.eyebrow")}
        image={homePage.heroImage}
        metrics={homePage.heroMetrics}
        title={copy("home.hero.headline")}
      />

      <section className="section-shell relative z-10 -mt-14 lg:-mt-18">
        <div className="hero-overlap-card surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Proof first</p>
              <div className="section-divider mt-4" />
              <h2 className="mt-5 font-display text-3xl font-semibold text-foreground">{copy("home.proof.heading")}</h2>
              <p className="page-lead mt-4 max-w-3xl">{copy("home.proof.body")}</p>
            </div>
            <Button href="/reviews" variant="ghost">
              {copy("component.nav.reviews")}
            </Button>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <ServiceGridSection body={copy("home.services.body")} services={featuredServices} title={copy("home.services.heading")} />

      <section className="section-shell mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="brand-panel rounded-4xl px-6 py-8 text-white sm:px-8 lg:px-10">
          <p className="section-kicker text-white/58">Arrival path</p>
          <div className="section-divider mt-4" />
          <h2 className="mt-5 font-display text-3xl font-semibold text-white">{copy("home.process.heading")}</h2>
          <p className="mt-4 text-base leading-8 text-white/76">{copy("home.process.body")}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {homePage.process.map((step) => (
              <StatCard detail={step.body} key={step.title} label={step.title} tone="dark" value={`${homePage.process.indexOf(step) + 1}`.padStart(2, "0")} />
            ))}
          </div>
        </div>

        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <p className="section-kicker">Coverage and confidence</p>
          <div className="section-divider mt-4" />
          <h2 className="mt-5 font-display text-3xl font-semibold text-foreground">{copy("home.coverage.heading")}</h2>
          <p className="page-lead mt-4">{copy("home.coverage.body")}</p>
          <div className="image-frame mt-6 rounded-3xl">
            <div className="relative h-64 w-full">
              <Image alt={coverageBlock.image.alt} className="object-cover" fill sizes="(min-width: 1024px) 40vw, 100vw" src={coverageBlock.image.src} />
            </div>
          </div>
          <div className="mt-6">
            <TrustBadgeRow items={coverageBlock.points} />
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">{siteConfig.serviceArea}. {siteConfig.emergencyBlurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/areas">{copy("component.nav.areas")}</Button>
            <Button href="/contact" variant="ghost">
              {copy("component.nav.contact")}
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="brand-panel rounded-4xl px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker text-white/58">Operating proof</p>
              <div className="section-divider mt-4" />
              <h2 className="mt-5 font-display text-3xl font-semibold text-white">Numbers that support the promise</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/72">Response speed, job volume, and review quality are surfaced together so the site feels credible before the visitor reaches the quote form.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <StatCard detail={stat.detail} eyebrow={stat.eyebrow} key={stat.label} label={stat.label} tone="dark" value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="brand-panel rounded-4xl px-6 py-10 text-white sm:px-8 lg:px-12">
          <p className="section-kicker text-white/58">Fastest next step</p>
          <div className="section-divider mt-4" />
          <h2 className="mt-5 font-display text-3xl font-semibold">{copy("home.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("home.final_cta.body")}</p>
          <div className="mt-6">
            <TrustBadgeRow items={[siteConfig.phoneDisplay, copy("trust.response_time"), copy("trust.guarantee")]} tone="dark" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.phoneHref}>{copy("component.button.call_now")}</Button>
            <Button href="/quote" variant="secondary">
              {copy("component.button.get_quote")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
