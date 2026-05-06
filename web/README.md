# SolarPro — Frontend

Next.js 15 App Router frontend for a solar installation business.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v3.4 + CSS custom properties |
| Animation | Framer Motion v11 |
| Forms | react-hook-form + zod |
| Language | TypeScript strict |

## Folder map

```
src/
├── app/                     Next.js App Router pages
│   ├── (marketing)/         Public marketing pages (layout: Header + Footer)
│   ├── (auth)/              Sign-in / sign-up (no nav chrome)
│   └── (app)/               Protected account pages
├── components/
│   ├── layout/              HeaderShell, FooterTrust, MobileSupportDock, PageMotionWrapper
│   └── ui/                  All shared UI components
├── content/en-US.ts         All visible strings (single source of truth)
├── lib/
│   ├── content.ts           Typed t() helper
│   ├── api-client.ts        Typed API client (mock data in dev)
│   ├── utils.ts             cn() clsx helper
│   └── middleware.ts        Auth route protection
└── styles/
    ├── tokens.css           CSS custom properties (design system)
    └── globals.css          Tailwind layers + shared utilities
```

## Visual differentiation (F15)

| Route | Hero concept |
|---|---|
| `/` | 55/45 split — left copy panel, right image bleeds bottom |
| `/services` | Cinematic full-bleed image, copy in lower-third |
| `/portfolio` | Masonry 3-col grid IS the hero; frosted glass title card |
| `/testimonials` | Giant decorative quote mark; NO photography |
| `/blog` | Editorial masthead: 3/5 featured card + 2/5 two stacked |
| `/quote` | Brand-green funnel header with step indicators; NO photography |
| `/contact` | Brand-green utility layout; NO photography |
| `/about` | 60/40 portrait split — editorial photo + editorial copy |

## See also

- [RUN.md](RUN.md) — install, dev, build, test commands
- [ENV.example](ENV.example) — public environment variables
- [.audit/frontend-self-audit.md](.audit/frontend-self-audit.md) — constraint compliance report
