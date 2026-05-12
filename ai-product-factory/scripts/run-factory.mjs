import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { analyzeProductBrief } from '../core-engineering/engine/product-requirement-analyzer.mjs';
import { composeDesignTokens } from '../design-system/engine/design-token-engine.mjs';
import { composeExperiencePlan } from '../orchestrator/engine/experience-composer.mjs';
import { buildFrontendPlan } from '../builders/engine/frontend-build-plan.mjs';
import { buildPlannedFrontendPlan } from '../builders/engine/planned-frontend-plan.mjs';
import { buildFrontendApp } from '../builders/engine/frontend-builder.mjs';
import { validateProductionReadiness } from '../validators/engine/production-readiness.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = path.resolve(rootDir, '..');
const TARGET_MODES = {
  STANDALONE_DEMO: 'standalone_demo',
  PLANNED_FRONTEND: 'planned_frontend'
};

const REQUIRED_FACTORY_HANDOFF_FILES = [
  'factory-frontend.json',
  'frontend-contract.json',
  'experience-contract.json',
  'retrieval-manifest.json',
  'scope-manifest.json',
  'roots.json'
];

function normalizeCliPath(inputPath) {
  if (!inputPath) {
    return null;
  }

  return path.isAbsolute(inputPath) ? inputPath : path.join(rootDir, inputPath);
}

async function validateFactoryHandoff({ planningRoot, factoryContextPath }) {
  if (!planningRoot) {
    throw new Error('Factory run blocked: planned_frontend mode requires --planning-root.');
  }

  if (!existsSync(planningRoot)) {
    throw new Error(`Factory run blocked: planning root not found at ${planningRoot}.`);
  }

  for (const relativePath of REQUIRED_FACTORY_HANDOFF_FILES) {
    const candidatePath = path.join(planningRoot, relativePath);
    if (!existsSync(candidatePath)) {
      throw new Error(`Factory run blocked: planned_frontend mode requires ${relativePath} in ${planningRoot}.`);
    }
  }

  const scopesDir = path.join(planningRoot, 'scopes');
  if (!existsSync(scopesDir)) {
    throw new Error(`Factory run blocked: planned_frontend mode requires ${scopesDir}.`);
  }

  const scopeEntries = await readdir(scopesDir);
  const hasScopePacket = scopeEntries.some((entry) => entry.endsWith('.json'));
  if (!hasScopePacket) {
    throw new Error(`Factory run blocked: planned_frontend mode requires at least one scope packet in ${scopesDir}.`);
  }

  if (!factoryContextPath) {
    throw new Error('Factory run blocked: planned_frontend mode requires --factory-context.');
  }

  if (!existsSync(factoryContextPath)) {
    throw new Error(`Factory run blocked: factory context not found at ${factoryContextPath}.`);
  }
}

