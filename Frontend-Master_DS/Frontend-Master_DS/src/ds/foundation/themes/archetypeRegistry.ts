/* ==========================================================================
   Archetype Theme Registry — site-archetype metadata
   Layer: ds.foundation.themes

   Why this file exists:
   ─────────────────────
   The base ThemeName (`dark` | `light`) controls color-scheme. The
   archetype is a higher-order grouping that captures the *visual posture*
   of an entire site — typography rhythm, density, accent strategy, motion
   temperament, surface stack permissions.

   Archetypes do NOT introduce new color-schemes. Every archetype renders
   under either `theme-dark` or `theme-light`. The archetype adds:

   - default accent hint (used by site presets, not by tokens directly)
   - density (compact / comfortable / spacious)
   - visual permission window (which advanced effects this archetype allows)
   - motion temperament (which motion presets fit)
   - section variant whitelist (which section variants belong to this archetype)

   Site presets declare an archetype. The renderer + AI agents read the
   archetype's permission window to pick variants. Components themselves
   stay archetype-agnostic; only their variants opt into specific
   archetypes.
   ========================================================================== */

import type { MotionPresetId } from "../motion/presets";

export type ArchetypeId =
  | "editorial-premium"
  | "modern-saas"
  | "bold-consumer"
  | "ai-product"
  | "startup-conversion"
  | "local-business-trust"
  | "dashboard-ops"
  | "portfolio-craft";

export type ArchetypeDensity = "compact" | "comfortable" | "spacious";

/**
 * Which advanced visual effects a given archetype permits.
 * A variant declaring an effect not on this list MUST NOT render under that
 * archetype. The DS contract emitter enforces this at build time.
 */
export type ArchetypePermissions = {
  gradientMesh: boolean;
  layeredNoise: boolean;
  conicGradient: boolean;
  glassmorphism: boolean;
  animatedBorder: boolean;
  fullBleedPhotograph: boolean;
  parallaxMedia: boolean;
  scrollDrivenScale: boolean;
  /** Whether per-section accents may override the project palette. */
  perCaseAccent: boolean;
};

export type ArchetypeDefinition = {
  id: ArchetypeId;
  label: string;
  description: string;
  /** Two-sentence positioning: what the visitor should feel, what the look anchors. */
  mood: string;
  /** Suggested base scheme. Sites may override per project. */
  preferredScheme: "dark" | "light" | "either";
  density: ArchetypeDensity;
  permissions: ArchetypePermissions;
  /** Motion presets that fit this archetype's temperament. */
  motionTemperament: MotionPresetId[];
  /** Whitelisted variant ID prefix(es). E.g. "hero-editorial-premium-" allows any matching variant. */
  variantIdPrefixes: string[];
};

const DEFAULT_DENY: ArchetypePermissions = {
  gradientMesh: false,
  layeredNoise: false,
  conicGradient: false,
  glassmorphism: false,
  animatedBorder: false,
  fullBleedPhotograph: false,
  parallaxMedia: false,
  scrollDrivenScale: false,
  perCaseAccent: false,
};

