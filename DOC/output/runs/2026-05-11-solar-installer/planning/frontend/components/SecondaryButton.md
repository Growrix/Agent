# Component Spec: SecondaryButton

**Group:** Buttons  
**Type:** Atom  
**Route scope:** All pages — secondary action

---

## Purpose

Secondary CTA button with teal fill. Used for "Schedule Consultation", "View Portfolio", "Learn More" — secondary priority to PrimaryButton.

---

## States

| State | Behavior |
|-------|----------|
| `default` | Teal fill `var(--color-secondary-600)` |
| `hover` | `var(--color-secondary-700)` + `translateY(-1px)` |
| `active` | `var(--color-secondary-800)` |
| `focused` | 2px teal outline |
| `disabled` | `opacity: 0.5` |

---

## Sizing

Same size scale as PrimaryButton (sm/md/lg).

---

## ARIA / Keyboard / Focus

Same pattern as PrimaryButton.

---

## Motion Declarations

Same as PrimaryButton.

---

## Content Keys

- Label via `children` or `label` prop
