import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mercedesnews.github.io',
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
