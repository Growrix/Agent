# Component Spec: CaseStudyCard

**Group:** Cards  
**Type:** Molecule  
**Route scope:** Case Studies index page

---

## Purpose

Displays a single case study project preview: thumbnail, customer type tag, customer name + location, system size, annual savings, brief summary, and "Read Case Study" CTA.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Vertical card: thumbnail + meta + summary + CTA |
| `featured` | Horizontal layout for the first/featured card |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static card with metrics row visible |
| `hover` | Lift + amber left border appears + "Read Case Study" brightens |
| `loading` | Skeleton: rect + 3 lines |
| `filtered-hidden` | `opacity: 0` + `height: 0` when filter excludes this card |
| `dark-theme` | `background: var(--color-surface-dark-800)` |

---

## ARIA / Keyboard / Focus

- `<article aria-labelledby="case-[id]-title">`
- CTA: `<a href="/case-studies/[slug]" aria-label="Read case study: [title]">`
- Metrics: `<dl>` / `<dt>` / `<dd>` for screen reader pairing of labels + values

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | 1-column |
| `sm–lg` | 2-column |
| `lg+` | 3-column; featured spans full width |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | card | `opacity 0→1` + stagger 80ms | 300ms | `ease-out` | Instant |
| Filter hide/show | card | `opacity` + `scale 0.95→1` | 300ms | `ease-in-out` | Instant |
| Hover | left border | `scaleY 0→1` (amber) | 200ms | `ease-out` | Static border |

---

## Content Keys

- `case_studies.[id].title`
- `case_studies.[id].customer_type`
- `case_studies.[id].customer_name`
- `case_studies.[id].location`
- `case_studies.[id].system_size`
- `case_studies.[id].annual_savings`
- `case_studies.[id].summary`
- `case_studies.[id].thumbnail_src`
