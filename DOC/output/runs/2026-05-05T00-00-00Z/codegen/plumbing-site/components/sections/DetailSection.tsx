import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface DetailSectionProps {
  heading: string;
  body?: string;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function DetailSection({
  heading,
  body,
  aside,
  children,
  className,
}: DetailSectionProps) {
  return (
    <section
      className={cn(
        "py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] lg:py-[--space-section-y-desktop]",
        className
      )}
      aria-label={heading}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {aside ? (
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display] mb-4">
                {heading}
              </h2>
              {body && (
                <p className="text-base text-[--color-text-muted] leading-relaxed mb-6">{body}</p>
              )}
              {children}
            </div>
            <div className="lg:col-span-1">{aside}</div>
          </div>
        ) : (
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display] mb-4">
              {heading}
            </h2>
            {body && (
              <p className="text-base text-[--color-text-muted] leading-relaxed mb-6">{body}</p>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
