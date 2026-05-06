import Link from "next/link";
import { cn } from "@/lib/utils";
import AccordionItem from "@/components/ui/AccordionItem";
import type { FaqItem } from "@/lib/types";

interface FAQSectionProps {
  heading: string;
  body?: string;
  items: FaqItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function FAQSection({
  heading,
  body,
  items,
  ctaLabel,
  ctaHref,
  className,
}: FAQSectionProps) {
  return (
    <section
      className={cn(
        "py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] lg:py-[--space-section-y-desktop]",
        className
      )}
      aria-label={heading}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display]">
            {heading}
          </h2>
          {body && (
            <p className="mt-2 text-base text-[--color-text-muted]">{body}</p>
          )}
        </div>
        <div>
          {items.map((item) => (
            <AccordionItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <div className="mt-8 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-1 text-[--color-primary] font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] rounded"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
