# UPLB DSG Website

Official website of the **UPLB Data Science Guild**, the pioneer data science organization of the University of the Philippines Los Baños. Static site built with Next.js, deployed on Cloudflare Pages at [uplbdsg.org](https://uplbdsg.org).

## Getting started

```bash
npm ci
npm run dev -- --webpack
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev -- --webpack` | Dev server |
| `npm run lint` | ESLint, must pass before committing |
| `npm run build -- --webpack` | Production build to `out/` (static export) |

## Editing content

- **No code:** open [uplbdsg.org/admin](https://uplbdsg.org/admin/), sign in with GitHub (you need write access to this repo), and add or edit an event, workshop, or Data Digest entry. Saving publishes in about two minutes.
- **Events and Data Digest:** one markdown file each in `content/events/` and `content/digest/`. YAML frontmatter holds the fields, the body is the writeup, and the file name is the page address (`/events/<slug>`, `/digest/<slug>`). `app/lib/content.ts` reads them at build time and fails the build on a missing field.
- **Site copy** (hero, About, committee heads, links, contact email): `app/lib/data.ts`.
- **Images:** `public/events/<slug>/` and `public/digest/<slug>/` as WebP, with matching `*-640.webp` mobile copies and a 640px `cover.webp` for Digest cards. There is no image optimizer on the static host, so optimize before committing.

## Deployment

`.github/workflows/ci-cd.yml` runs lint and build on every pull request and push. A push to `main` deploys to production; a pull request gets a `pr-N` preview link.

## Documentation

- **[TURNOVER.md](TURNOVER.md):** handover record (infrastructure, access, procedures, successor checklist). Keep it current.
- **[AGENTS.md](AGENTS.md):** conventions and commands for coding agents, also a good orientation for people.
- **Contributor guide:** the Contributor guide tab of the UPLB DSG Website Google Doc (how to post, with a demo video).

## License

Private, property of the UPLB Data Science Guild.
