# Component Spec: FAQAccordion

**Group:** Content  
**Type:** Organism  
**Route scope:** FAQ page, Services page, Home FAQ teaser

---

## Purpose

Grouped accordion component for FAQ content. Supports category sections, search-filtered view, and expandable items. Built with Radix UI `Accordion`.

---

## Variants

| Variant | Description |
|---------|-------------|
| `grouped` | FAQ page — items grouped by category with H3 category headings |
| `flat` | No category groups — single list of items (for embeds) |
| `single-open` | Only one item open at a time |
| `multi-open` | Multiple items can be open simultaneously |

---

## States

| State | Behavior |
|-------|----------|
| `all-closed` | All items collapsed |
| `item-open` | Item content visible; chevron rotated 180° |
| `search-filtered` | Non-matching items hidden; "X results" shown |
| `search-empty` | EmptyState shown |
| `dark-theme` | Item borders + backgrounds adapt |

---

## ARIA / Keyboard / Focus

- Radix Accordion handles: `role="region"`, `aria-expanded`, `aria-controls`, keyboard navigation (Up/Down arrows, Home/End in list)
- Category headings: `role="heading"` (H3)
- Search input: `aria-label="Search FAQs"`, `aria-controls="faq-list"`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| All | Full width; item content wraps normally |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Item expand | content area | `height 0→auto` via Radix AnimatePresence | 250ms | Instant |
| Item collapse | content area | `height auto→0` | 200ms | Instant |
| Chevron | icon | `rotate 0→180deg` | 200ms | Instant |
| Filter | non-matching | `opacity 1→0 + height 0` | 200ms | Instant |

---

## Content Keys

- `faq.[category].[id].question`
- `faq.[category].[id].answer`
- `faq.search.placeholder`
- `faq.search.results_count`
- `faq.search.empty`
