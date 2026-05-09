# Component Spec — StickyCallPill + ThemeSwitcher + ReviewAggregateBar + ServiceCard

---

## StickyCallPill

**Path:** `web/src/components/global/StickyCallPill.tsx`  
**Visibility:** `< 1024px` only, hidden on `/quote` page

### Purpose
Persistent floating tap-to-call button for mobile. The most direct emergency conversion path. Always visible unless the full quote form is on screen.

### Layout
```
Fixed(bottom: calc(72px + env(safe-area-inset-bottom)), right: 16px, z: --z-sticky)
  Pressable(href="tel:...", aria-label={cta.call_now_aria})
    Frame(--radius-full, --color-accent bg, --shadow-accent, padding --space-3 --space-6)
      Cluster(gap --space-2, align-center)
        Icon(Phone, 20×20, filled, --color-accent-foreground)
        span(--font-size-label, --font-weight-semibold, --color-accent-foreground) → cta.call_now_label
```

### States
| State | Behavior |
|-------|---------|
| `visible` | Default on all mobile pages except /quote |
| `hidden` | On /quote page — hidden to reduce distraction from form |
| `scroll-up` | Visible |
| `scroll-down fast` | May hide after 300px fast scroll to avoid blocking content; re-appears on pause |

### Motion
- Appear: `translateY: 24px → 0`, `opacity: 0 → 1`, `--motion-duration-slow`
- Press: `scale: 0.95`, `--motion-duration-fast`
- Reduced-motion: instant appear

---

## ThemeSwitcher

**Path:** `web/src/components/global/ThemeSwitcher.tsx`  
**Type:** Client component

### Purpose
Toggles `data-theme="dark"` on `<html>`. Persists to `localStorage`. Reads `prefers-color-scheme` as initial default.

### Behavior
- On mount: read `localStorage['theme']`, else read `matchMedia('(prefers-color-scheme: dark)')`
- On toggle: flip theme, write to `localStorage`
- Icon: `Sun` (in dark mode, clicking switches to light) / `Moon` (in light mode)
- Tooltip: `theme.switcher.switch_to_dark` / `theme.switcher.switch_to_light`

### Layout
```
Pressable(icon-button, aria-label={...}, aria-pressed={isDark})
  Icon (Moon/Sun, 20×20)
```

### Placement
- Desktop: inside `SiteHeader` main nav (right cluster, before CTA button)
- Mobile: inside hamburger nav sheet (top-right of sheet header)

---

## ReviewAggregateBar

**Path:** `web/src/components/trust/ReviewAggregateBar.tsx`

### Purpose
Summary star rating line. Appears immediately below the hero on Home and at the top of `/reviews`. Validates trust with a single scannable line.

### Layout
```
Cluster(gap --space-3, align-center)
  Cluster(gap --space-1)
    [5x] Icon(Star, 18×18, filled, --color-accent)  -- or partial fill for non-5.0
  span(rating, --font-size-body-lg, --font-weight-bold)  → reviews.aggregate.rating
  span("•", --color-text-muted)
  span(count, --font-size-body, --color-text-muted)  → reviews.aggregate.count_label
  Cluster(gap --space-1, align-center)
    Icon(ExternalLink, 14×14)
    span("Google Reviews", --font-size-body-sm, --color-text-muted)
```

### ARIA
- `role="img"` on container
- `aria-label="{rating} out of 5 stars based on {count} Google Reviews"`

---

## ServiceCard

**Path:** `web/src/components/services/ServiceCard.tsx`

### Purpose
Summary card for each roofing service. Used in the Services overview grid and Home capability map section.

### Layout
```
Frame(--radius-card, overflow-hidden, --shadow-md, --color-card)
  MediaFrame(4/3, worksite photo for this service, lazy)
  Stack(padding --space-6, gap --space-3)
    span(overline, --color-accent)  → service.{slug}.category_label
    h3(--font-size-h3, --font-weight-bold)  → service.{slug}.name
    p(--font-size-body-sm, --color-text-muted, max 2 lines)  → service.{slug}.card_summary
    Cluster(justify-between, align-center)
      span(--font-size-body-sm, --color-text-muted)  → service.{slug}.starts_at (optional)
      Pressable(arrow-link → /services/{slug})
        Cluster(gap --space-1)
          span("Learn more", --font-size-body-sm, --font-weight-medium, --color-accent)
          Icon(ArrowRight, 16×16, --color-accent)
```

### States
| State | Behavior |
|-------|---------|
| `default` | Base card |
| `hover` | `--shadow-lg`, `translateY: -4px`, `--motion-duration-base` |
| `focus-visible` | `--color-focus-ring` ring around entire card |
| `loading` | Skeleton: MediaFrame shimmer + 3 text-line shimmers |

### ARIA
- `<article aria-label="{service.name} service">`
- Link: descriptive label including service name
