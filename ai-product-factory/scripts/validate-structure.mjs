import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(rootDir, 'factory.manifest.json');

export function loadManifest() {
  return JSON.parse(readFileSync(manifestPath, 'utf8'));
}

export function validateFactoryRoot() {
  const manifest = loadManifest();
  const failures = [];

  for (const relativeDir of manifest.requiredDirectories) {
    const fullPath = path.join(rootDir, relativeDir);
    if (!existsSync(fullPath) || !statSync(fullPath).isDirectory()) {
      failures.push(`Missing directory: ${relativeDir}`);
    }
  }

  for (const relativeFile of manifest.requiredFiles) {
    const fullPath = path.join(rootDir, relativeFile);
    if (!existsSync(fullPath) || !statSync(fullPath).isFile()) {
      failures.push(`Missing file: ${relativeFile}`);
    }
  }

  for (const relativeJson of manifest.jsonContracts) {
    const fullPath = path.join(rootDir, relativeJson);
    try {
      JSON.parse(readFileSync(fullPath, 'utf8'));
    } catch (error) {
      failures.push(`Invalid JSON: ${relativeJson} :: ${error.message}`);
    }
  }

  const packageJson = JSON.parse(readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
  const scriptNames = Object.keys(packageJson.scripts ?? {});

  for (const scriptName of manifest.requiredPackageScripts) {
    if (!scriptNames.includes(scriptName)) {
      failures.push(`Missing package script: ${scriptName}`);
    }
  }

  return {
    ok: failures.length === 0,
    failures
  };
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const result = validateFactoryRoot();
  assert.equal(result.ok, true, `Factory root validation failed:\n- ${result.failures.join('\n- ')}`);
  console.log('AI Product Factory structure validation passed.');
}
