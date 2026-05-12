# Component Spec: GoogleBusinessCard

**Group:** Map / Contact  
**Type:** Molecule  
**Route scope:** Contact page, Service Area page

---

## Purpose

Displays a card showing SunEnergy Pro's Google Business Profile data: name, rating aggregate (stars + count), address, phone, hours, and a "View on Google" CTA.

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static card |
| `dark-theme` | Background adapts |

---

## ARIA / Keyboard / Focus

- `<article aria-label="SunEnergy Pro Google Business Profile">`
- "View on Google" link: `aria-label="View SunEnergy Pro on Google Maps (opens in new tab)"`
- Rating: `RatingStars` sub-component with `aria-label="[n] out of 5 stars based on [count] reviews"`

---

## Content Keys

- `contact.google.name`
- `contact.google.rating`
- `contact.google.review_count`
- `contact.google.address`
- `contact.google.phone`
- `contact.google.hours`
- `contact.google.maps_url`
