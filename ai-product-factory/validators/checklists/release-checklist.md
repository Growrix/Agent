# Standalone Factory Release Checklist

Run this checklist before treating the standalone factory as stable enough to generate live frontend builds.

## Structure

- [ ] Folder structure matches the blueprint manifest.
- [ ] Core JSON contracts parse successfully.
- [ ] Standalone agents required for planning, building, and validation are present.

## Design-System Foundation

- [ ] Base tokens exist for theme, typography, spacing, radii, shadows, and motion.
- [ ] Theme presets exist for at least modern SaaS, editorial premium, and dashboard operations.
- [ ] Primitive catalog exists with accessibility and state expectations.

## Builder Foundation

- [ ] Frontend build plan schema exists.
- [ ] Generated app target path is defined under `generated/apps/`.
- [ ] Release gate expectations are declared in the builder contract.

## Validation Foundation

- [ ] Production readiness schema exists.
- [ ] `npm run validate:structure` passes.
- [ ] `npm test` passes.
- [ ] `npm run release:check` passes.

## Decision

The standalone factory is not ready to wire into another agent OS until every item above passes.
