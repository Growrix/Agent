import type { IconProps } from "../components/Icon";

export type SiteIcon = IconProps["icon"];

export type SiteBrand = {
  name: string;
  href?: string;
  tagline?: string;
};

export type SiteNavItem = {
  id: string;
  label: string;
  href: string;
  icon?: SiteIcon;
  /** When true, render label only as an aria-label (icon-based nav). */
  iconOnly?: boolean;
};

export type SiteSocialLink = {
  id: string;
  label: string;
  href: string;
  icon: SiteIcon;
};

export type SiteFooterLink = {
  id?: string;
  label: string;
  href: string;
};

export type SiteFooterColumn = {
  id: string;
  title: string;
  links: SiteFooterLink[];
};

export type SiteFooterAttribution = {
  prefix?: string;
  linkText: string;
  url: string;
  ariaLabel?: string;
  suffix?: string;
};

export type SiteSupportChatConfig = {
  title: string;
  description?: string;
  placeholder?: string;
  sendLabel?: string;
  disclaimer?: string;
};

export type SiteSupportAction =
  | {
      id: string;
      kind: "whatsapp";
      label: string;
      phoneE164: string;
    }
  | {
      id: string;
      kind: "call";
      label: string;
      phoneE164: string;
    }
  | {
      id: string;
      kind: "chat";
      label: string;
    };

export type SiteSupportConfig = {
  actions: SiteSupportAction[];
  chat?: SiteSupportChatConfig;
};

export type SiteConfig = {
  brand: SiteBrand;
  nav: {
    primary: SiteNavItem[];
    /** Mobile app-like bottom nav. If omitted, bottom nav is hidden. */
    mobileBottom?: SiteNavItem[];
  };
  socials?: SiteSocialLink[];
  footer?: {
    columns: SiteFooterColumn[];
    attribution?: SiteFooterAttribution;
  };
  support?: SiteSupportConfig;
};
