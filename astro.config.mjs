// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // The public address of this site (canonical links, sitemap). Set SITE_URL once the domain is live.
  site: process.env.SITE_URL || 'https://careconnectgh.org',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
