import { t } from "@/lib/content";

const badges = [
  t("badge.licensed"),
  t("badge.insured"),
  t("badge.years"),
  t("badge.response")
];

export function TrustBadgeBar() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge} className="rounded-full bg-(--color-primary-700) px-4 py-3 text-center text-sm font-semibold text-white">
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}
