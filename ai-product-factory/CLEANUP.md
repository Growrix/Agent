# Cleanup Guide

## Root Map

### Inputs

- Standalone factory source inputs: `ai-product-factory/briefs/`
- Stable DOC frontend planning root: `DOC/output/runs/<timestamp>/planning/frontend/`
- Experimental factory planner root: `DOC/output/runs/<timestamp>/planning/frontend-factory/`

### Outputs

- Standalone factory planning/spec/report root: `ai-product-factory/generated/runs/<run-id>/`
- Standalone final product root: `ai-product-factory/generated/apps/<run-id>/<project-slug>/`
- Experimental `doc_bridge` runtime root: whatever project app root is declared by the planner in `roots.json`

## Where The Final Product Lands

- If you use the current standalone factory flow, the finished frontend app is in:
  - `ai-product-factory/generated/apps/<run-id>/<project-slug>/`
- If you later use the experimental DOC bridge flow, the final app is in:
  - the runtime app root declared in `DOC/output/runs/<timestamp>/planning/frontend-factory/roots.json`

## Safe To Delete Between Projects

### Per-project generated outputs

These are safe to remove when you want to discard one completed or failed project run:

- `ai-product-factory/generated/runs/<run-id>/`
- `ai-product-factory/generated/apps/<run-id>/`

If you want to start fully fresh, you may clear the contents of:

- `ai-product-factory/generated/runs/`
- `ai-product-factory/generated/apps/`

Keep the `.gitkeep` files in those directories.

### Preview artifacts

These are safe to remove when they are only run-specific previews:

- files under `ai-product-factory/previews/`

### Regenerable cache/build folders inside a generated app

Inside a generated app such as `ai-product-factory/generated/apps/<run-id>/<project-slug>/`, these are safe to delete and regenerate:

- `node_modules/`
- `.next/`
- `playwright-report/`
- `test-results/`
- `reports/frontend-self-audit.json`

## Do Not Delete

These are source-system folders and should be kept unless you are intentionally removing the factory itself:

- `ai-product-factory/briefs/`
- `ai-product-factory/core-engineering/`
- `ai-product-factory/design-system/`
- `ai-product-factory/orchestrator/`
- `ai-product-factory/builders/`
- `ai-product-factory/validators/`
- `ai-product-factory/scripts/`
- `ai-product-factory/tests/`
- `ai-product-factory/agents/`
- `ai-product-factory/components/`
- `ai-product-factory/sections/`
- `ai-product-factory/motion/`
- `ai-product-factory/themes/`
- `ai-product-factory/tokens/`

## Safety Rule

Delete run-specific output folders, not source-system folders.

If a path is under `generated/`, it is usually disposable.
If a path is outside `generated/`, assume it is part of the source system unless you intentionally created a temporary file there.