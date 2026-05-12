# Component Spec: ErrorBoundary

**Group:** Layout  
**Type:** Molecule  
**Route scope:** All pages — wraps every major content section and route

---

## Purpose

React error boundary that catches unhandled exceptions in its subtree and renders a full-section error fallback UI with a retry action.

---

## Variants

| Variant | Description |
|---------|-------------|
| `section` | Replaces a section block if that section errors |
| `page` | Full-page fallback for route-level errors |
| `inline` | Small inline error (for widget-level failures like map embed) |

---

## States

| State | Behavior |
|-------|----------|
| `idle` | Renders children transparently |
| `error` | Renders error fallback; children unmounted |

---

## ARIA / Keyboard / Focus

- `role="alert"` on error panel
- Retry button: `PrimaryButton` with `aria-label="Retry loading this section"`

---

## Content Keys

- `error.section.heading`
- `error.section.body`
- `error.section.retry_label`
- `error.page.heading`
- `error.page.body`
- `error.page.home_cta_label`
