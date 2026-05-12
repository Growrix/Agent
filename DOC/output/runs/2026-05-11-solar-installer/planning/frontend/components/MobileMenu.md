# Component Spec: MobileMenu

**Group:** Global  
**Type:** Organism  
**Route scope:** All routes — `< lg` breakpoints, triggered from Header hamburger

---

## Purpose

Full-screen (or full-height drawer) mobile navigation overlay. Contains all navigation links, ThemeSwitcher, social links, and a prominent CTA. Activated by hamburger button in Header.

---

## Variants

| Variant | Description |
|---------|-------------|
| `fullscreen` | Default — slides in from right as a full-width panel |
| `drawer` | Alternative if fullscreen feels heavy — 80vw right-side drawer |

---

## States

| State | Behavior |
|-------|----------|
| `closed` | Not rendered (AnimatePresence unmounts) |
| `opening` | Slide in from right; backdrop fade in |
| `open` | Full panel visible; scroll locked on body |
| `closing` | Reverse slide; backdrop fade out |
| `link-active` | Current route link highlighted in amber |
| `dark-theme` | Panel: `var(--color-surface-dark-900)` |

---

## ARIA / Keyboard / Focus

- `id="mobile-menu"` (matches `aria-controls` on hamburger button)
- `role="dialog"`, `aria-label="Navigation menu"`, `aria-modal="true"`
- Focus trap: first focusable element on open; last element closes to hamburger button
- Escape key closes menu
- All links keyboard-focusable

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< lg` | Rendered and triggerable |
| `lg+` | Never mounted / `display:none` |

---

## Structure

```
[Close button (X) — top right]
[Logo]
[ThemeSwitcher]
---
[Nav links — vertical list]
  Services
  Portfolio
  About
  Blog
  Contact
  ---
  Financing
  Service Area
  Resources
---
[PrimaryButton: Get Free Assessment]
[SocialIconRow: social links (24px)]
[Phone link]
```

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Open | panel | `translateX(100%) → translateX(0)` | 280ms | `ease-out` | Instant |
| Open | backdrop | `opacity 0 → 0.5` | 200ms | `linear` | Instant |
| Close | panel | `translateX(0) → translateX(100%)` | 220ms | `ease-in` | Instant |
| Link hover | link | `translateX(4px)` | 100ms | `ease-out` | No translate |

---

## Content Keys

- `nav.links.*` — navigation labels
- `mobile_menu.cta.label`
- `mobile_menu.close.aria_label`
- `social.*` — social links

---

## Dark Theme Contract

- Panel: `var(--color-surface-dark-900)`
- Link text: `var(--color-neutral-100)`
- Active link: `var(--color-primary-400)` (amber)
- Close button: `var(--color-neutral-300)`
- Backdrop: `rgba(0,0,0,0.6)`
