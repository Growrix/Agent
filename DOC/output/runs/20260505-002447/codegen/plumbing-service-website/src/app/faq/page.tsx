import { Button } from "@/components/marketing/shared/button";
import { TrustBadgeRow } from "@/components/marketing/shared/trust-badge-row";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { FAQAccordion } from "@/components/marketing/sections/faq-accordion";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getFaqGroup, getFaqPage, getMarketingHomePage } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.faq.meta_title"),
  description: copy("seo.faq.meta_description"),
  path: "/faq",
});

export default async function FaqPage() {
  const [faqPage, fallbackHero, coverageFaq, timingFaq, quoteFaq] = await Promise.all([
    getFaqPage(),
    getMarketingHomePage(),
    getFaqGroup("coverage"),
    getFaqGroup("timing"),
    getFaqGroup("quote"),
  ]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.get_quote"), href: "/quote", variant: "primary" },
          { label: copy("component.button.call_now"), href: "tel:+61400000000", variant: "secondary" },
        ]}
        body={copy("faq.hero.subheadline")}
        compact
        eyebrow={copy("faq.hero.eyebrow")}
        image={faqPage.heroImage ?? fallbackHero.heroImage}
        title={copy("faq.hero.headline")}
      />

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-3xl font-semibold text-foreground">{copy("faq.categories.heading")}</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">{copy("faq.categories.body")}</p>
          <div className="mt-6">
            <TrustBadgeRow items={[copy("trust.areas"), copy("trust.response_time"), copy("trust.guarantee")]} />
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 space-y-6">
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground">Coverage</h2>
          <div className="mt-4"><FAQAccordion items={coverageFaq} /></div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground">Timing</h2>
          <div className="mt-4"><FAQAccordion items={timingFaq} /></div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground">Quotes</h2>
          <div className="mt-4"><FAQAccordion items={quoteFaq} /></div>
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl bg-brand px-6 py-10 text-white sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-semibold">{copy("faq.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("faq.final_cta.body")}</p>
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