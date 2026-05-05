import { Button } from "@/components/marketing/shared/button";
import { StatCard } from "@/components/marketing/shared/stat-card";
import { TestimonialCard } from "@/components/marketing/shared/testimonial-card";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { siteConfig } from "@/config/site";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getAboutPage, getAboutPageTestimonials } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.about.meta_title"),
  description: copy("seo.about.meta_description"),
  path: "/about",
});

export default async function AboutPage() {
  const [aboutPage, testimonials] = await Promise.all([getAboutPage(), getAboutPageTestimonials()]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.nav.contact"), href: "/contact", variant: "primary" },
          { label: copy("component.nav.services"), href: "/services", variant: "secondary" },
        ]}
        body={copy("about.hero.subheadline")}
        compact
        eyebrow={copy("about.hero.eyebrow")}
        image={aboutPage.heroImage}
        title={copy("about.hero.headline")}
      />

      <section className="section-shell mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <p className="section-kicker">How the brand should feel</p>
          <div className="section-divider mt-4" />
          <h2 className="mt-5 font-display text-3xl font-semibold text-foreground">{copy("about.story.heading")}</h2>
          <p className="page-lead mt-4">{aboutPage.story}</p>
        </div>
        <div className="brand-panel rounded-4xl p-4 text-white">
          <div className="grid gap-4">
            {aboutPage.standards.map((standard, index) => (
              <StatCard detail={standard} key={standard} label={standard} tone="dark" value={`${index + 1}`.padStart(2, "0")} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        {aboutPage.values.map((value) => (
          <article className="service-card-frame rounded-3xl p-6" key={value.title}>
            <p className="section-kicker">Team standard</p>
            <h2 className="font-display text-2xl font-semibold text-foreground">{value.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{value.body}</p>
          </article>
        ))}
      </section>

      <section className="section-shell mt-12 grid gap-4 lg:grid-cols-2">
        {testimonials.map((review) => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </section>

      <section className="section-shell mt-12">
        <div className="brand-panel rounded-4xl px-6 py-10 text-white sm:px-8 lg:px-12">
          <p className="section-kicker text-white/58">Direct contact paths</p>
          <div className="section-divider mt-4" />
          <h2 className="mt-5 font-display text-3xl font-semibold">{copy("about.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("about.final_cta.body")}</p>
          <p className="mt-4 text-sm text-white/70">Call {siteConfig.phoneDisplay} for urgent triage or move straight into the service pages for planned work.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">{copy("component.nav.contact")}</Button>
            <Button href="/services" variant="secondary">
              {copy("component.nav.services")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}