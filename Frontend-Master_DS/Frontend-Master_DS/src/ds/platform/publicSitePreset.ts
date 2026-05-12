import type { SiteConfig } from "./siteConfig";
import type { ArchetypeId } from "../foundation/themes/archetypeRegistry";

export type PublicSectionHeaderModel = {
  kicker?: string;
  title?: string;
  lede?: string;
};

/** Optional media descriptor used by hero variants and image-led sections. */
export type PublicMediaModel = {
  /** Image URL. Variants render a token-derived placeholder if absent. */
  src?: string;
  alt?: string;
  /** "cover" / "contain" / "fill". Defaults to "cover". */
  fit?: "cover" | "contain" | "fill";
  /** Focal point hint, e.g. "75% 30%". */
  position?: string;
};

/** Shared shape for action buttons across section variants. */
export type PublicActionModel = { label: string; href: string };

export type PublicSectionModel =
  | {
      id: string;
      kind: "hero";
      /** Variant id from the section registry. If absent, default variant is used. */
      variant?: string;
      kicker?: string;
      title: string;
      lede?: string;
      primaryAction?: PublicActionModel;
      secondaryAction?: PublicActionModel;
      /** Optional hero media (used by photographic variants). */
      media?: PublicMediaModel;
      /** Optional trust chips rendered below CTAs by trust-oriented variants. */
      trustChips?: Array<{ id: string; label: string; icon?: string }>;
    }
  | {
      id: string;
      kind: "features";
      variant?: string;
      header?: PublicSectionHeaderModel;
      features: Array<{ id: string; title: string; description?: string; icon?: string; media?: PublicMediaModel }>;
    }
  | {
      id: string;
      kind: "testimonials";
      variant?: string;
      header?: PublicSectionHeaderModel;
      items: Array<{ id: string; quote: string; name: string; meta?: string; avatar?: PublicMediaModel }>;
    }
  | {
      id: string;
      kind: "faq";
      variant?: string;
      header?: PublicSectionHeaderModel;
      items: Array<{ id: string; q: string; a: string }>;
    }
  | {
      id: string;
      kind: "blogList";
      variant?: string;
      header?: PublicSectionHeaderModel;
      posts: Array<{ id: string; title: string; excerpt?: string; href: string }>;
    }
  | {
      id: string;
      kind: "cta";
      variant?: string;
      header?: PublicSectionHeaderModel;
      body?: string;
      primaryAction?: PublicActionModel;
      secondaryAction?: PublicActionModel;
      media?: PublicMediaModel;
    }
  | {
      id: string;
      kind: "newsletter";
      variant?: string;
      header?: PublicSectionHeaderModel;
      title?: string;
    }
  | {
      id: string;
      kind: "stats-band";
      variant?: string;
      header?: PublicSectionHeaderModel;
      stats: Array<{ id: string; value: string; label: string; sublabel?: string }>;
    }
  | {
      id: string;
      kind: "process-steps";
      variant?: string;
      header?: PublicSectionHeaderModel;
      steps: Array<{ id: string; number?: string; title: string; description?: string; icon?: string }>;
    }
  | {
      id: string;
      kind: "logo-cloud";
      variant?: string;
      header?: PublicSectionHeaderModel;
      logos: Array<{ id: string; label: string; href?: string; media?: PublicMediaModel }>;
    }
  | {
      id: string;
      kind: "case-studies";
      variant?: string;
      header?: PublicSectionHeaderModel;
      items: Array<{
        id: string;
        title: string;
        excerpt?: string;
        href: string;
        media?: PublicMediaModel;
        tags?: string[];
      }>;
    };

export type PublicPageModel = {
  id: string;
  title: string;
  /** Optional archetype hint. Drives default variant resolution when section.variant is absent. */
  archetype?: ArchetypeId;
  sections: PublicSectionModel[];
};

export type PublicSitePreset = {
  id: string;
  label: string;
  /** Site-wide archetype. Pages may override per-page. */
  archetype?: ArchetypeId;
  config: SiteConfig;
  pages: Record<string, PublicPageModel>;
};
