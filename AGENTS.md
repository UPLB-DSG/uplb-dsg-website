<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# UPLB DSG Website: Agent Guide

Static site for the UPLB Data Science Guild (DSG) at `uplbdsg.org`. Next.js exports plain files to `out/`; Cloudflare Pages serves them. No server, no database. Keep it static; an event signup site is a possible future phase.

## Hard rules

- **Never publish the guild's recruitment or membership process** (orientation steps, applicant tasks, finals). Do not add "Join" or "Apply" calls to action; linking to the Facebook page is fine.
- **No sponsor or partner lists.** DSG is not UP DSSoc: DSSoc events and PJDSC are not DSG events, and Hiraya Network, UP DSSoc, and AAP are not DSG partners.
- **Show the DSG logo file as is.** Never clip, crop, stretch, rotate, recolor, or redraw it, including in animations.
- **No copy in components.** Site copy goes in `app/lib/data.ts`, posts in `content/`.
- **WCAG 2.2 AA**: 4.5:1 text contrast, visible focus rings, 44 px tap targets for buttons and nav (links inside a sentence are exempt), alt text on every image, `prefers-reduced-motion` respected.
- **Merging to `main` deploys to production**, and every CMS save commits to `main`. Get a human's OK before merging.
- Keep `TURNOVER.md` and `README.md` current (last section).

## Stack and commands

Next.js 16.4.3 (App Router, `output: "export"`, `trailingSlash: true`), React 19, TypeScript strict, Tailwind CSS v4 (`@theme` in `app/globals.css`), ESLint 10 flat config, Node 22 in CI. Runtime dependencies beyond Next and React: `yaml` and `marked`, build time only. Motion is CSS.

```bash
npm run dev -- --webpack    # Turbopack is not vetted here
npm run lint                # must pass before commit
npm run build -- --webpack  # static build into out/; must pass before commit
```

## Layout

- `app/page.tsx` (home section order), `app/layout.tsx` (metadata, header, footer, opening overlay script), `app/events/` and `app/digest/` (index and `[slug]` pages).
- `app/lib/data.ts`: `COPY` (hero, About, mission, values, committee heads, footer `credits`), nav, social and footer links, `CONTACT_EMAIL`, shared types, `srcSetOf()`.
- `app/lib/content.ts`: reads `content/*.md` at build time; exports `EVENTS`, `PAST_EVENTS`, `WORKSHOPS`, `DIGEST_ENTRIES`.
- `app/lib/components/`: one file per section plus shared image, card, and carousel components.
- Aliases: `@/components/*` (`app/lib/components/*`), `@/lib/*` (`app/lib/*`), and `@/*` (repo root). ESLint rejects `../` imports.

## Content

- One markdown file per post in `content/events/` or `content/digest/`: YAML frontmatter for fields, body for the writeup, file name as the slug. `marked` renders the body unsanitized into the page, so raw HTML in a post ships as is; keep posts to plain markdown.
- **What the build checks**: required fields are present (events `kind`, `title`, `date`, `description`, `images`; Digest `title`, `date`, `description`, `panels`) and `kind` is `event` or `workshop`. Nothing else. Image paths, `source`, and dates are not checked, and missing small images fall back silently. Keep `public/admin/config.yml` in sync with the required list.
- `date` is the display label in plain sentence case. `publishedAt` (`YYYY-MM-DD`, quoted or bare) sorts newest first, and also feeds Event JSON-LD `startDate`, Open Graph `publishedTime`, and sitemap `lastModified`. Posts without it sort to the top.
- Event writeups are adapted from the guild's Facebook captions and must keep a `source` link. Neither the build nor the CMS enforces this; check it.
- Deleting a post in the CMS leaves its images in `public/`; remove them by hand.
- Sveltia CMS version is pinned in two places: `public/admin/index.html` (script) and the schema URL on line 1 of `public/admin/config.yml`. Bump both.

## Images

- `images: { unoptimized: true }`: files ship exactly as committed. Do not rely on `/_next/image`.
- Hand-made posts: WebP, event photos at most 1600 px, Digest panels 1200 px, each with a `*-640.webp` copy; Digest cards use a 640 px `cover.webp` (copy of panel 1). CMS uploads become WebP capped at 1200 x 1600 and have no `-640` copy or `cover.webp`; `content.ts` falls back to the full file.
- Offer small and full files with `srcSetOf()` and let the browser pick. Never force the 640 px copy with a `media` query; it looks blurred on 2x and 3x phones.
- Hero slides are a hardcoded list in `hero-slideshow.tsx`. A new slide needs `public/hero/N.webp`, a 9:16 full-height phone crop `N-tall.webp`, and an entry in `SLIDES`.
- `contained-image` shows the whole image over a blurred copy of itself. That blur is intentional.

## Design

- Tokens: `accent-main` `#7230ff` (fills only), `accent-text` `#b69cff` (colored text; accent-main fails contrast at text sizes), `accent-secondary` `#1818e6`, `background` `#0a0a0a`, `surface` `#050505`, `dark-gray` `#1e1e1e`, `off-white` `#fafafa`, `headline-via` (intro ring). Secondary text uses `text-white/60` to `/85` opacity classes; check contrast when going lower.
- No gradient text, glows, or uppercase tracked labels. Fonts: Archivo (`--font-display`) and Geist.
- SEO lives in `app/layout.tsx` (metadata, Open Graph), `app/opengraph-image.png` and `app/twitter-image.png`, JSON-LD in `app/page.tsx` and the `[slug]` pages, `app/sitemap.ts`, `app/robots.ts`. `SITE_URL` is `https://uplbdsg.org`.

## Verifying visual changes

- The opening overlay covers `/` for 1.6 to 3 s on the first visit per browser session. Before checking, set `sessionStorage.setItem("dsgIntro", "1")` in an init script, or emulate reduced motion.
- Check 320, 375, 414, 768, and 1440 px: `document.documentElement.scrollWidth === innerWidth`, tap targets as above, labels on one line.
- Mobile-only tweaks must leave `lg` (1024 px and up) unchanged: use `lg:` overrides, and compare 1440 px screenshots before and after.

## Commits and CI

- Conventional Commits, signed (`git commit -S`), one change per commit.
- `.github/workflows/ci-cd.yml` runs only on pushes to `main`, pull requests targeting `main`, and manual dispatch. A pushed feature branch gets no CI until it has a pull request. The `check` job (lint and build) gates `deploy`, which ships that build: `main` to production, pull requests to `https://pr-N.uplb-dsg-website.pages.dev`. Production deploys are serialized. Forks and Dependabot build but do not deploy.
- Also in `.github/`: Dependabot (weekly, 7-day cooldown), CodeQL, dependency review (fails on high or critical advisories). Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`. `main` has no required checks because the CMS commits to it.
- `.vercel/` is legacy staging; Cloudflare Pages is the active pipeline.

## Documentation duty

Any change to infrastructure, access, deployment, content workflow, or roadmap updates `TURNOVER.md` (the handover record) in the same change. Update this file and `README.md` when conventions or commands change. Outdated docs are a defect.
