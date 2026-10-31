# UPLB DSG Website

[![CI/CD](https://github.com/UPLB-DSG/uplb-dsg-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/UPLB-DSG/uplb-dsg-website/actions/workflows/ci-cd.yml)

Official website of the **UPLB Data Science Guild**, the pioneer data science organization of the University of the Philippines Los Baños. Live at **[uplbdsg.org](https://uplbdsg.org)**.

It is a fully static site: Next.js exports plain HTML, CSS, and images, and Cloudflare Pages serves them. There is no server or database. Events and Data Digest posts are markdown files in this repo, edited by hand or through the editor at [uplbdsg.org/admin](https://uplbdsg.org/admin/).

## Contents

- [What is on the site](#what-is-on-the-site)
- [Quick start](#quick-start)
- [Project layout](#project-layout)
- [Editing content](#editing-content)
- [Images](#images)
- [Rules for the site](#rules-for-the-site)
- [Making a change](#making-a-change)
- [Deployment and CI](#deployment-and-ci)
- [Troubleshooting](#troubleshooting)
- [Documentation](#documentation)
- [Credits](#credits)

## What is on the site

| Page | What it shows | Source |
| --- | --- | --- |
| `/` | Hero, workshops, recent events, Data Digest, About (mission, values, committee heads) | `app/page.tsx` |
| `/events/` | Every event, newest first | `content/events/*.md` |
| `/events/<slug>/` | One event or workshop: writeup, photos, source link | `content/events/<slug>.md` |
| `/digest/` | Every Data Digest entry | `content/digest/*.md` |
| `/digest/<slug>/` | One Data Digest entry: article, panel carousel, references | `content/digest/<slug>.md` |
| `/admin/` | Sveltia CMS editor (GitHub sign-in) | `public/admin/` |

Also generated: `sitemap.xml`, `robots.txt`, Open Graph images, and JSON-LD structured data for search engines.

## Quick start

You need [Node.js 22](https://nodejs.org/) (the version CI uses) and Git.

```bash
git clone https://github.com/UPLB-DSG/uplb-dsg-website.git
cd uplb-dsg-website
npm ci
npm run dev -- --webpack
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev -- --webpack` | Dev server with hot reload. Use `--webpack`; Turbopack is not tested here. |
| `npm run lint` | ESLint. Must pass before you commit. |
| `npm run build -- --webpack` | Production build into `out/`. Must pass before you commit. It fails if a post is missing a required field. |

To preview the production build, serve `out/` with any static server, for example `npx serve out`.

## Project layout

```text
app/
  page.tsx                  home page (section order)
  layout.tsx                <head>, metadata, opening animation script
  globals.css               design tokens (@theme), motion, markdown styles
  events/, digest/          index and [slug] pages
  lib/
    data.ts                 site copy: hero, About, committee heads, links, credits
    content.ts              reads content/*.md at build time, fails on bad files
    components/             header, footer, hero, sections, cards, carousel
content/
  events/*.md               one file per event or workshop
  digest/*.md               one file per Data Digest entry
public/
  events/<slug>/            event photos (WebP)
  digest/<slug>/            Data Digest panels (WebP) and cover.webp
  hero/                     hero slides and their phone crops
  officers/                 committee head cards
  admin/                    CMS page and config.yml
.github/                    CI/CD, CodeQL, dependency review, Dependabot
```

Imports use the aliases `@/components/*` (for `app/lib/components/*`) and `@/lib/*` (for `app/lib/*`).

## Editing content

### With the editor (no code)

1. Get write access to this repo from the website lead.
2. Open [uplbdsg.org/admin](https://uplbdsg.org/admin/) and sign in with GitHub.
3. Choose **Events and workshops** or **Data Digest**, then **New**. Every field has a hint.
4. Click **Save**. The editor commits to `main` and the post is live in about two minutes.

Saving publishes right away, so have someone check the post in the editor first if you are unsure. Deleting a post leaves its images in `public/`; ask the website lead to remove them. A demo video is linked from the Contributor guide (see [Documentation](#documentation)).

### By hand

Each post is one markdown file. The file name becomes the address, so `content/events/data-horizons-2026.md` is served at `/events/data-horizons-2026/`. Copy an existing file and change it.

An event or workshop:

```markdown
---
kind: event                  # event or workshop
title: "Untangled: UPLB DSG Orientation"
date: September 9, 2026      # shown on the page, plain words
publishedAt: 2026-09-09      # used for sorting, newest first
venue: IC's Bar and Cafe, Los Baños
audience: Open to all UPLB students   # optional
description: One sentence for cards and search results.
source:
  label: Facebook post, September 2026
  href: https://www.facebook.com/dsguplb/posts/...
images:                      # the first image is the cover
  - src: /events/untangled/01.webp
    alt: What the photo shows, in one sentence
---

The writeup in markdown. Adapt it from the guild's Facebook caption.
```

A Data Digest entry:

```markdown
---
title: The Loudness War
date: April 10, 2026
publishedAt: 2026-04-10
description: One sentence for cards and search results.
contentBy: Name            # optional
layoutBy: Name             # optional
references:                # optional
  - label: Source title
    href: https://example.com
panels:                    # in reading order; the first is the cover
  - src: /digest/loudness-war/01.webp
    alt: What the panel shows, in one sentence
---

The article text in markdown.
```

The build fails with the file name and field if a required field is missing (events: `kind`, `title`, `date`, `description`, `images`; Digest: `title`, `date`, `description`, `panels`) or if `kind` is not `event` or `workshop`. If you add a required field, add it to `public/admin/config.yml` too so the editor asks for it.

### Site copy

Text that is not a post (hero tagline, About, mission, values, committee heads, contact email, social links, footer credits) lives in `app/lib/data.ts`. Components contain no copy.

## Images

There is no image optimizer on the static host, so every image ships exactly as committed. Optimize before you commit.

- Format: WebP.
- Event photos: at most 1600 px wide, plus a 640 px copy named `<name>-640.webp`.
- Data Digest panels: 1200 px, plus `<name>-640.webp` copies and a 640 px `cover.webp` (a smaller copy of panel 1).
- Hero slides (`public/hero/N.webp`): also need a 9:16 phone crop at full height, `N-tall.webp`.
- Pages offer the small and full files through `srcset` (`srcSetOf()` in `app/lib/data.ts`), so the browser picks. Do not force the 640 px copy with a `media` query; phones have 2x to 3x screens and it looks blurred.
- Images uploaded in the editor are converted to WebP and capped at 1200 px. Posts without a `-640` copy fall back to the full file.
- Every image needs alt text.

## Rules for the site

- **Never publish the guild's recruitment or membership process.** It is internal.
- **No sponsor or partner lists.** Do not mix up the guild with other organizations or their events.
- Show the DSG logo as it is. Never crop, stretch, rotate, recolor, or redraw it.
- Event writeups adapted from a Facebook caption keep the `source` link.
- Accessibility follows WCAG 2.2 AA: 4.5:1 text contrast (use `accent-text`, not `accent-main`, for colored text), visible focus rings, 44 px tap targets, alt text, and reduced motion respected.
- Design: tokens live in `app/globals.css`. No gradient text, glows, or uppercase tracked labels. Fonts are Archivo (display) and Geist.

## Making a change

1. Branch from `main`.
2. Edit, then run `npm run lint` and `npm run build -- --webpack`.
3. For visual changes, check 320, 375, 414, 768, and 1440 px widths: no sideways scroll, buttons at least 44 px tall, and the desktop layout unchanged by mobile-only tweaks (use `lg:` overrides).
4. Commit with [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, ...), signed (`git commit -S`), one change per commit.
5. Open a pull request. CI posts a preview at `https://pr-<number>.uplb-dsg-website.pages.dev`. Get a review, then merge.
6. If you change hosting, accounts, or how content is published, update `TURNOVER.md` in the same pull request.

## Deployment and CI

| Workflow | When | What it does |
| --- | --- | --- |
| `ci-cd.yml` | Every pull request and push to `main` | Lint and build, then deploy that build. `main` goes to production; a pull request goes to a `pr-N` preview. Production deploys run one at a time. Forks and Dependabot build but do not deploy. |
| `codeql.yml` | Pull requests, pushes, weekly | Code scanning for JavaScript and TypeScript. |
| `dependency-review.yml` | Pull requests | Fails a pull request that adds a dependency with a high or critical advisory. |
| `dependabot.yml` | Weekly (Monday) | npm and Actions update pull requests, grouped, after a 7-day cooldown. |

Required repository secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. The domain and DNS are on Cloudflare. Editor sign-in goes through a small Cloudflare Worker (`uplbdsg-cms-auth`) and a GitHub OAuth app; `TURNOVER.md` has the details and who holds access.

Merging to `main` deploys to production, and the editor commits straight to `main`, so `main` has no required status checks. A build that fails lint or build never deploys.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Build fails with `content/...: missing "field"` | Add that field to the file's frontmatter. |
| Build fails with `kind must be "event" or "workshop"` | Fix the `kind` line (lowercase). |
| A post does not show up | Check `kind`, and that the file ends in `.md` and sits in `content/events/` or `content/digest/`. |
| Images look blurred on phones | Make sure the page uses `srcSetOf()` and the full-size file exists. |
| `npm run dev` rewrites the top of `AGENTS.md` | Next.js manages that block. Commit it. |
| Editor sign-in fails | Check the `uplbdsg-cms-auth` worker secrets and `ALLOWED_DOMAINS` (see `TURNOVER.md`). |
| The opening animation does not play | It plays once per browser session on `/`, and never with reduced motion. Open a private window to see it again. |

## Documentation

- **[TURNOVER.md](TURNOVER.md):** handover record (infrastructure, accounts, procedures, successor checklist). Keep it current.
- **[AGENTS.md](AGENTS.md):** conventions and commands for coding agents, also a good orientation for people.
- **Contributor guide:** the Contributor guide tab of the UPLB DSG Website Google Doc (how to post, with a demo video). Ask the website lead for access.

## Credits

Built and maintained by guild members. Lead: Simonee Ezekiel Mariquit. Contributors: Alyanna Caabay, Franz Saragena, Galvin Gonzales, Hanna Macasarte, Hans Andrie Shi, Jude Padilla, and Lance Gabriel Barroso.

## License

Private, property of the UPLB Data Science Guild.
