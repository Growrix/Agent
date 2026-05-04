"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/quote", label: "Quote" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  if (pathname === "/emergency") {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-extrabold text-[var(--primary)]">
          AusPlumb Pro
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--primary)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+611300758623"
          className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white"
        >
          Call 1300 PLUMBER
        </a>
      </div>
    </header>
  );
}
