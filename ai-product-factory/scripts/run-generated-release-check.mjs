import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const options = { runId: 'demo-run' };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--run-id') {
      options.runId = argv[index + 1];
      index += 1;
    }
  }

  return options;
}

function runCommand(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(' ')}`);
  }
}

function hasInstalledPackage(appRoot, packageName) {
  return existsSync(path.join(appRoot, 'node_modules', ...packageName.split('/'), 'package.json'));
}

function hasRequiredDependencies(appRoot) {
  return [
    'next',
    'react',
    'react-dom',
    '@playwright/test',
    'typescript'
  ].every((packageName) => hasInstalledPackage(appRoot, packageName));
}

export function runGeneratedReleaseCheck(runId = 'demo-run') {
  const summaryPath = path.join(rootDir, 'generated', 'runs', runId, 'reports', 'run-summary.json');
  if (!existsSync(summaryPath)) {
    throw new Error(`Run summary not found for ${runId}. Execute the factory runner first.`);
  }

  const summary = JSON.parse(readFileSync(summaryPath, 'utf8'));
  const appRoot = path.join(rootDir, summary.appRoot);

  if (!hasRequiredDependencies(appRoot)) {
    runCommand('npm', ['install', '--no-fund', '--no-audit'], appRoot);
  }

  runCommand(process.execPath, [path.join('node_modules', '@playwright', 'test', 'cli.js'), 'install', 'chromium'], appRoot);
  runCommand('npm', ['run', 'release:check'], appRoot);

  return {
    runId,
    appRoot: summary.appRoot,
    status: 'passed'
  };
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const options = parseArgs(process.argv.slice(2));
  const result = runGeneratedReleaseCheck(options.runId);
  console.log(JSON.stringify(result, null, 2));
}
