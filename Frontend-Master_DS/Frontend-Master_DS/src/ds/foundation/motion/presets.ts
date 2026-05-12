/* ==========================================================================
   Motion Preset Registry — named choreographies built from motion tokens
   Layer: ds.foundation.motion

   Why this file exists:
   ─────────────────────
   `motion/tokens.ts` exposes atoms (durations + easings). That is the right
   level for ad-hoc styling but the wrong level for AI agents that must
   COMPOSE motion deterministically. A retrieval-oriented agent must be able
   to say "use motion preset `stagger-text-60`" and get a complete
   choreography contract back — no improvisation.

   Each preset is a serializable descriptor. Components consume the
   descriptor either via CSS (animation rules in ds.components.css) or via
   small inline style transforms that read the descriptor's fields.

   Every preset declares a reduced-motion fallback so consumers do not have
   to invent one.
   ========================================================================== */

import { motion } from "./tokens";

/**
 * Direction or transform target of a motion preset.
 * `transform` strings use a compact shorthand documented inline so a
 * downstream agent can parse them. Components are free to interpret these.
 */
export type MotionPreset = {
  id: string;
  /** One-line human description for HandBook + AI consumption. */
  description: string;
  /** Motion category for retrieval grouping. */
  category: "entrance" | "exit" | "hover" | "scroll-driven" | "idle" | "ambient" | "reveal";
  /** Duration token name from `motion.duration*`. */
  duration: keyof typeof motion;
  /** Easing token name from `motion.ease*`. */
  ease: keyof typeof motion;
  /** Optional per-child stagger in ms (entrance/reveal patterns). */
  staggerMs?: number;
  /**
   * What property changes. Components use this to choose implementation.
   * - "opacity"           — opacity 0 → 1
   * - "opacity+y(N→0)"    — opacity 0 → 1 + translateY from N px to 0
   * - "opacity+y(N→0)+stagger"
   * - "scale(a→b)"        — scale from `a` to `b`
   * - "scale(a→b→a)"      — scale a → b → a (pulse)
   * - "scroll-scale(a→b)" — scale `a` at viewport-top → `b` at viewport-bottom
   * - "drift-x(a→b)"      — x ranges a→b (yoyo)
   * - "blur(a→b)"         — blur a → b
   */
  transform: string;
  /** Whether the preset repeats. `false` = once; positive integer = repeat N times. */
  repeat: false | number;
  /** When `true`, alternates direction on each repeat. */
  yoyo?: boolean;
  /** What happens when prefers-reduced-motion is true. Final visual state, no layout shift. */
  reducedMotionFallback: "instant-final-state" | "no-motion" | "static-opacity-1";
  /** Suggested CSS class to add to the element when this preset is applied. */
  className: string;
};

export const MOTION_PRESETS = {
  "fade-in": {
    id: "fade-in",
    description: "Element fades to full opacity.",
    category: "entrance",
    duration: "durationNormal",
    ease: "easeOut",
    transform: "opacity",
    repeat: false,
    reducedMotionFallback: "instant-final-state",
    className: "motion-fade-in",
  },

  "rise-soft": {
    id: "rise-soft",
    description: "Element rises 16px while fading in. Use for sections and cards on enter.",
    category: "entrance",
    duration: "durationModerate",
    ease: "easeOut",
    transform: "opacity+y(16→0)",
    repeat: false,
    reducedMotionFallback: "instant-final-state",
    className: "motion-rise-soft",
  },

  "stagger-text-60": {
    id: "stagger-text-60",
    description: "Per-child reveal with 60ms stagger. Use for hero headlines (word-by-word) and feature grids.",
    category: "reveal",
    duration: "durationFast",
    ease: "easeOut",
    staggerMs: 60,
    transform: "opacity+y(8→0)+stagger",
    repeat: false,
    reducedMotionFallback: "instant-final-state",
    className: "motion-stagger-text-60",
  },

  "scroll-scale-1.04": {
    id: "scroll-scale-1.04",
    description: "Hero imagery scales 1.0 → 1.04 across the first 600px of scroll. Settles the page in as the visitor begins reading.",
    category: "scroll-driven",
    duration: "durationSlow",
    ease: "easeOut",
    transform: "scroll-scale(1.0→1.04)",
    repeat: false,
    reducedMotionFallback: "no-motion",
    className: "motion-scroll-scale-1-04",
  },

  "idle-pulse-once": {
    id: "idle-pulse-once",
    description: "Primary CTA pulses once on idle (scale 1.0 → 1.03 → 1.0) to draw a returning eye.",
    category: "idle",
    duration: "durationSlow",
    ease: "easeInOut",
    transform: "scale(1.0→1.03→1.0)",
    repeat: 1,
    reducedMotionFallback: "no-motion",
    className: "motion-idle-pulse-once",
  },

  "reveal-glass": {
    id: "reveal-glass",
    description: "Glass / mesh element resolves from blur(12px) opacity 0 → blur(0) opacity 1. Use for layered hero surfaces.",
    category: "reveal",
    duration: "durationModerate",
    ease: "easeOut",
    transform: "blur(12→0)+opacity",
    repeat: false,
    reducedMotionFallback: "static-opacity-1",
    className: "motion-reveal-glass",
  },

  "mesh-drift": {
    id: "mesh-drift",
    description: "Ambient background mesh drifts -2% → 2% horizontally (yoyo). Use sparingly on hero backgrounds; pair with reduced-motion suppression.",
    category: "ambient",
    duration: "durationSlowest",
    ease: "easeInOut",
    transform: "drift-x(-2%→2%)",
    repeat: Number.POSITIVE_INFINITY === Infinity ? 9999 : 9999,
    yoyo: true,
    reducedMotionFallback: "no-motion",
    className: "motion-mesh-drift",
  },

  "magnetic-hover": {
    id: "magnetic-hover",
    description: "Interactive element scales 1.0 → 1.02 on hover. Use for primary CTAs and feature cards.",
    category: "hover",
    duration: "durationFastest",
    ease: "easeOut",
    transform: "scale(1.0→1.02)",
    repeat: false,
    reducedMotionFallback: "no-motion",
    className: "motion-magnetic-hover",
  },
} as const satisfies Record<string, MotionPreset>;

export type MotionPresetId = keyof typeof MOTION_PRESETS;

export const MOTION_PRESET_IDS = Object.keys(MOTION_PRESETS) as MotionPresetId[];

export function getMotionPreset(id: MotionPresetId): MotionPreset {
  return MOTION_PRESETS[id];
}