export const ARCHETYPES: Record<ArchetypeId, ArchetypeDefinition> = {
  "editorial-premium": {
    id: "editorial-premium",
    label: "Editorial Premium",
    description: "Long-form, type-led layouts. Restrained motion. Generous whitespace.",
    mood: "Patient and considered. The visitor lingers; the page rewards attention rather than fighting for it.",
    preferredScheme: "either",
    density: "spacious",
    permissions: {
      ...DEFAULT_DENY,
      layeredNoise: true,
      fullBleedPhotograph: true,
      scrollDrivenScale: true,
    },
    motionTemperament: ["rise-soft", "stagger-text-60", "scroll-scale-1.04", "fade-in"],
    variantIdPrefixes: ["hero-editorial-", "features-split-", "case-studies-magazine-", "testimonials-quote-large-"],
  },

  "modern-saas": {
    id: "modern-saas",
    label: "Modern SaaS",
    description: "Modular cards, polished accents, medium density.",
    mood: "Confident and efficient. The visitor expects polish without ceremony.",
    preferredScheme: "either",
    density: "comfortable",
    permissions: {
      ...DEFAULT_DENY,
      gradientMesh: true,
      glassmorphism: true,
      animatedBorder: true,
      scrollDrivenScale: true,
    },
    motionTemperament: ["rise-soft", "stagger-text-60", "magnetic-hover", "idle-pulse-once"],
    variantIdPrefixes: ["hero-modern-saas-", "features-bento-", "pricing-table-", "testimonials-marquee-"],
  },

  "bold-consumer": {
    id: "bold-consumer",
    label: "Bold Consumer",
    description: "Saturated accents, oversized type, energetic motion.",
    mood: "Loud and welcoming. The visitor feels invited to participate, not analyse.",
    preferredScheme: "either",
    density: "comfortable",
    permissions: {
      ...DEFAULT_DENY,
      gradientMesh: true,
      conicGradient: true,
      fullBleedPhotograph: true,
      parallaxMedia: true,
      scrollDrivenScale: true,
      perCaseAccent: true,
    },
    motionTemperament: ["rise-soft", "magnetic-hover", "idle-pulse-once", "scroll-scale-1.04"],
    variantIdPrefixes: ["hero-bold-consumer-", "features-bento-", "cta-full-bleed-"],
  },

  "ai-product": {
    id: "ai-product",
    label: "AI Product",
    description: "Streaming text affordances, ambient mesh, deep cool palette.",
    mood: "Confident in the underlying machinery. Motion narrates what the system is doing.",
    preferredScheme: "dark",
    density: "comfortable",
    permissions: {
      ...DEFAULT_DENY,
      gradientMesh: true,
      layeredNoise: true,
      glassmorphism: true,
      animatedBorder: true,
      scrollDrivenScale: true,
    },
    motionTemperament: ["reveal-glass", "stagger-text-60", "mesh-drift", "fade-in"],
    variantIdPrefixes: ["hero-ai-product-", "features-bento-", "stats-band-"],
  },

  "startup-conversion": {
    id: "startup-conversion",
    label: "Startup Conversion",
    description: "Warm accent, aggressive CTA prominence, dense rhythm.",
    mood: "Direct. Every section earns its place by moving the visitor closer to action.",
    preferredScheme: "either",
    density: "compact",
    permissions: {
      ...DEFAULT_DENY,
      gradientMesh: true,
      scrollDrivenScale: true,
    },
    motionTemperament: ["rise-soft", "idle-pulse-once", "magnetic-hover"],
    variantIdPrefixes: ["hero-startup-", "pricing-table-", "cta-card-", "cta-full-bleed-"],
  },

  "local-business-trust": {
    id: "local-business-trust",
    label: "Local Business Trust",
    description: "Warm earth tones, photographic, trust signals first.",
    mood: "Hand-shake credibility. The visitor wants to know who, where, when, and how quickly.",
    preferredScheme: "light",
    density: "comfortable",
    permissions: {
      ...DEFAULT_DENY,
      fullBleedPhotograph: true,
      scrollDrivenScale: true,
    },
    motionTemperament: ["rise-soft", "fade-in"],
    variantIdPrefixes: ["hero-local-", "features-split-", "testimonials-grid-", "stats-band-"],
  },

  "dashboard-ops": {
    id: "dashboard-ops",
    label: "Dashboard Ops",
    description: "Density-first. Minimal accent. Tables, timelines, charts.",
    mood: "Tool, not advertisement. The visitor is an operator already convinced; surface the data.",
    preferredScheme: "either",
    density: "compact",
    permissions: {
      ...DEFAULT_DENY,
    },
    motionTemperament: ["fade-in", "magnetic-hover"],
    variantIdPrefixes: ["features-bento-", "stats-band-"],
  },

  "portfolio-craft": {
    id: "portfolio-craft",
    label: "Portfolio Craft",
    description: "Editorial restraint with per-case accent overrides.",
    mood: "Curated. Each piece of work earns its own visual breath.",
    preferredScheme: "either",
    density: "spacious",
    permissions: {
      ...DEFAULT_DENY,
      fullBleedPhotograph: true,
      scrollDrivenScale: true,
      perCaseAccent: true,
    },
    motionTemperament: ["rise-soft", "fade-in", "scroll-scale-1.04"],
    variantIdPrefixes: ["hero-portfolio-", "case-studies-magazine-", "case-studies-grid-"],
  },
};

export const ARCHETYPE_IDS = Object.keys(ARCHETYPES) as ArchetypeId[];

export function getArchetype(id: ArchetypeId): ArchetypeDefinition {
  return ARCHETYPES[id];
}

export function archetypePermits(archetypeId: ArchetypeId, effect: keyof ArchetypePermissions): boolean {
  return ARCHETYPES[archetypeId].permissions[effect];
}

export function isArchetypeId(value: string | null | undefined): value is ArchetypeId {
  return typeof value === "string" && value in ARCHETYPES;
}
