# CODE GENERATION RULES

## SCOPE
Apply to every file emitted by an executing agent.

## CG1 — PLAN-DRIVEN ONLY
- Codegen consumes `plan.json` only.
- No new decisions are made during codegen.
- If the plan is missing a detail, BLOCK with `EXECUTION_DRIFT`.

## CG2 — FULL FILE CONTENT
- Every emitted file MUST contain complete, runnable content.
- No placeholders: `// TODO`, `/* implement */`, `add later`, `...` stubs.
- No partial functions.

## CG3 — DETERMINISTIC NAMING
- File paths come directly from the architecture template `folder_structure`.
- Function and component names come from the plan.
- No ad-hoc renaming.

## CG4 — TYPED EVERYWHERE
- TypeScript strict mode.
- Zod schemas at every boundary (route inputs, service inputs, env vars).
- No `any`. Use `unknown` and narrow.

## CG5 — INTEGRATION CLIENT SINGLETONS
- Exactly one client per integration in `src/lib/<integration>.ts`.
- Singletons MUST NOT be re-instantiated elsewhere.
- Edge runtimes use the appropriate SDK variant when required.

## CG6 — SERVICE LAYER OWNS ORCHESTRATION
- Services live in `src/server/services/`.
- Services compose repositories and integration clients.
- Services emit typed errors, never raw exceptions.

## CG7 — REPOSITORY LAYER OWNS DATA
- Repositories live in `src/server/repositories/`.
- One file per aggregate.
- Repositories return domain objects.

## CG8 — ROUTE HANDLERS ARE THIN
- Validate input with zod.
- Resolve user via auth integration server helper.
- Call exactly one service function.
- Map errors via the central error-to-response helper.

## CG9 — WEBHOOK HANDLERS
- Read raw body via `request.text()`.
- Verify signature with the provider library.
- Switch on event type.
- Persist event id to ensure idempotency.
- Return `2xx` quickly.

## CG10 — ENV BOOT
- `src/env.ts` exports a frozen, validated object.
- Imports throughout the app use `env` from this module.
- No `process.env.X` access outside `src/env.ts`.

## CG11 — REACT EMAIL TEMPLATES
- Each transactional email is a `*.tsx` under `emails/`.
- Templates accept typed props.
- The email service maps template name → component + props.

## CG12 — SANITY STUDIO
- Studio config lives under `studio/`.
- Schemas under `studio/schemas/`.
- Each schema exports a default object with `name`, `type`, `title`, `fields`.

## CG13 — DATABASE SCHEMA
- One `prisma/schema.prisma` per project.
- Models match the integration rules' `database` blocks.
- Indexes declared explicitly.

## CG14 — METADATA AND SEO
- Every public page exports `generateMetadata`.
- Metadata pulls from CMS or page-level constants.
- No raw `<head>` writes.

## CG15 — STATES
- Every dynamic route ships `loading.tsx`, `error.tsx`, `not-found.tsx` per F13.

## CG16 — STYLING
- Tailwind + shadcn/ui.
- No CSS-in-JS runtime libraries.

## CG17 — NO HARDCODED VALUES
- Stripe price ids, Clerk URLs, Sanity project ids, domain strings → all via env.

## CG18 — IDEMPOTENT WRITES
- Webhook-driven writes use upsert semantics keyed on provider id.

## CG19 — LOGGING
- Single logger module.
- Required fields: `level`, `message`, `request_id`, `user_id`, `route`, `latency_ms`.

## CG20 — SELF-AUDIT BEFORE EMIT
For each generated file:
- Confirm path matches plan.
- Confirm imports exist.
- Confirm no invented identifiers.
- Confirm no placeholders.
If any check fails, regenerate the file.

## CG21 — ZERO-WARNING QUALITY ENFORCEMENT
- Generated scripts and configs MUST support lint/typecheck/test with zero warnings.
- Lint configuration MUST fail on warnings.

## CG22 — OPERATION MODE SAFETY
- Execution-only requests MUST NOT trigger code edits or package installs unless a blocker is reported and fix mode is entered.

## CG23 — DEV STARTUP READINESS
- Generated projects MUST include scripts so `npm run dev` starts the app from project root after setup.
