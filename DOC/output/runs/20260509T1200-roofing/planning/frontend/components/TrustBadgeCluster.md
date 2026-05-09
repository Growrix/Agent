# Component Spec — TrustBadgeCluster

**Path:** `web/src/components/trust/TrustBadgeCluster.tsx`

---

## Purpose
Compact cluster of credential badges rendered as pills. Appears in heroes (with dark pill contrast) and footer. Builds immediate credential confidence for first-time visitors.

## Variants
- `hero` — dark pill background `rgba(0,0,0,0.60)`, light text `--color-text-on-dark`, icon `--color-accent`
- `footer` — `--color-dark-surface` pill, muted text
- `inline` — `--color-accent-muted` bg, `--color-text` text — used inside service cards

## Badges (default set — configurable via props)

| Badge key | Icon | Label content key |
|-----------|------|------------------|
| `licensed` | `ShieldCheck` (filled) | `trust.badge.licensed` |
| `insured` | `BadgeCheck` (filled) | `trust.badge.insured` |
| `years` | `Clock` | `trust.badge.years` |
| `guarantee` | `Award` (filled) | `trust.badge.guarantee` |
| `rating` | `Star` (filled) | `trust.badge.rating` |

## Layout
```
Cluster(gap --space-2, wrap)
  [per badge] Cluster(gap --space-1, align-center)
    Frame(radius --radius-sm, padding --space-1 --space-3, bg per variant)
      Icon (16×16)
      span (--font-size-label, --font-weight-medium, --letter-spacing-label)
```

## Contrast Requirements
- Hero variant: `rgba(0,0,0,0.60)` bg + `#FAF8F5` text = 9.4:1 (AAA) ✓
- Explicitly set `color` and `background-color` — never rely on inheritance from hero background

## States
| State | Behavior |
|-------|---------|
| `default` | Static display |
| `loading` | Skeleton shimmer per badge pill |

## Reduced Motion
No animation on this component — purely static.

## ARIA
- Container: `aria-label="Business credentials"`
- Each badge: `role="img"` + `aria-label={trust.badge.[key]_aria}`
