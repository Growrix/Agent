/* ==========================================================================
   Section Variant Schema — the contract every section variant must satisfy
   Layer: ds.composition.sections (LOCKED foundation)

   What is a "section variant"?
   ─────────────────────────────
   A section variant is one concrete visual implementation of a section kind.
   `hero` is a section KIND. `hero-editorial-premium-1` is a section VARIANT.
   The kind tells the renderer which content shape to consume; the variant
   tells the renderer which component to render that content through.

   Why this matters for AI agents:
   ────────────────────────────────
   A retrieval-oriented frontend agent must be able to say "for this hero,
   use variant `hero-editorial-premium-1`" without composing anything from
   scratch. The variant ID is the unit of selection. The agent never reads
   the variant's source code; it reads the metadata declared here.

   Lockdown contract:
   ──────────────────
   This file is part of the DS foundation. AI agents MUST NOT edit it.
   New variants are added by creating new files under `variants/<kind>/`
   and registering them in `_registry.ts`. See AI-AGENT-CONTRACT.md.
   ========================================================================== */

import type { ComponentType } from "react";

import type { ArchetypeId, ArchetypePermissions } from "../../foundation/themes/archetypeRegistry";
import type { MotionPresetId } from "../../foundation/motion/presets";

/** Section kinds supported by the DS. Adding a kind requires renderer + schema work. */
export type SectionKind =
  | "hero"
  | "features"
  | "testimonials"
  | "faq"
  | "blogList"
  | "cta"
  | "newsletter"
  | "stats-band"
  | "process-steps"
  | "logo-cloud"
  | "case-studies";

/** Density / footprint classification used by AI agents to pick variants for a given page rhythm. */
export type SectionDensity = "compact" | "comfortable" | "full-bleed" | "extended";

/** Visual complexity tier. Used by AI agents to match brief richness to variant richness. */
export type SectionComplexity = "minimal" | "standard" | "rich";

/**
 * Visual effects a variant uses. Cross-referenced with archetype.permissions
 * by the DS contract builder; a variant declaring an effect the archetype
 * forbids is rejected at build time.
 */
export type SectionEffectUsage = Partial<Record<keyof ArchetypePermissions, boolean>>;

/**
 * Stable metadata for one section variant.
 *
 * Every variant file (under `variants/<kind>/`) exports a const META object
 * conforming to this type, AND a React component that consumes the section
 * content from the preset model.
 */
export type SectionVariantMeta = {
  /** Stable variant identifier. Once published, NEVER renamed. */
  id: string;
  /** Section kind this variant implements. */
  kind: SectionKind;
  /** Archetype this variant belongs to (drives whitelisting + retrieval). */
  archetype: ArchetypeId;
  /** Human-readable label for the catalog showcase. */
  label: string;
  /** One-sentence directive description. Forbidden vocabulary: clean / modern / polished / etc. Use measurable phrasing. */
  description: string;
  /** Themes this variant supports. Most variants support both. */
  supportsThemes: Array<"dark" | "light">;
  /** Motion presets this variant uses. Empty = no motion beyond tokens. */
  motionPresets: MotionPresetId[];
  /** Visual effects this variant relies on. Validated against archetype permissions. */
  effects: SectionEffectUsage;
  /** Density classification. */
  density: SectionDensity;
  /** Complexity tier. */
  complexity: SectionComplexity;
  /** Whether this variant is the default for its kind when no `variant` prop is supplied. */
  isDefault?: boolean;
};

/**
 * The renderer signature every variant component implements.
 * The component receives the full section model (which carries kind-specific
 * content) and renders it. The component is responsible for honouring tokens,
 * reduced-motion fallbacks, and accessibility.
 *
 * Variants type their props to the matching section model variant; the
 * registry erases this with `ComponentType<any>` to allow heterogeneous
 * dispatch. The renderer narrows at the call site.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SectionVariantComponent = ComponentType<any>;

export type SectionVariantEntry = {
  meta: SectionVariantMeta;
  component: SectionVariantComponent;
};

/** Public type of the full registry map. */
export type SectionRegistry = Record<string, SectionVariantEntry>;

/** Convenience predicate for AI agents picking variants for a brief. */
export type SectionVariantFilter = {
  kind?: SectionKind;
  archetype?: ArchetypeId;
  density?: SectionDensity;
  complexity?: SectionComplexity;
};
