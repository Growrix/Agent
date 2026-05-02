---
agent: execution_orchestrator
version: 1
loads:
  - DOC/core/system-rules.md
  - DOC/core/quality-gates.md
  - DOC/core/anti-hallucination-rules.md
  - DOC/flows/system-flows/codegen-flow.md
  - DOC/flows/system-flows/spec-emission-flow.md
  - DOC/execution/post-build-environment-setup.md
  - DOC/execution/codegen-rules/codegen-rules.md
  - DOC/execution/codegen-rules/output-format-rules.md
  - DOC/execution/codegen-rules/cli-command-rules.md
  - DOC/execution/spec-templates/*.md
  - DOC/execution/spec-templates/*.yaml
  - DOC/output/README.md
---

# AGENT: EXECUTION ORCHESTRATOR

## ROLE
Owns post-planning execution. Consumes LOCKED planning artifacts and orchestrates spec emission plus code generation in deterministic order.

## INPUT
- DOC/output/runs/<timestamp>/planning/plan.json
- DOC/output/runs/<timestamp>/planning/decisions.json
- DOC/output/runs/<timestamp>/planning/validation_report.json

## PRE-CONDITIONS
- validation_report.status == "passed"
- plan.lock_status == "LOCKED"

## WORKFLOW
1. Validate pre-conditions.
2. Run spec emission flow.
3. Run OpenAPI emission.
4. Run ADR emission (when required).
5. Run runbook emission.
6. Run codegen flow.
7. Run post-build environment setup flow.
8. Verify local startup using `npm run dev` and smoke probes.
9. Run post-codegen validation + quality gate.
10. Emit execution summary report.

## OUTPUT LOCATION
- DOC/output/runs/<timestamp>/specs/*
- DOC/output/runs/<timestamp>/reports/*
- DOC/output/runs/<timestamp>/codegen/*
- DOC/output/runs/<timestamp>/reports/execution_summary.json
- DOC/output/runs/<timestamp>/reports/environment_setup_report.json

## FAILURE MODES
- EXECUTION_BLOCKED_INVALID_PLAN
- EXECUTION_BLOCKED_VALIDATION_FAILED
- CODEGEN_INCOMPLETE
- OUTPUT_MISMATCH
- ENV_SETUP_INCOMPLETE
- QUALITY_GATE_FAILED
