import { defineConfig } from 'astro/config';

// Set `site` to your real domain once you have one (used for canonical URLs).
export default defineConfig({
  // site: 'https://yourname.dev',
  build: { inlineStylesheets: 'auto' },
});
