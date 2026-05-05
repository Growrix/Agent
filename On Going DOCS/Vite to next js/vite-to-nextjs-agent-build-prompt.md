# MASTER BUILD PROMPT
## Vite → Next.js Agentic Migration System (One-Shot)

> **Instructions for the AI reading this:** Build the complete system described below from scratch, file by file. After every file is written, run the e2e test suite described at the end. Do not stop until the test suite passes. Ask no clarifying questions — all decisions are specified here.

---

## 1. WHAT YOU ARE BUILDING

A Node.js CLI tool called `migrate-to-next` that:
- Accepts a Vite + React + TypeScript project folder as input
- Produces a fully working, pixel-perfect Next.js 14 App Router project as output
- Uses Claude claude-sonnet-4-20250514 as the AI backbone for all intelligent decisions
- Runs a 7-phase agentic pipeline: Analysis → Planning → Scaffold → Migration (parallel, 5 agents) → Validation → Visual Regression → Visual Fix
- Guarantees pixel-perfect output by running Playwright screenshot diffs between the Vite original and the Next.js output, iterating with an AI fix loop until diff is under 1% per route

---

## 2. TECH STACK

```
Runtime:         Node.js 20+ with TypeScript (strict mode)
LLM:             Anthropic SDK (@anthropic-ai/sdk), model: claude-sonnet-4-20250514
AST transforms:  ts-morph (TypeScript-aware rewrites, never regex on code)
File I/O:        fs/promises, fast-glob
Process:         execa (shell commands)
Parallelism:     p-limit (max 5 concurrent LLM calls)
Visual testing:  Playwright + pixelmatch + pngjs
CLI:             commander
Validation:      zod (schema for all manifest/plan types)
Test runner:     vitest
```

---

## 3. FULL PROJECT STRUCTURE TO CREATE

```
migrate-to-next/
├── src/
│   ├── cli.ts
│   ├── orchestrator.ts
│   ├── types/
│   │   ├── manifest.ts
│   │   └── plan.ts
│   ├── utils/
│   │   ├── llm.ts
│   │   ├── file.ts
│   │   └── ast.ts
│   ├── agents/
│   │   ├── phase1-analysis.ts
│   │   ├── phase2-planning.ts
│   │   ├── phase3-scaffold.ts
│   │   ├── phase4a-routing.ts
│   │   ├── phase4b-components.ts
│   │   ├── phase4c-style.ts
│   │   ├── phase4d-config.ts
│   │   ├── phase4e-assets.ts
│   │   ├── phase5-validation.ts
│   │   ├── phase6-visual-regression.ts
│   │   └── phase7-visual-fix.ts
│   └── prompts/
│       ├── analysis.ts
│       ├── planning.ts
│       ├── routing.ts
│       ├── components.ts
│       ├── style.ts
│       ├── config.ts
│       ├── assets.ts
│       ├── validation-fix.ts
│       └── visual-fix.ts
├── fixtures/
│   └── sample-vite-app/         ← you will CREATE this test fixture (spec below)
├── tests/
│   └── e2e/
│       └── migration.test.ts
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

---

## 4. TYPE DEFINITIONS

### `src/types/manifest.ts`

```typescript
import { z } from 'zod';

export const RouteSchema = z.object({
  path: z.string(),
  componentPath: z.string(),
  layoutPath: z.string().optional(),
  isDynamic: z.boolean(),
  params: z.array(z.string()),
  isIndex: z.boolean(),
});

export const EnvVarSchema = z.object({
  from: z.string(),   // VITE_FOO
  to: z.string(),     // NEXT_PUBLIC_FOO
  value: z.string().optional(),
});

export const AliasSchema = z.object({
  find: z.string(),   // e.g. "@"
  replacement: z.string(), // e.g. "./src"
});

export const ProxyRuleSchema = z.object({
  from: z.string(),
  to: z.string(),
});

export const DependencySchema = z.object({
  name: z.string(),
  version: z.string(),
  isViteSpecific: z.boolean(),
  nextEquivalent: z.string().optional(),
});

export const FontSchema = z.object({
  type: z.enum(['google', 'local', 'system']),
  family: z.string(),
  weights: z.array(z.string()),
  src: z.string().optional(),
});

export const MigrationManifestSchema = z.object({
  projectName: z.string(),
  routes: z.array(RouteSchema),
  aliases: z.array(AliasSchema),
  envVars: z.array(EnvVarSchema),
  proxyRules: z.array(ProxyRuleSchema),
  providers: z.array(z.string()),
  cssFramework: z.enum(['tailwind', 'css-modules', 'styled-components', 'emotion', 'vanilla', 'mixed']),
  cssInJsLibrary: z.string().optional(),
  fonts: z.array(FontSchema),
  htmlMeta: z.object({
    title: z.string(),
    description: z.string().optional(),
    viewport: z.string().optional(),
    charset: z.string().optional(),
    extraTags: z.array(z.string()),
  }),
  dependencies: z.array(DependencySchema),
  tailwindConfig: z.any().optional(),
  baseUrl: z.string().optional(),
  svgStrategy: z.enum(['img-tag', 'svgr', 'none']),
  hasStorybook: z.boolean(),
  allSourceFiles: z.array(z.string()),
  publicFiles: z.array(z.string()),
});

export type MigrationManifest = z.infer<typeof MigrationManifestSchema>;
```

### `src/types/plan.ts`

```typescript
import { z } from 'zod';

export const FileOperationSchema = z.object({
  sourcePath: z.string(),
  targetPath: z.string(),
  agentPhase: z.enum(['routing', 'components', 'style', 'config', 'assets']),
  transformations: z.array(z.string()),
  needsUseClient: z.boolean().optional(),
  isNewFile: z.boolean(),
  skipIfExists: z.boolean(),
});

export const MigrationPlanSchema = z.object({
  operations: z.array(FileOperationSchema),
  newFilesToGenerate: z.array(z.object({
    targetPath: z.string(),
    description: z.string(),
    agentPhase: z.string(),
  })),
  dependenciesToRemove: z.array(z.string()),
  dependenciesToAdd: z.array(z.string()),
  nextConfigRules: z.array(z.string()),
  tsconfigPathRules: z.array(z.object({ alias: z.string(), path: z.string() })),
});

export type MigrationPlan = z.infer<typeof MigrationPlanSchema>;
export type FileOperation = z.infer<typeof FileOperationSchema>;
```

---

## 5. UTILITY MODULES

### `src/utils/llm.ts`

Wrap all Claude API calls here. All agents use this module — never call Anthropic SDK directly in agent files.

```typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MODEL = 'claude-sonnet-4-20250514';

export async function callClaude(opts: {
  systemPrompt: string;
  userPrompt: string;
  maxTokens?: number;
  expectJson?: boolean;
}): Promise<string> {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: opts.maxTokens ?? 8096,
    system: opts.systemPrompt,
    messages: [{ role: 'user', content: opts.userPrompt }],
  });
  const text = response.content.find(b => b.type === 'text')?.text ?? '';
  if (opts.expectJson) {
    // Strip markdown code fences if present
    return text.replace(/^```(?:json)?\n?/m, '').replace(/\n?```$/m, '').trim();
  }
  return text;
}

export async function callClaudeWithVision(opts: {
  systemPrompt: string;
  userPrompt: string;
  imageBase64: string;
  mediaType: 'image/png' | 'image/jpeg';
  maxTokens?: number;
}): Promise<string> {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: opts.maxTokens ?? 4096,
    system: opts.systemPrompt,
    messages: [{
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: opts.mediaType, data: opts.imageBase64 } },
        { type: 'text', text: opts.userPrompt },
      ],
    }],
  });
  return response.content.find(b => b.type === 'text')?.text ?? '';
}
```

### `src/utils/file.ts`

```typescript
import { readFile, writeFile, mkdir, copyFile, readdir, stat } from 'fs/promises';
import { dirname, resolve, relative } from 'path';
import fg from 'fast-glob';

