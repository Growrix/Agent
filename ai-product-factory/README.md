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

## Current Foundation

This standalone root currently includes:

- the planned top-level layer folders from the blueprint
- JSON contracts for engineering, design-system, orchestration, builder, and validator layers
- primitive catalogs and seed tokens
- a standalone agent registry and core agent specs
- executable structure validation and test scripts

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
- `npm run release:check`

## Rule

Do not merge this standalone system into `DOC/` until the factory's own contracts, validators, and generated-output tests are stable.