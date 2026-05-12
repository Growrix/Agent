/* ==========================================================================
   Section Registry — central map of variantId → { meta, component }
   Layer: ds.composition.sections (LOCKED)

   AI agents READ from this registry. They MUST NOT EDIT this file directly
   when adding new variants. The correct extension pattern is:

   1. Create a new file under `variants/<kind>/<variant-id>.tsx` exporting
      `<META>_META` (matching SectionVariantMeta) AND a React component.
   2. Add ONE import + ONE entry to the SECTION_REGISTRY map below.
   3. Run `npm run ds:contract` to regenerate `generated/ds.contract.json`.

   See AI-AGENT-CONTRACT.md for the full lockdown rules.
   ========================================================================== */

import {
  HERO_EDITORIAL_PREMIUM_1_META,
  HeroEditorialPremium1,
} from "./variants/hero/hero-editorial-premium-1";
import {
  HERO_MODERN_SAAS_SPLIT_META,
  HeroModernSaasSplit,
} from "./variants/hero/hero-modern-saas-split";
import {
  HERO_BOLD_CONSUMER_OVERSIZED_META,
  HeroBoldConsumerOversized,
} from "./variants/hero/hero-bold-consumer-oversized";
import {
  HERO_AI_PRODUCT_STREAMING_META,
  HeroAiProductStreaming,
} from "./variants/hero/hero-ai-product-streaming";

import {
  FEATURES_BENTO_ASYMMETRIC_META,
  FeaturesBentoAsymmetric,
} from "./variants/features/features-bento-asymmetric";
import {
  FEATURES_SPLIT_ALTERNATING_META,
  FeaturesSplitAlternating,
} from "./variants/features/features-split-alternating";

import {
  TESTIMONIALS_MARQUEE_META,
  TestimonialsMarquee,
} from "./variants/testimonials/testimonials-marquee";

import { CTA_FULL_BLEED_META, CtaFullBleed } from "./variants/cta/cta-full-bleed";

import { STATS_BAND_4COL_META, StatsBand4Col } from "./variants/stats-band/stats-band-4col";

import {
  PROCESS_STEPS_VERTICAL_META,
  ProcessStepsVertical,
} from "./variants/process-steps/process-steps-vertical";

import { LOGO_CLOUD_GRID_META, LogoCloudGrid } from "./variants/logo-cloud/logo-cloud-grid";

import {
  CASE_STUDIES_GRID_META,
  CaseStudiesGrid,
} from "./variants/case-studies/case-studies-grid";

import type {
  SectionKind,
  SectionRegistry,
  SectionVariantEntry,
  SectionVariantFilter,
  SectionVariantMeta,
} from "./_schema";

/** Canonical registry. Add new variants here. */
export const SECTION_REGISTRY: SectionRegistry = {
  // hero variants
  [HERO_EDITORIAL_PREMIUM_1_META.id]: {
    meta: HERO_EDITORIAL_PREMIUM_1_META,
    component: HeroEditorialPremium1,
  },
  [HERO_MODERN_SAAS_SPLIT_META.id]: {
    meta: HERO_MODERN_SAAS_SPLIT_META,
    component: HeroModernSaasSplit,
  },
  [HERO_BOLD_CONSUMER_OVERSIZED_META.id]: {
    meta: HERO_BOLD_CONSUMER_OVERSIZED_META,
    component: HeroBoldConsumerOversized,
  },
  [HERO_AI_PRODUCT_STREAMING_META.id]: {
    meta: HERO_AI_PRODUCT_STREAMING_META,
    component: HeroAiProductStreaming,
  },

  // features variants
  [FEATURES_BENTO_ASYMMETRIC_META.id]: {
    meta: FEATURES_BENTO_ASYMMETRIC_META,
    component: FeaturesBentoAsymmetric,
  },
  [FEATURES_SPLIT_ALTERNATING_META.id]: {
    meta: FEATURES_SPLIT_ALTERNATING_META,
    component: FeaturesSplitAlternating,
  },

  // testimonials variants
  [TESTIMONIALS_MARQUEE_META.id]: {
    meta: TESTIMONIALS_MARQUEE_META,
    component: TestimonialsMarquee,
  },

  // cta variants
  [CTA_FULL_BLEED_META.id]: {
    meta: CTA_FULL_BLEED_META,
    component: CtaFullBleed,
  },

  // stats-band variants
  [STATS_BAND_4COL_META.id]: {
    meta: STATS_BAND_4COL_META,
    component: StatsBand4Col,
  },

  // process-steps variants
  [PROCESS_STEPS_VERTICAL_META.id]: {
    meta: PROCESS_STEPS_VERTICAL_META,
    component: ProcessStepsVertical,
  },

  // logo-cloud variants
  [LOGO_CLOUD_GRID_META.id]: {
    meta: LOGO_CLOUD_GRID_META,
    component: LogoCloudGrid,
  },

  // case-studies variants
  [CASE_STUDIES_GRID_META.id]: {
    meta: CASE_STUDIES_GRID_META,
    component: CaseStudiesGrid,
  },
};

/** Convenience: array of all metadata entries. */
export const SECTION_VARIANT_META_LIST: SectionVariantMeta[] = Object.values(SECTION_REGISTRY).map(
  (entry) => entry.meta,
);

/** Find a variant by id; returns undefined if not registered. */
export function getSectionVariant(variantId: string): SectionVariantEntry | undefined {
  return SECTION_REGISTRY[variantId];
}

/** Find the default variant for a given kind (the entry with isDefault === true). */
export function getDefaultVariantForKind(kind: SectionKind): SectionVariantEntry | undefined {
  return Object.values(SECTION_REGISTRY).find(
    (entry) => entry.meta.kind === kind && entry.meta.isDefault === true,
  );
}

/** Filter the registry by any subset of {kind, archetype, density, complexity}. */
export function listSectionVariants(filter: SectionVariantFilter = {}): SectionVariantMeta[] {
  return SECTION_VARIANT_META_LIST.filter((m) => {
    if (filter.kind && m.kind !== filter.kind) return false;
    if (filter.archetype && m.archetype !== filter.archetype) return false;
    if (filter.density && m.density !== filter.density) return false;
    if (filter.complexity && m.complexity !== filter.complexity) return false;
    return true;
  });
}
