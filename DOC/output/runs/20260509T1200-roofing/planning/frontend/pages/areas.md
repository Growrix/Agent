# Page Brief — Service Areas (`/areas`)

**Visual Signature:** `VD-AREA-G7`  
**Creative Latitude:** MEDIUM  
**Motion Temperament:** `calm-precise`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 5

---

## Page Definition

- **User intent:** Confirm the contractor serves their specific neighborhood or zip code.
- **Conversion outcome:** Confirmation → quote form or phone call
- **Primary CTA:** `cta.get_free_quote` → `/quote`
- **Secondary CTA:** Phone call
- **KPI:** Quote CTA click from this page

---

## Outcomes

1. Visitor can confirm coverage for their area in ≤ 10 seconds.
2. The full list of covered areas is visible without interaction on desktop.
3. An interactive lookup (zip or area name) is present for self-service confirmation.
4. The page supports SEO for "[service] in [area]" searches.
5. Visitor sees a path to book work for their area.

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Page heading + subhead | `areas.hero.*` | `locality_outcome_statement` |
| Area coverage map (embedded) | Google Maps embed or static map image | `local_proof` |
| Area chip/badge list (all areas) | `areas.list.*` | `local_proof` |
| Zip code / area lookup input | Interactive `AreaCoverageChip` widget | `local_proof` |
| Coverage note + limitation | `areas.coverage_note` | `trust_signal_cluster` |
| Quote CTA per area | CTA with `?area=[slug]` param | `multi_channel_conversion` |
| Trust badge cluster | `trust.badge.*` | `trust_signal_cluster` |
| Footer | `footer.*` | `footer_credibility` |

---

## Forbidden Patterns

- Full-bleed aerial hero photo (Home's territory)
- Decorative section rhythm alternation (utility page — consistent light surface)
- Map takes more than 50% of hero viewport — content must be visible alongside map

---

## Visual Differentiation

- Map embed is inset in a panel (not full-bleed background) — distinct from aerial-hero pages
- Dense chip grid of area names is the primary visual element — unique among all routes
- Light surface throughout (all other service pages have dark hero surfaces)
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-AREA-G7`

---

## Composition Guidance (MEDIUM)

**Recommended outline (deviation allowed with reason):**

1. **Page header:** Light `Surface`. Eyebrow + H1 + subhead + zip lookup input. Compact, not a full-screen hero.
2. **Map + area list:** `Grid(60/40)`. Left: embedded map (inset panel, not full-bleed). Right: `Cluster` of area chips scrollable. Desktop side by side; mobile stacked (map → chip list below).
3. **Coverage detail:** List of service areas as `AreaCoverageChip` links. Each chip links to `/areas/[area-slug]` if individual area pages exist, or just confirms coverage.
4. **Trust strip:** Abbreviated `TrustBadgeCluster` + service guarantee note.
5. **Quote CTA:** Full-width CTA band. Dark `Surface`.

---

## Motion

- Area chips: `Reveal` with 20ms stagger on scroll.
- Map embed: fade in on `Reveal` (avoid layout shift).
- Lookup input: focus ring animation only.
- Reduced-motion: instant reveals.

---

## State Requirements

| State | Handling |
|-------|---------|
| Area lookup: found | Green confirmation chip + quote CTA |
| Area lookup: not found | "We may still be able to help — call us" message + phone CTA |
| Map embed blocked (CSP/privacy) | Static map image fallback |

---

## Responsive Intent

- Mobile: zip lookup input at the very top. Map full-width below. Chip list vertical scroll below map.
- Desktop: side-by-side map + chip grid.

---

## SEO

- Title: `seo.areas_title`
- Description: `seo.areas_description`
- Schema.org: `LocalBusiness` with `areaServed` array of all service areas
- Canonical: `/areas`
- Individual area subpages (`/areas/[slug]`): thin SEO pages per area — out of scope for this plan unless brief expands.

---

## Conversion Path

- Lookup → confirmed → Quote CTA
- Lookup → not found → Phone CTA
- Bottom CTA band → `/quote`

---

## Accessibility

- Lookup input: `role="combobox"` or standard `<input type="search">` with `aria-label`
- Area chip list: `<ul>` with `<li>` — not a visual-only layout
- Map embed: `<iframe title="Service area map">` + text fallback for screen readers

---

## Performance

- Map embed: load with `loading="lazy"` iframe (below fold)
- Area list: server-rendered (Sanity CMS, ISR 1hr)
- LCP: text heading — ≤ 1.5s target

---

## Analytics

| Event | Trigger |
|-------|---------|
| `area_lookup_success` | Zip/area confirmed |
| `area_lookup_fail` | Zip/area not found |
| `area_chip_click` | Any area chip clicked |
| `areas_cta_click` | Quote CTA from this page |
