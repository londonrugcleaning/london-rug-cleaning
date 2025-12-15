import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind()],
    output: 'server',
    adapter: cloudflare({
        imageService: 'compile',
    }),
    markdown: {
        rehypePlugins: [rehypeSlug]
    },
    vite: {
        resolve: {
            // ONLY apply this alias when building for production (Cloudflare).
            // In development, we let Astro use the standard React Server DOM,
            // which avoids the "require is not defined" error.
            alias: process.env.NODE_ENV === 'production' ? {
                "react-dom/server": "react-dom/server.edge",
            } : undefined,
        },
    },
});