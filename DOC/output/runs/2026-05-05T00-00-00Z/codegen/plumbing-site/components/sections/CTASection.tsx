import Link from "next/link";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

interface CTASectionProps {
  heading: string;
  body?: string;
  ctaPrimary?: { label: string; href: string; isPhone?: boolean };
  ctaSecondary?: { label: string; href: string };
  variant?: "default" | "dark" | "teal";
  className?: string;
}

export default function CTASection({
  heading,
  body,
  ctaPrimary,
  ctaSecondary,
  variant = "default",
  className,
}: CTASectionProps) {
  const wrapperCls = cn(
    "py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] lg:py-[--space-section-y-desktop]",
    variant === "dark" && "bg-[--color-text] text-white",
    variant === "teal" && "bg-[--color-primary] text-white",
    variant === "default" && "bg-[--color-inset]",
    className
  );

  const headingCls = cn(
    "text-2xl sm:text-3xl font-bold font-[--font-display]",
    variant === "default" ? "text-[--color-text]" : "text-white"
  );

  const bodyCls = cn(
    "mt-3 text-base leading-relaxed",
    variant === "default" ? "text-[--color-text-muted]" : "text-white/80"
  );

  return (
    <section className={wrapperCls} aria-label={heading}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={headingCls}>{heading}</h2>
        {body && <p className={bodyCls}>{body}</p>}
        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {ctaPrimary && (
              ctaPrimary.isPhone ? (
                <a
                  href={ctaPrimary.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-primary] text-white rounded-[--radius-button] font-semibold hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
                >
                  <Icon name="Phone" size={16} aria-hidden="true" />
                  {ctaPrimary.label}
                </a>
              ) : (
                <Link
                  href={ctaPrimary.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-primary] text-white rounded-[--radius-button] font-semibold hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
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
      </div>
    </section>
  );
}
