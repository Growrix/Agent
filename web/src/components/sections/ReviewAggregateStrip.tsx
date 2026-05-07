import { t } from "@/lib/content";

export function ReviewAggregateStrip() {
  return (
    <section className="border-y border-theme bg-surface-raised">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-4 py-4 text-sm text-theme-secondary">
        <span className="rounded-full bg-(--color-accent-500) px-3 py-1 text-foreground">{t("review.source")}</span>
        <strong className="text-foreground">{t("review.aggregate_rating")}</strong>
        <span>{t("review.review_count")}</span>
      </div>
    </section>
  );
}
