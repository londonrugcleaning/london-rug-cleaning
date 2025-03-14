
import { type Plugin } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

interface SitemapPluginOptions {
  baseUrl: string;
  outDir?: string;
  routes: SitemapURL[];
}

export function sitemapPlugin(options: SitemapPluginOptions): Plugin {
  const { baseUrl, outDir = 'dist', routes } = options;

  return {
    name: 'vite-plugin-sitemap',
    apply: 'build',
    closeBundle: {
      order: 'post',
      handler: () => {
        // Generate XML content
        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

        // Write the sitemap.xml file to the output directory
        fs.writeFileSync(path.resolve(outDir, 'sitemap.xml'), xmlContent);
        
        console.log('✅ sitemap.xml has been generated');
      },
    },
  };
}
