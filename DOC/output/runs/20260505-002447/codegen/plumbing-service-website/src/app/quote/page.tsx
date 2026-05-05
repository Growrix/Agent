import { Button } from "@/components/marketing/shared/button";
import { StatCard } from "@/components/marketing/shared/stat-card";
import { TrustBadgeRow } from "@/components/marketing/shared/trust-badge-row";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { FAQAccordion } from "@/components/marketing/sections/faq-accordion";
import { QuoteFormCard } from "@/components/marketing/sections/quote-form-card";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getFaqGroup, getMarketingHomePage } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.quote.meta_title"),
  description: copy("seo.quote.meta_description"),
  path: "/quote",
});

export default async function QuotePage() {
  const [homePage, timingFaq, coverageFaq] = await Promise.all([
    getMarketingHomePage(),
    getFaqGroup("timing"),
    getFaqGroup("coverage"),
  ]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.call_now"), href: "tel:+61400000000", variant: "primary" },
          { label: copy("quote.form.heading"), href: "#quote-form", variant: "secondary" },
        ]}
        body={copy("quote.hero.subheadline")}
        compact
        eyebrow={copy("quote.hero.eyebrow")}
        image={homePage.heroImage}
        title={copy("quote.hero.headline")}
      />

      <section className="section-shell mt-12" id="quote-form">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">{copy("quote.form.heading")}</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{copy("quote.support.body")}</p>
          </div>
          <QuoteFormCard variant="quote" />
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">{copy("quote.support.heading")}</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">{copy("quote.support.body")}</p>
            </div>
            <Button href="tel:+61400000000">{copy("component.button.call_now")}</Button>
          </div>
          <div className="mt-6">
            <TrustBadgeRow items={[copy("trust.response_time"), copy("trust.guarantee"), copy("trust.license")]} />
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        <StatCard detail={copy("quote.form.success_body")} label={copy("quote.form.success_title")} value="1." />
        <StatCard detail={copy("trust.response_time")} label={copy("quote.support.heading")} value="2." />
        <StatCard detail={copy("quote.final_cta.body")} label={copy("quote.final_cta.heading")} value="3." />
      </section>

      <section className="section-shell mt-12 space-y-4">
        <h2 className="font-display text-3xl font-semibold text-foreground">{copy("component.nav.faq")}</h2>
        <FAQAccordion items={[...timingFaq, ...coverageFaq]} />
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl bg-brand px-6 py-10 text-white sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-semibold">{copy("quote.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("quote.final_cta.body")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="tel:+61400000000">{copy("component.button.call_now")}</Button>
            <Button href="/contact" variant="secondary">
              {copy("component.nav.contact")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}