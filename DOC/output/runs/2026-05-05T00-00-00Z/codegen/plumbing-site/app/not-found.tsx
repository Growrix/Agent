import type { Metadata } from "next";
import Link from "next/link";
import { c } from "@/lib/content";

export const metadata: Metadata = {
  title: c("seo.not_found.meta_title"),
  description: c("seo.not_found.meta_description"),
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-[--color-primary] mb-3">404</p>
      <h1 className="text-4xl font-bold text-[--color-text] font-[--font-display] mb-4 text-center">
        Page not found
      </h1>
      <p className="text-lg text-[--color-text-muted] mb-8 text-center max-w-md">
        {c("seo.not_found.meta_description")}
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-primary] text-[--color-primary-foreground] rounded-[--radius-button] font-semibold hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
        >
          Go home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[--color-primary] text-[--color-primary] rounded-[--radius-button] font-semibold hover:bg-[--color-inset] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
        >
          View services
        </Link>
      </div>
    </div>
  );
}
