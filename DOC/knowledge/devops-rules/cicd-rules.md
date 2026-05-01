# CI/CD RULES
This file complements devops-rules.md.
- CI must run: lint, typecheck, test, build.
- Migrations run before deploy promotion.
- Deploy is blocked on failed validation gates.
