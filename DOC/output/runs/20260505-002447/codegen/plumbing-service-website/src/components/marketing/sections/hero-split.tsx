import Image from "next/image";
import { Button } from "@/components/marketing/shared/button";
import type { HeroMetric, ImageAsset } from "@/server/cms/types";
import type { MarketingEventName } from "@/lib/events";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  eventName?: MarketingEventName;
};

type HeroSplitProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: ImageAsset;
  actions: HeroAction[];
  badges?: string[];
  metrics?: HeroMetric[];
  compact?: boolean;
};

export function HeroSplit({ eyebrow, title, body, image, actions, badges, metrics, compact }: HeroSplitProps) {
  return (
    <section className="section-shell">
      <div className="brand-panel grid overflow-hidden rounded-4xl text-white lg:grid-cols-[0.82fr_1.18fr]">
        <div className={`relative z-10 flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-12 ${compact ? "lg:py-12" : "lg:py-14"}`}>
          <span className="eyebrow w-fit">{eyebrow}</span>
          <div className="section-divider mt-5" />
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-[3.7rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg">{body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {actions.map((action) => (
              <Button eventName={action.eventName} href={action.href} key={`${action.href}:${action.label}`} variant={action.variant ?? "primary"}>
                {action.label}
              </Button>
            ))}
          </div>

          {metrics && metrics.length > 0 ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div className="metric-chip" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <p className="text-sm font-semibold text-white">{metric.label}</p>
                  <span>{metric.detail}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className={`relative overflow-hidden ${compact ? "min-h-80 lg:min-h-95" : "min-h-90 lg:min-h-140"}`}>
          <div className="absolute inset-y-0 left-0 hidden w-28 bg-brand-ink/88 lg:block [clip-path:polygon(0_0,100%_0,36%_100%,0_100%)]" />
          <div className="absolute inset-0 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <Image alt={image.alt} className="object-cover" fill priority={!compact} sizes="(min-width: 1024px) 58vw, 100vw" src={image.src} />
            <div className="absolute inset-0 bg-linear-to-l from-brand-ink/10 via-transparent to-brand-ink/46" />
          </div>

          {badges && badges.length > 0 ? (
            <div className="hero-overlap-card surface-panel absolute bottom-5 left-5 right-5 max-w-sm rounded-[1.75rem] p-5 text-foreground sm:left-8 sm:right-auto lg:bottom-8 lg:left-0 lg:-translate-x-10">
              <p className="section-kicker">Every visit includes</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {badges.slice(0, 3).map((badge) => (
                  <li className="flex gap-3" key={badge}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}