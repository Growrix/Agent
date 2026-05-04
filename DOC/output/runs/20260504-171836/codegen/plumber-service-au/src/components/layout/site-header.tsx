import Link from "next/link";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/quote", label: "Get Quote" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-surface/95 backdrop-blur">
      <div className="bg-primary px-4 py-2 text-sm text-white">
        <div className="container-shell flex flex-wrap items-center justify-between gap-2">
          <p>24/7 Emergency Plumbing Across Major Australian Cities</p>
          <a className="font-semibold hover:underline" href="tel:+61000000000">
            Call 0000 000 000
          </a>
        </div>
      </div>
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          Plumber AU
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-foreground hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book"
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-primary transition hover:brightness-95"
        >
          Book Today
        </Link>
      </div>
    </header>
  );
}
