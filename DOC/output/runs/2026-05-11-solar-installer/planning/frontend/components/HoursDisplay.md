# Component Spec: HoursDisplay

**Group:** Map / Contact  
**Type:** Atom  
**Route scope:** Contact page, Footer, Header topbar

---

## Purpose

Displays business operating hours in a readable format, with an optional "Open Now" / "Closed" live indicator based on current time.

---

## Variants

| Variant | Description |
|---------|-------------|
| `table` | M–F: 8am–6pm / Sat: 9am–3pm / Sun: Closed |
| `inline` | "Mon–Fri 8am–6pm" single line (for topbar) |
| `live-badge` | Inline + "Open Now" green badge or "Closes in 2 hours" amber |

---

## States

| State | Behavior |
|-------|----------|
| `open` | "Open Now" green badge |
| `closing-soon` | "Closes in X hours" amber badge |
| `closed` | "Closed" gray badge + next open time |
| `emergency` | "24/7 Emergency Line Available" — always shown |

---

## ARIA / Keyboard / Focus

- `<time>` elements for hours
- Live badge: `aria-label="Business is currently open"` / "closed"

---

## Content Keys

- `contact.hours.weekday`
- `contact.hours.saturday`
- `contact.hours.sunday`
- `contact.hours.emergency_label`
