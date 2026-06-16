import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://psnmd01.github.io/azmn/
// `base` makes every asset + internal link resolve under the /azmn/ subpath
// (without it, /_astro/* assets 404 when served from the project subdirectory).
// base is env-driven: the canonical local preview builds at root
// (PUBLIC_BASE=/ → http://localhost:4399/), GitHub Pages leaves it unset and
// gets the project subpath (/azmn). One config, two surfaces.
export default defineConfig({
  site: 'https://psnmd01.github.io',
  base: process.env.PUBLIC_BASE ?? '/azmn',
});
