const CORE_FEATURES = [
  { id: 'auth', name: 'Authentication', priority: 'critical' },
  { id: 'dashboard', name: 'Product narrative and dashboard preview', priority: 'high' },
  { id: 'pricing', name: 'Pricing and conversion surfaces', priority: 'high' },
  { id: 'contact', name: 'Contact and support journey', priority: 'medium' },
  { id: 'theme-switcher', name: 'Theme preference persistence', priority: 'high' },
  { id: 'mobile-nav', name: 'Mobile bottom navigation', priority: 'high' },
  { id: 'auth-modal', name: 'Modal-first authentication entry', priority: 'high' }
];

const DEFAULT_ROUTES = ['/', '/product', '/pricing', '/contact', '/sign-in', '/sign-up'];

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function toFeature(input, index) {
  const name = String(input).trim();
  const priority = index < 2 ? 'high' : 'medium';

  return {
    id: slugify(name),
    name,
    priority
  };
}

function uniqueFeatures(features) {
  const featureMap = new Map();

  for (const feature of features) {
    if (!featureMap.has(feature.id)) {
      featureMap.set(feature.id, feature);
    }
  }

  return [...featureMap.values()];
}

export function analyzeProductBrief(brief) {
  if (!brief || typeof brief !== 'object') {
    throw new TypeError('Expected a brief object.');
  }

  const requestedFeatures = Array.isArray(brief.requestedFeatures)
    ? brief.requestedFeatures.map(toFeature)
    : [];

  const features = uniqueFeatures([...CORE_FEATURES, ...requestedFeatures]);
  const projectName = brief.projectName ?? 'AI Product Factory Demo';
  const productType = brief.productType ?? 'saas';

  return {
    brief: {
      summary: brief.summary ?? 'Deliver a production-ready AI SaaS frontend.',
      audience: Array.isArray(brief.audience) ? brief.audience : ['Product teams'],
      goals: Array.isArray(brief.goals) ? brief.goals : ['Show value clearly', 'Drive qualified conversion'],
      projectName,
      projectSlug: brief.projectSlug ?? slugify(projectName),
      lockStatus: brief.lock_status ?? 'UNLOCKED'
    },
    productType,
    features,
    routes: [...DEFAULT_ROUTES],
    frontendArchitecture: {
      framework: 'Next.js App Router',
      language: 'TypeScript',
      styling: 'Tailwind CSS',
      routing: 'App Router with public marketing and auth fallback routes',
      rendering: 'Server-first pages with client islands for theme, modal, and interactive state panels',
      folders: ['src/app', 'src/components', 'src/lib', 'tests/e2e', 'tests/unit', 'scripts'],
      mandatoryUx: ['ThemeSwitcher', 'MobileBottomNav', 'AuthModal'],
      qualityBar: ['lint', 'typecheck', 'test:unit', 'test:a11y', 'e2e:smoke', 'e2e:full', 'build', 'audit:frontend']
    },
    apiArchitecture: {
      style: 'Prepared-static demo surface with explicit placeholders for auth and contact submission adapters',
      integrations: ['Auth provider adapter slot', 'CRM/contact adapter slot'],
      errorStates: ['loading', 'error', 'empty', 'offline']
    },
    stateManagement: {
      client: 'React context for theme and auth modal state',
      server: 'Static route content shaped by factory planning artifacts',
      futureAdapters: ['TanStack Query', 'Zustand']
    },
    deployment: {
      target: 'Vercel',
      runtime: 'Node.js',
      previewMode: 'next start after build for production smoke',
      requiredGate: 'release:check'
    }
  };
}
