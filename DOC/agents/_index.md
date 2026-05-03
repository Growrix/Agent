# Agent Registry

This is the canonical index of every agent in the OS. It is consulted by `system_architect` (AUDIT mode) for dependency-graph validation and by humans for navigation.

Update this file whenever an agent is added, removed, renamed, or its `runs_before` / `runs_after` changes.

---

## Pipeline order (canonical)

```
intake_strategist
        ↓
master_planner ──► integration_planner
                ├► frontend_planner ──► ux_director
                │                    ├► design_system_planner
                │                    ├► component_system_planner
                │                    ├► motion_planner
                │                    ├► content_planner
                │                    ├► interaction_planner
                │                    └► page_planner
                ├► backend_planner
                ├► devops_planner
                ├► qa_planner
                ├► security_auditor
                ├► performance_auditor
                └► reviewer
                        ↓
                  execution_orchestrator ──► spec_writer
                                          ├► diagram_writer
                                          ├► openapi_writer
                                          ├► adr_writer
                                          └► runbook_writer
```

`system_architect` operates **out-of-band**: it audits, designs, and tests the entire system rather than producing build artifacts. It is not in the pipeline; it observes the pipeline.

---

## Registry

| Agent | Version | Phase | Runs after | Produces |
|---|---|---|---|---|
| `intake_strategist` | 1 | Intake | (entry point) | `brief.json`, `brief.md` |
| `master_planner` | 2 | Orchestration | intake_strategist | `plan.json`, `decisions.json`, `validation_report.json` |
| `integration_planner` | 2 | Planning | master_planner | `integrations.json`, `automation.json` (when applicable) |
| `frontend_planner` | 1 | Planning | master_planner | `frontend-plan.json`, `master-ui-architecture.md`, `design-system.md`, ... |
| `ux_director` | 1 | Frontend sub | frontend_planner | `master-ui-architecture.md` |
| `design_system_planner` | 1 | Frontend sub | ux_director | `design-system.md`, `design-system.tokens.json` |
| `component_system_planner` | 1 | Frontend sub | design_system_planner | `component-system.md`, `components/<name>.md` |
| `motion_planner` | 1 | Frontend sub | design_system_planner | `motion-system.md` |
| `content_planner` | 1 | Frontend sub | ux_director | `content-library.md`, `content.<locale>.json` |
| `interaction_planner` | 1 | Frontend sub | component_system_planner | interaction matrix per page |
| `page_planner` | 1 | Frontend sub | component_system_planner + motion_planner + content_planner | `pages/<route-slug>.md` per route |
| `backend_planner` | 1 | Planning | master_planner | `backend-plan.json` (routes, services, repositories, db, env_boot, rate_limits) |
| `devops_planner` | 1 | Planning | backend_planner | `devops.json`, `support_stack[]` |
| `qa_planner` | 1 | Planning | backend_planner + frontend_planner | `testing.json` |
| `security_auditor` | 1 | Planning | backend_planner + integration_planner | `security.json`, `security_report.json` |
| `performance_auditor` | 1 | Planning | backend_planner + frontend_planner | `performance.json` |
| `reviewer` | 2 | Validation | all planners | `reviewer_audit.md`, `validation_report.json` |
| `execution_orchestrator` | 1 | Execution | reviewer (passed) | code emission + spec emission |
| `spec_writer` | 1 | Execution sub | execution_orchestrator | `docs/specs/features/*.md`, `docs/specs/pages/*.md`, `docs/specs/routes/*.md`, ... |
| `diagram_writer` | 1 | Execution sub | execution_orchestrator | `docs/diagrams/er.mmd`, `docs/diagrams/*.sequence.mmd` |
| `openapi_writer` | 1 | Execution sub | execution_orchestrator | `docs/openapi.yaml` |
| `adr_writer` | 1 | Execution sub | execution_orchestrator | `docs/adr/NNNN-*.md` |
| `runbook_writer` | 1 | Execution sub | execution_orchestrator | `docs/runbooks/<kind>/*.md` |
| `system_architect` | 1 | Meta (out-of-band) | (independent) | `audit-report.md`, `audit-report.json`, `system-design.md`, `build-plan.md`, `smoke-report.md`, `determinism-report.md` |

---

## Output artifact map

For audit Section D.4 (every plan.json key has a producing sub-planner):

| `plan.json` key | Producer |
|---|---|
| `features` | intake_strategist |
| `integrations` | integration_planner |
| `automation` | integration_planner (when `automation_surface.outbound: enabled`) |
| `architecture_template` | master_planner |
| `frontend` | frontend_planner |
| `backend` | backend_planner |
| `devops` | devops_planner |
| `testing` | qa_planner |
| `security` | security_auditor |
| `performance` | performance_auditor |
| `support_stack` | devops_planner |
| `data_flows` | master_planner (links existing flow files) |
| `env_vars` | master_planner (aggregates from sub-planners) |
| `webhooks` | master_planner (aggregates from sub-planners) |
| `dashboards` | master_planner (aggregates from sub-planners) |
| `dns` | devops_planner |
| `lock_status` | master_planner |

If any row is missing or wrong, audit Section D.4 fails.

---

## Mirror locations

Two agents are mirrored at `.github/agents/` for Copilot discoverability:
- `.github/agents/master_planner.agent.md`
- `.github/agents/execution_orchestrator.agent.md`
- `.github/agents/system_architect.agent.md`

When the canonical agent file in `DOC/agents/` is updated, the mirror at `.github/agents/` MUST be updated to match. The audit detects mirror drift in Section A.4.

---

## Maintenance rules

1. **Adding a new agent:** create the `.agent.md` file in `DOC/agents/`, register here, update the pipeline diagram, update the artifact map if the agent produces a `plan.json` key.
2. **Removing an agent:** remove from this index FIRST, then delete the file. Run AUDIT to confirm no orphan references remain.
3. **Renaming:** update the file name, update every reference in `runs_before` / `runs_after` across all agents, update this index, update master_planner workflow.
4. **Version bumps:** bump `version` in frontmatter and update the table here.

---

## Discoverability for foreign AIs

Future AI sessions opening this OS for the first time should read in this order:
1. `DOC/README.md` — top-level orientation.
2. `DOC/agents/_index.md` — this file.
3. `DOC/agents/system_architect.agent.md` — the meta-agent that can run AUDIT, DESIGN, FIX, SMOKE, DETERMINISM.
4. `DOC/validation/audit-template.md` — what "passing" means.
5. The specific agent file relevant to the user's request.
