<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# UPLB DSG Website: Agent Guide

Static website for the **UPLB Data Science Guild (DSG)** at `uplbdsg.org`. Goals (from the project proposal): professionalize the guild's branding, be a portfolio piece for its developers, and build members' skills. Priorities in order: (1) landing page, (2) SEO-friendly event and Data Digest posts, (3) an event signup site (future; keep the site static until the need is concrete). Audience: potential members and people looking for event info.

## Hard rules (check every change against these)

- **Never publish the guild's recruitment or membership process** (orientation steps, applicant tasks, finals). It is internal. "Join" is not a call to action.
- **No sponsor or partner lists.** Do not mix up DSG with other organizations: UP DSSoc events and PJDSC are not DSG events, and Hiraya Network, UP DSSoc, and AAP are not DSG partners.
- **Show the DSG logo file as is.** Never clip, crop, stretch, rotate, recolor, or redraw it, including in animations.
- **Copy lives in data, not components**: site copy in `app/lib/data.ts`, posts in `content/`.
- **WCAG 2.2 AA**: 4.5:1 text contrast, visible focus rings, 44 px targets, alt text on every image, reduced motion respected.
- **Merging to `main` deploys to production**, and so does saving in the CMS. Get a human's OK before merging.
- Keep `TURNOVER.md` current (see the last section).

## Stack

- **Next.js 16.4.3** (App Router, `output: "export"`, `trailingSlash: true`, fully static), **React 19**, **TypeScript** (strict), **Tailwind CSS v4** (`@theme` tokens in `app/globals.css`), **ESLint 10** (flat config). Node 22 in CI.
- No component library, server, or database. Runtime dependencies beyond Next and React: `yaml` and `marked`, used only at build time. Motion is CSS.
- Sveltia CMS at `/admin` (`public/admin/index.html` pins the version, loaded from unpkg) edits `content/` through GitHub.

## Commands

```bash
npm run dev -- --webpack    # dev server (Turbopack is not vetted here)
npm run lint                # must pass before commit
npm run build -- --webpack  # static build into out/; must pass before commit; validates content/
```

`next dev` rewrites the managed block at the top of this file. Commit it rather than reverting it.

## Layout

- `app/page.tsx`: home page, section order. `app/layout.tsx`: metadata, header and footer, and the opening sequence (an inline head script that shows the logo file as is).
- `app/events/` and `app/digest/`: index pages and `[slug]` pages generated from content.
- `app/lib/data.ts`: `COPY` (hero, About, mission, values, committee heads, footer `credits`), `NAV_LINKS`, `SOCIAL_LINKS`, `FOOTER_LINKS`, `CONTACT_EMAIL`, shared types, and `srcSetOf()`.
- `app/lib/content.ts`: reads `content/*.md` at build time and exports `EVENTS`, `PAST_EVENTS`, `WORKSHOPS`, `DIGEST_ENTRIES`.
- `app/lib/components/`: header, footer, hero (`hero-section`, `hero-slideshow`, `hero-canvas` easter eggs, `iso-scene` cube), section components, and shared `contained-image`, `digest-card`, `digest-carousel`, `random-digest-button`.
- Aliases: `@/components/*` is `app/lib/components/*`, `@/lib/*` is `app/lib/*`. ESLint blocks `../` imports across directories.

## Content model

- One markdown file per post in `content/events/` or `content/digest/`. YAML frontmatter holds the fields, the body is the writeup, and the file name is the slug.
- The build fails on a missing required field (events: `kind`, `title`, `date`, `description`, `images`; Digest: `title`, `date`, `description`, `panels`) or a `kind` other than `event` or `workshop`. Keep `public/admin/config.yml` in sync with these.
- `date` is the display label in plain words. `publishedAt` (`YYYY-MM-DD`) sorts newest first; quote it or leave it bare.
- Event writeups are adapted from the guild's Facebook captions and keep a `source` link.
- CMS saves commit straight to `main`, so they go live. Deleting a post in the CMS leaves its images in `public/`; remove them by hand.
- Date labels are plain sentence case. No uppercase tracked eyebrows.

## Images

- `next.config.ts` sets `images: { unoptimized: true }`: the static host has no optimizer, so files ship as committed. Do not rely on `/_next/image`.
- WebP. Event photos at most 1600 px; Digest panels 1200 px; each has a `*-640.webp` copy; Digest cards use a 640 px `cover.webp` (a copy of panel 1). Hero slides add a 9:16 full-height phone crop, `public/hero/N-tall.webp`.
- Offer small and full files through `srcSetOf()` (`640w` plus full size) and let the browser choose. Never force the 640 px copy with a `media` query; on 2x and 3x phones it looks blurred.
- `contained-image` shows the whole image over a blurred copy of itself. That blur is intentional.

## Design

- Tokens in `app/globals.css`: `accent-main` `#7230ff` (fills only), `accent-text` `#b69cff` for colored text (accent-main fails contrast at text sizes), `accent-secondary` `#1818e6`, `background` `#0a0a0a`, `off-white` `#fafafa`, `headline-via` for the intro ring.
- No gradient text, glows, or uppercase tracked labels. Fonts: Archivo (display, `--font-display`) and Geist.

## SEO

Root metadata and Open Graph in `app/layout.tsx`; Open Graph and Twitter images in `app/opengraph-image.png` and `app/twitter-image.png`; Organization JSON-LD in `app/page.tsx`; Article and Event JSON-LD in the `[slug]` pages; `app/sitemap.ts` and `app/robots.ts`. `SITE_URL` is `https://uplbdsg.org`.

## Verifying visual changes

Check **320, 375, 414, 768, and 1440 px** widths (Playwright MCP or a browser):

- No horizontal overflow (`document.documentElement.scrollWidth === innerWidth`).
- Mobile tap targets at least 44 px tall, labels on one line.
- The desktop layout (`lg`, 1024 px and up) is unchanged by mobile-only tweaks; use `lg:` overrides, not shared classes.

## Commits and deployment

- Conventional Commits, signed (`git commit -S`), one change per commit.
- `.github/workflows/ci-cd.yml`: a `check` job (lint and build) on every pull request and push, then a `deploy` job ships that exact build to Cloudflare Pages: `main` to production, pull requests to `pr-N` previews (`https://pr-N.uplb-dsg-website.pages.dev`). Production deploys are serialized. Forks and Dependabot build but do not deploy.
- Also in `.github/`: Dependabot (weekly, 7-day cooldown, grouped minor and patch), CodeQL, and dependency review (fails on a high or critical advisory).
- Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`. `main` has no required status checks because the CMS commits to it directly; a failing build never deploys.
- The Vercel project in `.vercel/` is legacy staging. Cloudflare Pages is the active pipeline.

## Documentation duty

`TURNOVER.md` is the formal handover record. Any change to infrastructure, access, deployment, content workflow, or roadmap updates it in the same change. Keep this file and `README.md` in sync when conventions or commands change. Outdated docs are a defect (proposal Milestone 4).
