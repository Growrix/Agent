# Component Spec: SectionHeading

**Group:** Hero & Section  
**Type:** Atom  
**Route scope:** All content sections across all pages

---

## Purpose

Standardized section heading atom providing consistent typography hierarchy, optional eyebrow label, optional subheadline, and optional CTA link. Maintains heading level flexibility (H2/H3) for SEO and accessibility.

---

## Variants

| Variant | Description |
|---------|-------------|
| `center` | Default — centered, used for most marketing sections |
| `left` | Left-aligned — used for editorial/content-heavy sections |
| `with-cta` | Right-aligned "See All →" link in heading row |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static heading row |
| `dark-theme` | `var(--color-neutral-100)` heading; `var(--color-neutral-400)` subheadline |

---

## Structure

```
[optional eyebrow — 11px caps, letter-spacing, amber color]
[H2 or H3 — section main heading]
[optional subheadline — 16–18px, neutral-500]
[optional CTA link — right-aligned (with-cta variant) or below center]
```

---

## ARIA / Keyboard / Focus

- Heading level passed via `as` prop (`h2` default)
- No interactive elements unless `with-cta` variant; CTA is `<a>` with visible focus ring

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Heading: 22px; subheadline: 15px; center only |
| `sm–lg` | Heading: 26–30px; subheadline: 16px |
| `lg+` | Heading: 32–36px; subheadline: 18px |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | heading | `opacity 0→1 + translateY 12→0` | 300ms | `ease-out` | Instant |

---

## Content Keys

- Eyebrow, heading, subheadline, and CTA text passed directly from parent section
