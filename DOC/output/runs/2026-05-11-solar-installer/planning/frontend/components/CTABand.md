# Component Spec: CTABand

**Group:** Hero & Section  
**Type:** Organism  
**Route scope:** Bottom CTA section on every page (mandatory)

---

## Purpose

Full-width conversion band that appears as the last section before the Footer on every page. Contains headline, subheadline, primary CTA, and optional secondary CTA. Designed to capture intent from users who have scrolled the full page.

---

## Variants

| Variant | Description |
|---------|-------------|
| `amber` | Amber background — default for most pages; high-visibility conversion |
| `dark-teal` | Dark teal background — for pages already using amber heavily |
| `dark-navy` | Dark navy — for certifications, news, low-energy pages |
| `gradient` | Amber-to-teal gradient — for Home final CTA |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Full CTA band visible |
| `dark-theme` | Amber variant stays amber (always visible in dark theme) |
| `hovered` | CTA button hover state |

---

## Layout Contract

- Desktop: `max-width: 1200px` container; text left / CTAs right (2-column)
- Mobile: center-stacked; headline above CTAs
- Padding: `var(--spacing-section-y)` vertical; `var(--spacing-container-x)` horizontal

---

## ARIA / Keyboard / Focus

- `<section aria-labelledby="cta-band-heading">`
- Heading: `id="cta-band-heading"` (H2 or H3 based on page hierarchy)

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< md` | Center-stacked; full-width CTAs (one above the other) |
| `md–lg` | 2-col: text left (60%) + CTAs right (40%) |
| `lg+` | Same 2-col; max-width container |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | entire band | `opacity 0→1 + translateY 20→0` | 400ms | `ease-out` | Instant |

---

## Content Keys

- `[page].cta.headline`
- `[page].cta.subheadline`
- `[page].cta.primary_label`
- `[page].cta.secondary_label`
