# Skill — Frontend Factory Production Gate Pattern

Deterministic pattern for planning, implementing, and auditing a production-ready frontend factory build.

## Used by

- `frontend_planner`
- `frontend_developer`
- `system_architect`

## Goal

Turn a strong visual/frontend plan into a repeatable release candidate without leaving quality verification to manual guesswork.

## Pattern steps

1. Planner emits `frontend.json.execution_contract` with required scripts, mandatory smoke journeys, route coverage verdict, and release evidence requirements.
2. Developer generates `package.json` script surface exactly matching the contract.
3. Developer implements real smoke tests for mandatory journeys and preserves journey ids in test titles or comments.
4. Developer generates `audit:frontend` and `release:check` as real executable scripts.
5. Reviewer blocks if any mandatory smoke journey is absent, TODO-only, or contradicted by the page briefs.
6. System architect cross-checks planner contract, developer implementation contract, reviewer coverage, and release-check assets.

## Required command surface

- `lint`
- `typecheck`
- `test`
- `test:unit`
- `test:a11y`
- `e2e:smoke`
- `e2e:full`
- `build`
- `audit:frontend`
- `release:check`

## Mandatory smoke evidence

The build must prove:

- home renders without runtime errors
- navigation works across desktop and mobile
- theme switching persists
- mobile bottom nav routes correctly
- auth modal behavior works when auth exists
- primary conversion path works
- at least one content route resolves
- at least one contact/support route resolves

## Audit method

1. Read `frontend.json.execution_contract`.
2. Read `package.json` scripts from the emitted app root.
3. Read smoke test files under `tests/e2e/` and `tests/a11y/`.
4. Confirm mandatory journey ids appear in executable tests.
5. Confirm `web/.audit/frontend-self-audit.md` cites evidence for F, Q, CC, and AC checks.
6. Confirm release-check script or command runs the declared gate order.

## Block conditions

- no execution contract
- missing command surface
- smoke journey ids absent from executable tests
- TODO-only smoke tests on mandatory paths
- reviewer still validating stale constraint ranges
- claimed production readiness without build/smoke/self-audit evidence