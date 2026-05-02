# QUALITY GATES

## PURPOSE
Define non-negotiable acceptance gates that must pass before an agent may mark work as complete.

## QG1 — ZERO PROBLEMS GATE
- Workspace-owned files MUST have zero errors and zero warnings in IDE diagnostics.
- ESLint MUST run with `--max-warnings 0`.
- Type checking MUST pass with zero diagnostics.
- Any warning is a blocking failure, not a soft warning.

## QG2 — BUILD + RUNTIME GATE
- Build MUST pass without warnings promoted to errors by policy.
- Dev server MUST start from project root with `npm run dev`.
- If an alternate package manager is primary, `npm run dev` MUST still work via package scripts.

## QG3 — TEST + SMOKE GATE
- Unit, integration, and E2E suites for declared critical paths MUST pass.
- Smoke checks MUST verify at minimum: `/`, auth entry route, health route.

## QG4 — ENVIRONMENT READINESS GATE
- Required env vars MUST be enumerated and validated before runtime.
- Missing env vars MUST block release and be reported with exact names.
- Local development may use placeholders only when explicitly marked non-production.

## QG5 — OPERATION MODE GATE
- If the user asks to run/verify only, agents MUST NOT edit code or install packages unless blocked.
- On blocker, the agent must emit a blocker report and request permission to enter fix mode.
- In fix mode, changes must be minimal, explicit, and reported.

## QG6 — COMPLETION CONTRACT
- A task is complete only when all applicable gates pass and evidence is recorded in run reports.
- Any skipped gate must be explicitly marked as `not-applicable` with rationale.
