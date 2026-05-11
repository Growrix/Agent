# Runbook

## Working Directory

All commands in this runbook are executed from `ai-product-factory/`.

## Root Locations

- standalone briefs: `briefs/`
- standalone planning/spec/report output: `generated/runs/<run-id>/`
- final standalone product app: `generated/apps/<run-id>/<project-slug>/`
- experimental factory planner output: `../DOC/output/runs/<timestamp>/planning/frontend-factory/`

For cleanup-safe deletions after a run, see `CLEANUP.md`.

## Validate Structure

```bash
npm run validate:structure
```

Checks required folders, files, JSON contracts, and package command surface.

## Run Tests

```bash
npm test
```

Runs the standalone factory root tests, including the pipeline test that emits a generated app shell and planning bundle.

## Run The Factory

```bash
npm run factory:run
```

Builds the deterministic demo run from the locked brief and writes:

1. planning artifacts under `generated/runs/demo-run/planning/`
2. specs under `generated/runs/demo-run/specs/`
3. reports under `generated/runs/demo-run/reports/`
4. a generated Next.js app under `generated/apps/demo-run/northstar-ai/`

## Validate The Generated App

```bash
npm run factory:release
```

Installs the generated app dependencies, installs Playwright Chromium, and runs the generated app's `release:check` gate.

## Release Check

```bash
npm run release:check
```

Runs the standalone production-readiness gate for the actual factory MVP:

1. structure validation
2. root contract and pipeline tests
3. isolated locked-brief factory run
4. generated-app dependency install
5. generated-app release gate

By default this command uses a fresh verification run id, so it does not depend on `generated/apps/demo-run/` being free from a prior terminal session.

## Expected Outcome

The release check passes only when:

- the standalone root matches the planned folder map
- required contracts and briefs parse as JSON
- the demo run emits the expected planning/spec/report artifacts
- the generated Next.js app passes runtime detection, dependency checks, lint, typecheck, unit, a11y, smoke, build, full E2E, and frontend audit