function parseArgs(argv) {
  const options = {
    brief: 'briefs/demo-locked-brief.json',
    runId: 'demo-run',
    clean: true,
    targetMode: TARGET_MODES.STANDALONE_DEMO,
    planningRoot: null,
    factoryContext: null
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];

    if (argument === '--brief') {
      options.brief = argv[index + 1];
      index += 1;
    } else if (argument === '--run-id') {
      options.runId = argv[index + 1];
      index += 1;
    } else if (argument === '--target-mode') {
      options.targetMode = argv[index + 1];
      index += 1;
    } else if (argument === '--planning-root') {
      options.planningRoot = argv[index + 1];
      index += 1;
    } else if (argument === '--factory-context') {
      options.factoryContext = argv[index + 1];
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

async function readJsonAbsolute(filePath) {
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

function resolveWorkspaceRelativePath(relativePath) {
  return path.join(workspaceRoot, relativePath);
}

function normalizeStableDesignTokens(designTokens) {
  if (designTokens?.theme?.light?.color) {
    return designTokens;
  }

  const lightTheme = designTokens?.lightTheme ?? {};
  const darkTheme = designTokens?.darkTheme ?? {};

  return {
    selectedPreset: { id: 'stable-frontend-bridge' },
    brand: {
      name: designTokens?.project ?? 'Planned Frontend Bridge',
      tone: 'confident',
      density: 'comfortable',
      palette: {}
    },
    narrative: {
      direction: 'Stable planner tokens normalized for packet-driven frontend execution.',
      interactionEnergy: 'measured',
      visualIdentity: 'stable-frontend-bridge'
    },
    theme: {
      light: {
        color: {
          primary: lightTheme.colors?.text?.primary ?? '#111827',
          secondary: lightTheme.colors?.secondary?.['700'] ?? '#0f766e',
          accent: lightTheme.colors?.accent?.['500'] ?? '#f59e0b',
          surface: lightTheme.colors?.surface?.default ?? '#f8fafc',
          muted: lightTheme.colors?.surface?.alt ?? '#f1f5f9',
          success: lightTheme.colors?.semantic?.success ?? '#10b981',
          warning: lightTheme.colors?.semantic?.warning ?? '#f59e0b',
          danger: lightTheme.colors?.semantic?.error ?? '#ef4444'
        }
      },
      dark: {
        color: {
          primary: darkTheme.colors?.text?.primary ?? '#f8fafc',
          secondary: darkTheme.colors?.secondary?.['400'] ?? '#2dd4bf',
          accent: darkTheme.colors?.accent?.['500'] ?? '#fb8500',
          surface: darkTheme.colors?.surface?.default ?? '#0f172a',
          muted: darkTheme.colors?.surface?.alt ?? '#1e293b',
          success: darkTheme.colors?.semantic?.success ?? '#10b981',
          warning: darkTheme.colors?.semantic?.warning ?? '#f59e0b',
          danger: darkTheme.colors?.semantic?.error ?? '#ef4444'
        }
      }
    },
    typography: {
      fontFamilies: {
        display: lightTheme.typography?.fontFamily?.serif ?? 'Georgia',
        body: lightTheme.typography?.fontFamily?.sans ?? 'Segoe UI'
      },
      scale: {
        xs: lightTheme.typography?.fontSize?.bodyXSmall ?? '0.875rem',
        sm: lightTheme.typography?.fontSize?.bodySmall ?? '0.9375rem',
        md: lightTheme.typography?.fontSize?.bodyMedium ?? '1rem',
        lg: lightTheme.typography?.fontSize?.bodyLarge ?? '1.125rem',
        xl: lightTheme.typography?.fontSize?.h3 ?? '1.5rem',
        '2xl': lightTheme.typography?.fontSize?.h2 ?? '2rem',
        '3xl': lightTheme.typography?.fontSize?.display ?? '3rem'
      }
    },
    spacing: {
      xs: lightTheme.spacing?.['1'] ?? '0.25rem',
      sm: lightTheme.spacing?.['2'] ?? '0.5rem',
      md: lightTheme.spacing?.['4'] ?? '1rem',
      lg: lightTheme.spacing?.['6'] ?? '1.5rem',
      xl: lightTheme.spacing?.['8'] ?? '2rem',
      '2xl': lightTheme.spacing?.['16'] ?? '4rem'
    },
    radii: {
      sm: lightTheme.radius?.sm ?? '0.25rem',
      md: lightTheme.radius?.md ?? '0.5rem',
      lg: lightTheme.radius?.xl ?? lightTheme.radius?.lg ?? '1rem',
      pill: lightTheme.radius?.full ?? '9999px'
    },
    shadows: {
      sm: lightTheme.shadows?.sm ?? '0 1px 2px rgba(15, 23, 42, 0.08)',
      md: lightTheme.shadows?.md ?? '0 4px 8px rgba(15, 23, 42, 0.12)',
      lg: lightTheme.shadows?.xl ?? lightTheme.shadows?.lg ?? '0 12px 24px rgba(15, 23, 42, 0.16)'
    },
    motion: {
      duration: {
        fast: '120ms',
        base: '220ms',
        slow: '420ms'
      },
      easing: {
        standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        emphasis: 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      personality: 'measured',
      reducedMotionBehavior: 'Disable transform-heavy transitions and keep opacity-only feedback.'
    }
  };
}

async function loadPlannedExecution({ planningRoot, factoryContextPath }) {
  const [
    factoryFrontendSummary,
    frontendContract,
    experienceContract,
    routeCoveragePlan,
    e2eJourneys,
    footerAttribution,
    retrievalManifest,
    scopeManifest,
    roots,
    factoryContext
  ] = await Promise.all([
    readJsonAbsolute(path.join(planningRoot, 'factory-frontend.json')),
    readJsonAbsolute(path.join(planningRoot, 'frontend-contract.json')),
    readJsonAbsolute(path.join(planningRoot, 'experience-contract.json')),
    readJsonAbsolute(path.join(planningRoot, 'route-coverage-plan.json')),
    readJsonAbsolute(path.join(planningRoot, 'e2e-journeys.json')),
    readJsonAbsolute(path.join(planningRoot, 'footer-attribution-contract.json')),
    readJsonAbsolute(path.join(planningRoot, 'retrieval-manifest.json')),
    readJsonAbsolute(path.join(planningRoot, 'scope-manifest.json')),
    readJsonAbsolute(path.join(planningRoot, 'roots.json')),
    readJsonAbsolute(factoryContextPath)
  ]);

  const sourcePlanningRoot = resolveWorkspaceRelativePath(roots.source_planning_root);
  const [contentLibrary, sourceFrontendSummary, designTokens] = await Promise.all([
    readJsonAbsolute(path.join(sourcePlanningRoot, 'content.en-US.json')),
    readJsonAbsolute(path.join(sourcePlanningRoot, 'frontend.json')),
    readJsonAbsolute(path.join(sourcePlanningRoot, 'design-system.tokens.json'))
  ]);

  return {
    factoryFrontendSummary,
    frontendContract,
    experienceContract,
    routeCoveragePlan,
    e2eJourneys,
    footerAttribution,
    retrievalManifest,
    scopeManifest,
    roots,
    factoryContext,
    sourcePlanningRoot,
    contentLibrary,
    sourceFrontendSummary,
    designTokens: normalizeStableDesignTokens(designTokens)
  };
}

function rebasePlannedExecutionRoots(plannedExecution, runId) {
  const runtimeAppRoot = `ai-product-factory/generated/apps/${runId}/${plannedExecution.roots.project_root_slug}`;
  const standaloneRunRoot = `ai-product-factory/generated/runs/${runId}`;
  const rebasedRoots = {
    ...plannedExecution.roots,
    runtime_app_root: runtimeAppRoot,
    standalone_run_root: standaloneRunRoot,
    final_product_root: runtimeAppRoot
  };

  return {
    ...plannedExecution,
    roots: rebasedRoots,
    factoryContext: {
      ...plannedExecution.factoryContext,
      run_root: standaloneRunRoot,
      app_root: runtimeAppRoot
    },
    frontendContract: {
      ...plannedExecution.frontendContract,
      project: {
        ...plannedExecution.frontendContract.project,
        runtime_app_root: runtimeAppRoot
      },
      runtime_root_requirements: {
        ...plannedExecution.frontendContract.runtime_root_requirements,
        app_root: runtimeAppRoot,
        run_root: standaloneRunRoot
      }
    },
    factoryFrontendSummary: {
      ...plannedExecution.factoryFrontendSummary,
      roots: {
        ...plannedExecution.factoryFrontendSummary.roots,
        runtime_app_root: runtimeAppRoot,
        standalone_run_root: standaloneRunRoot
      }
    }
  };
}

export async function runFactory({
  briefPath = 'briefs/demo-locked-brief.json',
  runId = 'demo-run',
  clean = true,
  targetMode = TARGET_MODES.STANDALONE_DEMO,
  planningRoot = null,
  factoryContextPath = null
} = {}) {
  if (![TARGET_MODES.STANDALONE_DEMO, TARGET_MODES.PLANNED_FRONTEND].includes(targetMode)) {
    throw new Error(`Factory run blocked: unsupported target mode ${targetMode}.`);
  }

  if (targetMode === TARGET_MODES.STANDALONE_DEMO && (planningRoot || factoryContextPath)) {
    throw new Error('Factory run blocked: planning handoff inputs require --target-mode planned_frontend.');
  }

  if (targetMode === TARGET_MODES.PLANNED_FRONTEND) {
    await validateFactoryHandoff({ planningRoot, factoryContextPath });
  }

  const brief = await readJson(briefPath);
  if (brief.lock_status !== 'LOCKED') {
    throw new Error(`Factory run blocked: expected LOCKED brief, received ${brief.lock_status}.`);
  }

  let analysis = null;
  let designTokens = null;
  let composition = null;
  let buildPlan = null;
  let plannedExecution = null;

  if (targetMode === TARGET_MODES.PLANNED_FRONTEND) {
    plannedExecution = rebasePlannedExecutionRoots(
      await loadPlannedExecution({ planningRoot, factoryContextPath }),
      runId
    );
    designTokens = plannedExecution.designTokens;
    buildPlan = buildPlannedFrontendPlan({
      brief,
      factoryFrontendSummary: plannedExecution.factoryFrontendSummary,
      frontendContract: plannedExecution.frontendContract,
      routeCoveragePlan: plannedExecution.routeCoveragePlan,
      e2eJourneys: plannedExecution.e2eJourneys,
      roots: plannedExecution.roots,
      scopeManifest: plannedExecution.scopeManifest
    });
  } else {
    analysis = analyzeProductBrief(brief);
    const [baseTokens, themePresets, sectionCatalog, primitivesCatalog, motionTokens, experienceLibrary] = await Promise.all([
      readJson('design-system/tokens/base.tokens.json'),
      readJson('design-system/themes/theme.presets.json'),
      readJson('sections/catalog/section-types.json'),
      readJson('components/primitives/primitives.catalog.json'),
      readJson('motion/motion.tokens.json'),
      readJson('knowledge/experience-library.json')
    ]);

    designTokens = composeDesignTokens(brief, baseTokens, themePresets);
    composition = composeExperiencePlan({
      brief,
      analysis,
      designTokens,
      sectionCatalog,
      primitivesCatalog,
      motionTokens,
      experienceLibrary
    });
    buildPlan = buildFrontendPlan({ brief, analysis, composition, runId });
  }

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

  if (targetMode === TARGET_MODES.PLANNED_FRONTEND) {
    await Promise.all([
      writeJson(runRoot, 'planning/brief.json', brief),
      writeJson(runRoot, 'planning/factory-frontend.json', plannedExecution.factoryFrontendSummary),
      writeJson(runRoot, 'planning/frontend-contract.json', plannedExecution.frontendContract),
      writeJson(runRoot, 'planning/experience-contract.json', plannedExecution.experienceContract),
      writeJson(runRoot, 'planning/route-coverage-plan.json', plannedExecution.routeCoveragePlan),
      writeJson(runRoot, 'planning/e2e-journeys.json', plannedExecution.e2eJourneys),
      writeJson(runRoot, 'planning/roots.json', plannedExecution.roots),
      writeJson(runRoot, 'planning/factory-context.json', plannedExecution.factoryContext),
      writeJson(runRoot, 'planning/build-plan.json', buildPlan),
      writeJson(runRoot, 'planning/content.en.json', plannedExecution.contentLibrary),
      writeJson(runRoot, 'specs/retrieval-manifest.json', plannedExecution.retrievalManifest),
      writeJson(runRoot, 'specs/scope-manifest.json', plannedExecution.scopeManifest),
      writeJson(runRoot, 'reports/frontend-summary.json', plannedExecution.factoryFrontendSummary)
    ]);
  } else {
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
  }

  const buildResult = await buildFrontendApp({
    appRoot,
    brief,
    designTokens,
    composition,
    buildPlan,
    plannedExecution
  });

  const preflight = validateProductionReadiness({
    brief,
    runRoot,
    appRoot,
    buildPlan,
    composition,
    plannedExecution
  });

  await writeJson(runRoot, 'reports/production-readiness.json', preflight);

  const summary = {
    runId,
    briefPath,
    targetMode,
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
    clean: options.clean,
    targetMode: options.targetMode,
    planningRoot: normalizeCliPath(options.planningRoot),
    factoryContextPath: normalizeCliPath(options.factoryContext)
  });
  console.log(JSON.stringify(summary, null, 2));
}
