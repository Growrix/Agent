# Component Spec: TrustBadge

**Group:** Hero & Section  
**Type:** Atom  
**Route scope:** Hero, certifications strip, CTA band, footer

---

## Purpose

Larger than TrustChip — displays a certification logo, award badge, or partner logo with optional label. Used for manufacturer partnerships, NABCEP badge, BBB badge.

---

## Variants

| Variant | Description |
|---------|-------------|
| `logo-only` | SVG/PNG logo (120px max width) |
| `logo-label` | Logo + label below (e.g., "NABCEP Certified") |
| `logo-description` | Logo + label + 1-line description (for Certifications page) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Grayscale logo (in partner strips) |
| `hover` | Color logo reveal (`filter: grayscale(0)`) + subtle scale 1.05 |
| `dark-theme` | Light logos on dark background (inverted where needed) |

---

## ARIA / Keyboard / Focus

- Non-clickable: `<figure>` with `<figcaption>` for label
- Clickable (verify link): `<a>` with `aria-label="Verify [cert name] certification (opens in new tab)"`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Logo max 80px wide; label 11px |
| `sm–lg` | Logo max 100px wide |
| `lg+` | Logo max 120px wide |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Hover | logo | `grayscale(1)→grayscale(0)` + `scale(1.05)` | 200ms | `ease-out` | Color reveal only, no scale |

---

## Content Keys

- `certs.[cert_id].name`
- `certs.[cert_id].description`
- `certs.[cert_id].verify_url`
- `certs.[cert_id].aria_label`
