# Component Spec: FloatingActionButton

**Group:** Buttons  
**Type:** Molecule  
**Route scope:** All pages — mobile only (`< lg`)

---

## Purpose

Floating action button (FAB) fixed at the bottom-right of the screen on mobile, providing persistent access to the most important conversion action (assessment CTA or phone call). Dismissable.

---

## Variants

| Variant | Description |
|---------|-------------|
| `single-cta` | Single amber button — "Free Assessment" or phone icon |
| `expandable` | Tap to expand: shows 2–3 options (call, WhatsApp, assessment) |

---

## States

| State | Behavior |
|-------|----------|
| `hidden` | Below fold threshold — FAB not shown |
| `visible` | Scrolled past 100vh — FAB slides in |
| `expanded` | Expandable variant: options revealed |
| `dismissed` | User taps X; FAB hides for session (sessionStorage) |

---

## ARIA / Keyboard / Focus

- `<nav aria-label="Quick contact actions">`
- Main button: `aria-label="Get free solar assessment"` / `"Call SunEnergy Pro"`
- Expand button: `aria-expanded`, `aria-controls="fab-options"`
- Dismiss button: `aria-label="Dismiss quick contact button"`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< lg` | Visible; fixed `bottom: calc(72px + env(safe-area-inset-bottom))` (above MobileBottomNav) |
| `lg+` | `display: none` |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Scroll past 100vh | FAB | `translateY(0)` from `translateY(80px)` | 300ms | Instant appear |
| Expand tap | options | Stagger reveal from FAB origin | 200ms | Instant |
| Dismiss | FAB | `opacity 1→0 + scale 1→0.8` | 200ms | Instant |

---

## Content Keys

- `fab.cta_label`
- `fab.aria_label`
- `fab.dismiss_aria_label`
