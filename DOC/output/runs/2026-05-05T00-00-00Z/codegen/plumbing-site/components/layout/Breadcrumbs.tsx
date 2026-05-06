import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <Icon
                  name="ChevronRight"
                  size={14}
                  className="text-[--color-text-muted] shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    isLast
                      ? "text-[--color-text] font-medium"
                      : "text-[--color-text-muted]"
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[--color-text-muted] hover:text-[--color-primary] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
