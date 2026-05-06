"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { c } from "@/lib/content";
import Icon from "@/components/ui/Icon";

const NAV_LINKS = [
  { href: "/services", label: c("global.nav.services") },
  { href: "/areas", label: c("global.nav.areas") },
  { href: "/reviews", label: c("global.nav.reviews") },
  { href: "/about", label: c("global.nav.about") },
  { href: "/faq", label: c("global.nav.faq") },
  { href: "/contact", label: c("global.nav.contact") },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-[--color-surface] border-b border-[--color-border] shadow-[--shadow-1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-[--color-primary] font-[--font-display] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 rounded"
            aria-label={`${c("global.business_name")} — Home`}
          >
            <Icon name="Wrench" size={20} aria-hidden="true" />
            <span>{c("global.business_name")}</span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium motion-safe:transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2",
                  pathname.startsWith(link.href)
                    ? "text-[--color-primary] bg-[--color-inset]"
                    : "text-[--color-text-muted] hover:text-[--color-text] hover:bg-[--color-inset]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={c("global.phone_link")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[--color-primary] text-[--color-primary-foreground] rounded-[--radius-button] text-sm font-semibold hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
            >
              <Icon name="Phone" size={14} aria-hidden="true" />
              {c("global.phone")}
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center px-4 py-2 border border-[--color-primary] text-[--color-primary] rounded-[--radius-button] text-sm font-semibold hover:bg-[--color-inset] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2"
            >
              {c("global.cta_secondary")}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-[--color-text-muted] hover:text-[--color-text] hover:bg-[--color-inset] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring]"
          >
            {menuOpen ? (
              <Icon name="X" size={22} aria-hidden="true" />
            ) : (
              <Icon name="Menu" size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-[--color-border] bg-[--color-surface]">
          <nav aria-label="Mobile navigation" className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                className={cn(
                  "px-3 py-2.5 rounded-md text-base font-medium",
                  pathname.startsWith(link.href)
                    ? "text-[--color-primary] bg-[--color-inset]"
                    : "text-[--color-text] hover:bg-[--color-inset]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-[--color-border] flex flex-col gap-2">
              <a
                href={c("global.phone_link")}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[--color-primary] text-[--color-primary-foreground] rounded-[--radius-button] font-semibold"
                onClick={closeMenu}
              >
                <Icon name="Phone" size={16} aria-hidden="true" />
                {c("global.cta_primary")} — {c("global.phone")}
              </a>
              <Link
                href="/quote"
                onClick={closeMenu}
                className="flex items-center justify-center px-4 py-3 border border-[--color-primary] text-[--color-primary] rounded-[--radius-button] font-semibold"
              >
                {c("global.cta_secondary")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
