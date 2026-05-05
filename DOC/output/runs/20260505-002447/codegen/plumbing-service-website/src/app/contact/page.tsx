import { Button } from "@/components/marketing/shared/button";
import { TrustBadgeRow } from "@/components/marketing/shared/trust-badge-row";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { FAQAccordion } from "@/components/marketing/sections/faq-accordion";
import { QuoteFormCard } from "@/components/marketing/sections/quote-form-card";
import { siteConfig } from "@/config/site";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getFaqGroup, getMarketingHomePage } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.contact.meta_title"),
  description: copy("seo.contact.meta_description"),
  path: "/contact",
});

export default async function ContactPage() {
  const [homePage, timingFaq, quoteFaq] = await Promise.all([
    getMarketingHomePage(),
    getFaqGroup("timing"),
    getFaqGroup("quote"),
  ]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.call_now"), href: siteConfig.phoneHref, variant: "primary" },
          { label: copy("component.sticky.contact"), href: "#contact-form", variant: "secondary" },
        ]}
        body={copy("contact.hero.subheadline")}
        compact
        eyebrow={copy("contact.hero.eyebrow")}
        image={homePage.coverageImage}
        title={copy("contact.hero.headline")}
      />

      <section className="section-shell mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-3xl font-semibold text-foreground">{copy("contact.channels.heading")}</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">{copy("contact.channels.body")}</p>
          <div className="mt-6">
            <TrustBadgeRow items={[siteConfig.hours, siteConfig.serviceArea, siteConfig.license]} />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.phoneHref}>{copy("component.button.call_now")}</Button>
            <Button href="/quote" variant="ghost">
              {copy("component.button.get_quote")}
            </Button>
          </div>
        </div>
        <div id="contact-form">
          <QuoteFormCard variant="contact" />
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <TrustBadgeRow items={[siteConfig.address, siteConfig.hours, siteConfig.license]} />
        </div>
      </section>

      <section className="section-shell mt-12 space-y-4">
        <h2 className="font-display text-3xl font-semibold text-foreground">{copy("component.nav.faq")}</h2>
        <FAQAccordion items={[...timingFaq, ...quoteFaq]} />
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl bg-brand px-6 py-10 text-white sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-semibold">{copy("contact.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("contact.final_cta.body")}</p>
          <div className="mt-8">
            <Button href={siteConfig.phoneHref}>{copy("component.button.call_now")}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}