export async function readFileText(path: string): Promise<string> {
  return readFile(path, 'utf-8');
}

export async function writeFileText(path: string, content: string): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, 'utf-8');
}

export async function globFiles(pattern: string, cwd: string): Promise<string[]> {
  return fg(pattern, { cwd, absolute: true, dot: true });
}

export async function copyDir(src: string, dest: string): Promise<void> {
  const files = await fg('**/*', { cwd: src, absolute: false, dot: true });
  for (const file of files) {
    const srcFile = resolve(src, file);
    const destFile = resolve(dest, file);
    await mkdir(dirname(destFile), { recursive: true });
    await copyFile(srcFile, destFile);
  }
}

export async function fileExists(path: string): Promise<boolean> {
  try { await stat(path); return true; } catch { return false; }
}

export function toRelative(from: string, to: string): string {
  return relative(from, to);
}
```

### `src/utils/ast.ts`

Use `ts-morph` for all code transformations. Never use string replace on TypeScript source.

```typescript
import { Project, SourceFile, SyntaxKind } from 'ts-morph';

export function createProject(tsConfigPath?: string): Project {
  return new Project({ tsConfigFilePath: tsConfigPath, skipAddingFilesFromTsConfig: true });
}

export function hasHook(source: SourceFile, hookName: string): boolean {
  return source.getDescendantsOfKind(SyntaxKind.CallExpression)
    .some(call => call.getExpression().getText() === hookName);
}

export function hasClientOnlyPattern(source: SourceFile): boolean {
  const clientHooks = ['useState', 'useEffect', 'useReducer', 'useRef', 'useCallback',
    'useMemo', 'useLayoutEffect', 'useImperativeHandle', 'useContext'];
  const clientApis = ['window', 'document', 'navigator', 'localStorage', 'sessionStorage'];
  const text = source.getFullText();
  return clientHooks.some(h => hasHook(source, h)) ||
    clientApis.some(api => text.includes(api + '.'));
}

export function addUseClientDirective(source: SourceFile): void {
  const text = source.getFullText();
  if (!text.startsWith('"use client"') && !text.startsWith("'use client'")) {
    source.insertText(0, '"use client";\n\n');
  }
}

export function replaceImportSource(source: SourceFile, from: string, to: string): void {
  source.getImportDeclarations()
    .filter(d => d.getModuleSpecifierValue() === from)
    .forEach(d => d.setModuleSpecifier(to));
}
```

---

## 6. AGENT PROMPTS

### `src/prompts/analysis.ts`

```typescript
export const ANALYSIS_SYSTEM = `You are an expert frontend architect specializing in Vite and Next.js migrations.
Your job is to analyze a Vite + React + TypeScript project and produce a complete, structured MigrationManifest JSON.
You must output ONLY valid JSON — no markdown fences, no explanation, no preamble.
Be thorough. Missing information in the manifest causes downstream migration failures.`;

export function buildAnalysisPrompt(files: Record<string, string>): string {
  const fileSection = Object.entries(files)
    .map(([path, content]) => `=== FILE: ${path} ===\n${content}`)
    .join('\n\n');

  return `Analyze this Vite project and return a MigrationManifest JSON object.

${fileSection}

Return a JSON object matching this exact schema:
{
  "projectName": string,
  "routes": [{ "path": string, "componentPath": string, "layoutPath"?: string, "isDynamic": boolean, "params": string[], "isIndex": boolean }],
  "aliases": [{ "find": string, "replacement": string }],
  "envVars": [{ "from": string, "to": string, "value"?: string }],
  "proxyRules": [{ "from": string, "to": string }],
  "providers": string[],
  "cssFramework": "tailwind"|"css-modules"|"styled-components"|"emotion"|"vanilla"|"mixed",
  "cssInJsLibrary"?: string,
  "fonts": [{ "type": "google"|"local"|"system", "family": string, "weights": string[], "src"?: string }],
  "htmlMeta": { "title": string, "description"?: string, "viewport"?: string, "charset"?: string, "extraTags": string[] },
  "dependencies": [{ "name": string, "version": string, "isViteSpecific": boolean, "nextEquivalent"?: string }],
  "tailwindConfig"?: object,
  "baseUrl"?: string,
  "svgStrategy": "img-tag"|"svgr"|"none",
  "hasStorybook": boolean,
  "allSourceFiles": string[],
  "publicFiles": string[]
}

Rules:
- For envVars: rename all VITE_* to NEXT_PUBLIC_*, include actual values from .env files if present
- For routes: inspect React Router v5/v6 <Route> and <Routes> declarations in App.tsx or router files
- For providers: list every context provider wrapping the app root in main.tsx (e.g. QueryClientProvider, ThemeProvider)
- For svgStrategy: "svgr" if vite-plugin-svgr is in vite.config, "img-tag" if SVGs are used as <img src>, "none" if no SVGs
- Mark isViteSpecific=true for: vite, @vitejs/*, vite-plugin-*, react-router-dom (replaced by next navigation)
- For cssInJsLibrary: extract the library name if styled-components or @emotion/* is in dependencies`;
}
```

### `src/prompts/planning.ts`

```typescript
import type { MigrationManifest } from '../types/manifest';

export const PLANNING_SYSTEM = `You are a Next.js 14 App Router migration planner.
Given a MigrationManifest, produce a precise MigrationPlan JSON.
Output ONLY valid JSON. No markdown, no explanation.`;

export function buildPlanningPrompt(manifest: MigrationManifest): string {
  return `Given this MigrationManifest, produce a MigrationPlan JSON.

MANIFEST:
${JSON.stringify(manifest, null, 2)}

Return a JSON object with this shape:
{
  "operations": [
    {
      "sourcePath": string,
      "targetPath": string,
      "agentPhase": "routing"|"components"|"style"|"config"|"assets",
      "transformations": string[],
      "needsUseClient"?: boolean,
      "isNewFile": boolean,
      "skipIfExists": boolean
    }
  ],
  "newFilesToGenerate": [
    { "targetPath": string, "description": string, "agentPhase": string }
  ],
  "dependenciesToRemove": string[],
  "dependenciesToAdd": string[],
  "nextConfigRules": string[],
  "tsconfigPathRules": [{ "alias": string, "path": string }]
}

ROUTING RULES — apply these deterministically:
- src/pages/Home.tsx with route "/" → app/page.tsx
- src/pages/About.tsx with route "/about" → app/about/page.tsx
- Route with param "/users/:id" → app/users/[id]/page.tsx
- Shared layout component → app/layout.tsx
- 404 component → app/not-found.tsx
- Each route's loader/suspense boundary → app/{route}/loading.tsx
- ErrorBoundary per route → app/{route}/error.tsx

COMPONENT RULES:
- Mark needsUseClient=true if component uses: useState, useEffect, useReducer, useRef,
  useCallback, useMemo, useLayoutEffect, onClick, onChange, window, document,
  localStorage, sessionStorage, useContext, any animation library hook
- transformations array must list every change needed: e.g.
  ["add use client directive", "replace react-router useNavigate with next/navigation useRouter",
   "replace <img> with next/image", "replace <a href> with next/link"]

CONFIG RULES:
- vite.config proxy rules → next.config.ts rewrites()
- resolve.alias → next.config.ts webpack alias + tsconfig paths
- base path → next.config.ts basePath
- svgr plugin → @svgr/webpack in next.config.ts webpack config

STYLE RULES:
- Google Fonts <link> in index.html → next/font/google in app/layout.tsx
- Local fonts → next/font/local in app/fonts.ts
- styled-components → add registry file at src/lib/styled-components-registry.tsx and wire into layout
- @emotion → add cache provider at src/lib/emotion-cache.tsx and wire into layout
- Global CSS files → imported in app/layout.tsx in correct order (reset → tokens → globals → tailwind)

DEPENDENCIES:
- dependenciesToRemove: ["vite", "@vitejs/plugin-react", "react-router-dom", "vite-plugin-svgr"] (any that apply)
- dependenciesToAdd: ["next", "next-safe-navigation"] plus css-in-js SSR packages if needed`;
}
```

### `src/prompts/routing.ts`

```typescript
export const ROUTING_SYSTEM = `You are an expert Next.js 14 App Router developer.
Convert Vite + React Router components into Next.js App Router page and layout files.
Output ONLY the complete TypeScript file content — no explanation, no markdown fences.`;

