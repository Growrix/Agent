# Component Spec: CarouselNav

**Group:** Content  
**Type:** Molecule  
**Route scope:** Carousel (child navigation sub-component)

---

## Purpose

Navigation controls for the Carousel: previous button, next button, and dot/page indicators. Extracted as a separate component for reusability.

---

## States

| State | Behavior |
|-------|----------|
| `prev-disabled` | Prev button: `opacity: 0.4`; `cursor: not-allowed` |
| `next-disabled` | Next button: same |
| `dot-active` | Active dot: filled amber (larger) |
| `dot-inactive` | Dots: gray/outline |

---

## ARIA / Keyboard / Focus

- Prev/Next: `<button>` with `aria-label`, keyboard-focusable
- Dots: `role="tablist"`, each dot `role="tab"`, `aria-selected`, `aria-label="Slide [n]"`

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Active dot change | dot | Scale `1→1.4` + fill | 200ms | Instant |
| Button hover | button | Scale `1.05` | 100ms | No scale |
