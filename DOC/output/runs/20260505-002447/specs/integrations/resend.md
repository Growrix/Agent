# Integration Spec: Resend

## Required Artifacts
- `src/lib/resend.ts`
- `src/server/services/lead-capture.ts`
- `emails/lead-notification.tsx`
- `emails/lead-confirmation.tsx`

## Responsibilities
- Send owner notification on every accepted lead
- Send optional customer confirmation when an email exists in future variants
- Expose local no-op mode when API key is placeholder or local mock mode is active