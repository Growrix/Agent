# Checklist: System Architect Factory Focus

Use this checklist in AUDIT, DESIGN, and FIX modes.

## A. Scope Integrity
- [ ] Did we keep analysis at system/factory level before touching outputs?
- [ ] Are any project-specific edits explicitly marked as temporary overrides?

## B. Mechanism-First Remediation
- [ ] For each blocker, did we define a reusable mechanism artifact?
- [ ] Did we map every mechanism to a path under DOC governance?

## C. Non-Project-Specific Design
- [ ] Are proposed rules generalized and portable across projects?
- [ ] Are examples separated from rules (rule is generic, example is contextual)?

## D. Verification
- [ ] Did a re-audit confirm the new mechanism catches the same issue class?
- [ ] Did we avoid claiming readiness without mechanism-level closure?

## E. Reporting
- [ ] Findings labeled as `factory-mechanism gap` or `project-output gap`
- [ ] Top fixes list prioritizes mechanism gaps first
