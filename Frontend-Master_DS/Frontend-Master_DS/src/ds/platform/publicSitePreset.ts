import type { SiteConfig } from "./siteConfig";

export type PublicSectionHeaderModel = {
  kicker?: string;
  title?: string;
  lede?: string;
};

export type PublicSectionModel =
  | {
      id: string;
      kind: "hero";
      kicker?: string;
      title: string;
      lede?: string;
      primaryAction?: { label: string; href: string };
      secondaryAction?: { label: string; href: string };
    }
  | {
      id: string;
      kind: "features";
      header?: PublicSectionHeaderModel;
      features: Array<{ id: string; title: string; description?: string }>;
    }
  | {
      id: string;
      kind: "testimonials";
      header?: PublicSectionHeaderModel;
      items: Array<{ id: string; quote: string; name: string; meta?: string }>;
    }
  | {
      id: string;
      kind: "faq";
      header?: PublicSectionHeaderModel;
      items: Array<{ id: string; q: string; a: string }>;
    }
  | {
      id: string;
      kind: "blogList";
      header?: PublicSectionHeaderModel;
      posts: Array<{ id: string; title: string; excerpt?: string; href: string }>;
    }
  | {
      id: string;
      kind: "cta";
      header?: PublicSectionHeaderModel;
      body?: string;
      primaryAction?: { label: string; href: string };
      secondaryAction?: { label: string; href: string };
    }
  | {
      id: string;
      kind: "newsletter";
      header?: PublicSectionHeaderModel;
      title?: string;
    };

export type PublicPageModel = {
  id: string;
  title: string;
  sections: PublicSectionModel[];
};

export type PublicSitePreset = {
  id: string;
  label: string;
  config: SiteConfig;
  pages: Record<string, PublicPageModel>;
};
