# Route Spec: POST /api/leads

## Purpose
Capture quote and contact submissions from public pages.

## Request
- Method: `POST`
- Content-Type: `application/json`
- Body schema:
  - `name`: string, required
  - `phone`: string, required
  - `service`: string, required for quote, optional for contact variant but normalised server-side
  - `postcode`: string, required for quote, optional for contact variant but accepted as empty string
  - `message`: string, optional
  - `source`: `quote|contact|unknown`
  - `turnstileToken`: string, optional in local mock mode, required in production mode

## Response
- `200`: `{ ok: true, data: { status: "received", leadId: string } }`
- `400`: `{ ok: false, error: "validation" }`
- `403`: `{ ok: false, error: "spam_guard" }`
- `502`: `{ ok: false, error: "delivery_failed" }`

## Notes
- Rate limit target: `5/min/ip`
- Emits event name `lead.created`
- Uses Resend for owner notification