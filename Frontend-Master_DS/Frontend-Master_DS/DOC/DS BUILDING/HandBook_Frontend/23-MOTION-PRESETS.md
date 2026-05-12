# Ch 23 — Motion Presets

## Purpose

`motion/tokens.ts` exposes the **atoms** of motion: durations and easings. That is the right level for ad-hoc styling but the wrong level for AI agents that must compose motion deterministically. A retrieval-oriented agent must be able to say *"use motion preset stagger-text-60"* and get a complete choreography contract back, with no improvisation.

Motion presets live at `src/ds/foundation/motion/presets.ts`. CSS animation classes implementing each preset live at the bottom of `src/ds/styles/ds.section-variants.css`.

---

## §1 The ten registered presets

| id | category | what it does | reduced-motion fallback |
|---|---|---|---|
| `fade-in` | entrance | opacity 0 → 1 | instant-final-state |
| `rise-soft` | entrance | opacity 0 → 1 + translateY 16 → 0 | instant-final-state |
| `stagger-text-60` | reveal | per-child opacity + y, 60ms stagger | instant-final-state |
| `scroll-scale-1.04` | scroll-driven | scale 1.0 → 1.04 across first 600px scroll | no-motion |
| `idle-pulse-once` | idle | scale 1.0 → 1.03 → 1.0 once after 1200ms | no-motion |
| `reveal-glass` | reveal | blur(12px) opacity 0 → blur(0) opacity 1 | static-opacity-1 |
| `mesh-drift` | ambient | drift-x -2% ↔ 2% yoyo | no-motion |
| `magnetic-hover` | hover | scale 1.0 → 1.02 on hover | no-motion |

Each preset is a serializable descriptor (id + category + duration token + easing token + transform + repeat + reduced-motion fallback + a `className` to apply).

---

## §2 Reduced-motion contract

Every preset declares a `reducedMotionFallback`. CSS in `ds.section-variants.css` includes a `@media (prefers-reduced-motion: reduce)` block that:

- disables `animation`
- removes `transform`
- pins `opacity: 1`
- removes `filter` blur
- forces marquee track to a static state

Components do not need to write reduced-motion rules themselves — they get them for free by applying the preset's class.

---

## §3 How variants consume presets

A variant declares which presets it uses in `motionPresets: MotionPresetId[]`. At render time, it applies the preset's `className` to the appropriate DOM node:

```tsx
<div className="sv-content-layer ...__panel motion-stagger-text-60">
  <div style={staggerStyle(0)}>{kicker}</div>
  <h1 style={staggerStyle(1)}>{title}</h1>
  <p style={staggerStyle(2)}>{lede}</p>
</div>
```

Per-child stagger uses the helper `staggerStyle(index)` from `_helpers.ts`, which sets a CSS custom property `--sv-stagger-index` that the keyframes read.

---

## §4 Adding a new preset

1. Append a new entry to `MOTION_PRESETS` in `presets.ts`.
2. Add a corresponding `.motion-<name>` block in `ds.section-variants.css` with a `@keyframes` definition and a reduced-motion override.
3. Document the visitor-facing intent in the preset's `description`.
4. Run `npm run ds:contract` to confirm.

Forbidden:

- Hand-writing motion in a variant component (use a preset's class, do not write `style={{ transition: ... }}`).
- Motion without a reduced-motion fallback.
- Decorative motion without a purpose category — every preset cites `entrance` / `exit` / `hover` / `scroll-driven` / `idle` / `ambient` / `reveal`.
