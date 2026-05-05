import Link from "next/link";
import { c } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import Divider from "@/components/ui/Divider";

const SERVICES_LINKS = [
  { href: "/services/drain-cleaning", label: "Drain Cleaning" },
  { href: "/services/leak-repair", label: "Leak Repair" },
  { href: "/services/water-heater", label: "Water Heater" },
  { href: "/services/toilet-repair", label: "Toilet Repair" },
  { href: "/services/faucet-fixture", label: "Faucet & Fixture" },
  { href: "/services/sewer-line", label: "Sewer Line" },
];

const QUICK_LINKS = [
  { href: "/services", label: c("global.nav.services") },
  { href: "/areas", label: c("global.nav.areas") },
  { href: "/reviews", label: c("global.nav.reviews") },
  { href: "/about", label: c("global.nav.about") },
  { href: "/faq", label: c("global.nav.faq") },
  { href: "/contact", label: c("global.nav.contact") },
  { href: "/blog", label: c("global.nav.blog") },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: c("global.footer.privacy") },
  { href: "/terms", label: c("global.footer.terms") },
];

export default function Footer() {
  return (
    <footer className="bg-[--color-text] text-white mt-auto" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg font-[--font-display] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-text] rounded"
              aria-label={`${c("global.business_name")} — Home`}
            >
              <Icon name="Wrench" size={18} aria-hidden="true" />
              {c("global.business_name")}
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {c("global.footer.tagline")}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              <a
                href={c("global.phone_link")}
                className="flex items-center gap-2 hover:text-white motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                <Icon name="Phone" size={14} aria-hidden="true" />
                {c("global.phone")}
              </a>
              <span className="flex items-center gap-2">
                <Icon name="Clock" size={14} aria-hidden="true" />
                {c("global.hours")}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Shield" size={14} aria-hidden="true" />
                {c("global.license")}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">Services</h2>
            <ul className="flex flex-col gap-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">
              {c("global.footer.nav_label")}
            </h2>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">Need help?</h2>
            <p className="text-sm text-white/70 mb-4">
              Call now for the fastest response.
            </p>
            <a
              href={c("global.phone_link")}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[--color-primary] text-white rounded-[--radius-button] font-semibold text-sm hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-text]"
            >
              <Icon name="Phone" size={14} aria-hidden="true" />
              {c("global.cta_primary")}
            </a>
            <Link
              href="/quote"
              className="mt-2 inline-flex items-center px-5 py-3 border border-white/30 text-white/80 rounded-[--radius-button] text-sm font-semibold hover:border-white hover:text-white motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              {c("global.cta_secondary")}
            </Link>
          </div>
        </div>

        <Divider className="border-white/10" />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>{c("global.footer.copyright")}</p>
          <nav aria-label="Legal links" className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/80 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