export function buildRoutingPrompt(opts: {
  sourceContent: string;
  sourcePath: string;
  targetPath: string;
  transformations: string[];
  manifest: object;
}): string {
  return `Convert this React Router page component to a Next.js App Router page.

SOURCE FILE (${opts.sourcePath}):
${opts.sourceContent}

TARGET PATH: ${opts.targetPath}
REQUIRED TRANSFORMATIONS:
${opts.transformations.map((t, i) => `${i + 1}. ${t}`).join('\n')}

MANIFEST CONTEXT:
${JSON.stringify(opts.manifest, null, 2)}

RULES:
- Default export must be an async function if it fetches data server-side, or a regular function if client-only
- Replace useNavigate() → useRouter() from 'next/navigation'
- Replace useParams() → use the params prop passed to page components (type: Promise<{id: string}>)
- Replace useLocation() → usePathname() + useSearchParams() from 'next/navigation'
- Replace <Link to="..."> → <Link href="..."> from 'next/link'
- Replace <Navigate to="..."> → redirect('...') from 'next/navigation'
- For dynamic params in Next.js 14: page props are { params: Promise<{slug: string}>, searchParams: Promise<{...}> }
- Use generateMetadata() export for page-level SEO metadata
- If component had React.lazy/Suspense → use dynamic() from 'next/dynamic'
- Preserve all business logic, UI, and styling exactly

Output the complete converted TypeScript file.`;
}
```

### `src/prompts/components.ts`

```typescript
export const COMPONENTS_SYSTEM = `You are an expert Next.js 14 React developer.
Migrate React components from a Vite project to Next.js App Router.
Output ONLY the complete TypeScript file content — no explanation, no markdown fences.`;

export function buildComponentPrompt(opts: {
  sourceContent: string;
  sourcePath: string;
  targetPath: string;
  needsUseClient: boolean;
  transformations: string[];
}): string {
  return `Migrate this React component for Next.js App Router.

SOURCE (${opts.sourcePath}):
${opts.sourceContent}

TARGET PATH: ${opts.targetPath}
NEEDS USE CLIENT: ${opts.needsUseClient}
TRANSFORMATIONS:
${opts.transformations.map((t, i) => `${i + 1}. ${t}`).join('\n')}

RULES:
${opts.needsUseClient ? '- FIRST LINE must be: "use client"\n' : ''}
- Replace import.meta.env.VITE_* → process.env.NEXT_PUBLIC_*
- Replace <img src="..." /> → <Image src="..." width={N} height={N} alt="..." /> from 'next/image'
  (infer width/height from usage context; default to width={800} height={600} if unknown)
- Replace <a href="..."> → <Link href="..."> from 'next/link' (for internal links only)
- Replace React.lazy(() => import('...')) → dynamic(() => import('...'), {ssr: false}) from 'next/dynamic'
- All event handlers, useState, useEffect etc. are fine in "use client" components
- Preserve ALL styling, classNames, logic, and structure exactly

Output the complete migrated TypeScript file.`;
}
```

### `src/prompts/style.ts`

```typescript
import type { MigrationManifest } from '../types/manifest';

export const STYLE_SYSTEM = `You are a Next.js 14 styling expert.
Your job is to produce correctly structured style-layer files for a Next.js App Router project.
Output ONLY the complete file content — no explanation, no markdown fences.`;

export function buildFontFilePrompt(manifest: MigrationManifest): string {
  return `Create a Next.js fonts.ts file for these fonts:
${JSON.stringify(manifest.fonts, null, 2)}

Output a TypeScript file at src/app/fonts.ts that:
- Imports each font from 'next/font/google' (for google type) or 'next/font/local' (for local type)
- Exports each font as a named const
- Example for Google: export const inter = Inter({ subsets: ['latin'], weight: ['400','600'] })
- Example for local: export const myFont = localFont({ src: '../fonts/MyFont.woff2' })`;
}

export function buildStyledComponentsRegistryPrompt(): string {
  return `Create a styled-components SSR registry for Next.js App Router.
Output the complete file for src/lib/styled-components-registry.tsx.
It must use ServerStyleSheet from styled-components and useServerInsertedHTML from next/navigation.
Follow the official Next.js docs pattern exactly.`;
}

export function buildEmotionCachePrompt(): string {
  return `Create an Emotion CSS cache provider for Next.js App Router.
Output the complete file for src/lib/emotion-cache.tsx.
It must be a "use client" component using createCache from @emotion/cache and useServerInsertedHTML.
Follow the official Next.js docs pattern exactly.`;
}

export function buildRootLayoutPrompt(manifest: MigrationManifest, fontFile: string, providers: string): string {
  return `Create the Next.js root layout file at src/app/layout.tsx.

MANIFEST:
${JSON.stringify(manifest, null, 2)}

FONTS FILE CONTENT:
${fontFile}

PROVIDERS FILE CONTENT:
${providers}

RULES:
- Import fonts from '@/app/fonts' and apply their className to the <html> element
- Import and use Providers from '@/lib/providers'
- Set metadata export: { title: "${manifest.htmlMeta.title}", description: "${manifest.htmlMeta.description ?? ''}" }
- Import global CSS in this order: reset.css → design-tokens.css → globals.css → tailwind directives
- viewport meta if present: export const viewport = { width: 'device-width', initialScale: 1 }
- ${manifest.cssInJsLibrary === 'styled-components' ? 'Wrap children with StyledComponentsRegistry from @/lib/styled-components-registry' : ''}
- ${manifest.cssInJsLibrary === '@emotion/react' || manifest.cssInJsLibrary === '@emotion/styled' ? 'Wrap children with EmotionCache from @/lib/emotion-cache' : ''}
- Must be a Server Component (no "use client")

Output the complete layout.tsx file.`;
}
```

### `src/prompts/config.ts`

```typescript
import type { MigrationManifest } from '../types/manifest';

export const CONFIG_SYSTEM = `You are a Next.js 14 configuration expert.
Output ONLY the complete file content — no explanation, no markdown fences.`;

export function buildNextConfigPrompt(manifest: MigrationManifest): string {
  return `Generate the next.config.ts file for this project.

MANIFEST:
${JSON.stringify(manifest, null, 2)}

RULES:
- Use "import type { NextConfig } from 'next'"
- basePath: "${manifest.baseUrl ?? ''}" (omit if empty)
- Add async rewrites() for these proxy rules: ${JSON.stringify(manifest.proxyRules)}
- Add webpack alias config for these aliases: ${JSON.stringify(manifest.aliases)}
- ${manifest.svgStrategy === 'svgr' ? "Add SVGR webpack rule: test: /\\.svg$/, use: ['@svgr/webpack']" : ''}
- ${manifest.cssInJsLibrary === 'styled-components' ? "Add: compiler: { styledComponents: true }" : ''}
- images.remotePatterns: allow all HTTPS sources (open config for migration ease)
- experimental.typedRoutes: true

Output the complete next.config.ts file.`;
}

export function buildTsConfigPrompt(manifest: MigrationManifest): string {
  return `Generate a tsconfig.json for a Next.js 14 App Router TypeScript project.

PATH ALIASES TO INCLUDE:
${JSON.stringify(manifest.aliases, null, 2)}

RULES:
- target: "ES2017", lib: ["dom","dom.iterable","esnext"], module: "esnext"
- moduleResolution: "bundler", jsx: "preserve"
- strict: true, noEmit: true
- paths: map each alias find → replacement relative to src/ with /* suffix
- Always include "@/*": ["./src/*"] as the base alias
- include: ["next-env.d.ts","**/*.ts","**/*.tsx",".next/types/**/*.ts"]
- exclude: ["node_modules"]

Output the complete tsconfig.json.`;
}

