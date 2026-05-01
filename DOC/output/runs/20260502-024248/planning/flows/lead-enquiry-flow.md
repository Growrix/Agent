# DATA FLOW — LEAD ENQUIRY SYSTEM

## OVERVIEW
End-to-end flow for quote requests and callback requests from a local services website, with DB persistence, notification email, analytics capture, and thank-you routing.

## INTEGRATIONS INVOLVED
- `database` (lead storage)
- `resend` (staff notification + optional customer acknowledgement)
- `posthog` (conversion analytics)

## ENTITIES
- `lead_enquiries` (DB: id, enquiry_type, name, phone, email, suburb, service_slug, urgency, message, consent, source_page, status, created_at, updated_at)
- `callback_requests` (DB: id, name, phone, preferred_time, suburb, message, source_page, status, created_at, updated_at)
- `email_logs` (DB: id, user_id, template, to_address, status, provider_message_id, sent_at, error)

## FLOW: QUOTE REQUEST SUBMISSION

```
[Frontend Form]
  User submits quote request from /quote or /services/[slug]
       ↓
[Route Handler: POST /api/lead-enquiries]
  Validate input with zod
  Apply IP-based rate limit
       ↓
[Service Layer]
  Insert row into lead_enquiries (status = "new")
  Capture server-side analytics event "quote_request_submitted"
       ↓
[Resend Service]
  Send notification email to office inbox with enquiry summary
  Optionally send acknowledgement email to customer
       ↓
[Database]
  Persist email send result in email_logs
       ↓
[Response]
  201 { data: { leadId, redirectTo: "/thank-you?type=quote" } }
       ↓
[Frontend]
  Redirects to thank-you page
```

## FLOW: CALLBACK REQUEST SUBMISSION

```
[Frontend Widget]
  User taps "Request callback"
       ↓
[Route Handler: POST /api/callback-requests]
  Validate + rate limit
       ↓
[Service Layer]
  Insert row into callback_requests
  Trigger Resend notification to office inbox
  Capture analytics event "callback_requested"
       ↓
[Response]
  201 { data: { callbackId, message: "We will call you shortly." } }
```

## ENV VARS INVOLVED
- `DATABASE_URL`
- `DIRECT_URL`
- `RESEND_API_KEY`
- `RESEND_FROM_ADDRESS`
- `RESEND_REPLY_TO`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `POSTHOG_API_KEY`

## CONSTRAINTS
- Public form routes must be rate-limited.
- Form routes must never expose internal stack traces.
- PII fields (phone, email, address/suburb) must be declared in data policy.
- Notification email must be sent from a verified domain.
- Thank-you redirect happens only after successful DB write.
