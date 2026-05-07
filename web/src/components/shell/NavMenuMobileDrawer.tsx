import Link from "next/link";
import { t } from "@/lib/content";

export function NavMenuMobileDrawer() {
  return (
    <nav className="space-y-2 rounded-2xl border border-theme bg-surface-raised p-4 lg:hidden">
      <Link href="/" className="block text-foreground">{t("nav.home")}</Link>
      <Link href="/services" className="block text-foreground">{t("nav.services")}</Link>
      <Link href="/projects" className="block text-foreground">{t("nav.projects")}</Link>
      <Link href="/contact" className="block text-foreground">{t("nav.contact")}</Link>
    </nav>
  );
}
