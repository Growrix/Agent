import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runFactory } from '../scripts/run-factory.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('factory runner emits planning artifacts and a generated app shell', async () => {
  const summary = await runFactory({
    briefPath: 'briefs/demo-locked-brief.json',
    runId: 'test-pipeline',
    clean: true
  });

  assert.equal(summary.preflight.status, 'passed', JSON.stringify(summary.preflight, null, 2));
  assert.ok(existsSync(path.join(rootDir, summary.appRoot, 'package.json')), 'Expected generated app package.json to exist');
  assert.ok(existsSync(path.join(rootDir, summary.runRoot, 'planning', 'design-system.json')), 'Expected design-system planning artifact');

  const buildPlan = JSON.parse(
    readFileSync(path.join(rootDir, summary.runRoot, 'planning', 'build-plan.json'), 'utf8')
  );

  assert.ok(buildPlan.releaseGate.requiredChecks.includes('audit:frontend'));
  assert.equal(buildPlan.routes.length, 6, 'Expected the demo build plan to cover all required routes');
});
