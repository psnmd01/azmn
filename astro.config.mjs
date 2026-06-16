import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://psnmd01.github.io/azmn/
// `base` makes every asset + internal link resolve under the /azmn/ subpath
// (without it, /_astro/* assets 404 when served from the project subdirectory).
export default defineConfig({
  site: 'https://psnmd01.github.io',
  base: '/azmn',
});
