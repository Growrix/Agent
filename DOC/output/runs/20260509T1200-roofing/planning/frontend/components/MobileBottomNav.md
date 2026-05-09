# Component Spec — MobileBottomNav

**Path:** `web/src/components/global/MobileBottomNav.tsx`  
**Visibility:** `< 1024px` only  
**Type:** Client component (active route detection)

---

## Purpose
Five-tab fixed bottom navigation for mobile. Primary discovery and conversion tool for mobile visitors — replaces the hamburger menu as the primary nav affordance.

## Tabs

| Index | Icon | Label | Route | Icon source |
|-------|------|-------|-------|-------------|
| 0 | `Home` | Home | `/` | Lucide |
| 1 | `Wrench` | Services | `/services` | Lucide |
| 2 | `ClipboardCheck` | Get Quote | `/quote` | Lucide |
| 3 | `Star` | Reviews | `/reviews` | Lucide |
| 4 | `Phone` | Contact | `/contact` | Lucide |

## Layout
- Fixed at viewport bottom: `position: fixed; bottom: 0; left: 0; right: 0; z-index: var(--z-sticky)`
- Height: 60px + `env(safe-area-inset-bottom)` padding
- Background: `--color-surface` with `border-top: 1px solid --color-border`
- 5 equally-spaced columns via `Grid(5-col)`

## Per-tab Layout
```
Stack(align-center, gap --space-1)
  Icon (22×22, stroke 1.5)
  span (label, --font-size-caption, --letter-spacing-label)
```

## States

| State | Visual |
|-------|--------|
| `default` | `--color-text-muted`, weight regular |
| `active` | `--color-accent`, weight semibold, scale 1.05 on icon, active dot above icon (4px circle, `--color-accent`) |
| `hover` (desktop — not visible, but non-breaking) | No hover on mobile; tab is touch-only |
| `pressed` | Scale 0.94 on entire tab, `--motion-duration-fast` |
| `focus-visible` | `--color-focus-ring` ring on tab container |

## Motion
- Active tab transition: icon color + label color swap at `--motion-duration-fast`
- Active dot appear: `opacity: 0 → 1`, `scale: 0.5 → 1`, `--motion-duration-fast`, `--motion-easing-out`
- Press: `scale: 0.94`, `--motion-duration-fast`
- Reduced-motion: all instant

## Body Padding
The root layout must apply `padding-bottom: calc(60px + env(safe-area-inset-bottom))` on `< 1024px` to prevent content from hiding under the nav bar.

## ARIA
- `<nav aria-label="Mobile bottom navigation" role="navigation">`
- Each tab: `<a aria-current="page">` when active
- Icon: `aria-hidden="true"`
- Label: visible text (not aria-label) for screen reader

## Responsive
- Hidden on `≥ 1024px` via `hidden lg:hidden` (Tailwind)
- No tablet variant — collapses at lg breakpoint
