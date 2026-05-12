# Ch 22 — Archetype Themes

## Purpose

A site's **theme** (`dark` / `light`) controls color-scheme. A site's **archetype** is a higher-order grouping that captures its visual posture — typography rhythm, density, accent strategy, motion temperament, and which advanced visual effects the site is allowed to use.

Archetypes are metadata, not separate CSS themes. They render under either `theme-dark` or `theme-light`. The archetype's job is to constrain agent decisions: which variants belong to this site, which effects this site is permitted to use, which motion presets fit the surface mood.

---

## §1 Themes (color-scheme only)

The DS ships two themes:

| Name | Class | Color scheme |
|---|---|---|
| Dark | `theme-dark` | dark |
| Light | `theme-light` | light |

Default: `dark`. Stored in `localStorage["solarmatch-theme"]`.

Adding a third theme is a deliberate decision — it requires palette overrides, contrast audits across every component, and visual-regression updates. Do not add themes ad-hoc to satisfy a single project; use the archetype permission window instead.

---

## §2 Archetypes (visual posture)

The eight registered archetypes live in `src/ds/foundation/themes/archetypeRegistry.ts`:

1. **editorial-premium** — patient and considered; long-form type-led layouts; restrained motion.
2. **modern-saas** — confident and efficient; modular cards; polished accents.
3. **bold-consumer** — loud and welcoming; saturated accents; oversized type.
4. **ai-product** — confident in the machinery; deep cool palette; ambient mesh + streaming text motion.
5. **startup-conversion** — direct; warm accent; aggressive CTA prominence.
6. **local-business-trust** — hand-shake credibility; photographic; trust signals first.
7. **dashboard-ops** — tool not advertisement; density-first; minimal accent.
8. **portfolio-craft** — editorial restraint with per-case accent overrides.

Each archetype declares:

| Field | Purpose |
|---|---|
| `mood` | Two-sentence positioning of what the visitor should feel. |
| `preferredScheme` | `dark` / `light` / `either` — suggested base color-scheme. |
| `density` | `compact` / `comfortable` / `spacious`. |
| `permissions` | Map of advanced effect → boolean. Variants check this at build time. |
| `motionTemperament` | Motion preset ids that fit this archetype. |
| `variantIdPrefixes` | Whitelist of variant id prefixes belonging to this archetype. |

---

## §3 Permission window

The permission window is the **central enforcement mechanism** for visual consistency. A variant may declare effects like `gradientMesh: true`, `fullBleedPhotograph: true`, `glassmorphism: true`. The DS contract emitter cross-references those declarations against the variant's archetype permissions.

If the archetype does not permit the effect on the variant's surface class, the build fails with a clear error. This stops AI agents from sneaking glassmorphism into a dashboard-ops site.

---

## §4 Variant assignment

Every variant declares a single `archetype`. When a preset uses that variant, it inherits the variant's visual posture. A preset may use variants from multiple archetypes if pages have different intents (e.g., a /pricing page in `startup-conversion` while /work uses `portfolio-craft`).

To keep variant retrieval predictable, prefer variants whose archetype matches the preset's `archetype`. AI agents reading `ds.contract.json` should rank matches by archetype affinity.

---

## §5 Adding a new archetype

1. Append a new entry to `ARCHETYPES` in `archetypeRegistry.ts`.
2. Decide its mood, density, permission window, motion temperament, and variant id prefixes.
3. Add at least 2 variants whose ids match the new prefix.
4. Run `npm run ds:contract` to verify integration.

Adding an archetype without seeding variants is forbidden — an archetype with no variants is a documentation artifact, not a usable surface.
