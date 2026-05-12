# Ch 21 — Section Variants

## Purpose

Section variants are the unit of selection the DS exposes to higher-level systems (AI agents, preset authors, future builders). Instead of asking an agent to "compose a hero from primitives," we ask it to **select a hero variant by id**.

This chapter documents how variants are structured, where they live, and the rules for adding new ones.

---

## §1 Anatomy

Every variant lives at:

```
src/ds/composition/sections/variants/<kind>/<variant-id>.tsx
```

Every variant file exports two symbols:

```ts
export const HERO_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "hero-editorial-premium-1",
  kind: "hero",
  archetype: "editorial-premium",
  label: "Hero — Editorial Premium 1",
  description: "Full-bleed photograph with linear gradient overlay; type panel anchored lower-left; ...",
  supportsThemes: ["dark", "light"],
  motionPresets: ["stagger-text-60", "scroll-scale-1.04", "fade-in"],
  effects: { fullBleedPhotograph: true, scrollDrivenScale: true },
  density: "full-bleed",
  complexity: "rich",
};

export function HeroEditorialPremium1(props: HeroModel) { /* ... */ }
```

The meta is the **machine-readable contract**. The component is the **runtime implementation**.

---

## §2 Schema

The full schema lives at `src/ds/composition/sections/_schema.ts`. Required fields:

| Field | Purpose |
|---|---|
| `id` | Stable string identifier. Once published, never renamed. |
| `kind` | One of the registered section kinds. Determines which content shape the component receives. |
| `archetype` | Which archetype this variant belongs to. Drives whitelist + retrieval ordering for agents. |
| `label` | Human-readable name for the catalog. |
| `description` | One-sentence directive description. Forbidden vocabulary: `clean / modern / polished / elegant / minimal / sleek / intuitive`. Use measurable phrasing. |
| `supportsThemes` | Subset of `["dark", "light"]`. |
| `motionPresets` | Ids from `motion/presets.ts`. Empty = no motion. |
| `effects` | Map of effect → boolean. Validated against archetype permissions at contract-emit time. |
| `density` | `compact` / `comfortable` / `full-bleed` / `extended`. |
| `complexity` | `minimal` / `standard` / `rich`. |
| `isDefault` | Optional. Set `true` on exactly one variant per kind to make it the renderer's fallback when `section.variant` is unset. |

---

## §3 Adding a new variant

1. Pick the `kind` and `archetype`.
2. Create `src/ds/composition/sections/variants/<kind>/<variant-id>.tsx` per §1.
3. Use only design tokens (no raw values). Use only motion presets (no raw transitions on HIGH-density surfaces).
4. Add CSS classes in `src/ds/styles/ds.section-variants.css` under a clearly-labelled section header. Append only.
5. Register: add ONE import + ONE entry to `SECTION_REGISTRY` in `src/ds/composition/sections/_registry.ts`.
6. Run `npm run ds:contract`. The emitter validates archetype permissions.
7. Run `npm run verify`. The DS is healthy when all checks pass.

---

## §4 Render dispatch

`PublicPresetPage` resolves a section to its component in this order:

1. If `section.variant` is set and the registered variant's `kind` matches, render the variant.
2. Else if a `isDefault: true` variant exists for the section's `kind`, render it.
3. Else fall back to the built-in default render switch (only for the original 7 kinds: hero, features, testimonials, faq, blogList, cta, newsletter).
4. Else render a "no variant registered" notice so the preset author notices the gap.

This dispatch is the **only** integration point between the registry and the rendering surface. Do not bypass it.

---

## §5 Forbidden patterns

- Prescribing component names in a variant's meta description. The description describes the **visual outcome**, not the implementation.
- Editing the registry to "tune" or "rename" an existing variant. Variant ids are a public contract. Need a different shape? Add a new variant; deprecate the old via a `deprecated: true` flag (and bump a major DS version).
- Importing primitives from outside `@/ds/primitives` or components from outside `@/ds/components`. The registry stays within the DS boundary.
- Using inline raw style values inside variant components (the `ds:audit` script catches these in CSS, and lint catches inline raw values in TSX).
