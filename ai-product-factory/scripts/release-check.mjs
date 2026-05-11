import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const options = {
    brief: 'briefs/demo-locked-brief.json',
    runId: `release-check-${Date.now()}`
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];

    if (argument === '--brief') {
      options.brief = argv[index + 1];
      index += 1;
    } else if (argument === '--run-id') {
      options.runId = argv[index + 1];
      index += 1;
    }
  }

  return options;
}

function runNodeCommand(args) {
  const result = spawnSync(process.execPath, args, {
    cwd: rootDir,
    stdio: 'inherit'
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`Command failed: ${process.execPath} ${args.join(' ')}`);
  }
}

export function runReleaseCheck({ brief = 'briefs/demo-locked-brief.json', runId = `release-check-${Date.now()}` } = {}) {
  runNodeCommand(['scripts/validate-structure.mjs']);
  runNodeCommand(['--test', 'tests/factory-structure.test.mjs', 'tests/factory-pipeline.test.mjs']);
  runNodeCommand(['scripts/run-factory.mjs', '--brief', brief, '--run-id', runId]);
  runNodeCommand(['scripts/run-generated-release-check.mjs', '--run-id', runId]);

  return {
    brief,
    runId,
    status: 'passed'
  };
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const options = parseArgs(process.argv.slice(2));
  const result = runReleaseCheck(options);
  console.log(JSON.stringify(result, null, 2));
}