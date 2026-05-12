# Component Spec: BeforeAfterSlider

**Group:** Cards  
**Type:** Molecule  
**Route scope:** Portfolio page, Home social proof section, Case Studies

---

## Purpose

Interactive image comparison slider showing before (pre-installation) and after (post-installation) photographs. User drags a handle to reveal the "after" image. Supports touch and mouse interactions.

---

## Variants

| Variant | Description |
|---------|-------------|
| `drag-reveal` | Default — draggable vertical divider line |
| `hover-reveal` | On hover, after image transitions in (no drag — for simpler mobile) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | 50/50 split shown |
| `dragging` | Handle follows cursor/touch; images clip accordingly |
| `loading` | Skeleton rectangle |
| `focused` | Keyboard: Arrow Left/Right adjust split in 5% increments |
| `reduced-motion` | Static 50/50 split; no animated transitions |

---

## ARIA / Keyboard / Focus

- `<figure aria-label="Before and after comparison: [project name]">`
- Slider handle: `<div role="slider" aria-label="Before/after slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-orientation="horizontal">`
- Keyboard: Arrow Left/Right move handle; Home/End jump to extremes

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Full-width; touch drag enabled; drag handle 40px for touch target |
| `sm+` | Constrained to parent container; handle 32px |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Drag | clip path | Real-time CSS `clip-path` update | Real-time | None | Static 50/50 |
| Mount | handle | Subtle pulse once (draw attention) | 1,000ms | `ease-in-out` | No pulse |

---

## Content Keys

- `portfolio.[project_id].before_src`
- `portfolio.[project_id].after_src`
- `portfolio.[project_id].before_alt`
- `portfolio.[project_id].after_alt`
