import { notFound } from "next/navigation";
import { Button } from "@/components/marketing/shared/button";
import { ServiceCard } from "@/components/marketing/shared/service-card";
import { StatCard } from "@/components/marketing/shared/stat-card";
import { TestimonialCard } from "@/components/marketing/shared/testimonial-card";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { FAQAccordion } from "@/components/marketing/sections/faq-accordion";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getAllServiceCards, getAreaBySlug } from "@/server/cms/queries";

type AreaDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "inner-west" }, { slug: "north-shore" }, { slug: "eastern-suburbs" }];
}

export async function generateMetadata({ params }: AreaDetailPageProps) {
  const { slug } = await params;
  const area = await getAreaBySlug(slug);

  return createPageMetadata({
    title: area?.name ?? copy("seo.areas.meta_title"),
    description: area?.heroBody ?? copy("seo.areas.meta_description"),
    path: `/areas/${slug}`,
  });
}

export default async function AreaDetailPage({ params }: AreaDetailPageProps) {
  const { slug } = await params;
  const area = await getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const allServices = await getAllServiceCards();
  const areaServices = allServices.filter((service) => area.serviceSlugs.includes(service.slug));

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.get_quote"), href: "/quote", variant: "primary" },
          { label: copy("component.button.call_now"), href: "tel:+61400000000", variant: "secondary" },
        ]}
        badges={[copy("trust.areas"), copy("trust.response_time")]}
        body={area.heroBody}
        compact
        eyebrow={area.name}
        image={area.image}
        title={area.name}
      />

      <section className="section-shell mt-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {areaServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {area.proof.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
        <div className="grid gap-4">
          {area.metrics.slice(0, 2).map((stat) => (
            <StatCard detail={stat.detail} key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        {area.process.map((step, index) => (
          <StatCard detail={step.body} key={step.title} label={step.title} value={`${index + 1}.`} />
        ))}
      </section>

      <section className="section-shell mt-12">
        <h2 className="font-display text-3xl font-semibold text-foreground">{copy("area.template.proof_heading")}</h2>
        <div className="mt-5">
          <FAQAccordion items={area.faqs} />
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl bg-brand px-6 py-10 text-white sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-semibold">{copy("area.template.cta_heading")}</h2>
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