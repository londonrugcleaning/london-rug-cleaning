import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import rehypeSlug from 'rehype-slug';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    output: 'server',
    adapter: cloudflare({
        imageService: 'compile',
    }),
    markdown: {
        rehypePlugins: [rehypeSlug]
    },
    vite: {
      resolve: {

          alias: process.env.NODE_ENV === 'production' ? {
              "react-dom/server": "react-dom/server.edge",
          } : undefined,
      },

      plugins: [tailwindcss()],
    },
});