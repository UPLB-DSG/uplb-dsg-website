# UPLB DSG Website

Official website of the **UPLB Data Science Guild** — the pioneer data science organization of the University of the Philippines Los Baños. Static site built with Next.js, deployed on Cloudflare Pages.

## Getting Started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run lint` | ESLint — must pass before committing |
| `npm run build -- --webpack` | Production build → `out/` (static export) |

## Editing content

All site copy, events, Data Digest entries, and links live in [`app/lib/data.ts`](app/lib/data.ts). Digest images live in `public/digest/<slug>/`; event images live in `public/events/`. Keep full images at 1200px WebP, add matching `*-640.webp` mobile variants, and use a 640px `cover.webp` for Digest cards.

Data Digest pages are statically generated at `/digest` and `/digest/[slug]`, with per-entry metadata, structured data, image alt text, and sitemap entries.

## Deployment

Push to `main` → GitHub Actions builds and deploys the static `out/` directory to **Cloudflare Pages**. Pull requests get `pr-N` preview deployments automatically.

## Documentation

- **[TURNOVER.md](TURNOVER.md)** — handover record: infrastructure, access, procedures, and the successor checklist. Must be kept current.
- **[AGENTS.md](AGENTS.md)** — conventions and commands for AI coding agents (and a decent orientation for humans, too).

## License

Private — property of the UPLB Data Science Guild.
