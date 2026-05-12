# Component Spec: ServiceCard

**Group:** Cards  
**Type:** Molecule  
**Route scope:** Services index, Home services section

---

## Purpose

Displays a single solar service offering (Residential, Commercial, Battery Storage, Solar+Roof) with icon, title, description, and CTA. Used in grid layouts.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Vertical card: icon + title + description + CTA link |
| `featured` | Larger card with background image + overlay + CTA button |
| `horizontal` | Icon left + content right (for compact layouts) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static card |
| `hover` | Lift shadow + amber top border reveal + CTA link color shift |
| `focused` | Visible focus ring on CTA link |
| `dark-theme` | `background: var(--color-surface-dark-800)`, text adapts |

---

## ARIA / Keyboard / Focus

- `<article>` wrapper
- Heading: `h3` within the card
- CTA: `<a aria-label="Learn more about [service name]">`
- Card is NOT a link wrapper — only the CTA is actionable

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Full width stacked |
| `sm–lg` | 2-column grid |
| `lg+` | 3–4 column grid |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | card | Stagger `opacity 0→1 + translateY 16→0` | 300ms | `ease-out` | Instant |
| Hover | card | `translateY(-4px)` + shadow deepens | 200ms | `ease-out` | Shadow only |
| Hover | top border | `scaleX 0→1` (amber) | 200ms | `ease-out` | Static border |

---

## Content Keys

- `services.[service_id].name`
- `services.[service_id].description`
- `services.[service_id].icon`
- `services.[service_id].cta_label`
- `services.[service_id].href`