export function buildEnvFilePrompt(manifest: MigrationManifest): string {
  return `Generate a .env.local file with these renamed environment variables:
${manifest.envVars.map(e => `${e.to}=${e.value ?? 'REPLACE_ME'}`).join('\n')}

Also generate a .env.example with the same keys but empty values.
Output format — two sections separated by "===ENV_EXAMPLE===":
First section: .env.local content
===ENV_EXAMPLE===
Second section: .env.example content`;
}
```

### `src/prompts/visual-fix.ts`

```typescript
export const VISUAL_FIX_SYSTEM = `You are a CSS and Next.js expert fixing visual regressions.
You are given a screenshot diff image and the source files responsible for the visual difference.
Output ONLY the fixed file content — no explanation, no markdown fences.
Fix only what the diff shows is broken. Do not refactor or change anything else.`;

export function buildVisualFixPrompt(opts: {
  route: string;
  diffPercentage: number;
  relevantFiles: Record<string, string>;
  diffDescription: string;
}): string {
  return `Fix the visual regression on route "${opts.route}".
Diff percentage: ${opts.diffPercentage.toFixed(2)}% of pixels differ.

The diff image (attached) shows: red pixels = areas where Next.js output differs from Vite original.

RELEVANT FILES:
${Object.entries(opts.relevantFiles).map(([p, c]) => `=== ${p} ===\n${c}`).join('\n\n')}

DIFF DESCRIPTION:
${opts.diffDescription}

Identify which file(s) need fixing. For each file that needs a change, output:
===FILE: path/to/file.tsx===
[complete corrected file content]
===END===

Common causes to check:
1. Font not loading → check layout.tsx font className is applied to html element
2. Spacing difference → CSS import order, missing global resets
3. Color difference → CSS variable not defined, missing tailwind config
4. Layout shift → next/image missing width/height or layout prop
5. CSS-in-JS flash → registry not wired into layout
6. Missing animation → component needs "use client" directive`;
}
```

### `src/prompts/validation-fix.ts`

```typescript
export const VALIDATION_FIX_SYSTEM = `You are a TypeScript and Next.js expert fixing migration errors.
You receive a TypeScript or ESLint error and the relevant source file.
Output ONLY the complete fixed file content — no explanation, no markdown fences.`;

export function buildValidationFixPrompt(opts: {
  error: string;
  filePath: string;
  fileContent: string;
  relatedFiles?: Record<string, string>;
}): string {
  return `Fix this TypeScript/build error in a Next.js 14 App Router project.

ERROR:
${opts.error}

FILE TO FIX (${opts.filePath}):
${opts.fileContent}

${opts.relatedFiles ? `RELATED FILES:\n${Object.entries(opts.relatedFiles).map(([p, c]) => `=== ${p} ===\n${c}`).join('\n\n')}` : ''}

Fix the error. Preserve all existing functionality.
Output the complete corrected file.`;
}
```

---

## 7. AGENT IMPLEMENTATIONS

### `src/agents/phase1-analysis.ts`

```typescript
import { globFiles, readFileText } from '../utils/file';
import { callClaude } from '../utils/llm';
import { ANALYSIS_SYSTEM, buildAnalysisPrompt } from '../prompts/analysis';
import { MigrationManifestSchema, type MigrationManifest } from '../types/manifest';

const KEY_FILES = [
  'package.json', 'vite.config.ts', 'vite.config.js',
  'tsconfig.json', 'index.html', 'tailwind.config.ts', 'tailwind.config.js',
  'src/main.tsx', 'src/main.ts', 'src/App.tsx', 'src/App.ts',
  'src/router.tsx', 'src/router.ts', 'src/routes.tsx', 'src/routes.ts',
  '.env', '.env.local', '.env.development',
];

export async function runAnalysisAgent(projectDir: string): Promise<MigrationManifest> {
  console.log('🔍 Phase 1: Analysis...');

  const files: Record<string, string> = {};

  // Read key config files
  for (const f of KEY_FILES) {
    const path = `${projectDir}/${f}`;
    try { files[f] = await readFileText(path); } catch { /* skip if missing */ }
  }

  // Read all source files (limit to 60 files to fit context)
  const srcFiles = await globFiles('src/**/*.{ts,tsx,css,scss}', projectDir);
  const pageFiles = srcFiles.filter(f =>
    f.includes('/pages/') || f.includes('/routes/') || f.includes('/layouts/')
  );
  const otherSrc = srcFiles.filter(f => !pageFiles.includes(f)).slice(0, 30);

  for (const f of [...pageFiles, ...otherSrc]) {
    const rel = f.replace(projectDir + '/', '');
    files[rel] = await readFileText(f);
  }

  const raw = await callClaude({
    systemPrompt: ANALYSIS_SYSTEM,
    userPrompt: buildAnalysisPrompt(files),
    maxTokens: 8096,
    expectJson: true,
  });

  const parsed = JSON.parse(raw);
  return MigrationManifestSchema.parse(parsed);
}
```

### `src/agents/phase2-planning.ts`

```typescript
import { callClaude } from '../utils/llm';
import { PLANNING_SYSTEM, buildPlanningPrompt } from '../prompts/planning';
import { MigrationPlanSchema, type MigrationPlan } from '../types/plan';
import type { MigrationManifest } from '../types/manifest';

export async function runPlanningAgent(manifest: MigrationManifest): Promise<MigrationPlan> {
  console.log('📋 Phase 2: Planning...');

  const raw = await callClaude({
    systemPrompt: PLANNING_SYSTEM,
    userPrompt: buildPlanningPrompt(manifest),
    maxTokens: 8096,
    expectJson: true,
  });

  const parsed = JSON.parse(raw);
  return MigrationPlanSchema.parse(parsed);
}
```

### `src/agents/phase3-scaffold.ts`

```typescript
import { execa } from 'execa';
import { writeFileText, fileExists } from '../utils/file';
import type { MigrationManifest } from '../types/manifest';
import type { MigrationPlan } from '../types/plan';

export async function runScaffoldAgent(
  outputDir: string,
  manifest: MigrationManifest,
  plan: MigrationPlan
): Promise<void> {
  console.log('🏗️  Phase 3: Scaffolding Next.js project...');

  if (!await fileExists(`${outputDir}/package.json`)) {
    await execa('npx', [
      'create-next-app@latest', outputDir,
      '--typescript', '--tailwind', '--app', '--src-dir',
      '--import-alias', '@/*', '--no-git', '--yes',
    ], { stdio: 'inherit' });
  }

  // Install project dependencies (minus Vite-specific ones)
  const toAdd = plan.dependenciesToAdd.filter(d => d.trim());
  if (toAdd.length > 0) {
    await execa('npm', ['install', ...toAdd], { cwd: outputDir, stdio: 'inherit' });
  }

  // Remove Vite-specific deps
  const toRemove = plan.dependenciesToRemove.filter(d => d.trim());
  if (toRemove.length > 0) {
    try {
      await execa('npm', ['uninstall', ...toRemove], { cwd: outputDir, stdio: 'inherit' });
    } catch { /* some may not be installed */ }
  }

  // Create global config module
  await writeFileText(`${outputDir}/src/config/index.ts`, buildConfigModule(manifest));

  // Create providers shell
  await writeFileText(`${outputDir}/src/lib/providers.tsx`, buildProvidersShell(manifest));

  console.log('✅ Scaffold complete.');
}

function buildConfigModule(manifest: MigrationManifest): string {
  const lines = manifest.envVars.map(e =>
    `  ${toCamelCase(e.to.replace('NEXT_PUBLIC_', ''))}: process.env.${e.to},`
  ).join('\n');
  return `export const config = {\n${lines}\n} as const;\n`;
}

