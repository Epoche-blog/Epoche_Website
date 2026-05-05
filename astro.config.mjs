import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://epoche-website.pages.dev',
  output: "hybrid",
  adapter: cloudflare()
});