# Component Spec: Header

**Group:** Global  
**Type:** Organism  
**Route scope:** All marketing routes (shared layout)

---

## Purpose

Primary navigation organism. Provides brand identity, desktop navigation links, social links (topbar slot), contact info (topbar slot), and the mobile hamburger trigger. Implements a deterministic scroll-state machine: transparent at top on hero pages, solid on scroll-down, visible on scroll-up.

---

## Variants

| Variant | Description |
|---------|-------------|
| `transparent` | Used on pages with full-bleed hero; header is transparent at `y=0` |
| `solid` | Applies immediately when `scrollY > 80px`; white (light) / dark-900 (dark) |
| `static-dark` | For non-hero pages (certifications, team, resources, news) — always dark |

---

## States (Universal State Matrix)

| State | Behavior |
|-------|----------|
| `default` | Transparent variant on hero pages; topbar + nav row visible |
| `scrolled-down` | `solid` variant; `box-shadow: var(--shadow-md)` |
| `scrolled-up-after-down` | `solid` visible with slide-in from top |
| `at-top` | Returns to `transparent` when `scrollY = 0` |
| `nav-open (mobile)` | MobileMenu overlay rendered; hamburger → X icon |
| `dark-theme` | All tokens swap to dark variants; social + contact adapt |
| `focused (keyboard)` | Skip-to-content link becomes visible on first Tab |

---

## ARIA / Keyboard / Focus

- `<header role="banner">`
- Skip link: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>` — first focusable element
- `MainNav`: `<nav aria-label="Main navigation">`
- Mobile menu button: `aria-expanded`, `aria-controls="mobile-menu"`, `aria-label="Open navigation menu"`
- All nav links: keyboard-focusable, visible focus ring

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< lg (< 1024px)` | TopBar hidden; hamburger replaces MainNav; logo centered or left |
| `lg–xl` | TopBar visible (social left, contact right); MainNav full; no hamburger |
| `> xl` | Same as lg–xl; max-width container constrains inner content |

---

## Sub-components Consumed

- `MainNav` — desktop nav links
- `ThemeSwitcher` — header slot (desktop)
- `SocialIconRow` — topbar left slot (desktop)
- `MobileMenu` — triggered by hamburger
- `PrimaryButton` — "Get Free Assessment" CTA in nav (desktop)

---

## Topbar Slot Order (Desktop)

```
[LEFT] SocialIconRow (FB, IG, YT, LI)   |   [RIGHT] clock-icon + Hours | phone-icon + 24/7 badge + number
```

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| scroll past 80px | header background | CSS transition `background-color` | 200ms | `ease-in-out` | Instant |
| scroll back to 0 | header background | CSS transition | 200ms | `ease-in-out` | Instant |
| scroll down (hidden) | header translate Y | `translateY(-100%)` | 250ms | `ease-in` | Instant hide |
| scroll up (reveal) | header translate Y | `translateY(0)` | 250ms | `ease-out` | Instant show |

---

## Content Keys

- `nav.links.*` — navigation link labels
- `header.cta.label` — CTA button text ("Get Free Assessment")
- `social.*` — social links (see SocialIconRow)
- `header.phone` — phone number display
- `header.hours` — hours display

---

## Dark Theme Contract

- Light: `background: white`, `color: var(--color-neutral-900)`, `border-bottom: 1px solid var(--color-neutral-100)`
- Transparent: `background: transparent`, `color: white`
- Dark (scrolled): `background: var(--color-surface-dark-900)`, `color: var(--color-neutral-50)`
- Hover links: `color: var(--color-primary-500)` (amber)