function buildProvidersShell(manifest: MigrationManifest): string {
  return `"use client";\nimport { type ReactNode } from 'react';\n\nexport function Providers({ children }: { children: ReactNode }) {\n  // TODO: wire in providers: ${manifest.providers.join(', ')}\n  return <>{children}</>;\n}\n`;
}

function toCamelCase(s: string): string {
  return s.toLowerCase().replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
```

### `src/agents/phase4a-routing.ts`

```typescript
import { readFileText, writeFileText } from '../utils/file';
import { callClaude } from '../utils/llm';
import { ROUTING_SYSTEM, buildRoutingPrompt } from '../prompts/routing';
import type { MigrationManifest } from '../types/manifest';
import type { FileOperation } from '../types/plan';

export async function runRoutingAgent(
  projectDir: string,
  outputDir: string,
  operations: FileOperation[],
  manifest: MigrationManifest
): Promise<void> {
  console.log('🧭 Phase 4a: Routing agent...');
  const routingOps = operations.filter(op => op.agentPhase === 'routing');

  for (const op of routingOps) {
    const sourceContent = await readFileText(`${projectDir}/${op.sourcePath}`);
    const migrated = await callClaude({
      systemPrompt: ROUTING_SYSTEM,
      userPrompt: buildRoutingPrompt({
        sourceContent,
        sourcePath: op.sourcePath,
        targetPath: op.targetPath,
        transformations: op.transformations,
        manifest,
      }),
      maxTokens: 4096,
    });
    await writeFileText(`${outputDir}/${op.targetPath}`, migrated);
    console.log(`  ✓ ${op.sourcePath} → ${op.targetPath}`);
  }
}
```

### `src/agents/phase4b-components.ts`

```typescript
import { readFileText, writeFileText, globFiles } from '../utils/file';
import { callClaude } from '../utils/llm';
import { COMPONENTS_SYSTEM, buildComponentPrompt } from '../prompts/components';
import { createProject, hasClientOnlyPattern } from '../utils/ast';
import type { FileOperation } from '../types/plan';
import pLimit from 'p-limit';

export async function runComponentsAgent(
  projectDir: string,
  outputDir: string,
  operations: FileOperation[],
): Promise<void> {
  console.log('⚛️  Phase 4b: Components agent...');
  const limit = pLimit(4);
  const compOps = operations.filter(op => op.agentPhase === 'components');

  await Promise.all(compOps.map(op => limit(async () => {
    const sourceContent = await readFileText(`${projectDir}/${op.sourcePath}`);

    // Use AST to verify if use client is needed (double-check plan)
    const project = createProject();
    const sf = project.createSourceFile('tmp.tsx', sourceContent);
    const needsClient = op.needsUseClient ?? hasClientOnlyPattern(sf);

    const migrated = await callClaude({
      systemPrompt: COMPONENTS_SYSTEM,
      userPrompt: buildComponentPrompt({
        sourceContent,
        sourcePath: op.sourcePath,
        targetPath: op.targetPath,
        needsUseClient: needsClient,
        transformations: op.transformations,
      }),
      maxTokens: 4096,
    });
    await writeFileText(`${outputDir}/${op.targetPath}`, migrated);
    console.log(`  ✓ ${op.sourcePath}`);
  })));
}
```

### `src/agents/phase4c-style.ts`

```typescript
import { readFileText, writeFileText, fileExists, copyDir } from '../utils/file';
import { callClaude } from '../utils/llm';
import {
  STYLE_SYSTEM, buildFontFilePrompt, buildStyledComponentsRegistryPrompt,
  buildEmotionCachePrompt, buildRootLayoutPrompt
} from '../prompts/style';
import type { MigrationManifest } from '../types/manifest';

export async function runStyleAgent(
  projectDir: string,
  outputDir: string,
  manifest: MigrationManifest
): Promise<void> {
  console.log('🎨 Phase 4c: Style agent...');

  // 1. Generate fonts.ts
  if (manifest.fonts.length > 0) {
    const fontsFile = await callClaude({
      systemPrompt: STYLE_SYSTEM,
      userPrompt: buildFontFilePrompt(manifest),
      maxTokens: 1024,
    });
    await writeFileText(`${outputDir}/src/app/fonts.ts`, fontsFile);
    console.log('  ✓ fonts.ts');
  }

  // 2. CSS-in-JS SSR registry
  if (manifest.cssInJsLibrary === 'styled-components') {
    const registry = await callClaude({
      systemPrompt: STYLE_SYSTEM,
      userPrompt: buildStyledComponentsRegistryPrompt(),
      maxTokens: 1024,
    });
    await writeFileText(`${outputDir}/src/lib/styled-components-registry.tsx`, registry);
    console.log('  ✓ styled-components registry');
  }
  if (manifest.cssInJsLibrary?.includes('emotion')) {
    const cache = await callClaude({
      systemPrompt: STYLE_SYSTEM,
      userPrompt: buildEmotionCachePrompt(),
      maxTokens: 1024,
    });
    await writeFileText(`${outputDir}/src/lib/emotion-cache.tsx`, cache);
    console.log('  ✓ emotion cache');
  }

  // 3. Migrate global CSS files preserving content
  const globalCssFiles = ['src/index.css', 'src/globals.css', 'src/styles/globals.css',
    'src/styles/reset.css', 'src/styles/variables.css'];
  for (const css of globalCssFiles) {
    if (await fileExists(`${projectDir}/${css}`)) {
      const content = await readFileText(`${projectDir}/${css}`);
      const targetName = css.split('/').pop()!;
      await writeFileText(`${outputDir}/src/app/${targetName}`, content);
    }
  }

  // 4. Root layout
  const fontFileContent = await (async () => {
    try { return await readFileText(`${outputDir}/src/app/fonts.ts`); } catch { return ''; }
  })();
  const providersContent = await (async () => {
    try { return await readFileText(`${outputDir}/src/lib/providers.tsx`); } catch { return ''; }
  })();

  const layout = await callClaude({
    systemPrompt: STYLE_SYSTEM,
    userPrompt: buildRootLayoutPrompt(manifest, fontFileContent, providersContent),
    maxTokens: 2048,
  });
  await writeFileText(`${outputDir}/src/app/layout.tsx`, layout);
  console.log('  ✓ layout.tsx');
}
```

### `src/agents/phase4d-config.ts`

```typescript
import { writeFileText } from '../utils/file';
import { callClaude } from '../utils/llm';
import { CONFIG_SYSTEM, buildNextConfigPrompt, buildTsConfigPrompt, buildEnvFilePrompt } from '../prompts/config';
import type { MigrationManifest } from '../types/manifest';

export async function runConfigAgent(outputDir: string, manifest: MigrationManifest): Promise<void> {
  console.log('⚙️  Phase 4d: Config agent...');

  const [nextConfig, tsConfig, envFiles] = await Promise.all([
    callClaude({ systemPrompt: CONFIG_SYSTEM, userPrompt: buildNextConfigPrompt(manifest), maxTokens: 2048 }),
    callClaude({ systemPrompt: CONFIG_SYSTEM, userPrompt: buildTsConfigPrompt(manifest), maxTokens: 1024, expectJson: true }),
    callClaude({ systemPrompt: CONFIG_SYSTEM, userPrompt: buildEnvFilePrompt(manifest), maxTokens: 512 }),
  ]);

  await writeFileText(`${outputDir}/next.config.ts`, nextConfig);
  await writeFileText(`${outputDir}/tsconfig.json`, tsConfig);

  const [envLocal, envExample] = envFiles.split('===ENV_EXAMPLE===');
  await writeFileText(`${outputDir}/.env.local`, envLocal.trim());
  await writeFileText(`${outputDir}/.env.example`, envExample?.trim() ?? '');

  console.log('  ✓ next.config.ts, tsconfig.json, .env files');
}
```

### `src/agents/phase4e-assets.ts`

```typescript
import { copyDir, globFiles, writeFileText } from '../utils/file';
import type { MigrationManifest } from '../types/manifest';

export async function runAssetsAgent(
  projectDir: string,
  outputDir: string,
  manifest: MigrationManifest
): Promise<void> {
  console.log('📦 Phase 4e: Assets agent...');
  await copyDir(`${projectDir}/public`, `${outputDir}/public`);
  console.log('  ✓ public/ copied');

  // Copy font files if local fonts exist
  const localFonts = manifest.fonts.filter(f => f.type === 'local');
  for (const font of localFonts) {
    if (font.src) {
      await copyDir(`${projectDir}/${font.src}`, `${outputDir}/public/fonts`);
    }
  }
  console.log('✅ Assets complete.');
}
```

### `src/agents/phase5-validation.ts`

```typescript
import { execa } from 'execa';
import { readFileText, writeFileText } from '../utils/file';
import { callClaude } from '../utils/llm';
import { VALIDATION_FIX_SYSTEM, buildValidationFixPrompt } from '../prompts/validation-fix';

interface ValidationError { file: string; error: string; }

export async function runValidationAgent(outputDir: string, maxIterations = 3): Promise<void> {
  console.log('✅ Phase 5: Validation...');

  for (let i = 0; i < maxIterations; i++) {
    const errors = await runTypeCheck(outputDir);
    if (errors.length === 0) {
      console.log('  ✓ TypeScript: no errors');
      break;
    }
    console.log(`  ⚠ Iteration ${i + 1}: fixing ${errors.length} TS errors...`);
    for (const err of errors.slice(0, 10)) { // fix up to 10 per iteration
      await fixError(err, outputDir);
    }
  }

  // Run ESLint fix
  try {
    await execa('npx', ['eslint', 'src/', '--fix', '--ext', '.ts,.tsx'], { cwd: outputDir });
    console.log('  ✓ ESLint: auto-fixed');
  } catch { /* linting errors are non-fatal */ }
}

async function runTypeCheck(outputDir: string): Promise<ValidationError[]> {
  try {
    await execa('npx', ['tsc', '--noEmit'], { cwd: outputDir });
    return [];
  } catch (err: any) {
    const output: string = err.stderr ?? err.stdout ?? '';
    return parseTypeErrors(output);
  }
}

function parseTypeErrors(output: string): ValidationError[] {
  const lines = output.split('\n').filter(l => l.includes('error TS'));
  return lines.map(line => {
    const match = line.match(/^(.+?)\(\d+,\d+\): error (TS\d+: .+)/);
    return { file: match?.[1] ?? 'unknown', error: match?.[2] ?? line };
  });
}

async function fixError(err: ValidationError, outputDir: string): Promise<void> {
  try {
    const content = await readFileText(`${outputDir}/${err.file}`);
    const fixed = await callClaude({
      systemPrompt: VALIDATION_FIX_SYSTEM,
      userPrompt: buildValidationFixPrompt({ error: err.error, filePath: err.file, fileContent: content }),
      maxTokens: 4096,
    });
    await writeFileText(`${outputDir}/${err.file}`, fixed);
  } catch { /* skip unfixable errors */ }
}
```

### `src/agents/phase6-visual-regression.ts`

```typescript
import { chromium, type Browser } from 'playwright';
import { readFileSync } from 'fs';
import { writeFileText } from '../utils/file';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import type { MigrationManifest } from '../types/manifest';

export interface RouteResult {
  route: string;
  diffPercentage: number;
  diffImagePath: string;
  passed: boolean;
}

const THRESHOLD = 0.01; // 1% pixel difference tolerance

export async function runVisualRegression(
  vitePort: number,
  nextPort: number,
  manifest: MigrationManifest,
  outputDir: string
): Promise<RouteResult[]> {
  console.log('📸 Phase 6: Visual regression testing...');
  const browser = await chromium.launch();
  const results: RouteResult[] = [];

  for (const route of manifest.routes) {
    const routePath = route.isDynamic ? route.path.replace(/:(\w+)/g, 'test-$1') : route.path;
    const result = await compareRoute(browser, routePath, vitePort, nextPort, outputDir);
    results.push(result);
    const status = result.passed ? '✓' : `✗ (${result.diffPercentage.toFixed(2)}% diff)`;
    console.log(`  ${status} ${routePath}`);
  }

  await browser.close();
  return results;
}

async function compareRoute(
  browser: Browser,
  route: string,
  vitePort: number,
  nextPort: number,
  outputDir: string
): Promise<RouteResult> {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });

  const [vitePage, nextPage] = await Promise.all([ctx.newPage(), ctx.newPage()]);
  await Promise.all([
    vitePage.goto(`http://localhost:${vitePort}${route}`, { waitUntil: 'networkidle' }),
    nextPage.goto(`http://localhost:${nextPort}${route}`, { waitUntil: 'networkidle' }),
  ]);

  const [viteShot, nextShot] = await Promise.all([
    vitePage.screenshot({ fullPage: true }),
    nextPage.screenshot({ fullPage: true }),
  ]);

  await ctx.close();

  const vitePng = PNG.sync.read(viteShot);
  const nextPng = PNG.sync.read(nextShot);

  // Match dimensions (pad shorter one)
  const width = Math.max(vitePng.width, nextPng.width);
  const height = Math.max(vitePng.height, nextPng.height);
  const diff = new PNG({ width, height });

  const numDiff = pixelmatch(
    vitePng.data, nextPng.data, diff.data, width, height, { threshold: 0.1 }
  );

  const totalPixels = width * height;
  const diffPercentage = numDiff / totalPixels;

  const routeSlug = route.replace(/\//g, '-').replace(/^-/, '') || 'home';
  const diffPath = `${outputDir}/.migration/diffs/${routeSlug}.png`;
  await writeFileText(diffPath, ''); // ensure dir exists
  require('fs').writeFileSync(diffPath, PNG.sync.write(diff));

  return { route, diffPercentage, diffImagePath: diffPath, passed: diffPercentage < THRESHOLD };
}
```

### `src/agents/phase7-visual-fix.ts`

```typescript
import { readFileText, writeFileText } from '../utils/file';
import { callClaudeWithVision } from '../utils/llm';
import { VISUAL_FIX_SYSTEM, buildVisualFixPrompt } from '../prompts/visual-fix';
import type { RouteResult } from './phase6-visual-regression';
import { readFileSync } from 'fs';

