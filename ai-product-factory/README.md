# AI Product Factory

Standalone build root for the AI Product Factory described in [On Going DOCS/SAAS PLAN/ai_product_factory_master_blueprint_v_1.md](../On%20Going%20DOCS/SAAS%20PLAN/ai_product_factory_master_blueprint_v_1.md).

This system is intentionally separate from the existing `DOC/` operating system while the factory itself is being designed, tested, and stabilized.

## Purpose

Build a composition-first frontend factory that can:

- analyze product requirements
- derive architecture and route systems
- generate design tokens and themes
- compose page experiences from reusable primitives
- emit production-grade frontend outputs
- validate readiness with deterministic checks

## Current MVP

This standalone root now includes:

- executable engineering, design-system, orchestration, builder, and validator modules
- a locked demo brief that drives a deterministic factory run
- generated planning/spec/report artifacts under `generated/runs/<run-id>/`
- a generated Next.js app under `generated/apps/<run-id>/<project-slug>/`
- a root release gate that installs, tests, builds, and audits the generated app

## Top-Level Structure

- `apps/`
- `core-engineering/`
- `design-system/`
- `orchestrator/`
- `builders/`
- `validators/`
- `knowledge/`
- `agents/`
- `sections/`
- `components/`
- `themes/`
- `motion/`
- `tokens/`
- `ux-rules/`
- `metadata/`
- `search/`
- `assets/`
- `previews/`
- `generated/`

## Commands

Run from `ai-product-factory/`:

- `npm run validate:structure`
- `npm test`
- `npm run factory:run`
- `npm run factory:release`
- `npm run release:check`

`npm run release:check` runs the full root gate with an isolated generated run id, so validation does not collide with a stale `demo-run` directory from an earlier session.

## Generated Output Contract

The factory runner emits:

- planning artifacts under `generated/runs/<run-id>/planning/`
- component/content specs under `generated/runs/<run-id>/specs/`
- preflight and execution reports under `generated/runs/<run-id>/reports/`
- a production-shaped Next.js app under `generated/apps/<run-id>/<project-slug>/`

## Rule

Do not merge this standalone system into `DOC/` until the factory's own contracts, validators, and generated-output tests are stable.