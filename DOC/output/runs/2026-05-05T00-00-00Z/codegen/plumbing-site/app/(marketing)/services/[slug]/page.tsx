import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { c } from "@/lib/content";
import { SERVICES, FAQ_ITEMS, TESTIMONIALS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import StepIndicator from "@/components/display/StepIndicator";
import DetailSection from "@/components/sections/DetailSection";
import Icon from "@/components/ui/Icon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${c("seo.services.meta_title")}`,
    description: service.shortDescription,
  };
}

const WHAT_WE_DO = [
  { title: c("service_detail.what_we_do.items.0.title"), body: c("service_detail.what_we_do.items.0.body"), icon: "CheckCircle" as const },
  { title: c("service_detail.what_we_do.items.1.title"), body: c("service_detail.what_we_do.items.1.body"), icon: "Wrench" as const },
  { title: c("service_detail.what_we_do.items.2.title"), body: c("service_detail.what_we_do.items.2.body"), icon: "CheckCircle" as const },
];

const PROCESS_STEPS = [
  { title: c("service_detail.process.steps.0.title"), body: c("service_detail.process.steps.0.body") },
  { title: c("service_detail.process.steps.1.title"), body: c("service_detail.process.steps.1.body") },
  { title: c("service_detail.process.steps.2.title"), body: c("service_detail.process.steps.2.body") },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedReviews = TESTIMONIALS.filter((t) => t.serviceSlug === slug).slice(0, 3);
  const serviceFaqs = FAQ_ITEMS.slice(0, 4);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: c("service_detail.breadcrumb.home"), href: "/" },
            { label: c("service_detail.breadcrumb.services"), href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      <HeroSection
        eyebrow={c("service_detail.hero.eyebrow")}
        headline={service.title}
        subheadline={c("service_detail.hero.subheadline")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("global.cta_secondary"), href: "/quote" }}
      />

      <DetailSection
        heading={c("service_detail.overview.heading")}
        body={c("service_detail.overview.body")}
      >
        <p className="text-base text-[--color-text-muted]">{service.shortDescription}</p>
      </DetailSection>

      <FeatureSection
        heading={c("service_detail.what_we_do.heading")}
        items={WHAT_WE_DO}
        className="bg-[--color-inset]"
      />

      <section className="py-[--space-section-y-mobile] md:py-[--space-section-y-tablet]" aria-label={c("service_detail.process.heading")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display] mb-8">
            {c("service_detail.process.heading")}
          </h2>
          <StepIndicator steps={PROCESS_STEPS} className="max-w-xl" />
        </div>
      </section>

      <DetailSection
        heading={c("service_detail.pricing.heading")}
        body={c("service_detail.pricing.body")}
        aside={
          <div className="p-5 bg-[--color-inset] rounded-[--radius-card] border border-[--color-border]">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Shield" size={16} className="text-[--color-primary]" aria-hidden="true" />
              <span className="font-semibold text-sm text-[--color-text]">{c("service_detail.expectations.heading")}</span>
            </div>
            <p className="text-sm text-[--color-text-muted]">{c("service_detail.expectations.body")}</p>
          </div>
        }
      />

      {relatedReviews.length > 0 && (
        <TestimonialSection
          heading={c("service_detail.reviews.heading")}
          testimonials={relatedReviews}
        />
      )}

      <FAQSection
        heading={c("service_detail.faq.heading")}
        items={serviceFaqs}
      />

      <CTASection
        heading={c("service_detail.cta.heading")}
        body={c("service_detail.cta.body")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("global.cta_secondary"), href: "/quote" }}
      />
    </>
  );
}
