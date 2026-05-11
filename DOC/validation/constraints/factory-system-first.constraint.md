# Constraint: Factory-System-First

id: FCT-SYS-001
severity: BLOCKER
scope: system_architect, frontend_planner, frontend_developer, backend_planner, backend_developer

## Rule
All remediation proposals must prioritize reusable factory mechanisms over project-specific output edits.

## Required Behavior
1. Classify each finding as `factory-mechanism gap` or `project-output gap`.
2. For every repeated failure pattern, define a durable mechanism artifact under DOC before local output edits.
3. Any project-specific patch must include a corresponding reusable governance update or explicit waiver reason.

## Fails When
- Same class of issue appears in two runs without a new rule/checklist/constraint.
- An agent proposes route/page-specific fixes with no mechanism-level update.
- Audit reports lack mechanism classification for blocker findings.

## Pass Evidence
- Audit report includes mechanism classification and linked mechanism artifacts.
- New or updated files in DOC/validation, DOC/execution, DOC/knowledge, or agent contracts address root failure mode.
