# Component Spec: CertificationBadge

**Group:** Trust  
**Type:** Atom  
**Route scope:** Certifications page, TeamCard, HeroSection trust chips, ServiceCard

---

## Purpose

Mini inline badge displaying a named certification (NABCEP, CSLB, BBB, OSHA, NEC). Used in team cards, hero chips, and certification cards.

---

## Variants

| Variant | Description |
|---------|-------------|
| `chip` | Small pill with icon + short label |
| `card` | Larger card with full cert name + issuer + year |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static badge |
| `with-tooltip` | Hover/focus reveals Tooltip with full cert name |

---

## ARIA / Keyboard / Focus

- Chip: `<span role="img" aria-label="NABCEP Certified">` or `<abbr title="North American Board of Certified Energy Practitioners">NABCEP</abbr>`

---

## Content Keys

- `cert.[key].short_label`
- `cert.[key].full_name`
- `cert.[key].issuer`
- `cert.[key].year`
