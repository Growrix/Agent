# Component Spec: MetricCard

**Group:** Hero & Section  
**Type:** Molecule  
**Route scope:** Stats strips, trust bands, social proof sections across multiple pages

---

## Purpose

Displays a single large metric (number + unit + label) with optional icon. Used in stats strips (Home, Case Studies, About). Animated count-up on scroll entry.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Large number + label; center-aligned |
| `with-icon` | Icon above number + label |
| `with-delta` | Number + small delta label ("+12% vs. last year") |
| `horizontal` | Icon left + number + label right (for compact strips) |

---

## States

| State | Behavior |
|-------|----------|
| `idle` | Shows "0" or starting value |
| `counting` | Count-up animation plays on scroll entry |
| `complete` | Shows final value |
| `dark-theme` | `color: var(--color-neutral-100)` for number; `var(--color-neutral-400)` for label |

---

## ARIA / Keyboard / Focus

- `<figure>` with `<figcaption>` for label
- Number: `aria-label="[value] [unit] — [label]"` for full screen reader context
- No keyboard interaction (display only)

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Number: 36px; label: 12px |
| `sm–lg` | Number: 44px; label: 14px |
| `lg+` | Number: 56px; label: 16px |

---

## Count-Up Animation Spec

- Trigger: `IntersectionObserver` at 30% visibility
- Duration: 1,800ms
- Easing: `cubic-bezier(0.25, 1, 0.5, 1)` (decelerate near end)
- Format: integers use comma separator; decimals round to 1 place
- Reduced-motion: shows final value immediately on entry

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | number | count-up | 1,800ms | decelerate | Final value instant |
| Scroll enter | card | `opacity 0→1 + translateY 16→0` | 350ms | `ease-out` | Instant |

---

## Content Keys

- Metric value and label passed directly from parent (varies per page context)
