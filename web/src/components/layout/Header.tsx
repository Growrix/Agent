"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useAuthModal } from "@/components/providers/AuthModalProvider";
import { t } from "@/lib/content";
import { Phone } from "lucide-react";

export function Header() {
  const [isTop, setIsTop] = useState(true);
  const { openSignIn } = useAuthModal();

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-30 border-b transition ${isTop ? "border-transparent bg-transparent" : "border-theme bg-surface-raised/95 backdrop-blur"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-foreground">
          {t("meta.siteName")}
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          <Link href="/" className="text-sm text-theme-secondary hover:text-foreground">{t("nav.home")}</Link>
          <Link href="/materials" className="text-sm text-theme-secondary hover:text-foreground">{t("nav.materials")}</Link>
          <Link href="/projects" className="text-sm text-theme-secondary hover:text-foreground">{t("nav.projects")}</Link>
          <Link href="/financing" className="text-sm text-theme-secondary hover:text-foreground">{t("nav.financing")}</Link>
          <Link href="/faq" className="text-sm text-theme-secondary hover:text-foreground">{t("nav.faq")}</Link>
          <Link href="/contact" className="text-sm text-theme-secondary hover:text-foreground">{t("nav.contact")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+15550128891" className="hidden items-center gap-1 rounded-full border border-theme px-3 py-2 text-sm text-foreground lg:inline-flex">
            <Phone className="h-4 w-4" />
            <span>{t("hero.storm.phone")}</span>
          </a>
          <button type="button" onClick={openSignIn} className="hidden rounded-full border border-theme px-4 py-2 text-sm text-foreground lg:inline-flex">{t("nav.signIn")}</button>
          <ThemeSwitcher />
        </div>
      </div>
      <div className="border-t border-theme px-4 py-2 lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <button type="button" onClick={openSignIn} className="rounded-full border border-theme px-4 py-2 text-sm text-foreground">{t("nav.signIn")}</button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}