export async function runVisualFixAgent(
  failures: RouteResult[],
  outputDir: string,
  manifest: object,
): Promise<void> {
  console.log(`🔧 Phase 7: Visual fix agent — fixing ${failures.length} routes...`);

  for (const failure of failures) {
    const diffImageBase64 = readFileSync(failure.diffImagePath).toString('base64');

    const relevantFiles: Record<string, string> = {};
    const candidates = ['src/app/layout.tsx', 'src/app/globals.css',
      'src/app/fonts.ts', 'src/lib/providers.tsx'];
    for (const f of candidates) {
      try { relevantFiles[f] = await readFileText(`${outputDir}/${f}`); } catch { }
    }

    const response = await callClaudeWithVision({
      systemPrompt: VISUAL_FIX_SYSTEM,
      userPrompt: buildVisualFixPrompt({
        route: failure.route,
        diffPercentage: failure.diffPercentage,
        relevantFiles,
        diffDescription: `${(failure.diffPercentage * 100).toFixed(2)}% of pixels differ between Vite and Next.js screenshots`,
      }),
      imageBase64: diffImageBase64,
      mediaType: 'image/png',
      maxTokens: 4096,
    });

    // Parse and write fixed files
    const fileBlocks = response.split('===FILE:');
    for (const block of fileBlocks.slice(1)) {
      const [header, ...rest] = block.split('\n');
      const filePath = header.replace('===', '').trim();
      const content = rest.join('\n').split('===END===')[0].trim();
      await writeFileText(`${outputDir}/${filePath}`, content);
      console.log(`  ✓ Fixed: ${filePath}`);
    }
  }
}
```

---

## 8. ORCHESTRATOR

### `src/orchestrator.ts`

```typescript
import { execa } from 'execa';
import { runAnalysisAgent } from './agents/phase1-analysis';
import { runPlanningAgent } from './agents/phase2-planning';
import { runScaffoldAgent } from './agents/phase3-scaffold';
import { runRoutingAgent } from './agents/phase4a-routing';
import { runComponentsAgent } from './agents/phase4b-components';
import { runStyleAgent } from './agents/phase4c-style';
import { runConfigAgent } from './agents/phase4d-config';
import { runAssetsAgent } from './agents/phase4e-assets';
import { runValidationAgent } from './agents/phase5-validation';
import { runVisualRegression } from './agents/phase6-visual-regression';
import { runVisualFixAgent } from './agents/phase7-visual-fix';
import { writeFileText } from './utils/file';

