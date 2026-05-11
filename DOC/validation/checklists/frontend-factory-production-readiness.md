# Frontend Factory Production Readiness Checklist

Use this checklist when a run intends to claim a frontend build is production-ready.

## Inputs

- planning root: `DOC/output/runs/<timestamp>/planning/frontend/`
- emitted frontend app root: `<project-root-slug>/`
- `frontend.json`
- emitted `package.json`
- emitted smoke/a11y tests
- emitted self-audit file

## Contract checks

- [ ] `frontend.json.execution_contract` exists.
- [ ] `execution_contract.required_scripts[]` is present and complete.
- [ ] `execution_contract.mandatory_smoke_journeys[]` is present and complete.
- [ ] route coverage is declared `passed` or the run is blocked.

## Command surface checks

- [ ] `lint`
- [ ] `typecheck`
- [ ] `test`
- [ ] `test:unit`
- [ ] `test:a11y`
- [ ] `e2e:smoke`
- [ ] `e2e:full`
- [ ] `build`
- [ ] `audit:frontend`
- [ ] `release:check`

## Smoke coverage checks

- [ ] `home_render_no_console_errors`
- [ ] `primary_navigation_responsive`
- [ ] `theme_switcher_persists`
- [ ] `mobile_bottom_nav_routes`
- [ ] `auth_modal_mode_switch` or approved replacement
- [ ] `primary_conversion_reachable`
- [ ] `content_route_resolves` or approved replacement
- [ ] `contact_route_resolves` or approved replacement

Mandatory smoke journeys MUST be executable tests, not placeholders.

## Evidence checks

- [ ] self-audit exists and cites evidence
- [ ] spec-diff is clean or explicitly blocked
- [ ] build passed
- [ ] smoke passed
- [ ] accessibility smoke passed
- [ ] zero-warning and zero-error gates passed

## Standard command

Run this from the repository root:

```powershell
powershell -File DOC/validation/checklists/frontend-factory-release-check.ps1 -PlanningRoot <planning-root> -AppRoot <project-root-slug>
```

## Decision

- PASS only when every applicable item above passes.
- Otherwise block with `FRONTEND_FACTORY_EVIDENCE_INCOMPLETE`.