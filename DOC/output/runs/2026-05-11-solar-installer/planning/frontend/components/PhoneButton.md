# Component Spec: PhoneButton

**Group:** Buttons  
**Type:** Atom  
**Route scope:** Header topbar (mobile), Contact page, CTABand, FloatingActionButton

---

## Purpose

Phone number CTA that triggers a tel: call on mobile and displays the number on desktop. Includes an optional "24/7" badge.

---

## Variants

| Variant | Description |
|---------|-------------|
| `text-number` | Phone icon + formatted number |
| `cta-button` | Full button style ("Call Now: +1-555-...") |
| `icon-only` | Phone icon only (mobile header) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Phone number visible |
| `hover` | Amber color + underline |
| `mobile` | `href="tel:..."` activates native dialer |

---

## ARIA / Keyboard / Focus

- `<a href="tel:+15557662576" aria-label="Call SunEnergy Pro at +1-555-766-2576">`

---

## Content Keys

- `contact.info.phone`
- `contact.info.phone_display`
- `contact.info.phone_aria_label`
