// Makes the share card and icons in public/ from SVG, so they can be remade when the brand changes:
//   node scripts/make-images.mjs
// Black and Ghana gold, matching the site. System sans-serif (the build machine has no web fonts).
import sharp from 'sharp';

const INK = '#141414', GOLD = '#ffc72c', PAPER = '#f5f2ea';
const mark = (size, bg = INK) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="${bg === 'none' ? 0 : 7}" fill="${bg === 'none' ? INK : bg}"/>
    <path d="M21.5 10.2a8 8 0 1 0 0 11.6" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="22.4" cy="16" r="2.5" fill="${GOLD}"/>
  </svg>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="760" y="0" width="440" height="630" fill="${GOLD}"/>
  <g transform="translate(80 78) scale(2.2)">
    <rect width="32" height="32" rx="8" fill="${INK}"/>
    <path d="M21.5 10.2a8 8 0 1 0 0 11.6" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="22.4" cy="16" r="2.5" fill="${GOLD}"/>
  </g>
  <text x="168" y="130" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="40" fill="${INK}">CareConnect</text>
  <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" font-size="78" letter-spacing="-2" fill="${INK}">
    <tspan x="80" y="270">Care for every</tspan>
    <tspan x="80" y="358">member and</tspan>
    <tspan x="80" y="446">every visitor.</tspan>
  </text>
  <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="28" fill="#55534e">
    <tspan x="80" y="540">Church management software.</tspan>
    <tspan x="80" y="578">Free under 100 members.</tspan>
  </text>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="${INK}">
    <rect x="820" y="150" width="320" height="120" rx="16" fill="#ffffff"/>
    <text x="848" y="198" font-size="20" font-weight="700" fill="#8a6200">SECOND-TIMER</text>
    <text x="848" y="240" font-size="28" font-weight="700">Grace came back</text>
    <rect x="820" y="300" width="320" height="120" rx="16" fill="${INK}"/>
    <text x="848" y="348" font-size="20" fill="#bdbab3">Checked in this morning</text>
    <text x="848" y="398" font-size="44" font-weight="800" fill="#ffffff">412</text>
    <rect x="820" y="450" width="320" height="90" rx="16" fill="${PAPER}"/>
    <text x="848" y="505" font-size="24" font-weight="700">www.careconnectgh.org</text>
  </g>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
await sharp(Buffer.from(mark(180))).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(mark(512))).png().toFile('public/icon-512.png');
await sharp(Buffer.from(mark(48))).png().toFile('public/favicon-48.png');
console.log('made og-image.png, apple-touch-icon.png, icon-512.png, favicon-48.png');
