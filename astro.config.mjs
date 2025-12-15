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
    }
});
