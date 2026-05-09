# Component Spec — QuoteFormWidget

**Path:** `web/src/components/conversion/QuoteFormWidget.tsx`  
**Type:** Client component (React Hook Form + Zod)

---

## Purpose
The primary conversion form. Short enough to not intimidate (5 fields in the inline variant), long enough to give the contractor what they need to call back qualified. Persists draft to `sessionStorage` to survive accidental navigation.

## Variants

### Short (inline — embedded in Home + Service Detail pages)
5 fields, single page, immediate submit.

### Long (full-page — `/quote` route)
Multi-step with `Trail` progress indicator:
- Step 1: Contact (name, phone, email)
- Step 2: Job Details (service type, postcode, property type, brief description)
- Step 3: Confirmation (review + submit)

## Fields (Short Variant)
| Field | Type | Validation | Content key (label) |
|-------|------|-----------|-------------------|
| First name | text input | required, min 2 chars | `form.quote.field.name` |
| Phone | tel input | required, valid phone pattern | `form.quote.field.phone` |
| Service type | Selection chips | required, single-select | `form.quote.field.service` |
| Postcode | text input | required, valid postcode pattern | `form.quote.field.postcode` |
| Brief description | textarea, max 300 chars | optional | `form.quote.field.description` |

Service type chips: Roof Installation / Roof Repair / Roof Replacement / Emergency Repair / Other

## Validation Rules
- All validation via Zod schema — no manual if-statements
- Errors shown inline below the field (not summary at top)
- Error message content keys: `form.quote.error.[field].[rule]`
- Phone: `^\+?[\d\s\-\(\)]{7,}$` pattern

## States
| State | Behavior |
|-------|---------|
| `idle` | Empty form, placeholder text visible |
| `dirty` | Fields touched, validation on blur |
| `submitting` | Submit button: loading spinner + disabled. Fields: read-only |
| `success` | Form replaced by success panel: icon + `form.quote.success.heading` + `form.quote.success.body` |
| `error (network)` | Error banner above submit: `form.quote.error.network` |

## Session Persistence
- On every field change: serialize form state to `sessionStorage['quote-draft']`
- On mount: hydrate from `sessionStorage` if present
- On success submit: clear `sessionStorage['quote-draft']`

## Submit Action
- `POST /api/quote` route handler
- Sends email via Resend: `template: quote-request`, `to: env.QUOTE_EMAIL_RECIPIENT`
- Returns `{ success: boolean, error?: string }`
- No sensitive data in client-side logs

## ARIA
- Form: `aria-label={form.quote.aria_label}`
- Each input: associated `<label>` (not aria-label only)
- Error messages: `role="alert"` `aria-live="polite"`
- Submit button: `aria-busy="true"` when submitting
- Success panel: `role="status"` `aria-live="polite"`

## Motion
- Success panel: `opacity: 0 → 1`, `translateY: 8px → 0`, `--motion-duration-slow`, `--motion-easing-out`
- Field focus: `--shadow-sm` appears, `--motion-duration-fast`
- Error appear: `opacity: 0 → 1`, `--motion-duration-fast`
- Reduced-motion: all instant

## Security
- Server-side rate limiting on `/api/quote` (max 5 per IP per 10 min)
- Honeypot field added (hidden, client users never fill it; bots may)
- Input sanitized server-side before sending to Resend
- No PII in client-side error logs
