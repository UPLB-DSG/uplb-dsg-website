# UPLB DSG Website — Turnover Document

> **Standing rule: keep this document current at all times.** Any change to infrastructure, accounts/access, deployment, content workflow, or roadmap must be reflected here in the same change. This is the formal handover record required by the project proposal (Milestone 4) and item 3 of the Successor Handover Checklist.

_Last updated: 2026-08-19_

## 1. Project Overview

The website is the org's primary digital presence, with three institutional goals:

1. **Professionalize the branding** of the org.
2. Serve as a **portfolio piece** for the org's website developers.
3. **Skills development** for members.

Functional priorities, in order:

1. **Landing page** — the org pitch (About Us, mission/vision, events, socials).
2. **Blog-style content for events and series, optimized for SEO** — includes the _Data Digest_, a series of comic-style photo posts teaching data science concepts.
3. **Professional signup site for events** (future phase).

Audience: people interested in joining UPLB DSG or learning about its events and activities.

## 2. Current State (as of 2026-08-19)

- Landing page built: hero, Who We Are, About Us, Data Digest showcase, event gallery, and footer. The placeholder upcoming-event card is intentionally removed until a real event is ready.
- Data Digest is live as 11 crawlable static entries at `/digest/[slug]`, with a `/digest` index, per-entry metadata, Article JSON-LD, descriptive image text, `sitemap.xml`, and `robots.txt`.
- SEO metadata is configured in `app/layout.tsx` and the Digest routes: canonical URLs, title templates, descriptions, Open Graph/Twitter images, Organization/WebSite JSON-LD, and BreadcrumbList JSON-LD for Digest articles.
- Google Search Console is configured for `https://uplbdsg.org`. Use it to monitor indexing, sitemap processing, search queries, click-through rate, Core Web Vitals, mobile usability, and crawl errors. Submit `/sitemap.xml` and request re-crawls after substantial content or metadata changes.
- Past events use a responsive photo slideshow. The mobile layout separates media and copy instead of overlaying text on photos.
- Media is optimized for the static host: WebP event assets, 1200px Digest panels, separate 640px mobile sources/card thumbnails, and lazy-loaded Digest links without route prefetch. Full media dropped from about 15 MB of initial JPEGs to about 6.5 MB, while mobile pages fetch the smaller variants.
- Original timeline (landing April–May, blog June–July 2026) slipped; landing page polish is still in progress.
- Not yet done: public launch announcement and a no-code publishing interface.

## 3. Tech Stack

- **Framework:** Next.js 16.2.3 (App Router, `output: "export"` — fully static) + React 19 + TypeScript.
- **Styling:** Tailwind CSS v4 (design tokens in `app/globals.css` `@theme`).
- **Wireframes:** Figma (external).
- **Testing:** Playwright (currently used via MCP for manual viewport verification; no automated test suite yet).
- **Future publishing option:** a Git-based editor may be added when non-developer publishing is frequent. No CMS or database is currently required.

### Content model

All site copy, event data, and Data Digest metadata/body copy live in `app/lib/data.ts` (`COPY`, `NAV_LINKS`, `SOCIAL_LINKS`, `PAST_EVENTS`, `DIGEST_ENTRIES`). **To update published content, edit that file only — components must stay copy-free.** Digest panel files live at `public/digest/<slug>/01.webp`, `02.webp`, and so on; each has a `01-640.webp`-style mobile variant, and each entry also has a 640px `cover.webp`. Full panels are capped at 1200px to keep text readable without sending oversized files.

## 4. Infrastructure & Access

| Asset | Where | Status |
| --- | --- | --- |
| Source code | GitHub org `UPLB-DSG`, repo `uplb-dsg-website` (`main` branch) | Active |
| Hosting / CD | **Cloudflare Pages** project `uplb-dsg-website`, auto-deploy via `.github/workflows/deploy-cloudflare.yml` (push to `main` → production; PR → `pr-N` preview). Needs org secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` | Active pipeline |
| Staging (legacy) | Vercel project `dsg-website` (`.vercel/`, `dsg-website.vercel.app`) — used for initial staging/review; **not the active pipeline** | Legacy |
| Domain | `uplbdsg.org` | **Live** |
| DNS | Cloudflare (free tier) | Active |
| CMS | None; content is maintained in Git | Deliberate static-first choice |

Budget for the domain is approved-in-principle per the proposal but must be formally requested from DSG Finance/Executive each year.

## 5. Operational Procedures

- **Ticket-based, asynchronous workflow.** All tasks, bugs, and feature requests go through tracked tickets (GitHub Issues) — no reliance on real-time availability.
- **Three-Way Meeting protocol** at every handover: outgoing lead + incoming lead + a quorum of the new team, to validate access and prevent knowledge silos.
- **Commits:** Conventional Commits, signed (`git commit -S`), atomic.
- **Before every commit:** `npm run lint` and `npm run build -- --webpack` must pass; visual changes must be checked at 320 / 375 / 414 / 768 / 1440 px widths (see AGENTS.md).

## 6. Common Tasks

| Task | How |
| --- | --- |
| Run locally | `npm ci && npm run dev` → http://localhost:3000 |
| Edit copy or add a past event | Edit `app/lib/data.ts`, add optimized WebP images under `public/events/`, commit, and push |
| Add a Data Digest entry | Add 1200px numbered WebP panels, matching `*-640.webp` mobile variants, and a 640px `cover.webp` under `public/digest/<slug>/`; then add one `DIGEST_ENTRIES` item in `app/lib/data.ts` |
| Deploy to production | Push to `main` (GitHub Actions → Cloudflare Pages) |
| Review SEO | Check Google Search Console for `https://uplbdsg.org`, verify the sitemap and indexing status, then review performance and crawl reports |
| Get a preview URL | Open a PR → Cloudflare Pages `pr-N` branch deploy |
| Add images | Optimize first, put in `public/` (no server-side image optimization exists) |

## 7. Successor Handover Checklist

- [ ] GitHub org access (admin or contributor) transferred
- [ ] Cloudflare access (Pages + DNS) transferred
- [ ] Domain management rights transferred (once purchased)
- [ ] Budget formally requested for annual domain renewal
- [ ] Public launch announcement coordinated with Marketing & Creatives
- [ ] This turnover document updated for the next cycle
- [ ] Ticket-based handover continued with the next team

## 8. Design & Development Autonomy

Incoming teams may redesign, restructure, or migrate the site as they see fit, provided (a) the org's official branding guidelines are followed and (b) the handover trail (this document + tickets) is maintained for their successors.

## 9. Key Contacts

- **Simonee Ezekiel Mariquit** — Lead Developer
- **Franz Saragena** — Marketing & Creatives Head (2025–2026)
- **Hans Andre Shi** — Marketing & Creatives Head (2026–2027)

## 10. Revision History

| Date | Change |
| --- | --- |
| 2026-08-19 | First in-repo version, transcribed from the planning docs (project proposal, turnover template, working notes) and reconciled with actual infrastructure (Cloudflare Pages as active deployment). |
| 2026-08-19 | Added the static Data Digest archive and SEO routes, responsive event slideshow, real event media, updated statistics/header, and the WebP performance workflow. |
| 2026-08-19 | Added canonical metadata, title/description templates, social previews, Organization/WebSite/BreadcrumbList structured data, and Google Search Console operating notes. |
