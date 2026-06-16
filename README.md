# Azaman — Marketing Site

Product repo for the Azaman public website, built by the azaman-pro AI crew
(PM + design + frontend + review + brand) over Discord.

The crew commits here on per-agent feature branches; the Reviewer merges to `main`.

## Stack

- Astro
- Tailwind CSS
- Static output, no client framework dependency

## Run Locally

```bash
npm install
npm run dev
```

The dev server runs on the host and port printed by Astro.

## Build

```bash
npm run build
npm run preview
```

The production site is emitted to `dist/`.

## Content And Tokens

Landing-page copy is centralized in `src/content/copy.en.json` with stable `data-i18n`
keys in the page markup. Design tokens live in `tailwind.config.mjs` and
`src/styles/global.css`, aligned to Sara's locked DS-2 decision.

The Inter variable font is self-hosted from `public/fonts/inter-var.woff2` and
preloaded in `src/pages/index.astro` so the intended type system renders without
a runtime font service dependency.
