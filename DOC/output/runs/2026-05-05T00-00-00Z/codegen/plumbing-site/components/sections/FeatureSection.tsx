import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

interface FeatureItem {
  title: string;
  body: string;
  icon?: IconName;
}

interface FeatureSectionProps {
  heading: string;
  body?: string;
  items: FeatureItem[];
  columns?: 2 | 3;
  className?: string;
}

export default function FeatureSection({
  heading,
  body,
  items,
  columns = 3,
  className,
}: FeatureSectionProps) {
  return (
    <section
      className={cn(
        "py-[--space-section-y-mobile] md:py-[--space-section-y-tablet] lg:py-[--space-section-y-desktop]",
        className
      )}
      aria-label={heading}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display]">
            {heading}
          </h2>
          {body && <p className="mt-2 text-base text-[--color-text-muted]">{body}</p>}
        </div>
        <ul
          className={cn(
            "grid gap-6",
            columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 p-5 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1]">
              {item.icon && (
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[--color-inset] text-[--color-primary]">
                  <Icon name={item.icon} size={18} aria-hidden="true" />
                </div>
              )}
              <div>
                <h3 className="font-semibold text-[--color-text]">{item.title}</h3>
                <p className="mt-1 text-sm text-[--color-text-muted] leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
