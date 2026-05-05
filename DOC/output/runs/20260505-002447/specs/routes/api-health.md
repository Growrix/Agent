# Route Spec: GET /api/health

## Purpose
Provide a simple readiness probe for local, preview, and production checks.

## Response
- `200`: `{ ok: true, data: { status: "ok", mode: "mock" | "live" } }`

## Notes
- No auth
- No remote dependencies required for success in local mock mode