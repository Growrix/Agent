import Link from "next/link";
import { t } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-theme bg-surface-raised">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{t("meta.siteName")}</h2>
          <p className="mt-2 text-sm text-theme-secondary">{t("meta.siteDescription")}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">{t("nav.services")}</h3>
          <ul className="mt-2 space-y-2 text-sm text-theme-secondary">
            <li><Link href="/materials">{t("nav.materials")}</Link></li>
            <li><Link href="/projects">{t("nav.projects")}</Link></li>
            <li><Link href="/storm-damage">Storm Damage</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">{t("nav.contact")}</h3>
          <p className="mt-2 text-sm text-theme-secondary">{t("hero.storm.phone")}</p>
          <p className="text-sm text-theme-secondary">Mon-Sat · 7:00 AM - 8:00 PM</p>
        </div>
      </div>
      <div className="border-t border-theme">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-theme-secondary">
          <p>© {year} {t("meta.siteName")} · {t("footer.copy")}</p>
          <a href={t("footer.attribution.url")} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
            {t("footer.attribution.text")}
          </a>
        </div>
      </div>
    </footer>
  );
}



