import type { ReviewItem } from "@/server/cms/types";

type TestimonialCardProps = {
  review: ReviewItem;
};

export function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <article className="surface-panel rounded-[1.75rem] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="section-kicker">{review.location}</p>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.72rem] font-semibold text-brand-ink">{review.ratingText}</span>
      </div>
      <blockquote className="mt-5 font-display text-[1.2rem] leading-8 text-foreground">“{review.quote}”</blockquote>
      <p className="mt-5 text-sm leading-7 text-slate-600">{review.outcome}</p>
      <footer className="muted-rule mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 text-sm text-slate-600">
        <span className="font-semibold text-foreground">{review.name}</span>
        <span className="hidden text-slate-300 sm:inline">/</span>
        <span>{review.context}</span>
      </footer>
    </article>
  );
}