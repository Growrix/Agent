import Link from "next/link";
import { cn } from "@/lib/utils";
import TestimonialCard from "@/components/display/TestimonialCard";
import type { Testimonial } from "@/lib/types";

interface TestimonialSectionProps {
  heading: string;
  body?: string;
  testimonials: Testimonial[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function TestimonialSection({
  heading,
  body,
  testimonials,
  ctaLabel,
  ctaHref,
  className,
}: TestimonialSectionProps) {
  return (
    <section
      className={cn(
        "py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] lg:py-[--space-section-y-desktop]",
        "bg-[--color-inset]",
        className
      )}
      aria-label={heading}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display]">
              {heading}
            </h2>
            {body && <p className="mt-2 text-base text-[--color-text-muted]">{body}</p>}
          </div>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="shrink-0 text-[--color-primary] font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] rounded"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.id}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
