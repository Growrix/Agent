import { notFound } from "next/navigation";
import { Button } from "@/components/marketing/shared/button";
import { StatCard } from "@/components/marketing/shared/stat-card";
import { TestimonialCard } from "@/components/marketing/shared/testimonial-card";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { FAQAccordion } from "@/components/marketing/sections/faq-accordion";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getAllServiceCards, getServiceBySlug, getServiceFaqBySlug, getServiceTestimonialsBySlug } from "@/server/cms/queries";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const services = await getAllServiceCards();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({
      title: copy("seo.service.meta_title"),
      description: copy("seo.service.meta_description"),
      path: `/services/${slug}`,
    });
  }

  return createPageMetadata({
    title: service.title,
    description: service.heroBody,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const [proof, faqs] = await Promise.all([getServiceTestimonialsBySlug(slug), getServiceFaqBySlug(slug)]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("component.button.get_quote"), href: "/quote", variant: "primary" },
          { label: copy("component.button.call_now"), href: "tel:+61400000000", variant: "secondary" },
        ]}
        badges={[copy("trust.response_time"), copy("trust.guarantee")]}
        body={service.heroBody}
        compact
        eyebrow={service.title}
        image={service.image}
        title={service.title}
      />

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-3xl font-semibold text-foreground">{copy("service.template.includes_heading")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service.includes.map((item) => (
              <article className="rounded-3xl border border-line bg-white p-5" key={item}>
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        {service.process.map((step, index) => (
          <StatCard detail={step.body} key={step.title} label={step.title} value={`${index + 1}.`} />
        ))}
      </section>

      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">{copy("service.template.cta_heading")}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{copy("trust.privacy")}</p>
          </div>
          <ul className="space-y-3 text-sm leading-7 text-slate-700">
            {service.quoteGuidance.map((item) => (
              <li className="rounded-3xl border border-line bg-white px-4 py-3" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <div className="lg:col-span-2 flex flex-wrap gap-3">
            <Button href="/quote">{copy("component.button.get_quote")}</Button>
            <Button href="tel:+61400000000" variant="ghost">
              {copy("component.button.call_now")}
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 lg:grid-cols-2">
        {proof.map((review) => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </section>

      <section className="section-shell mt-12">
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold text-foreground">{copy("service.template.faq_heading")}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}