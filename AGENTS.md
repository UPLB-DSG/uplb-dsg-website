<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# UPLB DSG Website — Agent Guide

## What this project is

Static website for the **UPLB Data Science Guild (DSG)**. Three institutional goals (from the project proposal):

1. Professionalize the org's branding.
2. Be a portfolio piece for the org's website developers.
3. Skills development for members.

Functional priorities, in order: **(1) landing page → (2) SEO-friendly content for events/series (blog-style) → (3) professional signup site for events (future).** The audience is potential members and people looking for event/activity info.

## Stack

- **Next.js 16.2.3** (App Router, `output: "export"` — fully static), **React 19**, **TypeScript** (strict), **Tailwind CSS v4** (`@theme` tokens in `app/globals.css`), **ESLint 9** (flat config).
- No component library, CMS, or database. Data Digest content is currently maintained in Git through `app/lib/data.ts`; a Git-based editor may be added only when non-developers need it.
- Wireframes/design live in Figma (external).

## Commands

```bash
npm run dev                 # dev server (team passes -- --webpack; Turbopack not vetted)
npm run lint                # must pass before commit
npm run build -- --webpack  # production build → out/ (must pass before commit)
```

`next.config.ts` sets `images: { unoptimized: true }` — there is no image optimizer server on the static host, so images ship as-is from `public/`. Don't rely on `/_next/image` resizing. Event and Data Digest assets use WebP; Digest panels are capped at 1200px, cards use 640px `cover.webp` thumbnails, and mobile sources use matching `*-640.webp` files.

## Structure & conventions

- `app/page.tsx` — landing-page composition of sections.
- `app/digest/page.tsx` and `app/digest/[slug]/page.tsx` — static Data Digest index and article routes.
- `app/lib/components/` — section components (`hero-section`, `who-are-we-section`, `about-us-section`, `events-section`, `past-events`, `header`, `footer`).
- Path aliases: `@/components/*` → `app/lib/components/*`, `@/lib/*` → `app/lib/*`.
- **All site copy/content lives in `app/lib/data.ts`** (`COPY`, `NAV_LINKS`, `SOCIAL_LINKS`, `PAST_EVENTS`, `DIGEST_ENTRIES`). Edit copy there, never hardcode in components.
- Design tokens in `app/globals.css` `@theme`: `accent-main` `#7230ff`, `accent-secondary` `#1818e6`, `background` `#0a0a0a`, `off-white` `#fafafa`, headline gradient `headline-from`/`headline-via`. Fonts: Archivo (display, `--font-display`), Geist Sans/Mono.
- SEO: root metadata + OpenGraph in `app/layout.tsx`, branded Open Graph/Twitter images in `app/opengraph-image.png` and `app/twitter-image.png`, Organization JSON-LD in `app/page.tsx`, article metadata/JSON-LD in `app/digest/[slug]/page.tsx`, plus `app/sitemap.ts` and `app/robots.ts`. `SITE_URL` is `https://uplbdsg.org`.
- ESLint extends Next.js Core Web Vitals/TypeScript rules with high-signal safety and consistency checks; add rules only when they prevent real defects or review churn.
- Commits: **Conventional Commits, signed** (`git commit -S`), atomic scope.

## UI verification (required for visual changes)

Before committing any visual change, verify with the Playwright MCP at **320, 375, 414, 768, and 1440 px** widths:

- No horizontal overflow (`document.documentElement.scrollWidth === innerWidth`).
- Mobile CTA targets ≥ 44px tall and labels stay on one line.
- Desktop (`lg`, ≥1024px) layout must be unchanged by mobile-only tweaks — use `lg:` overrides, not shared classes.

## Deployment

- **Cloudflare Pages** via `.github/workflows/deploy-cloudflare.yml`: push to `main` → production; PRs → preview branches (`pr-N`). Deploys the static `out/` dir with Wrangler.
- Required GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- A Vercel project (`dsg-website`, see `.vercel/`) exists from initial staging — **Cloudflare Pages is the active pipeline**.
- Production domain: `uplbdsg.org`, with DNS on Cloudflare — see TURNOVER.md.

## Pending work / roadmap

- A Git-based editor for non-developer publishers and the event signup site are future phases. Keep the public site static until either need is concrete.

## Documentation duty (standing rule)

**`TURNOVER.md` at the repo root is the formal handover record and must be kept current at all times.** Any change to infrastructure, access/accounts, deployment, content workflow, or roadmap must update `TURNOVER.md` in the same change. Keep this `AGENTS.md` in sync when conventions or commands change. Outdated docs are treated as a defect (proposal Milestone 4 requires them for handover).
