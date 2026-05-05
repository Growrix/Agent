import { Button } from "@/components/marketing/shared/button";
import { siteConfig } from "@/config/site";
import type { ServiceCardData } from "@/server/cms/types";
import { ServiceCard } from "@/components/marketing/shared/service-card";

type ServiceGridSectionProps = {
  title: string;
  body: string;
  services: ServiceCardData[];
};

export function ServiceGridSection({ title, body, services }: ServiceGridSectionProps) {
  return (
    <section className="section-shell mt-16">
      <div className="content-grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
        <div>
          <p className="section-kicker">Service pathways</p>
          <div className="section-divider mt-4" />
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
          <p className="page-lead mt-4 max-w-3xl">{body}</p>
        </div>

        <div className="surface-panel rounded-[1.75rem] p-5">
          <p className="section-kicker">Need a quick steer?</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">Tell the team what is failing and they will point you to the right service path before you commit to a long quote form.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</Button>
            <Button href="/quote" variant="ghost">
              Short quote brief
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}