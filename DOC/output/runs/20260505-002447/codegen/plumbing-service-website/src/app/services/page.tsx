import { Button } from "@/components/marketing/shared/button";
import { TestimonialCard } from "@/components/marketing/shared/testimonial-card";
import { TrustBadgeRow } from "@/components/marketing/shared/trust-badge-row";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { ServiceGridSection } from "@/components/marketing/sections/service-grid-section";
import { siteConfig } from "@/config/site";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getAllServiceCards, getMarketingHomePage, getMarketingHomePageTestimonials } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.services.meta_title"),
  description: copy("seo.services.meta_description"),
  path: "/services",
});

export default async function ServicesPage() {
  const [services, heroData, testimonials] = await Promise.all([
    getAllServiceCards(),
    getMarketingHomePage(),
    getMarketingHomePageTestimonials(),
  ]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.get_quote"), href: "/quote", variant: "primary" },
          { label: copy("component.button.call_now"), href: siteConfig.phoneHref, variant: "secondary" },
        ]}
        body={copy("services.hero.subheadline")}
        compact
        eyebrow={copy("services.hero.eyebrow")}
        image={heroData.coverageImage}
        title={copy("services.hero.headline")}
      />

      <ServiceGridSection body={copy("services.grid.body")} services={services} title={copy("services.grid.heading")} />

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <p className="section-kicker">Built for the highest-intent jobs</p>
          <div className="section-divider mt-4" />
          <p className="page-lead mt-5 max-w-3xl">Service detail blocks combine urgency, likely inspection scope, and a practical call-to-quote handoff so visitors can act without guessing which trade page matters.</p>
          <TrustBadgeRow items={[copy("trust.license"), copy("trust.response_time"), copy("trust.guarantee")]} />
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 lg:grid-cols-2">
        {testimonials.slice(0, 2).map((review) => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </section>

      <section className="section-shell mt-12">
        <div className="brand-panel rounded-4xl px-6 py-10 text-white sm:px-8 lg:px-12">
          <p className="section-kicker text-white/58">Need help choosing?</p>
          <div className="section-divider mt-4" />
          <h2 className="mt-5 font-display text-3xl font-semibold">{copy("services.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("services.final_cta.body")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote">{copy("component.button.get_quote")}</Button>
            <Button href={siteConfig.phoneHref} variant="secondary">
              {copy("component.button.call_now")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}