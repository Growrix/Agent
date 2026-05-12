# Component Spec: Toast

**Group:** Modal  
**Type:** Molecule  
**Route scope:** All pages — form submissions, copy actions, system feedback

---

## Purpose

Non-blocking toast notification. Auto-dismisses after a configurable duration (default 4s). Uses Radix Toast for accessibility and positioning. Stacks when multiple toasts active.

---

## Variants

| Variant | Description |
|---------|-------------|
| `success` | Green icon + message |
| `error` | Red icon + message |
| `info` | Blue icon + message |
| `warning` | Amber icon + message |

---

## States

| State | Behavior |
|-------|----------|
| `entering` | Slide in from bottom-right |
| `visible` | Static; auto-dismiss countdown |
| `exiting` | Fade-out + slide down |

---

## ARIA / Keyboard / Focus

- Radix Toast: `role="status"` or `role="alert"` depending on variant (error = alert)
- Auto-dismiss paused on keyboard focus or hover
- Manual dismiss via X button: `aria-label="Dismiss notification"`

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Appear | toast | `translateY(20px)→0 + opacity 0→1` | 250ms | Instant |
| Dismiss | toast | `opacity 1→0 + scale 0.95` | 200ms | Instant |

---

## Content Keys

- `toast.[context].message`
