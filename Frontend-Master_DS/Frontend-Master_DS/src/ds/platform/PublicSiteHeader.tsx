import * as React from "react";

import { Icon } from "../components/Icon";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { Button } from "../primitives/Button";
import { PublicHeaderBar } from "../layouts/PublicShell";
import { cx } from "../utils/cx";

import type { SiteBrand, SiteNavItem, SiteSocialLink } from "./siteConfig";

export type PublicSiteHeaderProps = {
  brand: SiteBrand;
  navItems: SiteNavItem[];
  socials?: SiteSocialLink[];
  className?: string;
};

export function PublicSiteHeader({ brand, navItems, socials, className }: PublicSiteHeaderProps) {
  return (
    <PublicHeaderBar>
      <div className={cx("ui-row ui-row--between ui-row--nowrap", className)}>
        <a className="ui-navlink ui-focus-ring" href={brand.href ?? "/"} aria-label={brand.tagline ? `${brand.name}: ${brand.tagline}` : brand.name}>
          <span className="text-heading-4">{brand.name}</span>
        </a>

        <nav className="ui-row ui-row--nowrap ui-only-desktop" aria-label="Primary navigation">
          {navItems.map((it) => (
            <a key={it.id} className="ui-navlink ui-focus-ring" href={it.href}>
              {it.label}
            </a>
          ))}
        </nav>

        <div className="ui-row ui-row--nowrap">
          {socials?.length ? (
            <div className="ui-row ui-row--nowrap ui-only-desktop" aria-label="Social links">
              {socials.map((s) => (
                <Button
                  key={s.id}
                  as="a"
                  href={s.href}
                  variant="icon"
                  size="sm"
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon={s.icon} size="sm" aria-hidden />
                </Button>
              ))}
            </div>
          ) : null}

          <ThemeSwitcher />
        </div>
      </div>
    </PublicHeaderBar>
  );
}
