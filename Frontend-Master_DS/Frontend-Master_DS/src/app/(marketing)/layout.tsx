import { PublicSiteShell } from "@/ds";
import { ACTIVE_SITE_PRESET } from "@/site";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicSiteShell config={ACTIVE_SITE_PRESET.config}>{children}</PublicSiteShell>;
}
