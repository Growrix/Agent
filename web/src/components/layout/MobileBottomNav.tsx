"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Hammer, Phone, ShieldCheck, BookOpen } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { t } from "@/lib/content";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  matchPrefix?: boolean;
};

const items: NavItem[] = [
  { href: "/", label: t("mobile.tab.home"), icon: Home },
  { href: "/services", label: t("mobile.tab.services"), icon: Hammer, matchPrefix: true },
  { href: "/contact", label: t("mobile.tab.cta"), icon: ShieldCheck, matchPrefix: true },
  { href: "/faq", label: t("mobile.tab.blog"), icon: BookOpen, matchPrefix: true },
  { href: "/contact", label: t("mobile.tab.contact"), icon: Phone, matchPrefix: true }
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-theme bg-surface-raised pb-[env(safe-area-inset-bottom)] lg:hidden">
      <ul className="mx-auto grid max-w-3xl grid-cols-5">
        {items.map((item) => {
          const active = item.matchPrefix ? pathname.startsWith(item.href) : pathname === item.href;
          const Icon = item.icon;

          return (
            <li key={`${item.href}-${item.label}`}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] font-medium text-theme-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              >
                <motion.span animate={shouldReduceMotion ? undefined : { scale: active ? 1.05 : 1 }} transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}>
                  <Icon className="h-5 w-5" />
                </motion.span>
                <span className={active ? "text-primary-600" : ""}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}



