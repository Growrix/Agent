# Runbook: Sanity Webhook Revalidation

## Goal
Validate that CMS publish events can revalidate public routes.

## Steps
1. Configure the Sanity webhook to target `/api/webhooks/sanity`.
2. Set `SANITY_WEBHOOK_SECRET` in the runtime environment.
3. Publish a service, area, or page update.
4. Confirm the webhook route returns `200` and reports affected routes.
5. Reload the changed route and confirm fresh content.

## Local Notes
- In local mock mode, the route still validates the signature path and returns a deterministic revalidation response.