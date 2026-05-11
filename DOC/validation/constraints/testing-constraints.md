# TESTING CONSTRAINTS
Hard constraints for QA planning and validation.

## TC1 — Critical Journeys Have E2E Coverage
**Rule:** Every critical user journey must have at least one E2E test.
**Detection:** Cross-reference `testing.json -> e2e_paths[]` against `brief.json -> journeys[]` and `plan.json -> features[]` critical paths.
**Failure:** `BLOCK TC1: critical journey <name> missing E2E coverage`.

## TC2 — Service Layer Unit-Testability
**Rule:** All service-layer logic must be unit-testable without network side effects.
**Detection:** Verify backend plan declares service/repository split and test plan includes unit tests with mocked gateways for each service module.
**Failure:** `BLOCK TC2: service layer not unit-testable for <module>`.

## TC3 — CI Enforces Test and Coverage Gates
**Rule:** CI must fail on test failure or coverage regression below configured threshold.
**Detection:** Verify `testing.json` includes explicit coverage thresholds and CI gate policy that blocks merge on failure.
**Failure:** `BLOCK TC3: CI test/coverage gate missing or weak`.

## TC4 — Frontend Release-Gate Command Surface Exists
**Rule:** Any production-ready frontend build must declare and implement the command surface `lint`, `typecheck`, `test`, `test:unit`, `test:a11y`, `e2e:smoke`, `e2e:full`, `build`, `audit:frontend`, and `release:check`.
**Detection:** Cross-reference `frontend.json.execution_contract.required_scripts[]`, `testing.json.frontend_release_gate.required_scripts[]`, and emitted `package.json` scripts.
**Failure:** `BLOCK TC4: frontend release-gate command surface missing <script>`.

## TC5 — Mandatory Frontend Smoke Journeys Are Covered
**Rule:** Every id in `frontend.json.execution_contract.mandatory_smoke_journeys[]` must map to an executable smoke or accessibility test. TODO-only placeholders are forbidden for mandatory journeys.
**Detection:** Cross-reference `frontend.json.execution_contract.mandatory_smoke_journeys[]`, `testing.json.frontend_release_gate.mandatory_smoke_journeys[]`, and emitted tests under `tests/e2e/` and `tests/a11y/`.
**Failure:** `BLOCK TC5: mandatory frontend smoke journey <id> missing executable coverage`.
