import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadManifest, validateFactoryRoot } from '../scripts/validate-structure.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('manifest-driven structure validation passes', () => {
  const result = validateFactoryRoot();
  assert.equal(result.ok, true, result.failures.join('\n'));
});

test('package.json exposes the expected standalone command surface', () => {
  const manifest = loadManifest();
  const packageJson = JSON.parse(readFileSync(path.join(rootDir, 'package.json'), 'utf8'));

  for (const scriptName of manifest.requiredPackageScripts) {
    assert.ok(packageJson.scripts?.[scriptName], `Expected package script ${scriptName} to exist`);
  }
});

test('core contracts declare object schemas', () => {
  const schemaPaths = [
    'core-engineering/contracts/product-requirement-analysis.schema.json',
    'design-system/contracts/design-token-engine.schema.json',
    'orchestrator/contracts/experience-composition.schema.json',
    'builders/contracts/frontend-build-plan.schema.json',
    'validators/contracts/production-readiness.schema.json'
  ];

  for (const schemaPath of schemaPaths) {
    const schema = JSON.parse(readFileSync(path.join(rootDir, schemaPath), 'utf8'));
    assert.equal(schema.type, 'object', `${schemaPath} should declare an object schema`);
  }
});
