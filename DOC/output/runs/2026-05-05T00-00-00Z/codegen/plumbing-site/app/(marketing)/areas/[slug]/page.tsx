import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { c } from "@/lib/content";
import { AREAS, SERVICES, TESTIMONIALS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import GridSection from "@/components/sections/GridSection";
import DetailSection from "@/components/sections/DetailSection";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Plumbing in ${area.name}`,
    description: area.shortDescription,
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const areaReviews = TESTIMONIALS.slice(0, 2);

  const serviceItems = SERVICES.map((s) => ({
    id: s.slug,
    title: s.title,
    body: s.shortDescription,
    href: `/services/${s.slug}`,
    icon: <Icon name={s.icon as IconName} size={18} aria-hidden="true" />,
  }));

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: c("area_detail.breadcrumb.home"), href: "/" },
            { label: c("area_detail.breadcrumb.areas"), href: "/areas" },
            { label: area.name },
          ]}
        />
      </div>

      <HeroSection
        eyebrow={c("area_detail.hero.eyebrow")}
        headline={area.name}
        subheadline={c("area_detail.hero.subheadline")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("global.cta_secondary"), href: "/quote" }}
      />

      <DetailSection
        heading={c("area_detail.coverage.heading")}
        body={c("area_detail.coverage.body")}
      >
        <p className="text-base text-[--color-text-muted]">{area.shortDescription}</p>
      </DetailSection>

      <GridSection
        heading={c("area_detail.services.heading")}
        items={serviceItems}
        columns={3}
        className="bg-[--color-inset]"
      />

      <TestimonialSection
        heading={c("area_detail.reviews.heading")}
        testimonials={areaReviews}
      />

      <CTASection
        heading={c("area_detail.cta.heading")}
        body={c("area_detail.cta.body")}
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
