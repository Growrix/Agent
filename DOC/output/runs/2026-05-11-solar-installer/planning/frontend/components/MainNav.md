# Component Spec: MainNav

**Group:** Global  
**Type:** Molecule  
**Route scope:** Header — desktop (`lg+`)

---

## Purpose

Horizontal navigation link list for desktop. Shows all primary routes. Highlights the active route. Contains the header CTA button.

---

## Nav Links (ordered)

| Label | Route | Notes |
|-------|-------|-------|
| Services | `/services` | Dropdown optional: Residential, Commercial, Battery, Solar+Roof |
| Portfolio | `/portfolio` | |
| About | `/about` | |
| Blog | `/blog` | |
| Contact | `/contact` | |

**Right slot:** `PrimaryButton` — "Get Free Assessment" → `/free-assessment`

---

## States

| State | Behavior |
|-------|----------|
| `default` | All links visible; no active highlight |
| `active` | Current route link: `color: var(--color-primary-500)` + `font-weight: 600` + optional amber underline |
| `hover` | `color: var(--color-primary-500)` |
| `focused` | Visible focus ring |
| `dropdown-open` | (if dropdown enabled) submenu panel renders below active link |

---

## ARIA / Keyboard / Focus

- `<nav aria-label="Main navigation">`
- `<ul role="list">` with `<li>` per link
- Active link: `aria-current="page"`
- Dropdown (if used): `aria-expanded`, `aria-haspopup="menu"`, keyboard-navigable with Arrow keys + Escape to close

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< lg` | Hidden (replaced by hamburger + MobileMenu) |
| `lg+` | Full horizontal list; CTA button at right |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Hover link | underline | Expand from left (scaleX 0→1) | 150ms | `ease-out` | No animation |
| Dropdown open | submenu panel | `translateY(-4px) → 0` + `opacity 0 → 1` | 150ms | `ease-out` | Instant |

---

## Content Keys

- `nav.links.*` — link labels
- `nav.cta.label` — CTA button label
