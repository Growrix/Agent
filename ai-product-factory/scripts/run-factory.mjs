import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { analyzeProductBrief } from '../core-engineering/engine/product-requirement-analyzer.mjs';
import { composeDesignTokens } from '../design-system/engine/design-token-engine.mjs';
import { composeExperiencePlan } from '../orchestrator/engine/experience-composer.mjs';
import { buildFrontendPlan } from '../builders/engine/frontend-build-plan.mjs';
import { buildFrontendApp } from '../builders/engine/frontend-builder.mjs';
import { validateProductionReadiness } from '../validators/engine/production-readiness.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const options = {
    brief: 'briefs/demo-locked-brief.json',
    runId: 'demo-run',
    clean: true
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];

    if (argument === '--brief') {
      options.brief = argv[index + 1];
      index += 1;
    } else if (argument === '--run-id') {
      options.runId = argv[index + 1];
      index += 1;
    } else if (argument === '--no-clean') {
      options.clean = false;
    }
  }

  return options;
}

async function readJson(relativePath) {
  const filePath = path.join(rootDir, relativePath);
  return JSON.parse(await readFile(filePath, 'utf8'));
}

async function writeJson(basePath, relativePath, value) {
  const filePath = path.join(basePath, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function routeFileName(routePath) {
  return routePath === '/' ? 'home' : routePath.replace(/^\//, '').replace(/\//g, '-');
}

export async function runFactory({ briefPath = 'briefs/demo-locked-brief.json', runId = 'demo-run', clean = true } = {}) {
  const brief = await readJson(briefPath);
  if (brief.lock_status !== 'LOCKED') {
    throw new Error(`Factory run blocked: expected LOCKED brief, received ${brief.lock_status}.`);
  }

  const analysis = analyzeProductBrief(brief);
  const [baseTokens, themePresets, sectionCatalog, primitivesCatalog, motionTokens, experienceLibrary] = await Promise.all([
    readJson('design-system/tokens/base.tokens.json'),
    readJson('design-system/themes/theme.presets.json'),
    readJson('sections/catalog/section-types.json'),
    readJson('components/primitives/primitives.catalog.json'),
    readJson('motion/motion.tokens.json'),
    readJson('knowledge/experience-library.json')
  ]);

  const designTokens = composeDesignTokens(brief, baseTokens, themePresets);
  const composition = composeExperiencePlan({
    brief,
    analysis,
    designTokens,
    sectionCatalog,
    primitivesCatalog,
    motionTokens,
    experienceLibrary
  });
  const buildPlan = buildFrontendPlan({ brief, analysis, composition, runId });

  const runRoot = path.join(rootDir, 'generated', 'runs', runId);
  const appRoot = path.join(rootDir, buildPlan.appRoot);

  if (clean) {
    await Promise.all([
      rm(runRoot, { recursive: true, force: true }),
      rm(appRoot, { recursive: true, force: true })
    ]);
  }

  await Promise.all([
    mkdir(path.join(runRoot, 'planning'), { recursive: true }),
    mkdir(path.join(runRoot, 'planning', 'route-plans'), { recursive: true }),
    mkdir(path.join(runRoot, 'specs'), { recursive: true }),
    mkdir(path.join(runRoot, 'reports'), { recursive: true }),
    mkdir(appRoot, { recursive: true })
  ]);

  await Promise.all([
    writeJson(runRoot, 'planning/brief.json', brief),
    writeJson(runRoot, 'planning/product-requirement-analysis.json', analysis),
    writeJson(runRoot, 'planning/site-inventory.json', composition.siteInventory),
    writeJson(runRoot, 'planning/master-ui-architecture.json', composition.masterUiArchitecture),
    writeJson(runRoot, 'planning/design-system.json', designTokens),
    writeJson(runRoot, 'planning/motion-system.json', composition.motionSystem),
    writeJson(runRoot, 'planning/visual-differentiation-map.json', composition.visualDifferentiationMap),
    writeJson(runRoot, 'planning/page-briefs.json', composition.pageBriefs),
    writeJson(runRoot, 'planning/build-plan.json', buildPlan),
    writeJson(runRoot, 'planning/content.en.json', composition.contentLibrary),
    writeJson(runRoot, 'specs/component-system.json', composition.componentSystem),
    writeJson(runRoot, 'specs/content-library.json', composition.contentLibrary),
    writeJson(runRoot, 'reports/frontend-summary.json', composition.frontendSummary)
  ]);

  await Promise.all(
    composition.routePlans.map((routePlan) =>
      writeJson(runRoot, `planning/route-plans/${routeFileName(routePlan.routeId)}.json`, routePlan)
    )
  );

  const buildResult = await buildFrontendApp({
    appRoot,
    brief,
    designTokens,
    composition,
    buildPlan
  });

  const preflight = validateProductionReadiness({
    brief,
    runRoot,
    appRoot,
    buildPlan,
    composition
  });

  await writeJson(runRoot, 'reports/production-readiness.json', preflight);

  const summary = {
    runId,
    briefPath,
    projectSlug: buildPlan.projectSlug,
    runRoot: path.relative(rootDir, runRoot).replace(/\\/g, '/'),
    appRoot: path.relative(rootDir, appRoot).replace(/\\/g, '/'),
    generatedFiles: buildResult.fileCount,
    routeCount: buildPlan.routes.length,
    preflight
  };

  await writeJson(runRoot, 'reports/run-summary.json', summary);

  return summary;
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const options = parseArgs(process.argv.slice(2));
  const summary = await runFactory({
    briefPath: options.brief,
    runId: options.runId,
    clean: options.clean
  });
  console.log(JSON.stringify(summary, null, 2));
}
