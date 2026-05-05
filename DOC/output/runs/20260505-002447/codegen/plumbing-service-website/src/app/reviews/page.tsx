import { Button } from "@/components/marketing/shared/button";
import { StatCard } from "@/components/marketing/shared/stat-card";
import { TestimonialCard } from "@/components/marketing/shared/testimonial-card";
import { TrustBadgeRow } from "@/components/marketing/shared/trust-badge-row";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getAllReviews, getMarketingStats, getReviewsPage, getReviewsSummary } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.reviews.meta_title"),
  description: copy("seo.reviews.meta_description"),
  path: "/reviews",
});

export default async function ReviewsPage() {
  const [heroData, summary, reviews, stats] = await Promise.all([
    getReviewsPage(),
    getReviewsSummary(),
    getAllReviews(),
    getMarketingStats(),
  ]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.get_quote"), href: "/quote", variant: "primary" },
          { label: copy("component.button.call_now"), href: "tel:+61400000000", variant: "secondary" },
        ]}
        body={copy("reviews.hero.subheadline")}
        compact
        eyebrow={copy("reviews.hero.eyebrow")}
        image={heroData.heroImage}
        title={copy("reviews.hero.headline")}
      />

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-2">
        {summary.map((stat) => (
          <StatCard detail={stat.detail} key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </section>

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <TrustBadgeRow items={[copy("trust.license"), copy("trust.response_time"), copy("trust.guarantee")]} />
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard detail={stat.detail} key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl bg-brand px-6 py-10 text-white sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-semibold">{copy("reviews.final_cta.heading")}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{copy("reviews.final_cta.body")}</p>
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