import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { Button } from "@/components/marketing/shared/button";
import { copy } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-24 pb-28 pt-6 md:pb-10">
      <div className="section-shell">
        <div className="brand-panel overflow-hidden rounded-4xl px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.95fr]">
            <div>
              <p className="section-kicker text-white/56">Local response team</p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">{siteConfig.businessName}</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/72">{copy("home.hero.subheadline")}</p>
              <p className="mt-4 text-sm leading-7 text-white/68">{siteConfig.emergencyBlurb}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={siteConfig.phoneHref}>{copy("component.button.call_now")}</Button>
                <Button href="/quote" variant="secondary">
                  {copy("component.button.get_quote")}
                </Button>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/56">Operations</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/76">
                <li>{siteConfig.address}</li>
                <li>{siteConfig.hours}</li>
                <li>{siteConfig.license}</li>
                <li>{siteConfig.serviceArea}</li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/56">Navigate</p>
              <ul className="mt-4 space-y-3 text-sm text-white/76">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link className="focus-ring rounded-md hover:text-white" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/56">Reach us</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/76">
                <a className="focus-ring block rounded-md text-base font-semibold text-white" href={siteConfig.phoneHref}>
                  {siteConfig.phoneDisplay}
                </a>
                <a className="focus-ring block rounded-md" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-white/76">
                <Link className="focus-ring rounded-md hover:text-white" href="/privacy">
                  {copy("privacy.hero.title")}
                </Link>
                <Link className="focus-ring rounded-md hover:text-white" href="/terms">
                  {copy("terms.hero.title")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}