# Component Spec: MobileBottomNav

**Group:** Global  
**Type:** Organism  
**Route scope:** All routes — `< lg` breakpoints only

---

## Purpose

Icon + label tab-bar fixed at the bottom of all pages on mobile and tablet (< 1024px). Provides primary navigation without requiring the hamburger menu. Separate from MobileMenu.

---

## Tab Configuration (5 tabs max)

| Tab | Icon (lucide-react) | Label | Route |
|-----|---------------------|-------|-------|
| Home | `Home` | "Home" | `/` |
| Services | `Zap` | "Services" | `/services` |
| Get Quote | `ClipboardCheck` | "Free Quote" | `/free-assessment` |
| Blog | `FileText` | "Blog" | `/blog` |
| Contact | `Phone` | "Contact" | `/contact` |

---

## States

| State | Behavior |
|-------|----------|
| `default` | All tabs visible; active tab = amber icon + amber label; others = neutral |
| `active` | `color: var(--color-primary-500)` + `scale(1.05)` on icon |
| `inactive` | `color: var(--color-neutral-400)` |
| `dark-theme` | Background `var(--color-surface-dark-900)`, border-top `var(--color-neutral-700)` |
| `focused` | Visible focus ring per tab button |

---

## ARIA / Keyboard / Focus

- `<nav aria-label="Mobile navigation" role="navigation">`
- Each tab: `<a role="tab" aria-current="page" aria-label="[Tab name]">`
- Active: `aria-current="page"`
- Keyboard: Tab through links left to right; Enter activates

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< lg (< 1024px)` | Visible; fixed bottom; z-index `var(--z-mobile-nav)` |
| `lg+` | `display: none` |

---

## Layout Contract

- Height: 56px + `env(safe-area-inset-bottom)` padding (iOS safe area)
- Icon: 20×20px SVG
- Label: 10–11px, medium weight
- Tab width: equal distribution (20% each for 5 tabs)
- Background: white (light) / `var(--color-surface-dark-900)` (dark)
- Border-top: `1px solid var(--color-neutral-100)` (light) / `var(--color-neutral-800)` (dark)

---

## Body Padding Contract

All pages MUST have `padding-bottom: calc(56px + env(safe-area-inset-bottom))` applied to the `<main>` element to prevent content clipping behind the nav.

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Tab activate | icon | `scale(1.05)` | 150ms | `spring` | No scale |
| Page entry | entire nav | `translateY(0)` from `translateY(100%)` | 200ms | `ease-out` | Instant |

---

## Content Keys

- `mobile_nav.tabs.*` — tab labels
- `mobile_nav.aria.*` — aria labels per tab

---

## Dark Theme Contract

- Light: white background, `var(--color-neutral-400)` inactive icons
- Dark: `var(--color-surface-dark-900)` background, `var(--color-neutral-500)` inactive icons
- Active always: `var(--color-primary-500)` (amber)
