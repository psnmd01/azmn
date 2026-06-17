import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { create as createFont } from 'fontkitten';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const W = 1200;
const H = 630;
const COLORS = {
  inkTop: '#101214',
  inkBottom: '#0d1b2a',
  accent: '#bc2a64',
  accentBright: '#e0457b',
  accentSoft: '#fce7ef',
  plumDeep: '#3a0f24',
  surface: '#ffffff',
  surfaceMuted: '#d8d2c7',
};

const loadFont = (name) => createFont(readFileSync(resolve(root, 'public/fonts', name)));
const fontDisplay = loadFont('fraunces-latin-standard-normal.woff2');
const fontSans = loadFont('inter-var.woff2');
const fontMono = loadFont('space-mono-latin-700-normal.woff2');

function layoutText(font, text, fontSize, { letterSpacing = 0, uppercase = false } = {}) {
  const source = uppercase ? text.toUpperCase() : text;
  const scale = fontSize / font.unitsPerEm;
  let cursor = 0;
  const paths = [];
  for (const ch of [...source]) {
    const cp = ch.codePointAt(0);
    const glyph = font.glyphForCodePoint(cp);
    if (glyph?.path?.toSVG) {
      paths.push({ d: glyph.path.toSVG(), offset: cursor });
    }
    const adv = (glyph?.advanceWidth || 0) * scale;
    cursor += adv + letterSpacing * fontSize;
  }
  return { paths, width: cursor, scale };
}

function renderText(font, text, fontSize, x, y, color, opts = {}) {
  const { paths, scale, width } = layoutText(font, text, fontSize, opts);
  const group = paths.map(({ d, offset }) => {
    const tx = x + offset;
    const ty = y;
    return `<path d="${d}" transform="translate(${tx.toFixed(2)},${ty.toFixed(2)}) scale(${scale.toFixed(5)},${(-scale).toFixed(5)})" fill="${color}"/>`;
  }).join('');
  return { svg: group, width };
}

const head = renderText(fontDisplay, 'Brief an AI crew.', 92, 80, 330, COLORS.surface, { letterSpacing: -0.01 });
const head2a = renderText(fontDisplay, 'They build it.', 92, 80, 440, COLORS.surface, { letterSpacing: -0.01 });
const head2b = renderText(fontDisplay, ' They ship.', 92, 80 + head2a.width, 440, COLORS.accentBright, { letterSpacing: -0.01 });
const sub = renderText(fontSans, 'Autonomous AI-agent crews on Discord. You hold the gates.', 26, 80, 500, COLORS.surfaceMuted);
const eyebrow = renderText(fontMono, 'An expert AI crew', 18, 80, 252, COLORS.accentBright, { uppercase: true, letterSpacing: 0.18 });
const wordmarkA = renderText(fontDisplay, 'A', 34, 96, 120, COLORS.surface);
const wordmark = renderText(fontSans, 'Azaman', 26, 158, 118, COLORS.surface);
const url = renderText(fontMono, 'azaman.dev', 18, 80, H - 60, COLORS.surfaceMuted, { uppercase: true, letterSpacing: 0.18 });
const tagline = renderText(fontMono, 'Brief in. Crew assembles. Artifact ships.', 18, 0, H - 60, COLORS.surfaceMuted, { uppercase: true, letterSpacing: 0.18 });
// right-align the tagline
const taglineX = W - 80 - tagline.width;
const taglineRight = renderText(fontMono, 'Brief in. Crew assembles. Artifact ships.', 18, taglineX, H - 60, COLORS.surfaceMuted, { uppercase: true, letterSpacing: 0.18 });

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="ink" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${COLORS.inkTop}"/>
      <stop offset="100%" stop-color="${COLORS.inkBottom}"/>
    </linearGradient>
    <radialGradient id="mesh-plum" cx="18%" cy="24%" r="42%">
      <stop offset="0%" stop-color="${COLORS.accent}" stop-opacity="0.66"/>
      <stop offset="100%" stop-color="${COLORS.inkBottom}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="mesh-mag" cx="82%" cy="36%" r="48%">
      <stop offset="0%" stop-color="${COLORS.accentBright}" stop-opacity="0.50"/>
      <stop offset="100%" stop-color="${COLORS.inkBottom}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="mesh-deep" cx="62%" cy="86%" r="56%">
      <stop offset="0%" stop-color="${COLORS.plumDeep}" stop-opacity="0.78"/>
      <stop offset="100%" stop-color="${COLORS.inkBottom}" stop-opacity="0"/>
    </radialGradient>
    <filter id="noise" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#ink)"/>
  <rect width="${W}" height="${H}" fill="url(#mesh-plum)"/>
  <rect width="${W}" height="${H}" fill="url(#mesh-mag)"/>
  <rect width="${W}" height="${H}" fill="url(#mesh-deep)"/>
  <rect width="${W}" height="${H}" fill="white" filter="url(#noise)" opacity="0.4" style="mix-blend-mode: overlay"/>

  <g aria-label="Azaman brand mark">
    <rect x="80" y="80" width="60" height="60" rx="12" fill="${COLORS.accent}"/>
    ${wordmarkA.svg}
    ${wordmark.svg}
  </g>

  ${eyebrow.svg}
  ${head.svg}
  ${head2a.svg}
  ${head2b.svg}
  ${sub.svg}

  ${url.svg}
  ${taglineRight.svg}

  <!-- accent rule -->
  <rect x="80" y="${H - 120}" width="56" height="3" fill="${COLORS.accentBright}"/>
</svg>`;

const outDir = resolve(root, 'public');
mkdirSync(outDir, { recursive: true });

await sharp(Buffer.from(svg), { density: 144 })
  .resize(W, H)
  .png({ compressionLevel: 9 })
  .toFile(resolve(outDir, 'og-image.png'));

writeFileSync(resolve(outDir, 'og-image.svg'), svg);

console.log('og-image.png written to public/ (' + W + 'x' + H + ')');
