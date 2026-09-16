import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'hanyu-seo-files',
    generateBundle() {
      const origin = siteUrl.trim().replace(/\/$/, '');
      const hasPublicOrigin = /^https:\/\/[^/]+$/i.test(origin);
      const robots = [
        'User-agent: *',
        'Allow: /',
        ...(hasPublicOrigin ? [`Sitemap: ${origin}/sitemap.xml`] : []),
        '',
      ].join('\n');
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });

      if (!hasPublicOrigin) return;
      const levels = ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5', 'hsk6', 'hsk7-9'];
      const routes = [
        '/', '/hsk', ...levels.map((level) => `/hsk/${level}`),
        '/boya', '/boya/so-cap-1', '/boya/so-cap-2',
        '/khoa-hoc', '/giao-vien',
        '/xep-hang', '/dieu-khoan', '/chinh-sach-bao-mat',
      ];
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`),
        '</urlset>',
        '',
      ].join('\n');
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), seoFiles(env.VITE_SITE_URL || '')],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/@supabase/')) return 'supabase-vendor';
            if (
              id.includes('/node_modules/react/') ||
              id.includes('/node_modules/react-dom/') ||
              id.includes('/node_modules/react-router')
            ) {
              return 'react-vendor';
            }
          },
        },
      },
    },
    server: {
      port: 3005,
      open: true,
    },
  };
});
