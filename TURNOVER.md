# UPLB DSG Website: Turnover Document

> **Standing rule: keep this document current at all times.** Any change to infrastructure, accounts/access, deployment, content workflow, or roadmap must be reflected here in the same change. This is the formal handover record required by the project proposal (Milestone 4) and item 3 of the Successor Handover Checklist.

_Last updated: 2026-11-01_

## 1. Project Overview

The website is the org's primary digital presence, with three institutional goals:

1. **Professionalize the branding** of the org.
2. Serve as a **portfolio piece** for the org's website developers.
3. **Skills development** for members.

Functional priorities, in order:

1. **Landing page**: the org pitch (About Us, mission/vision, events, socials).
2. **Blog-style content for events and series, optimized for SEO**, including the _Data Digest_, a series of comic-style photo posts teaching data science concepts.
3. **Professional signup site for events** (future phase).

Audience: people interested in joining UPLB DSG or learning about its events and activities.

## 2. Current State (as of 2026-11-01)

- Landing page order: hero, Workshops, Recent events (latest 4, full list at `/events`), Data Digest, About (who we are, counted facts, mission, vision, values, committee heads), footer with the contact email. The recruitment process is internal and must not be published on the site.
- Data Digest is live as 18 crawlable static entries at `/digest/[slug]`, one markdown file each in `content/digest/`, with a `/digest` index, per-entry metadata, Article JSON-LD, descriptive image text, `sitemap.xml`, and `robots.txt`.
- SEO metadata is configured in `app/layout.tsx` and the Digest routes: canonical URLs, title templates, descriptions, Open Graph/Twitter images, Organization/WebSite JSON-LD, and BreadcrumbList JSON-LD for Digest articles.
- Google Search Console is configured for `https://uplbdsg.org`. Use it to monitor indexing, sitemap processing, search queries, click-through rate, Core Web Vitals, mobile usability, and crawl errors. Submit `/sitemap.xml` and request re-crawls after substantial content or metadata changes.
- Events and workshops: 13 markdown files in `content/events/` (`kind: "event" | "workshop"`), each with a static page at `/events/[slug]` (writeup adapted from the guild's Facebook caption, gallery, venue, audience, source link, Event JSON-LD, sitemap entry). The home page shows a Workshops grid and the latest events; `/events` lists every event. Event pages page through older and newer entries of the same kind. Images render whole over a blurred backdrop (`contained-image.tsx`), never cropped.
- Hero: org name as the h1, tagline, "Read the Data Digest" and "See our events" calls to action, photo slideshow with a Pause motion toggle (WCAG 2.2.2). Opening sequence: an inline script in the `app/layout.tsx` head shows it on the first home visit per session; scattered data points gather into a ring around the logo, the logo fades in unaltered, the name rises, then the overlay fades out (1.6 s minimum, 3 s maximum, click or any key skips). Easter eggs in `hero-canvas.tsx`: click-to-fit regression line, Konami code k-means, "sudo" antigravity. Also a console message and a confusion matrix 404. All motion respects `prefers-reduced-motion`.
- Demo video of posting with the editor (54 s): https://drive.google.com/file/d/1oK9KQEV83iGbzCiOdlZ-zBfzrNWkPCPE/view (Google Drive of semariquit@gmail.com, anyone with the link can view). Also linked from the Turnover and Contributor guide tabs of the UPLB DSG Website doc.
- Content editor: `uplbdsg.org/admin/` (Sveltia CMS, config in `public/admin/config.yml`, version pinned in `public/admin/index.html`). Editors need write access to the GitHub repo. GitHub sign-in goes through the `uplbdsg-cms-auth` Cloudflare Worker (github.com/sveltia/sveltia-cms-auth, account Stimmie, `https://uplbdsg-cms-auth.h-847.workers.dev`) and the UPLB-DSG org OAuth App "UPLB DSG Blog Post" (callback `https://uplbdsg-cms-auth.h-847.workers.dev/callback`). Worker settings: var `ALLOWED_DOMAINS=uplbdsg.org`, secrets `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` (set with `npx wrangler secret put <NAME> --name uplbdsg-cms-auth`; paste the value at the prompt, never as the name).
- Contact email shown on the site: `CONTACT_EMAIL` in `app/lib/data.ts` (the guild Gmail). Change it there if the org prefers another inbox.
- Website feedback survey (T&S Committee, Sept 30 2026, forms.gle/XtcRfsvt3H8zJo5T9) had 0 responses as of 2026-10-30; its nine questions double as the review rubric.
- Favicon and Open Graph card are built from the official vector logo (`DSG Logo Vector.eps`, kept outside the repo). OG card: lockup on dark with the Facebook page description.
- Media is optimized for the static host: WebP event assets, 1200px Digest panels, 640px copies offered through `srcset` (small slots and 1x screens use them, 2x and 3x phones get the full file), 9:16 phone crops of the hero slides (`public/hero/N-tall.webp`), and lazy-loaded Digest links without route prefetch. Full media dropped from about 15 MB of initial JPEGs to about 6.5 MB, while mobile pages fetch the smaller variants.
- Original timeline (landing April to May, blog June to July 2026) slipped; the landing page, events, Data Digest, and the editor shipped by 2026-10-31.
- Not yet done: public launch announcement.

## 3. Tech Stack

- **Framework:** Next.js 16.4.3 (App Router, `output: "export"`, fully static) + React 19 + TypeScript. ESLint 10.
- **Styling:** Tailwind CSS v4 (design tokens in `app/globals.css` `@theme`).
- **Wireframes:** Figma (external).
- **Testing:** Playwright (used via MCP for manual viewport verification; no automated test suite yet). The build fails on a content file with a missing field or an unknown event `kind`.
- **Content editor:** Sveltia CMS at `/admin` (Git-based; no database).

### Content model

- Site copy (hero, About, mission, values, committee heads, links, contact email) lives in `app/lib/data.ts` (`COPY`, `NAV_LINKS`, `SOCIAL_LINKS`, `FOOTER_LINKS`, `CONTACT_EMAIL`). Components stay copy-free.
- Events, workshops, and Data Digest entries are markdown files: `content/events/<slug>.md` and `content/digest/<slug>.md`. YAML frontmatter holds the fields, the body is the writeup, and the file name is the page address. `app/lib/content.ts` reads them at build time and exports `EVENTS`, `PAST_EVENTS`, `WORKSHOPS`, `DIGEST_ENTRIES`.
- Non-developers edit the same files through the editor at `/admin` (see the Contributor guide tab of the UPLB DSG Website doc).

Hand-made Digest panel files live at `public/digest/<slug>/01.webp`, `02.webp`, and so on; each has a `01-640.webp`-style mobile variant, and each entry also has a 640px `cover.webp`. Full panels are capped at 1200px to keep text readable without sending oversized files.

## 4. Infrastructure & Access

| Asset | Where | Status |
| --- | --- | --- |
| Source code | GitHub org `UPLB-DSG`, repo `uplb-dsg-website` (`main` branch) | Active |
| Hosting / CD | **Cloudflare Pages** project `uplb-dsg-website`, auto-deploy via `.github/workflows/ci-cd.yml` (lint + build check first, then push to `main` → production, PR → `pr-N` preview; production deploys run one at a time). Dependabot, CodeQL, and dependency review also run from `.github/`. Needs org secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` | Active pipeline |
| Staging (legacy) | Vercel project `dsg-website` (`.vercel/`, `dsg-website.vercel.app`), used for initial staging and review; **not the active pipeline** | Legacy |
| Domain | `uplbdsg.org` | **Live** |
| DNS | Cloudflare (free tier) | Active |
| CMS | Sveltia CMS at `uplbdsg.org/admin/`, GitHub sign-in through the `uplbdsg-cms-auth` Cloudflare Worker (see section 2). Saving commits to `main` | Active |

Budget for the domain is approved-in-principle per the proposal but must be formally requested from DSG Finance/Executive each year.

## 5. Operational Procedures

- **Ticket-based, asynchronous workflow.** All tasks, bugs, and feature requests go through tracked tickets (GitHub Issues), with no reliance on real-time availability.
- **Three-Way Meeting protocol** at every handover: outgoing lead + incoming lead + a quorum of the new team, to validate access and prevent knowledge silos.
- **Commits:** Conventional Commits, signed (`git commit -S`), atomic.
- **Before every commit:** `npm run lint` and `npm run build -- --webpack` must pass; visual changes must be checked at 320 / 375 / 414 / 768 / 1440 px widths (see AGENTS.md).

## 6. Common Tasks

| Task | How |
| --- | --- |
| Run locally | `npm ci && npm run dev` → http://localhost:3000 |
| Edit site copy | `app/lib/data.ts` |
| Add an event or workshop | Easiest: `uplbdsg.org/admin/`, Events and workshops, New. By hand: add WebP photos (1600px max plus `*-640.webp`) under `public/events/<slug>/` and a `content/events/<slug>.md` copied from an existing entry (`kind`, `title`, `date`, `publishedAt`, `description`, `images`, `source` with the Facebook permalink, writeup as the body). The page, sitemap entry, and home-page card or timeline row follow from the file |
| Add a Data Digest entry | Easiest: `uplbdsg.org/admin/`, Data Digest, New. By hand: add 1200px numbered WebP panels, matching `*-640.webp` mobile variants, and a 640px `cover.webp` under `public/digest/<slug>/`, then a `content/digest/<slug>.md` copied from an existing entry |
| Deploy to production | Push to `main` (GitHub Actions → Cloudflare Pages) |
| Review SEO | Check Google Search Console for `https://uplbdsg.org`, verify the sitemap and indexing status, then review performance and crawl reports |
| Get a preview URL | Open a PR → Cloudflare Pages `pr-N` branch deploy |
| Add images | Optimize first, put in `public/` (no server-side image optimization exists) |
| Regenerate the OG card or favicon | Render the EPS with Ghostscript (`gs -sDEVICE=pngalpha -r300 -dEPSCrop`), compose in an HTML card at 1200x630, screenshot with Playwright, save to `app/opengraph-image.png` and `app/twitter-image.png` (update the `.alt.txt` files); icons are `app/icon.png` (512) and `app/apple-icon.png` (180) |

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

- **Simonee Ezekiel Mariquit**, Lead Developer
- **Franz Saragena**, Marketing & Creatives Head (2025 to 2026)
- **Hans Andre Shi**, Marketing & Creatives Head (2026 to 2027)

## 10. Revision History

| Date | Change |
| --- | --- |
| 2026-08-19 | First in-repo version, transcribed from the planning docs (project proposal, turnover template, working notes) and reconciled with actual infrastructure (Cloudflare Pages as active deployment). |
| 2026-08-19 | Added the static Data Digest archive and SEO routes, responsive event slideshow, real event media, updated statistics/header, and the WebP performance workflow. |
| 2026-08-19 | Added canonical metadata, title/description templates, social previews, Organization/WebSite/BreadcrumbList structured data, and Google Search Console operating notes. |
| 2026-08-27 | Bioinformatics Workshop and Fireside Chats event entries; CSS-only motion system (hero stagger, scroll reveals, shimmer, loading skeletons). |
| 2026-09-20 | Seven Data Digest entries and fourteen event/workshop pages harvested from the Facebook page; Workshop Series section and Past Events timeline; hero tagline, CTAs, and opening sequence; data science easter eggs; Lottie ornaments; About section relayout; favicon and Open Graph card rebuilt from the vector logo. |
| 2026-10-30 | Design and accessibility pass: removed gradient headline, glow orbs, glass nav, Lottie (dependency dropped), count-up stats; added `/events` index, event prev/next, contact email, partners line, accent text token (`accent-text`, 7:1), slideshow pause, og:url on article pages; replaced the particle intro with an IoP-style opening. |
| 2026-10-30 | Content workflow: events and Data Digest moved from `app/lib/data.ts` to markdown files in `content/` (DSSoc mechanism). To publish, add a `.md` file with the frontmatter fields of an existing entry, put images under `public/`, and push. |
| 2026-10-30 | Photos from the guild Facebook page: hero slides cropped from the Untangled orientation posters and the Synthesis batch shot; About shows the batch photo, 100+ members, and the A.Y. 2026-2027 committee head cards (`COPY.officers`; no Internal Affairs card in the ExeCom post). Contributor guide added as a tab in the UPLB DSG Website Google Doc. |
| 2026-10-30 | Removed the How to join section and the Join nav link: the recruitment process is internal. Hero primary CTA now points to the Data Digest; nav shows Contact again. |
| 2026-10-30 | Sveltia CMS at `/admin` (same setup as the DSSoc site) for editing `content/events` and `content/digest` without code. Saves commit to `main`. Uploads become WebP at most 1200 px; posts without a `-640` copy or `cover.webp` fall back to the uploaded image. Sign-in with GitHub goes through the `uplbdsg-cms-auth` worker. |
| 2026-10-31 | Removed the partners line from About: the site does not list sponsors or partners. |
| 2026-10-31 | Filed GitHub Support ticket #4933085 (from smmariquit@up.edu.ph, support.github.com/tickets) to purge the pre-rewrite commits and the PR #4, #5, #6 diffs that still hold the removed recruitment text. Follow up on that ticket if it is not resolved. |
| 2026-10-31 | CI/CD: `deploy-cloudflare.yml` became `ci-cd.yml` (lint and build gate before deploy, serialized production deploys after a deploy race on 2026-10-31). Added Dependabot (7-day cooldown), CodeQL, and dependency review. |
| 2026-10-31 | Repo security on: Dependency graph, Dependabot alerts and security updates, secret scanning with push protection. Ruleset "Protect main" blocks force-pushes and deletion of `main` (repo admins can bypass for emergencies like a history rewrite). Required status checks are not enforced on `main` because the Sveltia editor commits there directly; the pipeline still deploys only builds that pass lint and build. Closed #2 (Vercel analytics, not used on Cloudflare) and #3 (superseded by #14). |
| 2026-11-01 | Hero slideshow leads with workshops and talks (No Code Beta, Data Horizons 2024), with one community shot (Untangled). |
| 2026-11-01 | Docs and cleanup: this document, README, and AGENTS.md now describe the markdown and `/admin` content workflow and current versions. Removed the unused hero scene layers, `FACEBOOK_URL`, and `COPY.tagline`; the content loader now fails the build on an unknown event `kind`. |
| 2026-11-01 | Sharper images: phones were showing the 640px copies stretched 1.6x to 2x on 3x screens, and the hero 4x to 7x. Pictures now use `srcset` so high-density screens get the full file, the hero has full-height 9:16 phone crops, and the low-resolution Untangled slide (850px, cut from a poster) is replaced by a No Code Beta photo, so all five slides show learning. Facebook has 2048px originals of the hero photos if the hero needs to be sharper on retina laptops. |