export interface MigrateOptions {
  inputDir: string;
  outputDir: string;
  skipVisual?: boolean;
  maxVisualIterations?: number;
}

export async function migrate(opts: MigrateOptions): Promise<void> {
  const { inputDir, outputDir } = opts;
  const startTime = Date.now();

  // Phase 1 & 2
  const manifest = await runAnalysisAgent(inputDir);
  const plan = await runPlanningAgent(manifest);

  // Phase 3
  await runScaffoldAgent(outputDir, manifest, plan);

  // Phase 4 — parallel migration agents
  await Promise.all([
    runRoutingAgent(inputDir, outputDir, plan.operations, manifest),
    runComponentsAgent(inputDir, outputDir, plan.operations),
    runStyleAgent(inputDir, outputDir, manifest),
    runConfigAgent(outputDir, manifest),
    runAssetsAgent(inputDir, outputDir, manifest),
  ]);

  // Phase 5
  await runValidationAgent(outputDir);

  // Phase 6 & 7 — visual regression loop
  if (!opts.skipVisual) {
    const VITE_PORT = 5173;
    const NEXT_PORT = 3001;

    // Start both dev servers
    const viteProc = execa('npm', ['run', 'dev', '--', '--port', String(VITE_PORT)], { cwd: inputDir });
    const nextProc = execa('npm', ['run', 'dev', '--', '--port', String(NEXT_PORT)], { cwd: outputDir });

    await waitForPort(VITE_PORT);
    await waitForPort(NEXT_PORT);

    const maxIterations = opts.maxVisualIterations ?? 3;
    let failures: Awaited<ReturnType<typeof runVisualRegression>> = [];

    for (let i = 0; i < maxIterations; i++) {
      const results = await runVisualRegression(VITE_PORT, NEXT_PORT, manifest, outputDir);
      failures = results.filter(r => !r.passed);

      if (failures.length === 0) {
        console.log('🎉 All routes pixel-perfect!');
        break;
      }

      console.log(`⚠ ${failures.length} routes need visual fixes (iteration ${i + 1}/${maxIterations})`);
      await runVisualFixAgent(failures, outputDir, manifest);
    }

    viteProc.kill();
    nextProc.kill();

    // Write report
    await writeFileText(`${outputDir}/.migration/report.md`, buildReport(manifest, failures, startTime));
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Migration complete in ${elapsed}s → ${outputDir}`);
}

async function waitForPort(port: number, timeout = 30000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      await fetch(`http://localhost:${port}`);
      return;
    } catch {
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

function buildReport(manifest: any, failures: any[], startTime: number): string {
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  return `# Migration Report\n\nCompleted in ${elapsed}s\n\n## Routes\n${
    manifest.routes.map((r: any) => `- ${r.path}`).join('\n')
  }\n\n## Visual Issues Remaining\n${
    failures.length === 0 ? 'None ✓' : failures.map((f: any) =>
      `- ${f.route}: ${(f.diffPercentage * 100).toFixed(2)}% diff`).join('\n')
  }\n`;
}
```

---

## 9. CLI

### `src/cli.ts`

```typescript
#!/usr/bin/env node
import { Command } from 'commander';
import { resolve } from 'path';
import { migrate } from './orchestrator';
import * as dotenv from 'dotenv';

dotenv.config();

const program = new Command();

program
  .name('migrate-to-next')
  .description('Migrate a Vite + React project to Next.js 14 App Router')
  .argument('<input>', 'Path to Vite project directory')
  .argument('<output>', 'Path for Next.js output directory')
  .option('--skip-visual', 'Skip visual regression testing')
  .option('--max-visual-iterations <n>', 'Max visual fix iterations', '3')
  .action(async (input, output, options) => {
    const inputDir = resolve(input);
    const outputDir = resolve(output);

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('Error: ANTHROPIC_API_KEY environment variable is required');
      process.exit(1);
    }

    await migrate({
      inputDir,
      outputDir,
      skipVisual: options.skipVisual,
      maxVisualIterations: parseInt(options.maxVisualIterations),
    });
  });

program.parse();
```

---

## 10. PACKAGE.JSON

```json
{
  "name": "migrate-to-next",
  "version": "1.0.0",
  "description": "Agentic Vite to Next.js migration tool",
  "type": "module",
  "bin": { "migrate-to-next": "./dist/cli.js" },
  "scripts": {
    "build": "tsc",
    "dev": "tsx src/cli.ts",
    "test": "vitest run",
    "test:e2e": "vitest run tests/e2e"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.39.0",
    "commander": "^12.0.0",
    "dotenv": "^16.0.0",
    "execa": "^9.0.0",
    "fast-glob": "^3.3.0",
    "p-limit": "^6.0.0",
    "pixelmatch": "^6.0.0",
    "playwright": "^1.44.0",
    "pngjs": "^7.0.0",
    "ts-morph": "^22.0.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/pixelmatch": "^5.2.6",
    "@types/pngjs": "^6.0.4",
    "tsx": "^4.0.0",
    "typescript": "^5.4.0",
    "vitest": "^1.6.0"
  }
}
```

---

## 11. TEST FIXTURE — CREATE THIS VITE APP

Create `fixtures/sample-vite-app/` with the following files. This is a realistic Vite project that exercises all migration scenarios.

### `fixtures/sample-vite-app/package.json`
```json
{
  "name": "sample-vite-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": { "dev": "vite", "build": "tsc && vite build", "preview": "vite preview" },
  "dependencies": {
    "react": "^18.2.0", "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.0",
    "@tanstack/react-query": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0", "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0", "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0", "typescript": "^5.4.0", "vite": "^5.2.0"
  }
}
```

### `fixtures/sample-vite-app/vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': resolve(__dirname, './src') } },
  server: { proxy: { '/api': { target: 'http://localhost:4000', changeOrigin: true } } },
});
```

### `fixtures/sample-vite-app/.env`
```
VITE_API_URL=http://localhost:4000
VITE_APP_NAME=Sample App
VITE_FEATURE_FLAG=true
```

### `fixtures/sample-vite-app/index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    <title>Sample Vite App</title>
  </head>
  <body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body>
</html>
```

### `fixtures/sample-vite-app/tailwind.config.ts`
```typescript
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

### `fixtures/sample-vite-app/src/main.tsx`
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
```

### `fixtures/sample-vite-app/src/App.tsx`
```tsx
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { UserPage } from '@/pages/UserPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

### `fixtures/sample-vite-app/src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body { font-family: 'Inter', sans-serif; }
* { box-sizing: border-box; }
```

### `fixtures/sample-vite-app/src/components/Layout.tsx`
```tsx
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex gap-6">
        <Link to="/" className="font-semibold text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
