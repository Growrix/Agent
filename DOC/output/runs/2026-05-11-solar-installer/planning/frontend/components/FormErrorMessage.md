# Component Spec: FormErrorMessage

**Group:** Forms  
**Type:** Atom  
**Route scope:** All form fields, form-level submission errors

---

## Purpose

Standardized error message display for form validation. Appears below a field in error state or at the top of a form for server-level errors.

---

## Variants

| Variant | Description |
|---------|-------------|
| `field-error` | Below a single field; small text (12px) |
| `form-error` | Top of form; larger (14px) with error icon; dismissable |

---

## States

| State | Behavior |
|-------|----------|
| `hidden` | Not rendered (not just invisible) |
| `visible` | `role="alert"`, `aria-live="polite"` |

---

## ARIA / Keyboard / Focus

- `role="alert"` ensures screen readers announce immediately on appearance
- `id="[field-id]-error"` for `aria-describedby` linking from field

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Error appear | message | `opacity 0→1 + translateY -4→0` | 200ms | Instant |
| Error dismiss | message | `opacity 1→0` | 150ms | Instant |

---

## Content Keys

- Error text passed dynamically via `zod` schema messages (configured per field)
- Generic fallback: `forms.error.generic` — "Something went wrong. Please try again."
