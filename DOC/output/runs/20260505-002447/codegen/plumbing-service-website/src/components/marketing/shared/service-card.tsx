import Image from "next/image";
import { Button } from "@/components/marketing/shared/button";
import type { ServiceCardData } from "@/server/cms/types";

type ServiceCardProps = {
  service: ServiceCardData;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card-frame group flex h-full flex-col rounded-[2rem]">
      <div className="relative h-52 w-full overflow-hidden">
        <Image alt={service.image.alt} className="object-cover" fill sizes="(min-width: 768px) 33vw, 100vw" src={service.image.src} />
        <div className="absolute left-5 top-5">
          <span className="service-card-index">{service.accent}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold text-foreground">{service.title}</h3>
        <p className="page-lead mt-3 flex-1 text-sm">{service.body}</p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
          {service.highlights.map((item) => (
            <li className="flex gap-3" key={item}>
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="muted-rule mt-6 flex items-end justify-between gap-4 pt-4">
          <p className="max-w-[12rem] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">{service.timing}</p>
          <Button eventName="service_card_clicked" href={`/services/${service.slug}`} variant="ghost">
            {service.cta}
          </Button>
        </div>
      </div>
    </article>
  );
}