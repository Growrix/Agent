# EXECUTION ACCEPTANCE CHECKLIST

## PURPOSE
Hard acceptance gate between codegen and final success status. If any check fails, execution MUST return failed with explicit blocker code.

## PLAN -> SPEC -> CODE PARITY
- [ ] Every route in planning artifact exists in emitted code (page file or route handler).
- [ ] Every component named in frontend specs exists in emitted code.
- [ ] Every integration in plan has required generated artifacts (client/service/webhook) present.
- [ ] Every webhook in plan appears as an implemented route.
- [ ] Every env var in plan appears in src/env.ts validation and ENV.example.

## FRONTEND QUALITY PARITY
- [ ] Frontend planner artifact bundle exists when frontend scope is present:
  - docs/frontend/README.md
  - docs/frontend/master-ui-architecture.md
  - docs/frontend/design-system.md
  - docs/frontend/design-system.tokens.json
  - docs/frontend/component-system.md
  - docs/frontend/motion-system.md
  - docs/frontend/content-library.md
  - docs/frontend/interaction-matrix.md
  - docs/frontend/pages/*.md
- [ ] No hardcoded page-level placeholder copy where content keys are required.
- [ ] Motion declarations exist for key interactive surfaces and include reduced-motion fallback.
- [ ] Form specs map to implemented zod schemas and submission handlers.

## TESTING + RUNTIME
- [ ] Test scripts are real (no placeholder echo/no-op scripts).
- [ ] Declared critical paths have executable tests (unit/integration/e2e as applicable).
- [ ] Build passes.
- [ ] npm run dev starts from project root.
- [ ] Smoke probes pass for /, primary conversion route, and /api/health.

## REPORTING
- [ ] execution_summary.json includes explicit pass/fail evidence per checklist section.
- [ ] environment_setup_report.json includes exact blocker details when failed.

## FAILURE CODES
- EXECUTION_ACCEPTANCE_FAILED
- PLAN_SPEC_CODE_MISMATCH
- FRONTEND_ARTIFACTS_MISSING
- PLACEHOLDER_TEST_GATE_FAILED
- RUNTIME_SMOKE_FAILED
