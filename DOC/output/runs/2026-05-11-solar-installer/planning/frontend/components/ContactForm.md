# Component Spec: ContactForm

**Group:** Forms  
**Type:** Organism  
**Route scope:** Contact page, Free Assessment page (step 1)

---

## Purpose

Primary lead capture form for the site. Collects name, email, phone, service interest, message, and consent. Implements validation, submission, and success/error states. Uses react-hook-form + zod.

---

## Variants

| Variant | Description |
|---------|-------------|
| `full` | All fields including message + service dropdown |
| `compact` | Name + email + phone + service only (for sidebar or modal use) |
| `assessment` | Adapted for Free Assessment page: additional qualification fields |

---

## Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | TextInput | Yes | min 2 chars |
| Email | TextInput | Yes | valid email |
| Phone | TextInput | No | valid US phone (if filled) |
| Service Interest | SelectDropdown | No | one of enum |
| Message | TextArea | No | max 500 chars |
| Consent checkbox | CheckboxGroup | Yes | must be checked |

---

## States

| State | Behavior |
|-------|----------|
| `idle` | All fields empty, no validation shown |
| `typing` | Real-time validation on blur (not on keypress) |
| `invalid` | Red border + `FormErrorMessage` below field |
| `submitting` | Button disabled + spinner; fields disabled |
| `success` | `FormSuccessModal` shown OR inline success message |
| `error` | Network/server error → `FormErrorMessage` at form top |
| `dark-theme` | Field backgrounds `var(--color-surface-dark-800)` |

---

## ARIA / Keyboard / Focus

- `<form aria-labelledby="contact-form-heading" novalidate>`
- Every field: `aria-required`, `aria-invalid`, `aria-describedby="[field]-error"`
- Error messages: `role="alert"`, `aria-live="polite"`
- Submit button: `aria-busy="true"` while submitting

---

## Sub-components Consumed

- `TextInput` — name, email, phone
- `TextArea` — message
- `SelectDropdown` — service interest
- `CheckboxGroup` — consent
- `FormErrorMessage` — per-field and form-level errors
- `FormSuccessModal` — success state
- `PrimaryButton` — submit CTA

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< md` | Single column |
| `md+` | 2-column for name + phone; single column for others |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Validation error | field border + error msg | `shakeX` (3px) + `opacity 0→1` | 300ms | `ease-out` | Instant |
| Submit success | success state | `opacity 0→1` | 300ms | `ease-out` | Instant |

---

## Content Keys

- `contact.form.*` — all field labels, placeholders, error messages
- `contact.form.consent_label`
- `contact.form.submit_label`
- `contact.form.success_message`
- `contact.form.error_message`
