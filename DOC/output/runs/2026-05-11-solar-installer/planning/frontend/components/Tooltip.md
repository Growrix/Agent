# Component Spec: Tooltip

**Group:** Modal  
**Type:** Atom  
**Route scope:** IconButtons, CertificationBadge, form field hints, MetricCard detail

---

## Purpose

Hover/focus tooltip built on Radix Tooltip. Shows supplemental context on hover (250ms delay) or keyboard focus. Non-interactive content only.

---

## States

| State | Behavior |
|-------|----------|
| `hidden` | Not rendered |
| `visible` | Positioned above/below/side of trigger with arrow pointer |

---

## ARIA / Keyboard / Focus

- Radix Tooltip: `role="tooltip"` + `aria-describedby` on trigger
- Keyboard: appears on focus, dismisses on Escape or blur
- Touch: not triggered on touch; label must be discoverable without tooltip

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Hover delay 250ms | tooltip | `opacity 0→1 + translateY(4px→0)` | 150ms | Instant |
| Mouse leave | tooltip | `opacity 1→0` | 100ms | Instant |
