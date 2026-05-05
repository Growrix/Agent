import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  body?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
  eyebrow?: string;
}

export default function Card({ title, body, href, icon, className, eyebrow }: CardProps) {
  const content = (
    <>
      {icon && (
        <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[--color-inset] text-[--color-primary]">
          {icon}
        </div>
      )}
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wide text-[--color-primary] mb-1">
          {eyebrow}
        </p>
      )}
      <h3 className="text-lg font-semibold text-[--color-text] font-[--font-display] mb-1">
        {title}
      </h3>
      {body && <p className="text-sm text-[--color-text-muted] leading-relaxed">{body}</p>}
    </>
  );

  const base = cn(
    "block p-5 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1]",
    href && "hover:shadow-[--shadow-2] hover:border-[--color-primary] motion-safe:transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return <div className={base}>{content}</div>;
}
