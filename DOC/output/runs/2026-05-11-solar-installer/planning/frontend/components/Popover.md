# Component Spec: Popover

**Group:** Modal  
**Type:** Molecule  
**Route scope:** Filter popovers, ROI calculator info icons, field helper panels

---

## Purpose

Click-triggered popover built on Radix Popover. Shows interactive content (unlike Tooltip which is non-interactive). Includes arrow pointer and manages focus correctly.

---

## States

| State | Behavior |
|-------|----------|
| `closed` | Not rendered |
| `open` | Positioned panel with arrow |

---

## ARIA / Keyboard / Focus

- Radix Popover: `aria-expanded` on trigger; `role="dialog"` on content
- Focus moves into popover on open
- Escape closes and returns focus to trigger
- Click outside closes

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Open | popover | `opacity 0→1 + scale 0.95→1` | 150ms `easeOut` | Instant |
| Close | popover | `opacity 1→0 + scale 1→0.95` | 120ms | Instant |
