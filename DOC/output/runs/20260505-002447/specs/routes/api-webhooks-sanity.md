# Route Spec: POST /api/webhooks/sanity

## Purpose
Verify signed webhook payloads from Sanity and trigger cache revalidation.

## Request
- Method: `POST`
- Body: raw JSON string
- Signature header: `x-sanity-signature`

## Response
- `200`: `{ ok: true, data: { revalidated: string[] } }`
- `400`: `{ ok: false, error: "invalid_signature" | "malformed_payload" }`

## Notes
- Revalidates tags and known public routes derived from payload type and slug
- Must remain idempotent