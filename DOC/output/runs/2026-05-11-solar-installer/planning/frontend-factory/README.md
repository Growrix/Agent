# Frontend Factory Bridge Bundle

Source stable planning root: DOC/output/runs/2026-05-11-solar-installer/planning/frontend
Factory planning root: DOC/output/runs/2026-05-11-solar-installer/planning/frontend-factory
Target mode: standalone_factory
Runtime app root: ai-product-factory/generated/apps/solar-bridge-check/sunenergy-pro-website

This bundle was generated from the stable LOCKED frontend planner output so ai-product-factory can execute against explicit contracts and scoped packets.

Key files:
- factory-frontend.json
- frontend-contract.json
- experience-contract.json
- route-coverage-plan.json
- e2e-journeys.json
- retrieval-manifest.json
- scope-manifest.json
- roots.json
- factory-context.json

Example runner invocation from ai-product-factory/:
node scripts/run-factory.mjs --target-mode planned_frontend --brief ../DOC/output/runs/2026-05-11-solar-installer/planning/frontend/brief.json --planning-root ../DOC/output/runs/2026-05-11-solar-installer/planning/frontend-factory --factory-context ../DOC/output/runs/2026-05-11-solar-installer/planning/frontend-factory/factory-context.json --run-id solar-bridge-check

