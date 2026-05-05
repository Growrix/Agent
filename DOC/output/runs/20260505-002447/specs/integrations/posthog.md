# Integration Spec: PostHog

## Required Artifacts
- `src/lib/posthog.ts`
- `src/components/providers/posthog-provider.tsx`
- `src/lib/events.ts`

## Responsibilities
- Track page views and named marketing CTA events
- Remain disabled safely when host/key are placeholders in local mock mode