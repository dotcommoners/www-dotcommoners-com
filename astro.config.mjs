// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Primary org site. Served at the www apex.
// Deployment is handled separately; this only controls canonical URLs + asset paths.
export default defineConfig({
  site: 'https://www.dotcommoners.com',
  base: '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
