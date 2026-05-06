import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GridItem {
  id: string;
  title: string;
  body?: string;
  href?: string;
  icon?: ReactNode;
}

interface GridSectionProps {
  heading: string;
  body?: string;
  items: GridItem[];
  columns?: 2 | 3 | 4;
  ctaLabel?: string;
  ctaHref?: string;
  emptyTitle?: string;
  emptyBody?: string;
  className?: string;
}

export default function GridSection({
  heading,
  body,
  items,
  columns = 3,
  ctaLabel,
  ctaHref,
  emptyTitle,
  emptyBody,
  className,
}: GridSectionProps) {
  const colCls = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section
      className={cn(
        "py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] lg:py-[--space-section-y-desktop]",
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
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg font-semibold text-[--color-text]">{emptyTitle ?? "Nothing here yet"}</p>
            {emptyBody && <p className="mt-2 text-sm text-[--color-text-muted]">{emptyBody}</p>}
          </div>
        ) : (
          <ul className={cn("grid gap-5", colCls)}>
            {items.map((item) => {
              const content = (
                <>
                  {item.icon && (
                    <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[--color-inset] text-[--color-primary]">
                      {item.icon}
                    </div>
                  )}
                  <h3 className="font-semibold text-[--color-text] font-[--font-display]">{item.title}</h3>
                  {item.body && (
                    <p className="mt-1 text-sm text-[--color-text-muted] leading-relaxed">{item.body}</p>
                  )}
                </>
              );

              const baseCls = cn(
                "p-5 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1]",
                item.href && "hover:shadow-[--shadow-2] hover:border-[--color-primary] motion-safe:transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
              );

              return (
                <li key={item.id}>
                  {item.href ? (
                    <Link href={item.href} className={cn("block", baseCls)}>
                      {content}
                    </Link>
                  ) : (
                    <div className={baseCls}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
