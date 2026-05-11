import * as React from "react";

import { BottomNavItem } from "../components/BottomNav";
import { Icon } from "../components/Icon";
import { PublicShell } from "../layouts/PublicShell";
import { MobileBottomNavPreset } from "../runtime/app/mobile/BottomNavPreset";

import type { SiteConfig } from "./siteConfig";
import { PublicSiteHeader } from "./PublicSiteHeader";
import { PublicSiteFooter } from "./PublicSiteFooter";
import { SupportDock } from "./SupportDock";

export type PublicSiteShellProps = {
  config: SiteConfig;
  children: React.ReactNode;
};

export function PublicSiteShell({ config, children }: PublicSiteShellProps) {
  const header = (
    <PublicSiteHeader brand={config.brand} navItems={config.nav.primary} socials={config.socials} />
  );

  const footer = config.footer ? (
    <PublicSiteFooter columns={config.footer.columns} attribution={config.footer.attribution} />
  ) : undefined;

  const bottomNav = config.nav.mobileBottom?.length ? (
    <MobileBottomNavPreset>
      {config.nav.mobileBottom.map((it) => (
        <BottomNavItem
          key={it.id}
          href={it.href}
          label={it.label}
          icon={it.icon ? <Icon icon={it.icon} size="sm" aria-hidden /> : undefined}
          iconOnly={it.iconOnly ?? Boolean(it.icon)}
        />
      ))}
    </MobileBottomNavPreset>
  ) : undefined;

  const floating = config.support ? <SupportDock support={config.support} /> : undefined;

  return (
    <PublicShell header={header} footer={footer} bottomNav={bottomNav} floating={floating}>
      {children}
    </PublicShell>
  );
}
