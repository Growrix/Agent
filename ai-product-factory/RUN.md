# Runbook

## Working Directory

All commands in this runbook are executed from `ai-product-factory/`.

## Validate Structure

```bash
npm run validate:structure
```

Checks required folders, files, JSON contracts, and package command surface.

## Run Tests

```bash
npm test
```

Runs the standalone factory root tests with the Node test runner.

## Release Check

```bash
npm run release:check
```

Runs the standalone production-readiness gate for this factory foundation:

1. structure validation
2. contract parsing tests
3. command-surface verification

## Expected Outcome

The release check passes only when:

- the standalone root matches the planned folder map
- required contracts exist and parse as JSON
- agent/validator docs required by the manifest are present
- package scripts expose the expected command surface
