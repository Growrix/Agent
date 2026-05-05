# Backend Service Contracts

## Runtime
- Platform: Next.js App Router route handlers
- Database: none
- Validation: Zod at env and request boundaries

## Services
### `leadCapture.submitLead`
- Input: `name`, `phone`, `service`, `postcode`, optional `message`, optional `source`, optional `turnstileToken`
- Side effects: Turnstile verification, Resend notification, optional confirmation email, typed event log for `lead.created`
- Error classes: validation, spam_guard, delivery_failed

### `cmsWebhook.revalidateContent`
- Input: raw webhook body plus `x-sanity-signature`
- Side effects: path/tag revalidation for changed marketing content
- Error classes: invalid_signature, malformed_payload

### `health.readiness`
- Input: none
- Output: runtime status and current mode

## Supporting Modules
- `src/env.ts` for exact plan env validation
- `src/lib/sanity.ts`, `src/lib/resend.ts`, `src/lib/posthog.ts`
- `src/server/services/lead-capture.ts`
- `src/server/services/cms-webhook.ts`
- `src/server/services/health.ts`
- `src/server/validation/lead.ts`
- `src/server/turnstile/verify-turnstile.ts`