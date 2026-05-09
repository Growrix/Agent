# Component Spec — CounterCluster

**Path:** `web/src/components/trust/CounterCluster.tsx`  
**Type:** Client component (count-up animation on scroll reveal)

---

## Purpose
Animated stat counters that surface the business's proof numbers in a high-impact, scannable strip. Answers "why should I trust them" with three numbers instead of three paragraphs.

## Default Counters (configurable via props/CMS)

| Stat | Value | Suffix | Label content key |
|------|-------|--------|------------------|
| Projects completed | 2400 | `+` | `counters.projects.label` |
| Years in business | 20 | `+` | `counters.years.label` |
| Satisfaction rate | 98 | `%` | `counters.satisfaction.label` |
| Response time (minutes) | 45 | `min` | `counters.response.label` |

## Layout (4-col Grid desktop, 2×2 mobile)
```
Grid(4-col lg, 2-col sm)
  [per counter] Frame(--color-dark-surface, --radius-card, --space-card-padding, centered)
    Cluster(align-center, gap --space-1)
      span (value, --font-size-display-2, --font-weight-display, --font-mono, --color-accent)
      span (suffix, --font-size-h2, --font-weight-bold, --color-dark-text)
    span (label, --font-size-overline, --letter-spacing-overline, --color-dark-text-muted, uppercase)
```

## Animation
- Trigger: `Reveal` (IntersectionObserver, threshold 0.3, once: true)
- Effect: count-up from 0 to final value over 1800ms, easing `--motion-easing-cinematic`
- Stagger: each counter starts 120ms after previous
- Reduced-motion: show final value immediately, no count-up

## States
| State | Behavior |
|-------|---------|
| `idle` | Shows 0 values (server-rendered) |
| `counting` | Counting up on first reveal |
| `settled` | Final value, settled |
| `loading` | Skeleton (3 wide shimmer bars) |

## ARIA
- Container: `aria-label="Business statistics"`
- Each counter: `aria-label="{value}{suffix} {label}"`

## Props
```typescript
interface CounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number  // ms, default 1800
}
interface CounterClusterProps {
  counters: CounterProps[]
  variant?: 'dark' | 'light'
}
```

## Surface Context
Appears on: dark `Surface` band (`--color-dark-bg`) on Home below hero, and CTA band. Text colors declared explicitly — not inherited from Surface.
