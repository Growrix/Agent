import { t } from "@/lib/content";

export function ContactInfoStrip() {
  return (
    <section className="border-y border-theme bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-5 md:grid-cols-3">
        <p className="text-sm text-theme-secondary">{t("footer.phone")}</p>
        <p className="text-sm text-theme-secondary">{t("footer.hours")}</p>
        <p className="text-sm text-theme-secondary">{t("footer.areas_served")}</p>
      </div>
    </section>
  );
}
