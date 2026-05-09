# Component Spec — BeforeAfterSlider

**Path:** `web/src/components/trust/BeforeAfterSlider.tsx`  
**Type:** Client component (requires drag/touch interaction)

---

## Purpose
Interactive before/after image comparison slider. The single most powerful proof element on the site — lets visitors see transformation results without a word. Used on Home hero area and `/services/roof-replacement`.

## Layout
```
div (relative, overflow-hidden, --radius-xl)
  MediaFrame (AFTER image, full width, object-cover)
  div (BEFORE image reveal, absolute inset, clip-path: inset(0 [100-percent]% 0 0))
    MediaFrame (BEFORE image, same dimensions)
  div (divider line, absolute, vertical, 3px wide, --color-accent)
    div (drag handle: circle 44px, --color-accent bg, white arrow-icons ← →)
```

## Interaction
- Draggable: mouse drag + touch pan (no scroll interference)
- Initial position: 40% (slightly reveals the "before" side — invites interaction)
- Handle: 44px touch target minimum (WCAG 2.5.5)
- Drag range: 5% – 95% (prevents full hide)
- Label overlay: "Before" pill (bottom-left of before panel), "After" pill (bottom-right)
- Pill style: `rgba(0,0,0,0.60)` bg, `--color-text-on-dark`, `--radius-sm`, `--font-size-label`

## States
| State | Behavior |
|-------|---------|
| `idle` | Handle shown with subtle pulse animation on first render (once, to invite interaction) |
| `dragging` | Cursor grab/grabbing, smooth clip-path update |
| `hover (handle)` | Scale 1.1, `--shadow-accent` glow, `--motion-duration-fast` |
| `keyboard` | Arrow keys move slider 5% per keypress |
| `loading` | Skeleton shimmer matching container dimensions |

## Motion
- Clip-path update during drag: immediate (no easing during active drag)
- Handle hover: scale 1.1, `--motion-duration-fast`
- Initial reveal pulse (first load, once): keyframe breathe `scale: 1 → 1.08 → 1`, `--motion-duration-slow`
- Reduced-motion: no pulse animation; clip-path still functional (interaction preserved)

## ARIA
- `role="img"` on the container
- `aria-label="Before and after comparison: [before alt] vs [after alt]"`
- `aria-valuemin="5"` `aria-valuemax="95"` `aria-valuenow="{position}"` on drag handle
- `aria-label="Slide to compare before and after"` on handle

## Responsive
- Mobile: touch-enabled, same behavior
- Container min-height: 280px mobile, 420px desktop
- Mobile: slightly larger handle (52px) for touch

## Props
```typescript
interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string  // content key
  afterLabel?: string   // content key
  initialPosition?: number  // default 40
  aspectRatio?: string  // default "16/9"
}
```