```

### `fixtures/sample-vite-app/src/pages/HomePage.tsx`
```tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [count, setCount] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to {import.meta.env.VITE_APP_NAME}</h1>
      <p className="text-gray-600 mb-6">API: {apiUrl}</p>
      <button
        onClick={() => setCount(c => c + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Count: {count}
      </button>
      <div className="mt-6">
        <Link to="/users/42" className="text-blue-600 underline">View user 42</Link>
      </div>
    </div>
  );
}
```

### `fixtures/sample-vite-app/src/pages/AboutPage.tsx`
```tsx
export function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-600">This is a sample Vite + React app for migration testing.</p>
    </div>
  );
}
```

### `fixtures/sample-vite-app/src/pages/UserPage.tsx`
```tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => setUser({ name: `User ${id}` }), 100);
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-4 block">← Back</button>
      <h1 className="text-3xl font-bold">{user ? user.name : 'Loading...'}</h1>
      <p className="text-gray-600 mt-2">User ID: {id}</p>
    </div>
  );
}
```

### `fixtures/sample-vite-app/src/pages/NotFoundPage.tsx`
```tsx
export function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p className="text-gray-600">Page not found</p>
    </div>
  );
}
```

---

## 12. E2E TEST SUITE

### `tests/e2e/migration.test.ts`

```typescript
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { migrate } from '../../src/orchestrator';
import { fileExists, readFileText } from '../../src/utils/file';
import { execa } from 'execa';
import { resolve } from 'path';
import { rm, mkdir } from 'fs/promises';

const FIXTURE_DIR = resolve('fixtures/sample-vite-app');
const OUTPUT_DIR = resolve('test-output/next-app');

describe('Migration System E2E', () => {
  beforeAll(async () => {
    await rm(OUTPUT_DIR, { recursive: true, force: true });
    await mkdir(OUTPUT_DIR, { recursive: true });

    // Install fixture deps
    await execa('npm', ['install'], { cwd: FIXTURE_DIR, stdio: 'inherit' });

    // Run migration
    await migrate({ inputDir: FIXTURE_DIR, outputDir: OUTPUT_DIR, skipVisual: true });
  }, 300_000); // 5 min timeout

  afterAll(async () => {
    await rm(OUTPUT_DIR, { recursive: true, force: true });
  });

  // --- Structural tests ---
  it('creates package.json with next dependency', async () => {
    const pkg = JSON.parse(await readFileText(`${OUTPUT_DIR}/package.json`));
    expect(pkg.dependencies?.next ?? pkg.devDependencies?.next).toBeDefined();
  });

  it('creates next.config.ts', async () => {
    expect(await fileExists(`${OUTPUT_DIR}/next.config.ts`)).toBe(true);
    const config = await readFileText(`${OUTPUT_DIR}/next.config.ts`);
    expect(config).toContain('NextConfig');
  });

  it('creates tsconfig.json with @/* alias', async () => {
    const tsconfig = JSON.parse(await readFileText(`${OUTPUT_DIR}/tsconfig.json`));
    expect(tsconfig.compilerOptions?.paths?.['@/*']).toBeDefined();
  });

  it('creates app/page.tsx for home route', async () => {
    const exists = await fileExists(`${OUTPUT_DIR}/src/app/page.tsx`);
    expect(exists).toBe(true);
  });

  it('creates app/about/page.tsx', async () => {
    expect(await fileExists(`${OUTPUT_DIR}/src/app/about/page.tsx`)).toBe(true);
  });

  it('creates app/users/[id]/page.tsx for dynamic route', async () => {
    expect(await fileExists(`${OUTPUT_DIR}/src/app/users/[id]/page.tsx`)).toBe(true);
  });

  it('creates app/not-found.tsx', async () => {
    expect(await fileExists(`${OUTPUT_DIR}/src/app/not-found.tsx`)).toBe(true);
  });

  it('creates root layout.tsx', async () => {
    const layout = await readFileText(`${OUTPUT_DIR}/src/app/layout.tsx`);
    expect(layout).toContain('RootLayout');
    expect(layout).toContain('children');
  });

  // --- Migration correctness tests ---
  it('renames VITE_API_URL to NEXT_PUBLIC_API_URL in .env.local', async () => {
    const env = await readFileText(`${OUTPUT_DIR}/.env.local`);
    expect(env).toContain('NEXT_PUBLIC_API_URL');
    expect(env).not.toContain('VITE_');
  });

  it('migrated pages do not import from react-router-dom', async () => {
    const homePage = await readFileText(`${OUTPUT_DIR}/src/app/page.tsx`);
    expect(homePage).not.toContain('react-router-dom');
  });

  it('migrated pages use next/navigation instead of react-router-dom', async () => {
    const userPage = await readFileText(`${OUTPUT_DIR}/src/app/users/[id]/page.tsx`);
    expect(userPage).toContain('next/navigation');
  });

  it('home page has "use client" directive (it uses useState)', async () => {
    const homePage = await readFileText(`${OUTPUT_DIR}/src/app/page.tsx`);
    expect(homePage).toMatch(/^["']use client["']/m);
  });

  it('about page does NOT have "use client" (pure render)', async () => {
    const aboutPage = await readFileText(`${OUTPUT_DIR}/src/app/about/page.tsx`);
    expect(aboutPage).not.toMatch(/^["']use client["']/m);
  });

  it('no file contains import.meta.env.VITE_ references', async () => {
    const { globFiles } = await import('../../src/utils/file');
    const files = await globFiles('src/**/*.{ts,tsx}', OUTPUT_DIR);
    for (const file of files) {
      const content = await readFileText(file);
      expect(content, `${file} still has VITE_ reference`).not.toContain('import.meta.env.VITE_');
    }
  });

  it('public/ directory is copied', async () => {
    expect(await fileExists(`${OUTPUT_DIR}/public`)).toBe(true);
  });

  it('creates global config module at src/config/index.ts', async () => {
    expect(await fileExists(`${OUTPUT_DIR}/src/config/index.ts`)).toBe(true);
    const config = await readFileText(`${OUTPUT_DIR}/src/config/index.ts`);
    expect(config).toContain('NEXT_PUBLIC_');
  });

  it('next.config.ts includes API proxy rewrite rule', async () => {
    const nextConfig = await readFileText(`${OUTPUT_DIR}/next.config.ts`);
    expect(nextConfig).toContain('rewrites');
  });

  // --- Build test ---
  it('next build succeeds without errors', async () => {
    const result = await execa('npx', ['next', 'build'], {
      cwd: OUTPUT_DIR,
      env: { ...process.env, NEXT_PUBLIC_API_URL: 'http://localhost:4000', NEXT_PUBLIC_APP_NAME: 'Test' },
    });
    expect(result.exitCode).toBe(0);
  }, 120_000); // 2 min for build
});
```

---

## 13. TSCONFIG FOR THIS PROJECT

### `tsconfig.json` (for `migrate-to-next` tool itself)
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "fixtures", "tests"]
}
```

---

## 14. BUILD AND VERIFY SEQUENCE

After writing ALL files above, execute these steps in order:

```bash
# Step 1: Install dependencies
npm install

# Step 2: Install Playwright browsers
npx playwright install chromium

# Step 3: Build the tool
npm run build

# Step 4: Install fixture dependencies
cd fixtures/sample-vite-app && npm install && cd ../..

# Step 5: Run the e2e test suite
npm run test:e2e

# Step 6: If all tests pass, do a live migration smoke test
node dist/cli.js fixtures/sample-vite-app smoke-output --skip-visual

# Step 7: Verify smoke output builds
cd smoke-output && npm install && npx next build
```

**All 15 vitest assertions must pass. The `next build` in Step 7 must exit 0. Do not consider the system complete until both conditions are met. If any test fails, fix the relevant agent or prompt and re-run.**

---

## 15. ENVIRONMENT SETUP

Create a `.env` file in the project root before running:
```
ANTHROPIC_API_KEY=your_key_here
```

Add `.env` and `.env.local` to `.gitignore`.

---

## DONE CRITERIA

The system is complete when:
1. ✅ All source files exist as specified
2. ✅ `npm run test:e2e` passes all 15 assertions
3. ✅ `next build` on the migrated output exits with code 0
4. ✅ `migrate-to-next --help` prints the CLI usage
