# Component Spec: FormSuccessModal

**Group:** Forms  
**Type:** Molecule  
**Route scope:** ContactForm submission, Free Assessment completion

---

## Purpose

Success confirmation modal shown after a form is submitted successfully. Contains confirmation message, next steps, and a close CTA. Implemented as a full-screen overlay or centered modal.

---

## Variants

| Variant | Description |
|---------|-------------|
| `overlay-modal` | Default — centered modal with backdrop |
| `inline-success` | Replaces form inline (no modal); for compact contexts |

---

## States

| State | Behavior |
|-------|----------|
| `hidden` | Not rendered |
| `visible` | Modal shown with entrance animation |
| `closing` | Exit animation |

---

## Content (Contact form success)

- Icon: large amber checkmark (animated draw-in)
- Headline: "Thank you, [Name]! We'll be in touch within 24 hours."
- Body: "Your message has been sent. A SunEnergy Pro advisor will call or email you at [email/phone] within 1 business day."
- Next step: "While you wait, explore our [Case Studies →] or [FAQ →]"
- CTA: "Close" (or auto-close after 8s with countdown)

---

## ARIA / Keyboard / Focus

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby="success-modal-heading"`
- Focus trap: first focusable element on open (Close button)
- Escape key closes
- Focus returns to form submit button on close

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Open | backdrop | `opacity 0→0.5` | 200ms | Instant |
| Open | modal panel | `scale 0.9→1 + opacity 0→1` | 300ms | Instant |
| Checkmark | SVG path | Draw-in stroke animation | 600ms | Instant |
| Close | modal | `scale 1→0.95 + opacity 1→0` | 200ms | Instant |

---

## Content Keys

- `forms.success.headline`
- `forms.success.body`
- `forms.success.next_steps`
- `forms.success.close_label`
