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
    plugins: [
      {
        name: 'admin-redirect',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/admin' || req.url === '/admin/') {
              req.url = '/admin/index.html';
            }
            next();
          });
        },
      },
    ],
  },
});
