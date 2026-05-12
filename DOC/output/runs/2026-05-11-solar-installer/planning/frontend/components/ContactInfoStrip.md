# Component Spec: ContactInfoStrip

**Group:** Map / Contact  
**Type:** Molecule  
**Route scope:** Contact page, Footer, Header topbar (condensed)

---

## Purpose

Displays contact details (phone, email, address, hours) in a compact strip or card format. Multiple layout densities for different contexts.

---

## Variants

| Variant | Description |
|---------|-------------|
| `full` | All details: phone + email + address + hours |
| `topbar` | Phone + hours only (header topbar right slot) |
| `footer` | Phone + email + address (footer column) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static info display |
| `phone-hover` | Phone number: amber + underline |
| `email-hover` | Email: amber + underline |
| `dark-theme` | Text `var(--color-neutral-200)` |

---

## ARIA / Keyboard / Focus

- Phone: `<a href="tel:+15557662576" aria-label="Call SunEnergy Pro at +1-555-766-2576">`
- Email: `<a href="mailto:info@sunenergypro.com" aria-label="Email SunEnergy Pro">`
- Address: `<address>` element
- Hours: no link — `<p>` or `<span>`

---

## Content Keys

- `contact.info.phone`
- `contact.info.phone_display`
- `contact.info.email`
- `contact.info.address`
- `contact.info.hours`
- `contact.info.emergency_badge` — "24/7 Emergency Service"
