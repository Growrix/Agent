"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, brand } from "@/lib/content";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { cn } from "@/lib/utils";

type ScrollState = "top" | "down" | "up";

function useScrollDirection(): ScrollState {
  const [state, setState] = useState<ScrollState>("top");
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 20) {
        setState("top");
      } else if (y > lastY) {
        setState("down");
      } else {
        setState("up");
      }
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return state;
}

interface SiteHeaderProps {
  transparent?: boolean;
}

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const scrollState = useScrollDirection();
  const topbarRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const prefersReduced = useReducedMotion();

  const isAtTop = scrollState === "top";
  const isHidden = scrollState === "down" && !isAtTop;
  const isTransparent = transparent && isAtTop;

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!topbarRef.current) return;

    const updateTopbarHeight = () => {
      setTopbarHeight(topbarRef.current?.offsetHeight ?? 0);
    };

    updateTopbarHeight();

    const observer = new ResizeObserver(updateTopbarHeight);
    observer.observe(topbarRef.current);
    window.addEventListener("resize", updateTopbarHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTopbarHeight);
    };
  }, []);

  return (
    <>
      {/* Topbar */}
      <div
        ref={topbarRef}
        className={cn(
          "hidden xl:block text-[var(--font-size-body-sm)] border-b border-[var(--color-border)]",
          isTransparent
            ? "bg-[var(--color-overlay)] text-[var(--color-text-on-dark)] border-white/20"
            : "bg-[var(--color-surface)] text-[var(--color-text-muted)]",
          "transition-all duration-200"
        )}
      >
        <div className="container-x flex items-center justify-between gap-[var(--space-4)] py-[var(--space-2)]">
          <div className="flex min-w-0 items-center gap-[var(--space-3)]">
            <span className="shrink-0">{nav.topbar.hours}</span>
            <span aria-hidden="true">|</span>
            <span className="truncate">{nav.topbar.license}</span>
          </div>
          <div className="flex items-center gap-[var(--space-3)]">
            <span className="font-semibold whitespace-nowrap">{nav.topbar.emergency}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.header
        role="banner"
        aria-label="Site header"
        animate={{
          y: isHidden && !mobileOpen ? "-100%" : "0%",
        }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.28, ease: [0, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--z-nav)]",
          "transition-[background-color,border-color,box-shadow] duration-200",
          isTransparent && !mobileOpen
            ? "bg-[var(--color-overlay)] border-b border-white/20 shadow-[var(--shadow-sm)]"
            : "bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-[var(--shadow-sm)]"
        )}
        style={{ top: isAtTop ? topbarHeight : 0 }}
      >
        <div className="container-x flex items-center justify-between gap-[var(--space-4)] h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            aria-label={`${brand.name} — home`}
            className="flex shrink-0 items-center gap-[var(--space-2)] focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2 rounded-[var(--radius-sm)]"
          >
            <div
              className={cn(
                "font-display font-[800] text-xl tracking-[-0.03em] leading-none",
                isTransparent && !mobileOpen ? "text-white" : "text-[var(--color-text)]"
              )}
            >
              <span className="text-[var(--color-accent)]">Apex</span>
              <span className="ml-1">Roofing</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label={nav.aria_label}
            className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-[var(--space-4)] xl:gap-[var(--space-6)]"
          >
            {nav.links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-150",
                    "focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2 rounded-[var(--radius-sm)]",
                    isTransparent && !mobileOpen
                      ? isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-on-dark)] hover:text-white"
                      : isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA row */}
          <div className="hidden lg:flex shrink-0 items-center gap-[var(--space-2)] xl:gap-[var(--space-3)]">
            <ThemeSwitcher
              className={cn(
                isTransparent && !mobileOpen
                  ? "text-[var(--color-text-on-dark)] border border-white/25 hover:bg-white/10 hover:text-white"
                  : ""
              )}
            />
            <Link
              href="/quote"
              className={cn(
                "px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-md)] text-sm font-semibold whitespace-nowrap transition-all duration-200",
                "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-hover)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-accent)]",
                "focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2"
              )}
            >
              {nav.cta.get_quote}
            </Link>
          </div>

          {/* Mobile toolbar */}
          <div className="flex lg:hidden items-center gap-[var(--space-2)]">
            <ThemeSwitcher
              className={cn(
                isTransparent && !mobileOpen
                  ? "text-[var(--color-text-on-dark)] border border-white/25 hover:bg-white/10 hover:text-white"
                  : ""
              )}
            />
            <button
              type="button"
              aria-label={mobileOpen ? nav.mobile_menu_close : nav.mobile_menu_open}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] transition-colors",
                "focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2",
                isTransparent && !mobileOpen
                  ? "text-[var(--color-text-on-dark)] border border-white/25 hover:bg-white/10 hover:text-white"
                  : "text-[var(--color-text)] hover:bg-[var(--color-inset)]"
              )}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-label="Mobile navigation"
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
              className="border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden"
            >
              <nav
                aria-label="Mobile navigation links"
                className="container-x py-[var(--space-4)] flex flex-col gap-[var(--space-1)]"
              >
                {nav.links.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "py-[var(--space-3)] px-[var(--space-3)] rounded-[var(--radius-md)] font-medium text-base transition-colors",
                        "focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2",
                        isActive
                          ? "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                          : "hover:bg-[var(--color-inset)] text-[var(--color-text)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-[var(--space-3)] flex flex-col gap-[var(--space-2)] border-t border-[var(--color-border)] mt-[var(--space-2)]">
                  <Link
                    href="/quote"
                    className="flex items-center justify-center py-[var(--space-3)] px-[var(--space-4)] rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-semibold focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)]"
                  >
                    {nav.cta.get_quote}
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
