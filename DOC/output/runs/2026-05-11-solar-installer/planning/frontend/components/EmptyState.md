# Component Spec: EmptyState

**Group:** Layout  
**Type:** Molecule  
**Route scope:** Portfolio filter (no results), Blog filter (no results), FAQ search (no match), Service Area (zip not found)

---

## Purpose

Renders a centered empty-state panel when a filtered list, search, or data fetch returns zero results. Includes icon, heading, supportive body text, and an optional recovery CTA.

---

## Variants

| Variant | Description |
|---------|-------------|
| `filter-empty` | "No results match your filters" + Clear Filters CTA |
| `search-empty` | "No results for [query]" + Try Different Terms |
| `data-empty` | No data available yet (generic) |
| `zip-not-found` | Specific for service area zip checker |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static empty state |

---

## ARIA / Keyboard / Focus

- Wrapped in `<section role="status" aria-live="polite">` so screen readers announce the empty state after filter interaction
- Recovery CTA uses PrimaryButton or OutlineButton

---

## Content Keys

- `empty.[context].heading`
- `empty.[context].body`
- `empty.[context].cta_label`
