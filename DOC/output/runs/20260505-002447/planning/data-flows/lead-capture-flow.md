# DATA FLOW - LEAD CAPTURE

## OVERVIEW
End-to-end flow for quote and contact submissions on the plumber marketing site.

## INTEGRATIONS INVOLVED
- `resend` (primary transactional email)
- `cloudflare-turnstile` (spam guard)
- `posthog` (submission analytics)

## ENTITIES
- No application database in scope.
- Lead payload exists transiently in the route handler and email service.

## FLOW: QUOTE OR CONTACT SUBMIT

```
[Browser]
  user completes QuoteFormCard on /quote or /contact
  Turnstile challenge returns token
       ->
[POST /api/leads]
  validate payload with zod
  verify TURNSTILE_SECRET_KEY against Cloudflare siteverify
       ->
[leadCapture service]
  normalize lead payload
  emit lead.created automation event
  send confirmation / notification email via Resend
       ->
[Route Response]
  { ok: true, data: { status: "received" } }
       ->
[Browser]
  success state replaces submit area
```

## FLOW: FAILED SUBMISSION

```
[POST /api/leads]
  validation or Turnstile verification fails
       ->
[Route Response]
  { ok: false, error: "validation" | "spam_guard" | "delivery_failed" }
       ->
[Browser]
  show inline field errors or server-error banner
  preserve user-entered values
```

## ENV VARS INVOLVED
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

## CONSTRAINTS
- Turnstile verification is server-side only.
- Payload size limit remains under 1 MB.
- No lead data is persisted to an application database in v1.
- Lead event name uses the taxonomy string `lead.created`.