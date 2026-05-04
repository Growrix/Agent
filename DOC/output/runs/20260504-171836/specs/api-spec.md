# API SPEC - AU Plumbing Service Website

## API OVERVIEW
base_url: https://plumber-au.example.com
versioning: none (internal)
authentication: none for v1 public flows
response_format: { data } or { error: { code, message } }
rate_limiting: upstash_ratelimit style policy (implementation can use provider equivalent)

## ENDPOINT: GET /api/health
method: GET
path: /api/health
file: src/app/api/health/route.ts
runtime: nodejs
auth:
  type: none
  scope: public
input:
  body: none
output:
  200: { data: { status: "ok", service: "plumber-site" } }
  500: INTERNAL_ERROR
rate_limit:
  enabled: false
service_call: services.health.check
idempotent: true

## ENDPOINT: POST /api/leads
method: POST
path: /api/leads
file: src/app/api/leads/route.ts
runtime: nodejs
auth:
  type: none
  scope: public
input:
  body:
    schema: QuoteLeadSchema from src/lib/schemas/lead.ts
    fields:
    - name: string required
    - phone: string required
    - suburb: string required
    - postcode: string required
    - serviceType: string required
    - urgency: enum(low|normal|urgent) required
    - message: string optional
  max_body_size: 1mb
output:
  201: { data: { id: string, received: true } }
  400: VALIDATION_ERROR
  429: RATE_LIMITED
  500: INTERNAL_ERROR
rate_limit:
  enabled: true
  key: lead:[clientIp]
  window: 60
  limit: 8
service_call: services.leads.createLead
side_effects:
- sends internal and customer emails
- emits lead.created
idempotent: false

## ENDPOINT: POST /api/chat
method: POST
path: /api/chat
file: src/app/api/chat/route.ts
runtime: nodejs
auth:
  type: none
  scope: public
input:
  body:
    schema: ChatRequestSchema
    fields:
    - messages: array required
  max_body_size: 1mb
output:
  200: text/event-stream
  400: VALIDATION_ERROR
  429: RATE_LIMITED
  500: INTERNAL_ERROR
rate_limit:
  enabled: true
  key: chat:[clientIp]
  window: 60
  limit: 20
service_call: services.ai.streamAssistantReply
side_effects:
- model moderation precheck
- token/cost usage tracking
idempotent: false

## WEBHOOK ENDPOINTS
method: POST
path: /api/webhooks/sanity
provider: sanity
auth: signature_only
signature_header: x-sanity-signature
verification_method: compare against SANITY_WEBHOOK_SECRET
raw_body_required: false
events:
- document.publish
- document.unpublish
- document.delete
idempotent: true
idempotency_field: _id + _rev

## API ENDPOINT SUMMARY TABLE
GET /api/health | public | not rate-limited | health.check
POST /api/leads | public | rate-limited | leads.createLead
POST /api/chat | public | rate-limited | ai.streamAssistantReply
POST /api/webhooks/sanity | signature | not rate-limited | cms.revalidate
