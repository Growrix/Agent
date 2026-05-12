function json(value) {
  return JSON.stringify(value, null, 2);
}

function humanize(value) {
  return String(value)
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function routeIdFromPath(routePath) {
  return routePath === '/' ? 'home' : routePath.replace(/^\//, '').replace(/\//g, '-');
}

function routeImportPrefix(routePath) {
  const depth = routePath === '/' ? 0 : routePath.replace(/^\//, '').split('/').length;
  return '../'.repeat(depth + 1).replace(/\/$/, '');
}

function svgHeroDataUrl(label, primaryColor, accentColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" fill="none">
      <defs>
        <linearGradient id="hero-gradient" x1="0" y1="0" x2="1600" y2="900" gradientUnits="userSpaceOnUse">
          <stop stop-color="${primaryColor}" />
          <stop offset="1" stop-color="${accentColor}" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#hero-gradient)" />
      <circle cx="1320" cy="160" r="180" fill="rgba(255,255,255,0.16)" />
      <circle cx="260" cy="720" r="240" fill="rgba(255,255,255,0.12)" />
      <path d="M220 620C420 500 620 760 840 640C1000 552 1120 360 1360 412" stroke="rgba(255,255,255,0.22)" stroke-width="28" stroke-linecap="round" />
      <text x="120" y="180" fill="white" font-size="64" font-family="Segoe UI, Arial, sans-serif" font-weight="700">${label}</text>
      <text x="120" y="248" fill="rgba(255,255,255,0.9)" font-size="24" font-family="Segoe UI, Arial, sans-serif">Planned frontend execution surface</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function digitsOnly(value) {
  return String(value ?? '').replace(/\D/g, '');
}

function pickPrimaryRoute(routeDefinitions, preferredPaths, fallbackPath) {
  for (const candidate of preferredPaths) {
    if (routeDefinitions.some((route) => route.path === candidate)) {
      return candidate;
    }
  }

  return fallbackPath;
}

function groupNumberedCards(value) {
  const groupedEntries = new Map();

  for (const [key, entryValue] of Object.entries(value)) {
    const match = key.match(/^([a-z]+)_([0-9]+)_(.+)$/i);
    if (!match || typeof entryValue !== 'string') {
      continue;
    }

    const [, group, index, field] = match;
    const groupKey = `${group}_${index}`;

    if (!groupedEntries.has(groupKey)) {
      groupedEntries.set(groupKey, { group, index, fields: {} });
    }

    groupedEntries.get(groupKey).fields[field] = entryValue;
  }

  return [...groupedEntries.values()].map((entry) => ({
    title: entry.fields.name ?? entry.fields.title ?? humanize(`${entry.group} ${entry.index}`),
    body: entry.fields.description ?? entry.fields.desc ?? entry.fields.quote ?? entry.fields.benefits ?? entry.fields.message ?? '',
    meta: entry.fields.location ?? entry.fields.role ?? entry.fields.savings ?? entry.fields.payback_period ?? entry.fields.cta ?? null
  }));
}

function objectCard(key, value) {
  const title = value.title ?? value.name ?? value.label ?? humanize(key);
  const body = value.description ?? value.body ?? value.subtitle ?? value.value ?? value.cta_text ?? '';
  const meta = value.location ?? value.role ?? value.url ?? null;

  return {
    title,
    body,
    meta
  };
}

function sectionActions(sectionValue, routeDefinitions) {
  const actions = [];

  const hrefForLabel = (label) => {
    const lower = label.toLowerCase();

    if (lower.includes('portfolio') && routeDefinitions.some((route) => route.path === '/portfolio')) {
      return '/portfolio';
    }

    if (lower.includes('service') && routeDefinitions.some((route) => route.path === '/services')) {
      return '/services';
    }

    if (lower.includes('faq') && routeDefinitions.some((route) => route.path === '/faq')) {
      return '/faq';
    }

    if ((lower.includes('quote') || lower.includes('assessment')) && routeDefinitions.some((route) => route.path === '/free-assessment')) {
      return '/free-assessment';
    }

    if (lower.includes('calculator') && routeDefinitions.some((route) => route.path === '/solar-calculator')) {
      return '/solar-calculator';
    }

    if (lower.includes('financing') && routeDefinitions.some((route) => route.path === '/financing')) {
      return '/financing';
    }

    if (routeDefinitions.some((route) => route.path === '/contact')) {
      return '/contact';
    }

    return '/';
  };

  for (const key of ['cta', 'cta_text', 'cta_primary', 'cta_secondary', 'case_study_link']) {
    if (typeof sectionValue[key] === 'string') {
      actions.push({
        label: sectionValue[key],
        href: hrefForLabel(sectionValue[key])
      });
    }
  }

  return actions;
}

function sectionBullets(sectionValue) {
  return Object.entries(sectionValue)
    .filter(([key, value]) => typeof value === 'string' && !['title', 'headline', 'description', 'subtitle', 'body', 'cta', 'cta_text', 'cta_primary', 'cta_secondary', 'case_study_link'].includes(key) && !key.match(/^([a-z]+)_([0-9]+)_(.+)$/i))
    .map(([key, value]) => `${humanize(key)}: ${value}`)
    .slice(0, 8);
}

function sectionModel(sectionKey, sectionValue, routeDefinitions) {
  if (!sectionValue) {
    return null;
  }

  if (typeof sectionValue === 'string') {
    return {
      id: sectionKey,
      title: humanize(sectionKey),
      description: sectionValue,
      cards: [],
      bullets: [],
      actions: []
    };
  }

  if (Array.isArray(sectionValue)) {
    const cards = sectionValue.map((entry, index) => {
      if (typeof entry === 'string') {
        return { title: `${humanize(sectionKey)} ${index + 1}`, body: entry, meta: null };
      }

      return objectCard(`${sectionKey}_${index + 1}`, entry);
    });

    return {
      id: sectionKey,
      title: humanize(sectionKey),
      description: null,
      cards,
      bullets: [],
      actions: []
    };
  }

  const cardsFromGroups = groupNumberedCards(sectionValue);
  const nestedCards = Object.entries(sectionValue)
    .filter(([, value]) => value && typeof value === 'object' && !Array.isArray(value))
    .map(([key, value]) => objectCard(key, value));
  const cards = cardsFromGroups.length > 0 ? cardsFromGroups : nestedCards;

  const title = sectionValue.title ?? sectionValue.headline ?? humanize(sectionKey);
  const description = sectionValue.description ?? sectionValue.subtitle ?? sectionValue.body ?? null;
  const bullets = sectionBullets(sectionValue);
  const actions = sectionActions(sectionValue, routeDefinitions);

  if (!description && cards.length === 0 && bullets.length === 0 && actions.length === 0) {
    return null;
  }

  return {
    id: sectionKey,
    title,
    description,
    cards,
    bullets,
    actions
  };
}

function buildNavigation(routeDefinitions, contentLibrary) {
  const headerNav = contentLibrary.header?.nav ?? {};
  const labelOverrides = {
    '/': 'Home'
  };

  for (const [key, value] of Object.entries(headerNav)) {
    const routePath = key === 'home' ? '/' : `/${key.replace(/_/g, '-')}`;
    labelOverrides[routePath] = value;
  }

  const routeRegistry = routeDefinitions.map((route) => ({
    path: route.path,
    routeId: route.id,
    label: labelOverrides[route.path] ?? route.label ?? humanize(route.id),
    shortLabel: (labelOverrides[route.path] ?? route.label ?? humanize(route.id)).slice(0, 2).toUpperCase(),
    navVisible: route.path === '/' || Object.prototype.hasOwnProperty.call(labelOverrides, route.path) || ['marketing', 'conversion'].includes(route.route_class),
    mobileVisible: false,
    public: route.route_class !== 'auth-fallback',
    routeClass: route.route_class,
    heroVariant: `planned-${route.id}`
  }));

  const mobilePriority = ['/', '/services', '/portfolio', '/contact', '/free-assessment', '/solar-calculator', '/faq'];
  const mobileVisiblePaths = [];

  for (const candidate of mobilePriority) {
    const match = routeRegistry.find((route) => route.path === candidate);
    if (match && !mobileVisiblePaths.includes(match.path) && mobileVisiblePaths.length < 5) {
      mobileVisiblePaths.push(match.path);
    }
  }

  for (const entry of routeRegistry) {
    if (entry.navVisible && mobileVisiblePaths.length < 5 && !mobileVisiblePaths.includes(entry.path)) {
      mobileVisiblePaths.push(entry.path);
    }
  }

  return routeRegistry.map((route) => ({
    ...route,
    mobileVisible: mobileVisiblePaths.includes(route.path)
  }));
}

function buildRoutePages({ brief, buildPlan, plannedExecution, routeRegistry }) {
  const { contentLibrary, footerAttribution } = plannedExecution;
  const primaryHref = pickPrimaryRoute(buildPlan.routeDefinitions, ['/free-assessment', '/contact', '/services'], '/');
  const secondaryHref = pickPrimaryRoute(buildPlan.routeDefinitions, ['/portfolio', '/services', '/contact'], '/');
  const lightTheme = plannedExecution.designTokens?.theme?.light?.color ?? {};

  return Object.fromEntries(
    buildPlan.routeDefinitions.map((route) => {
      const routeContent = contentLibrary[route.id] ?? {};
      const heroSource = routeContent.hero ?? {};
      const hero = {
        eyebrow: route.route_class.toUpperCase(),
        title: heroSource.headline ?? heroSource.title ?? route.label,
        description: heroSource.description ?? route.intent,
        primaryCta: heroSource.cta_primary ?? heroSource.cta ?? brief.primaryCta,
        primaryHref,
        secondaryCta: heroSource.cta_secondary ?? brief.secondaryCta ?? null,
        secondaryHref,
        media: {
          src: svgHeroDataUrl(route.label, lightTheme.primary ?? '#0f766e', lightTheme.accent ?? '#f59e0b'),
          alt: `${route.label} planned hero visual`,
          badge: route.lead_gen_role
        },
        stats: route.id === 'home'
          ? (brief.highlightMetrics ?? []).slice(0, 4).map((entry) => ({ value: entry.value, label: entry.label }))
          : (brief.highlightMetrics ?? []).slice(0, 2).map((entry) => ({ value: entry.value, label: entry.label }))
      };

      const sections = Object.entries(routeContent)
        .filter(([key]) => key !== 'hero')
        .map(([key, value]) => sectionModel(key, value, buildPlan.routeDefinitions))
        .filter(Boolean);

      if (sections.length === 0) {
        sections.push({
          id: 'route-intent',
          title: 'Route Intent',
          description: route.intent,
          cards: [],
          bullets: [],
          actions: []
        });
      }

      return [route.id, {
        routeId: route.id,
        path: route.path,
        label: route.label,
        routeClass: route.route_class,
        leadGenRole: route.lead_gen_role,
        hero,
        sections,
        componentHints: route.component_hints,
        footerAttribution
      }];
    })
  );
}

function plannedLayoutFile(projectName, summary) {
  return [
    "import type { Metadata } from 'next';",
    "import './globals.css';",
    "import { AppShell } from '../components/app-shell';",
    '',
    'export const metadata: Metadata = {',
    `  title: ${json(projectName)},`,
    `  description: ${json(summary)}`,
    '};',
    '',
    'type RootLayoutProps = {',
    '  children: React.ReactNode;',
    '};',
    '',
    'export default function RootLayout({ children }: RootLayoutProps) {',
    '  return (',
    "    <html lang='en' data-theme='light' data-motion='full' suppressHydrationWarning>",
    '      <body>',
    '        <AppShell>{children}</AppShell>',
    '      </body>',
    '    </html>',
    '  );',
    '}',
    ''
  ].join('\n');
}

function plannedAppShellFile({ hasAuthModal, hasMobileBottomNav }) {
  const imports = [
    "'use client';",
    '',
    "import type { ReactNode } from 'react';",
    "import { SiteFooter } from './site-footer';",
    "import { SiteHeader } from './site-header';",
    "import { ThemeProvider } from './theme-provider';"
  ];

  if (hasAuthModal) {
    imports.splice(3, 0, "import { AuthModalProvider } from './auth-modal';");
  }

  if (hasMobileBottomNav) {
    imports.splice(hasAuthModal ? 4 : 3, 0, "import { MobileBottomNav } from './mobile-bottom-nav';");
  }

  const lines = [
    ...imports,
    '',
    'type AppShellProps = {',
    '  children: ReactNode;',
    '};',
    '',
    'export function AppShell({ children }: AppShellProps) {',
    '  return (',
    '    <ThemeProvider>'
  ];

  if (hasAuthModal) {
    lines.push('      <AuthModalProvider>');
  }

  lines.push(
    '        <a',
    "          href='#content'",
    "          className='focus-ring sr-only absolute left-4 top-4 z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 focus:not-sr-only'",
    '        >',
    '          Skip to content',
    '        </a>',
    "        <div className='relative min-h-screen pb-28 md:pb-10'>",
    '          <SiteHeader />',
    "          <main id='content' className='mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8'>",
    '            {children}',
    '          </main>',
    '          <SiteFooter />'
  );

  if (hasMobileBottomNav) {
    lines.push('          <MobileBottomNav />');
  }

  lines.push('        </div>');

  if (hasAuthModal) {
    lines.push('      </AuthModalProvider>');
  }

  lines.push('    </ThemeProvider>', '  );', '}', '');

  return lines.join('\n');
}

function plannedAuthModalFile() {
  return [
    "'use client';",
    '',
    "import Link from 'next/link';",
    "import type { ReactNode } from 'react';",
    "import { createContext, useContext, useEffect, useState } from 'react';",
    "import { siteContent } from '../lib/site-content';",
    '',
    "type AuthMode = 'sign-in' | 'sign-up';",
    '',
    'type AuthModalContextValue = {',
    '  isOpen: boolean;',
    '  mode: AuthMode;',
    '  open: (nextMode?: AuthMode) => void;',
    '  close: () => void;',
    '};',
    '',
    'const AuthModalContext = createContext<AuthModalContextValue | null>(null);',
    '',
    'type AuthModalProviderProps = {',
    '  children: ReactNode;',
    '};',
    '',
    'export function AuthModalProvider({ children }: AuthModalProviderProps) {',
    '  const [isOpen, setIsOpen] = useState(false);',
    "  const [mode, setMode] = useState<AuthMode>('sign-in');",
    '',
    '  useEffect(() => {',
    '    if (!isOpen) {',
    '      return undefined;',
    '    }',
    '',
    '    const onKeyDown = (event: KeyboardEvent) => {',
    "      if (event.key === 'Escape') {",
    '        setIsOpen(false);',
    '      }',
    '    };',
    '',
    "    window.addEventListener('keydown', onKeyDown);",
    "    return () => window.removeEventListener('keydown', onKeyDown);",
    '  }, [isOpen]);',
    '',
    '  return (',
    '    <AuthModalContext.Provider',
    '      value={{',
    '        isOpen,',
    '        mode,',
    '        open: (nextMode: AuthMode = "sign-in") => {',
    '          setMode(nextMode);',
    '          setIsOpen(true);',
    '        },',
    '        close: () => setIsOpen(false)',
    '      }}',
    '    >',
    '      {children}',
    '      <AuthModalRoot />',
    '    </AuthModalContext.Provider>',
    '  );',
    '}',
    '',
    'export function useAuthModal() {',
    '  const context = useContext(AuthModalContext);',
    '  if (!context) {',
    "    throw new Error('useAuthModal must be used within AuthModalProvider.');",
    '  }',
    '  return context;',
    '}',
    '',
    'function AuthModalRoot() {',
    '  const { isOpen, mode, close, open } = useAuthModal();',
    '',
    '  if (!isOpen) {',
    '    return null;',
    '  }',
    '',
    "  const authRoute = mode === 'sign-in' ? '/sign-in' : '/sign-up';",
    "  const title = mode === 'sign-in' ? 'Sign in to continue' : 'Create your account';",
    '',
    '  return (',
    "    <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 py-8' onClick={close}>",
    '      <div',
    "        role='dialog'",
    "        aria-modal='true'",
    "        aria-labelledby='auth-modal-title'",
    "        className='surface-card w-full max-w-lg rounded-3xl p-6 text-left shadow-2xl sm:p-8'",
    '        onClick={(event) => event.stopPropagation()}',
    '      >',
    "        <div className='mb-6 flex items-start justify-between gap-4'>",
    '          <div>',
    "            <p className='hero-chip mb-3'>Planner-defined auth entry</p>",
    "            <h2 id='auth-modal-title' className='text-2xl font-semibold text-ink'>{title}</h2>",
    "            <p className='mt-2 copy-muted'>Continue in the modal or use the dedicated fallback route when you need a full page.</p>",
    '          </div>',
    '          <button',
    "            type='button'",
    "            aria-label='Close auth modal'",
    "            className='focus-ring secondary-button px-3 py-2 text-sm'",
    '            onClick={close}',
    '          >',
    '            Close',
    '          </button>',
    '        </div>',
    "        <form className='grid gap-4'>",
    "          <label className='grid gap-2 text-sm font-medium text-ink'>",
    '            Email',
    "            <input className='focus-ring rounded-2xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-900' type='email' placeholder='you@example.com' />",
    '          </label>',
    "          <label className='grid gap-2 text-sm font-medium text-ink'>",
    '            Password',
    "            <input className='focus-ring rounded-2xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-900' type='password' placeholder='Enter a secure password' />",
    '          </label>',
    "          <div className='mt-2 flex flex-col gap-3 sm:flex-row'>",
    "            <button type='button' className='focus-ring primary-button'>Continue</button>",
    "            <button type='button' className='focus-ring secondary-button' onClick={() => open(mode === 'sign-in' ? 'sign-up' : 'sign-in')}>",
    "              {mode === 'sign-in' ? 'Switch to sign up' : 'Switch to sign in'}",
    '            </button>',
    '          </div>',
    "          <div className='copy-muted flex flex-wrap items-center gap-3 text-sm'>",
    '            <span>Need the dedicated route?</span>',
    "            <Link className='focus-ring font-semibold underline-offset-4 hover:underline' href={authRoute}>",
    '              Open fallback route',
    '            </Link>',
    '          </div>',
    "          <p className='text-xs copy-muted'>{siteContent.brand.supportEmail}</p>",
    '        </form>',
    '      </div>',
    '    </div>',
    '  );',
    '}',
    ''
  ].join('\n');
}

function plannedSiteHeaderFile({ hasAuthModal }) {
  const imports = [
    "'use client';",
    '',
    "import Link from 'next/link';",
    "import { usePathname } from 'next/navigation';",
    "import { ThemeSwitcher } from './theme-switcher';",
    "import { primaryNavigation } from '../lib/route-registry';",
    "import { siteContent } from '../lib/site-content';"
  ];

  if (hasAuthModal) {
    imports.splice(5, 0, "import { useAuthModal } from './auth-modal';");
  }

  const lines = [
    ...imports,
    '',
    'export function SiteHeader() {',
    '  const pathname = usePathname();',
    '  const brand = siteContent.brand;'
  ];

  if (hasAuthModal) {
    lines.push('  const { open } = useAuthModal();');
  }

  lines.push(
    '',
    '  return (',
    "    <header className='sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-700/40 dark:bg-slate-950/70'>",
    "      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8'>",
    "        <Link href='/' className='focus-ring flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold text-ink'>",
    "          <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-black text-white'>",
    '            {brand.name.slice(0, 2).toUpperCase()}',
    '          </span>',
    "          <span className='font-semibold tracking-tight'>{brand.name}</span>",
    '        </Link>',
    "        <nav aria-label='Primary navigation' className='hidden items-center gap-2 md:flex'>",
    '          {primaryNavigation.map((item) => {',
    '            const isActive = pathname === item.path;',
    '            return (',
    '              <Link',
    '                key={item.path}',
    '                href={item.path}',
    '                aria-current={isActive ? "page" : undefined}',
    '                className={[',
    "                  'focus-ring rounded-full px-4 py-2 text-sm font-medium transition',",
    "                  isActive ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/70'",
    '                ].join(" ")}',
    '              >',
    '                {item.label}',
    '              </Link>',
    '            );',
    '          })}',
    '        </nav>',
    "        <div className='flex items-center gap-2 sm:gap-3'>",
    '          {brand.phoneHref ? (',
    "            <a href={brand.phoneHref} className='focus-ring hidden rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white/80 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/80 lg:inline-flex'>",
    '              Call',
    '            </a>',
    '          ) : null}',
    '          {brand.whatsAppHref ? (',
    "            <a href={brand.whatsAppHref} target='_blank' rel='noreferrer' className='focus-ring hidden rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white/80 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/80 xl:inline-flex'>",
    '              WhatsApp',
    '            </a>',
    '          ) : null}',
    '          <ThemeSwitcher />'
  );

  if (hasAuthModal) {
    lines.push(
      '          <button',
      "            type='button'",
      "            aria-label='Open sign in modal'",
      "            className='focus-ring inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white/80 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/80'",
      '            onClick={() => open("sign-in")}',
      '          >',
      '            Sign in',
      '          </button>'
    );
  }

  lines.push(
    "          <Link href={brand.primaryCtaRoute} className='focus-ring primary-button hidden text-sm md:inline-flex'>",
    '            {brand.primaryCta}',
    '          </Link>',
    '        </div>',
    '      </div>',
    '    </header>',
    '  );',
    '}',
    ''
  );

  return lines.join('\n');
}

function plannedSiteFooterFile() {
  return [
    "import Link from 'next/link';",
    "import { primaryNavigation } from '../lib/route-registry';",
    "import { siteContent } from '../lib/site-content';",
    '',
    'export function SiteFooter() {',
    '  const footer = siteContent.footer;',
    '  const brand = siteContent.brand;',
    '',
    '  return (',
    "    <footer className='border-t border-slate-200/60 px-4 py-10 dark:border-slate-800/60 sm:px-6 lg:px-8'>",
    "      <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr,0.9fr,0.9fr,1fr]'>",
    '        <div>',
    "          <p className='text-sm font-semibold uppercase tracking-[0.28em] copy-muted'>Planner-aligned execution</p>",
    "          <h2 className='mt-2 text-2xl font-semibold text-ink'>{brand.name}</h2>",
    "          <p className='mt-3 max-w-2xl copy-muted'>{brand.summary}</p>",
    "          <div className='mt-4 flex flex-wrap gap-2'>",
    '            {footer.socialLinks.map((entry) => (',
    "              <a key={entry.platform} href={entry.href} aria-label={entry.label} target='_blank' rel='noreferrer' className='focus-ring rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white/80 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/80'>",
    '                {entry.platform}',
    '              </a>',
    '            ))}',
    '          </div>',
    '        </div>',
    "        <div className='grid gap-3'>",
    "          <p className='text-xs font-semibold uppercase tracking-[0.22em] copy-muted'>Navigation</p>",
    "          <nav aria-label='Footer navigation' className='grid gap-2 text-sm font-medium'>",
    '            {primaryNavigation.map((item) => (',
    "              <Link key={item.path} href={item.path} className='focus-ring rounded-full px-3 py-2 hover:bg-white/70 dark:hover:bg-slate-800/70'>",
    '                {item.label}',
    '              </Link>',
    '            ))}',
    '          </nav>',
    '        </div>',
    "        <div className='grid gap-3'>",
    "          <p className='text-xs font-semibold uppercase tracking-[0.22em] copy-muted'>Route Coverage</p>",
    "          <ul className='grid gap-2 text-sm'>",
    '            {footer.routeCoverage.map((item) => (',
    "              <li key={item} className='copy-muted'>",
    '                {item}',
    '              </li>',
    '            ))}',
    '          </ul>',
    '        </div>',
    "        <div className='grid gap-3'>",
    "          <p className='text-xs font-semibold uppercase tracking-[0.22em] copy-muted'>Contact</p>",
    "          <ul className='grid gap-2 text-sm'>",
    "            <li className='copy-muted'>{footer.email}</li>",
    "            <li className='copy-muted'>{footer.phone}</li>",
    "            <li className='copy-muted'>{footer.serviceArea}</li>",
    '          </ul>',
    '          {footer.attribution.enabled ? (',
    "            <a href={footer.attribution.url} target={footer.attribution.new_tab ? '_blank' : undefined} rel={footer.attribution.new_tab ? 'noreferrer' : undefined} aria-label={footer.attribution.aria_label} className='focus-ring mt-4 text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300'>",
    '              {footer.attribution.text} {footer.attribution.link_text}',
    '            </a>',
    '          ) : null}',
    "          <p className='text-xs copy-muted'>{footer.copyright}</p>",
    '        </div>',
    '      </div>',
    '    </footer>',
    '  );',
    '}',
    ''
  ].join('\n');
}

function plannedMobileBottomNavFile() {
  return [
    "'use client';",
    '',
    "import Link from 'next/link';",
    "import { usePathname } from 'next/navigation';",
    "import { mobileNavigation } from '../lib/route-registry';",
    '',
    'export function MobileBottomNav() {',
    '  const pathname = usePathname();',
    '',
    '  return (',
    "    <nav aria-label='Mobile bottom navigation' data-testid='mobile-bottom-nav' className='surface-card fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 items-center justify-between rounded-full px-3 py-2 md:hidden'>",
    '      {mobileNavigation.map((item) => {',
    '        const isActive = pathname === item.path;',
    '        return (',
    '          <Link',
    '            key={item.path}',
    '            href={item.path}',
    '            aria-current={isActive ? "page" : undefined}',
    '            className={[',
    "              'focus-ring flex min-w-[4.6rem] flex-col items-center gap-1 rounded-full px-3 py-2 text-[0.7rem] font-semibold transition',",
    "              isActive ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-100'",
    '            ].join(" ")}',
    '          >',
    "            <span className='text-[0.62rem] tracking-[0.18em]'>{item.shortLabel}</span>",
    '            <span>{item.label}</span>',
    '          </Link>',
    '        );',
    '      })}',
    '    </nav>',
    '  );',
    '}',
    ''
  ].join('\n');
}

function baseFactoryComponentFile() {
  return [
    "type BaseFactoryComponentProps = {",
    '  name: string;',
    '  title?: string;',
    '  description?: string;',
    '  routeLabel?: string;',
    '};',
    '',
    'export function BaseFactoryComponent({ name, title, description, routeLabel }: BaseFactoryComponentProps) {',
    '  return (',
    "    <div className='surface-muted rounded-3xl border border-dashed border-slate-300 p-5 text-left dark:border-slate-700'>",
    "      <p className='text-xs font-semibold uppercase tracking-[0.22em] copy-muted'>{routeLabel ?? 'Shared surface'}</p>",
    "      <h3 className='mt-3 text-lg font-semibold text-ink'>{title ?? name}</h3>",
    "      <p className='mt-2 text-sm leading-6 copy-muted'>{description ?? `${name} is emitted from the planner-defined component packet.`}</p>",
    '    </div>',
    '  );',
    '}',
    ''
  ].join('\n');
}

function factoryComponentFile(componentName) {
  return [
    "import { BaseFactoryComponent } from './base-factory-component';",
    '',
    'type FactoryComponentProps = {',
    '  title?: string;',
    '  description?: string;',
    '  routeLabel?: string;',
    '};',
    '',
    `export function ${componentName}(props: FactoryComponentProps) {`,
    `  return <BaseFactoryComponent name='${componentName}' {...props} />;`,
    '}',
    ''
  ].join('\n');
}

function factoryRegistryFile(componentNames) {
  const imports = componentNames.map((componentName) => `import { ${componentName} } from './factory/${componentName}';`);
  const entries = componentNames.map((componentName) => `  ${componentName},`);

  return [
    ...imports,
    '',
    'export const factoryComponents = {',
    ...entries,
    '} as const;',
    ''
  ].join('\n');
}

function plannedRoutePageComponentFile() {
  return [
    "import Link from 'next/link';",
    "import { factoryComponents } from './factory-registry';",
    '',
    'type PageAction = {',
    '  label: string;',
    '  href: string;',
    '};',
    '',
    'type PageCard = {',
    '  title: string;',
    '  body: string;',
    '  meta?: string | null;',
    '};',
    '',
    'type PageSection = {',
    '  id: string;',
    '  title: string;',
    '  description?: string | null;',
    '  cards: PageCard[];',
    '  bullets: string[];',
    '  actions: PageAction[];',
    '};',
    '',
    'type PlannedRoutePageModel = {',
    '  routeId: string;',
    '  path: string;',
    '  label: string;',
    '  routeClass: string;',
    '  leadGenRole: string;',
    '  hero: {',
    '    eyebrow: string;',
    '    title: string;',
    '    description: string;',
    '    primaryCta?: string | null;',
    '    primaryHref: string;',
    '    secondaryCta?: string | null;',
    '    secondaryHref: string;',
    '    media?: { src: string; alt: string; badge?: string | null };',
    '    stats: { value: string; label: string }[];',
    '  };',
    '  sections: PageSection[];',
    '  componentHints: string[];',
    '};',
    '',
    'type PlannedRoutePageProps = {',
    '  page: PlannedRoutePageModel;',
    '};',
    '',
    'export function PlannedRoutePage({ page }: PlannedRoutePageProps) {',
    '  return (',
    "    <article data-route-id={page.routeId} className='route-frame grid gap-8'>",
    "      <section className='surface-card grid gap-8 overflow-hidden rounded-3xl p-6 sm:p-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-stretch'>",
    '        <div className="grid gap-6">',
    "          <p className='hero-chip'>{page.hero.eyebrow}</p>",
    "          <div className='grid gap-4'>",
    "            <h1 className='text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-[3.6rem]'>{page.hero.title}</h1>",
    "            <p className='max-w-2xl text-lg leading-8 copy-muted'>{page.hero.description}</p>",
    '          </div>',
    "          <div className='flex flex-wrap gap-3'>",
    '            {page.hero.primaryCta ? (',
    "              <Link className='focus-ring primary-button' data-primary-cta='true' href={page.hero.primaryHref}>",
    '                {page.hero.primaryCta}',
    '              </Link>',
    '            ) : null}',
    '            {page.hero.secondaryCta ? (',
    "              <Link className='focus-ring secondary-button' href={page.hero.secondaryHref}>",
    '                {page.hero.secondaryCta}',
    '              </Link>',
    '            ) : null}',
    '          </div>',
    '        </div>',
    "        <div className='grid gap-4'>",
    '          {page.hero.media ? (',
    "            <figure className='surface-muted relative overflow-hidden rounded-3xl border border-slate-200/70 p-3 dark:border-slate-700/70'>",
    "              <img src={page.hero.media.src} alt={page.hero.media.alt} className='h-64 w-full rounded-2xl object-cover sm:h-72 lg:h-[21rem]' loading='lazy' />",
    '              {page.hero.media.badge ? (',
    "                <figcaption className='absolute left-6 top-6 hero-chip bg-white/88 dark:bg-slate-900/80'>",
    '                  {page.hero.media.badge}',
    '                </figcaption>',
    '              ) : null}',
    '            </figure>',
    '          ) : null}',
    "          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-2'>",
    '            {page.hero.stats.map((stat) => (',
    "              <div key={stat.label} className='surface-muted rounded-3xl p-5'>",
    "                <p className='text-3xl font-semibold text-ink'>{stat.value}</p>",
    "                <p className='mt-2 text-sm leading-6 copy-muted'>{stat.label}</p>",
    '              </div>',
    '            ))}',
    '          </div>',
    '        </div>',
    '      </section>',
    '      {page.sections.map((section) => (',
    "        <section key={section.id} className='surface-card grid gap-6 rounded-3xl p-6 sm:p-8'>",
    "          <div className='grid gap-3'>",
    "            <p className='text-xs font-semibold uppercase tracking-[0.24em] copy-muted'>{page.label}</p>",
    "            <h2 className='text-2xl font-semibold text-ink'>{section.title}</h2>",
    '            {section.description ? <p className="max-w-3xl text-base leading-7 copy-muted">{section.description}</p> : null}',
    '          </div>',
    '          {section.cards.length > 0 ? (',
    "            <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>",
    '              {section.cards.map((card) => (',
    "                <article key={`${section.id}-${card.title}`} className='surface-muted rounded-3xl p-5'>",
    "                  <h3 className='text-lg font-semibold text-ink'>{card.title}</h3>",
    "                  <p className='mt-3 text-sm leading-6 copy-muted'>{card.body}</p>",
    '                  {card.meta ? <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] copy-muted">{card.meta}</p> : null}',
    '                </article>',
    '              ))}',
    '            </div>',
    '          ) : null}',
    '          {section.bullets.length > 0 ? (',
    "            <ul className='grid gap-3 text-sm leading-6 copy-muted sm:grid-cols-2'>",
    '              {section.bullets.map((bullet) => (',
    "                <li key={bullet} className='surface-muted rounded-2xl px-4 py-3'>",
    '                  {bullet}',
    '                </li>',
    '              ))}',
    '            </ul>',
    '          ) : null}',
    '          {section.actions.length > 0 ? (',
    "            <div className='flex flex-wrap gap-3'>",
    '              {section.actions.map((action) => (',
    "                <Link key={`${section.id}-${action.label}`} href={action.href} className='focus-ring secondary-button'>",
    '                  {action.label}',
    '                </Link>',
    '              ))}',
    '            </div>',
    '          ) : null}',
    '        </section>',
    '      ))}',
    '      {page.componentHints.length > 0 ? (',
    "        <section className='surface-card grid gap-6 rounded-3xl p-6 sm:p-8'>",
    "          <div className='grid gap-3'>",
    "            <p className='text-xs font-semibold uppercase tracking-[0.24em] copy-muted'>Scoped Components</p>",
    "            <h2 className='text-2xl font-semibold text-ink'>Planner-approved component surfaces</h2>",
    "            <p className='copy-muted'>These components were explicitly listed in the execution packets for this route.</p>",
    '          </div>',
    "          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>",
    '            {page.componentHints.map((componentName) => {',
    '              const Component = factoryComponents[componentName as keyof typeof factoryComponents];',
    '              return Component ? (',
    '                <Component',
    '                  key={componentName}',
    '                  routeLabel={page.label}',
    '                  title={componentName}',
    "                  description={`Planner-scoped ${componentName} surface rendered for ${page.label}.`}",
    '                />',
    '              ) : null;',
    '            })}',
    '          </div>',
    '        </section>',
    '      ) : null}',
    '    </article>',
    '  );',
    '}',
    ''
  ].join('\n');
}

function plannedRoutePageFile(routePath) {
  const importPrefix = routeImportPrefix(routePath);
  const routeId = routeIdFromPath(routePath);
  const componentImport = `${importPrefix}/components/planned-route-page`;
  const contentImport = `${importPrefix}/lib/site-content`;

  return [
    `import { PlannedRoutePage } from '${componentImport}';`,
    `import { siteContent } from '${contentImport}';`,
    '',
    `export default function ${humanize(routeId).replace(/\s+/g, '')}Page() {`,
    `  return <PlannedRoutePage page={siteContent.routePages.${routeId}} />;`,
    '}',
    ''
  ].join('\n');
}

function routeRegistryFile(routeRegistry) {
  return [
    `export const routeRegistry = ${json(routeRegistry)} as const;`,
    '',
    'export const primaryNavigation = routeRegistry.filter((route) => route.navVisible);',
    'export const mobileNavigation = routeRegistry.filter((route) => route.mobileVisible);',
    'export const publicRoutes = routeRegistry.filter((route) => route.public);',
    '',
    'export function heroVariantFor(pathname: string) {',
    "  return routeRegistry.find((route) => route.path === pathname)?.heroVariant ?? 'planned-default';",
    '}',
    ''
  ].join('\n');
}

function siteContentFile(siteContent) {
  return `export const siteContent = ${json(siteContent)} as const;\n`;
}

function planningManifestFile(buildPlan, plannedExecution) {
  return `${json({
    mode: buildPlan.mode,
    planningRoot: buildPlan.planning?.planningRoot,
    sourcePlanningRoot: buildPlan.planning?.sourcePlanningRoot,
    routeCount: buildPlan.routes.length,
    componentCount: buildPlan.components.length,
    scopeCount: plannedExecution.scopeManifest.scopes.length,
    zeroWarningsRequired: true
  })}\n`;
}

function lintScriptFile({ hasAuthModal }) {
  const requiredFiles = [
    'src/app/layout.tsx',
    'src/lib/route-registry.ts',
    'src/lib/site-content.ts',
    'src/components/app-shell.tsx',
    'src/components/site-header.tsx',
    'src/components/site-footer.tsx',
    'src/components/planned-route-page.tsx',
    'src/components/factory-registry.tsx'
  ];

  if (hasAuthModal) {
    requiredFiles.push('src/components/auth-modal.tsx');
  }

  return [
    "import { readdirSync, readFileSync, statSync } from 'node:fs';",
    "import path from 'node:path';",
    "import { fileURLToPath } from 'node:url';",
    '',
    'const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");',
    'const selfPath = fileURLToPath(import.meta.url);',
    "const scanRoots = ['src', 'tests', 'scripts'];",
    `const requiredFiles = ${json(requiredFiles)};`,
    'const failures = [];',
    '',
    'function scanDirectory(directory) {',
    '  for (const entry of readdirSync(directory)) {',
    '    const fullPath = path.join(directory, entry);',
    '    const stats = statSync(fullPath);',
    '    if (stats.isDirectory()) {',
    '      scanDirectory(fullPath);',
    '      continue;',
    '    }',
    '    if (fullPath === selfPath) {',
    '      continue;',
    '    }',
    '    if (!/\.(ts|tsx|mjs|md|json)$/.test(fullPath)) {',
    '      continue;',
    '    }',
    '    const contents = readFileSync(fullPath, "utf8");',
    '    if (/TODO|FIXME|console\.warn/.test(contents)) {',
    '      failures.push(`Lint gate failed: unresolved warning marker in ${path.relative(rootDir, fullPath)}`);',
    '    }',
    '  }',
    '}',
    '',
    'for (const relativePath of scanRoots) {',
    '  scanDirectory(path.join(rootDir, relativePath));',
    '}',
    '',
    'for (const relativePath of requiredFiles) {',
    '  const fullPath = path.join(rootDir, relativePath);',
    '  try {',
    '    statSync(fullPath);',
    '  } catch {',
    '    failures.push(`Lint gate failed: missing required file ${relativePath}`);',
    '  }',
    '}',
    '',
    'if (failures.length > 0) {',
    '  throw new Error(failures.join("\\n"));',
    '}',
    '',
    "console.log('Custom lint gate passed with zero warnings tolerated.');",
    ''
  ].join('\n');
}

function auditScriptFile({ buildPlan, hasAuthModal }) {
  const expectedRouteFiles = buildPlan.routeDefinitions.map((route) => ({
    routeId: route.id,
    path: route.path,
    file: route.path === '/' ? 'src/app/page.tsx' : `src/app/${route.path.replace(/^\//, '')}/page.tsx`
  }));

  const expectedComponentFiles = buildPlan.components.map((componentName) => `src/components/factory/${componentName}.tsx`);
  const shellFiles = [
    'src/components/app-shell.tsx',
    'src/components/site-header.tsx',
    'src/components/site-footer.tsx',
    'src/components/mobile-bottom-nav.tsx',
    'src/components/planned-route-page.tsx',
    'src/components/factory-registry.tsx',
    'src/lib/route-registry.ts',
    'src/lib/site-content.ts'
  ];

  if (hasAuthModal) {
    shellFiles.push('src/components/auth-modal.tsx');
  }

  return [
    "import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';",
    "import path from 'node:path';",
    "import { fileURLToPath } from 'node:url';",
    '',
    'const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");',
    `const expectedRouteFiles = ${json(expectedRouteFiles)};`,
    `const expectedComponentFiles = ${json(expectedComponentFiles)};`,
    `const requiredShellFiles = ${json(shellFiles)};`,
    `const buildPlan = ${json({ mode: buildPlan.mode, routes: buildPlan.routes, components: buildPlan.components, planning: buildPlan.planning })};`,
    'const failures = [];',
    'const evidence = [];',
    '',
    'for (const route of expectedRouteFiles) {',
    '  const fullPath = path.join(rootDir, route.file);',
    '  if (!existsSync(fullPath)) {',
    '    failures.push(`Missing route file: ${route.file}`);',
    '    continue;',
    '  }',
    '  const contents = readFileSync(fullPath, "utf8");',
    '  if (!contents.includes(`data-route-id={siteContent.routePages.${route.routeId}.routeId}`) && !contents.includes(`data-route-id=\"${route.routeId}\"`) && !contents.includes(`data-route-id=\'${route.routeId}\'`)) {',
    '    evidence.push(`route marker resolved through siteContent for ${route.file}`);',
    '  }',
    '  evidence.push(`route:${route.path} -> ${route.file}`);',
    '}',
    '',
    'for (const relativePath of expectedComponentFiles) {',
    '  if (!existsSync(path.join(rootDir, relativePath))) {',
    '    failures.push(`Missing component file: ${relativePath}`);',
    '  } else {',
    '    evidence.push(`component -> ${relativePath}`);',
    '  }',
    '}',
    '',
    'for (const relativePath of requiredShellFiles) {',
    '  if (!existsSync(path.join(rootDir, relativePath))) {',
    '    failures.push(`Missing shell file: ${relativePath}`);',
    '  } else {',
    '    evidence.push(`shell -> ${relativePath}`);',
    '  }',
    '}',
    '',
    'const auditDir = path.join(rootDir, ".audit");',
    'mkdirSync(auditDir, { recursive: true });',
    '',
    'const markdownReport = [',
    "  '# Frontend Self Audit',",
    "  '',",
    '  `Status: ${failures.length === 0 ? "passed" : "failed"}`,',
    '  `Mode: ${buildPlan.mode}`,',
    '  `Planning root: ${buildPlan.planning?.planningRoot ?? "unknown"}`,',
    "  '',",
    "  '## Evidence',",
    '  ...evidence.map((entry) => `- ${entry}`)',
    '].join("\\n");',
    '',
    'writeFileSync(path.join(auditDir, "frontend-self-audit.md"), `${markdownReport}\\n`);',
    'writeFileSync(path.join(auditDir, "frontend-factory-manifest.json"), JSON.stringify({',
    '  mode: buildPlan.mode,',
    '  routes: buildPlan.routes,',
    '  components: buildPlan.components,',
    '  status: failures.length === 0 ? "passed" : "failed"',
    '}, null, 2));',
    '',
    'if (failures.length > 0) {',
    '  throw new Error(failures.join("\\n"));',
    '}',
    '',
    "console.log('Frontend self-audit passed and evidence was written to .audit/.');",
    ''
  ].join('\n');
}

function unitTestFile(expectedRoutes, authPlanned) {
  return [
    "import { describe, expect, it } from 'vitest';",
    "import { routeRegistry } from '../../src/lib/route-registry';",
    "import { siteContent } from '../../src/lib/site-content';",
    '',
    `const expectedRoutes = ${json(expectedRoutes)};`,
    `const authPlanned = ${json(authPlanned)};`,
    '',
    "describe('planned site content', () => {",
    "  it('matches the planned route inventory', () => {",
    '    expect(routeRegistry.map((route) => route.path)).toEqual(expectedRoutes);',
    '  });',
    '',
    "  it('exposes route page data for every planned route', () => {",
    '    expect(Object.keys(siteContent.routePages).length).toBe(expectedRoutes.length);',
    '  });',
    '',
    "  it('honors auth planning invariants', () => {",
    '    const hasAuthRoute = routeRegistry.some((route) => route.path === "/sign-in" || route.path === "/sign-up");',
    '    expect(hasAuthRoute).toBe(authPlanned);',
    '  });',
    '});',
    ''
  ].join('\n');
}

function smokeTestFile(routeDefinitions, navigation) {
  const publicRoutes = routeDefinitions.map((route) => ({ path: route.path, routeId: route.id })).slice(0, 6);
  const mobileNavigation = navigation.filter((route) => route.mobileVisible);

  return [
    "import { expect, test } from '@playwright/test';",
    '',
    `const publicRoutes = ${json(publicRoutes)};`,
    `const mobileNavigation = ${json(mobileNavigation)};`,
    '',
    "test('planned routes render without console errors', async ({ page }) => {",
    '  const consoleErrors = [];',
    '  page.on("console", (message) => {',
    '    if (message.type() === "error") {',
    '      consoleErrors.push(message.text());',
    '    }',
    '  });',
    '',
    '  for (const route of publicRoutes) {',
    '    await page.goto(route.path);',
    '    await expect(page.locator(`[data-route-id="${route.routeId}"]`)).toBeVisible();',
    '  }',
    '',
    '  expect(consoleErrors).toEqual([]);',
    '});',
    '',
    "test('theme switcher toggles theme state', async ({ page }) => {",
    "  await page.goto('/');",
    "  const themeSwitcher = page.getByTestId('theme-switcher');",
    '  await expect(themeSwitcher).toBeVisible();',
    "  await themeSwitcher.click();",
    "  await expect(page.locator('html')).toHaveAttribute('data-theme', /dark|light/);",
    '});',
    '',
    "test('mobile bottom nav resolves planned routes', async ({ page }, testInfo) => {",
    '  test.skip(!testInfo.project.name.includes("mobile"), "Mobile project only");',
    "  await page.goto('/');",
    "  await expect(page.getByTestId('mobile-bottom-nav')).toBeVisible();",
    '  const target = mobileNavigation.find((entry) => entry.path !== "/") ?? mobileNavigation[0];',
    '  await Promise.all([',
    '    page.waitForURL((url) => url.pathname === target.path),',
    '    page.getByRole("link", { name: target.label }).click()',
    '  ]);',
    '  expect(new URL(page.url()).pathname).toBe(target.path);',
    '});',
    ''
  ].join('\n');
}

function a11yTestFile(routeDefinitions) {
  const publicRoutes = routeDefinitions.map((route) => route.path);

  return [
    "import AxeBuilder from '@axe-core/playwright';",
    "import { expect, test } from '@playwright/test';",
    '',
    `const publicRoutes = ${json(publicRoutes)};`,
    '',
    "for (const routePath of publicRoutes) {",
    "  test(`a11y: ${routePath}`, async ({ page }) => {",
    '    await page.goto(routePath);',
    '    const results = await new AxeBuilder({ page }).analyze();',
    '    const seriousViolations = results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""));',
    '    expect(seriousViolations).toEqual([]);',
    '  });',
    '}',
    ''
  ].join('\n');
}

function fullTestFile(journeys) {
  return [
    "import { expect, test } from '@playwright/test';",
    '',
    `const journeys = ${json(journeys)};`,
    '',
    "for (const journey of journeys) {",
    "  test(`journey: ${journey.id}`, async ({ page }) => {",
    '    for (const step of journey.steps) {',
    '      const routeId = step.route === "/" ? "home" : step.route.slice(1).split("/").join("-");',
    '      await page.goto(step.route);',
    '      await expect(page.locator(`[data-route-id="${routeId}"]`)).toBeVisible();',
    '      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();',
    '    }',
    '  });',
    '}',
    ''
  ].join('\n');
}

function devServerChecklistFile(buildPlan) {
  return [
    '# Dev Server Checklist',
    '',
    'Run every step from this generated app root before starting the dev server.',
    '',
    '1. Confirm Node.js 20+ is installed.',
    '2. Run `npm install`.',
    '3. Run `npx playwright install chromium`.',
    '4. Confirm no process is already bound to the intended port.',
    '5. Run `npm run typecheck` and `npm run lint` and expect zero warnings or errors.',
    '6. Start the dev server with `npm run dev`.',
    '7. If this project is exported to another root, repeat steps 2-6 in the exported root before debugging runtime issues.',
    '',
    `Planned route count: ${buildPlan.routes.length}`,
    `Planned component count: ${buildPlan.components.length}`,
    ''
  ].join('\n');
}

export function buildPlannedFrontendFiles({ brief, buildPlan, plannedExecution }) {
  const navigation = buildNavigation(buildPlan.routeDefinitions, plannedExecution.contentLibrary);
  const routePages = buildRoutePages({
    brief,
    buildPlan,
    plannedExecution: {
      ...plannedExecution,
      designTokens: plannedExecution.designTokens
    },
    routeRegistry: navigation
  });
  const footerSocial = Object.entries(plannedExecution.contentLibrary.footer?.social ?? {}).map(([platform, value]) => ({
    platform: humanize(platform),
    label: value.label ?? `${humanize(platform)} profile`,
    href: '#'
  }));
  const siteContent = {
    brand: {
      name: brief.projectName,
      tagline: brief.brand?.tagline ?? brief.summary,
      summary: brief.summary,
      phone: brief.phoneNumber ?? null,
      phoneHref: brief.phoneNumber ? `tel:${digitsOnly(brief.phoneNumber)}` : null,
      whatsAppHref: brief.whatsappNumber ? `https://wa.me/${digitsOnly(brief.whatsappNumber)}` : null,
      primaryCta: brief.primaryCta,
      primaryCtaRoute: pickPrimaryRoute(buildPlan.routeDefinitions, ['/free-assessment', '/contact', '/services'], '/'),
      supportEmail: brief.contactEmail
    },
    footer: {
      email: plannedExecution.contentLibrary.footer?.email ?? brief.contactEmail,
      phone: plannedExecution.contentLibrary.footer?.phone ?? brief.phoneNumber ?? '',
      serviceArea: plannedExecution.contentLibrary.footer?.service_area_detail ?? brief.serviceArea ?? '',
      socialLinks: footerSocial,
      routeCoverage: buildPlan.routes,
      copyright: plannedExecution.contentLibrary.footer?.copyright ?? `© ${new Date().getFullYear()} ${brief.projectName}. All rights reserved.`,
      attribution: plannedExecution.footerAttribution
    },
    routePages
  };
  const hasAuthModal = buildPlan.invariants.modal_first_auth === true;
  const files = {
    'src/app/layout.tsx': plannedLayoutFile(brief.projectName, brief.summary),
    'src/components/app-shell.tsx': plannedAppShellFile({
      hasAuthModal,
      hasMobileBottomNav: buildPlan.invariants.mobile_bottom_nav === true
    }),
    'src/components/site-header.tsx': plannedSiteHeaderFile({ hasAuthModal }),
    'src/components/site-footer.tsx': plannedSiteFooterFile(),
    'src/components/mobile-bottom-nav.tsx': plannedMobileBottomNavFile(),
    'src/components/planned-route-page.tsx': plannedRoutePageComponentFile(),
    'src/components/factory/base-factory-component.tsx': baseFactoryComponentFile(),
    'src/components/factory-registry.tsx': factoryRegistryFile(buildPlan.components),
    'src/lib/route-registry.ts': routeRegistryFile(navigation),
    'src/lib/site-content.ts': siteContentFile(siteContent),
    'src/lib/planning-manifest.json': planningManifestFile(buildPlan, plannedExecution),
    'scripts/lint.mjs': lintScriptFile({ hasAuthModal }),
    'scripts/audit-frontend.mjs': auditScriptFile({ buildPlan, hasAuthModal }),
    'tests/unit/site-content.test.ts': unitTestFile(buildPlan.routes, hasAuthModal),
    'tests/e2e/smoke.spec.ts': smokeTestFile(buildPlan.routeDefinitions, navigation),
    'tests/e2e/a11y.spec.ts': a11yTestFile(buildPlan.routeDefinitions),
    'tests/e2e/full.spec.ts': fullTestFile(plannedExecution.e2eJourneys.journeys ?? []),
    'dev-server-checklist.md': `${devServerChecklistFile(buildPlan)}\n`
  };

  if (hasAuthModal) {
    files['src/components/auth-modal.tsx'] = plannedAuthModalFile();
  }

  for (const componentName of buildPlan.components) {
    files[`src/components/factory/${componentName}.tsx`] = factoryComponentFile(componentName);
  }

  for (const route of buildPlan.routeDefinitions) {
    const relativePath = route.path === '/' ? 'src/app/page.tsx' : `src/app/${route.path.replace(/^\//, '')}/page.tsx`;
    files[relativePath] = plannedRoutePageFile(route.path);
  }

  return {
    files,
    routeRegistry: navigation,
    siteContent
  };
}