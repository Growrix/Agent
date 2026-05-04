# BACKEND SPEC - AU Plumbing Service Website

## DOMAIN: lead_intake

### Route Handlers
#### POST /api/leads
file: src/app/api/leads/route.ts
runtime: nodejs
auth: none
input_schema:
  body:
  - name: string
  - phone: string
  - suburb: string
  - postcode: string
  - serviceType: string
  - urgency: string
  - message: string optional
output_schema:
  201: { data: { id: string, received: true } }
  400: VALIDATION_ERROR
  429: RATE_LIMITED
rate_limited: true
service_call: services.leads.createLead

### Services
services.leads.createLead
file: src/server/services/leads.ts
input: lead payload
output: Promise<{ id: string; received: boolean }>
dependencies:
- services.email.sendLeadNotifications
- repositories.leads
error_types:
- ValidationError
- RateLimitError
side_effects:
- emit outbound event lead.created
- send internal alert email
- send customer confirmation email

### Repositories
repositories.leads.create
file: src/server/repositories/leads.ts
input: lead payload
output: Promise<LeadRecord>
query:
  model: lead
  operation: create

## DOMAIN: ai_assistant

### Route Handlers
#### POST /api/chat
file: src/app/api/chat/route.ts
runtime: nodejs
auth: none
input_schema:
  body:
  - messages: array
output_schema:
  200: text/event-stream
  400: VALIDATION_ERROR
  429: RATE_LIMITED
rate_limited: true
service_call: services.ai.streamAssistantReply

### Services
services.ai.streamAssistantReply
file: src/server/services/ai.ts
input: chat messages
output: streaming text response
dependencies:
- lib/openai
- services.moderation.precheck
error_types:
- ModerationRejectedError
- UpstreamProviderError
side_effects:
- track request cost and latency

## DOMAIN: cms_webhooks

### Webhook Handlers
#### POST /api/webhooks/sanity
file: src/app/api/webhooks/sanity/route.ts
signature_verification:
  method: shared secret match
  header: x-sanity-signature
  secret_env: SANITY_WEBHOOK_SECRET
idempotency:
  key_field: payload._id + payload._type + payload._rev
  storage: db_event_log
events_handled:
- event_type: document.publish
  action: revalidate related page tags
- event_type: document.unpublish
  action: revalidate removed route
- event_type: document.delete
  action: revalidate removed route
response:
  success: 200
  signature_failure: 400
  duplicate: 200

## DOMAIN: health

### Route Handlers
#### GET /api/health
file: src/app/api/health/route.ts
runtime: nodejs
auth: none
output_schema:
  200: { status: "ok", service: "plumber-site" }
rate_limited: false
service_call: services.health.check

## INTEGRATION CLIENT MODULES
openai -> src/lib/openai.ts export: openai
resend -> src/lib/resend.ts export: resend
sanity -> src/lib/sanity.ts export: sanityClient
