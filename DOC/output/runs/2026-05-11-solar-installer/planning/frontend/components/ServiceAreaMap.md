# Component Spec: ServiceAreaMap

**Group:** Map / Contact  
**Type:** Molecule  
**Route scope:** Service Area page

---

## Purpose

Embedded Google Map showing the SunEnergy Pro service radius with a custom marker for headquarters and a shaded coverage zone overlay. Lazy-loads when scrolled into view.

---

## States

| State | Behavior |
|-------|----------|
| `loading` | Skeleton rectangle (500px height) |
| `loaded` | Google Maps iframe rendered |
| `error` | Static PNG fallback + "View on Google Maps →" link |
| `dark-theme` | Map uses dark map style (Google Maps API dark style JSON) |

---

## ARIA / Keyboard / Focus

- `<figure aria-label="Map of SunEnergy Pro service area">`
- Iframe: `title="SunEnergy Pro service area map"`
- Fallback image: `alt="Map showing SunEnergy Pro service coverage area across Sacramento, Central Valley, and surrounding regions"`
- "View on Google Maps" link: `aria-label="View SunEnergy Pro service area on Google Maps (opens in new tab)"`

---

## Lazy Loading

- `IntersectionObserver` at 20% viewport visibility triggers map load
- Until trigger: shows skeleton rectangle

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Height 280px |
| `sm–lg` | Height 380px |
| `lg+` | Height 500px; full width |

---

## Content Keys

- `service_area.map.title`
- `service_area.map.fallback_alt`
- `service_area.map.view_link_label`
- `service_area.map.google_maps_url`
