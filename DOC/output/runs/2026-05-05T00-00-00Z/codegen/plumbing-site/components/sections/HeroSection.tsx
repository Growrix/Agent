import Link from "next/link";
import { cn } from "@/lib/utils";
import { c } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import type { ReactNode } from "react";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  ctaPrimary?: { label: string; href: string; isPhone?: boolean };
  ctaSecondary?: { label: string; href: string };
  trustBadges?: string[];
  className?: string;
  children?: ReactNode;
}

export default function HeroSection({
  eyebrow,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  trustBadges,
  className,
  children,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] lg:py-[--space-section-y-desktop]",
        "bg-[--color-surface]",
        className
      )}
      aria-label="Page introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-[--color-primary] mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-[--color-text] font-[--font-display] leading-tight">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-4 text-lg text-[--color-text-muted] leading-relaxed">
              {subheadline}
            </p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {ctaPrimary && (
                ctaPrimary.isPhone ? (
                  <a
                    href={ctaPrimary.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-primary] text-[--color-primary-foreground] rounded-[--radius-button] font-semibold hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
                  >
                    <Icon name="Phone" size={16} aria-hidden="true" />
                    {ctaPrimary.label}
                  </a>
                ) : (
                  <Link
                    href={ctaPrimary.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-primary] text-[--color-primary-foreground] rounded-[--radius-button] font-semibold hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
                  >
                    {ctaPrimary.label}
                  </Link>
                )
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[--color-primary] text-[--color-primary] rounded-[--radius-button] font-semibold hover:bg-[--color-inset] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
          {trustBadges && trustBadges.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[--color-inset] rounded-full text-xs font-semibold text-[--color-text]"
                >
                  <Icon name="CheckCircle" size={12} className="text-[--color-primary]" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function ProofStrip() {
  const badges = [
    c("trust.same_day_badge"),
    c("trust.licensed_badge"),
    c("trust.insured_badge"),
    "5-star rated",
  ];

  return (
    <div className="bg-[--color-inset] border-y border-[--color-border] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {badges.map((badge) => (
            <li key={badge} className="flex items-center gap-2 text-sm font-medium text-[--color-text]">
              <Icon name="CheckCircle" size={14} className="text-[--color-primary]" aria-hidden="true" />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
