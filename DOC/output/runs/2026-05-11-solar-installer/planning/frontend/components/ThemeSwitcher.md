# Component Spec: ThemeSwitcher

**Group:** Global  
**Type:** Atom  
**Route scope:** Header (desktop), MobileMenu header toolbar

---

## Purpose

Toggle between light and dark theme. Persists to `localStorage`. Respects `prefers-color-scheme` as initial fallback on first visit.

---

## Variants

| Variant | Description |
|---------|-------------|
| `icon-only` | Default — Sun/Moon icon toggle (no label) |
| `icon-label` | For settings or onboarding surfaces if needed |

---

## States

| State | Behavior |
|-------|----------|
| `light-active` | Shows Moon icon (click → switch to dark) |
| `dark-active` | Shows Sun icon (click → switch to light) |
| `hover` | `opacity: 0.8`; scale 1.05 |
| `focused` | Visible focus ring (2px amber) |

---

## Theme Toggle Logic

1. On mount: read `localStorage.getItem('theme')`. If set, apply. If not, check `prefers-color-scheme`.
2. Set `data-theme="dark"` on `<html>` element.
3. All CSS vars declared under `[data-theme="dark"] {}` block (NOT a separate stylesheet).
4. `localStorage.setItem('theme', 'dark' | 'light')` on toggle.
5. SSR safety: use `suppressHydrationWarning` on `<html>` to prevent hydration mismatch.

---

## ARIA / Keyboard / Focus

- `<button aria-label="Switch to dark theme" aria-pressed="false">` (updates to "Switch to light theme" in dark mode)
- Keyboard: Space/Enter activates toggle

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| All | Visible wherever placed (header desktop, mobile menu toolbar) |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Toggle click | icon | Rotate 180° + fade swap | 200ms | `ease-in-out` | Instant swap |

---

## Content Keys

- `theme_switcher.aria_label_dark` — "Switch to dark theme"
- `theme_switcher.aria_label_light` — "Switch to light theme"

---

## Dark Theme Contract

- Light mode button: `color: var(--color-neutral-700)` (shows Moon icon)
- Dark mode button: `color: var(--color-neutral-200)` (shows Sun icon)
