
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
  blogPostsDir?: string; // Optional path to blog posts directory
}

export function sitemapPlugin(options: SitemapPluginOptions): Plugin {
  const { baseUrl, outDir = 'dist', routes, blogPostsDir } = options;

  return {
    name: 'vite-plugin-sitemap',
    apply: 'build',
    closeBundle: {
      order: 'post',
      handler: () => {
        let allRoutes = [...routes];
        
        // Add blog post routes if a blog posts directory is provided
        if (blogPostsDir && fs.existsSync(blogPostsDir)) {
          try {
            const blogFiles = fs.readdirSync(blogPostsDir)
              .filter(file => file.endsWith('.md'));
            
            for (const file of blogFiles) {
              const slug = file.replace('.md', '');
              // Get the file stats to use the last modified date
              const stats = fs.statSync(path.join(blogPostsDir, file));
              const lastmod = stats.mtime.toISOString().split('T')[0];
              
              allRoutes.push({
                loc: `/blog/${slug}`,
                lastmod,
                changefreq: 'monthly',
                priority: 0.7
              });
            }
          } catch (error) {
            console.error('Error processing blog posts for sitemap:', error);
          }
        }

        // Generate XML content
        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
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
        
        console.log('✅ sitemap.xml has been generated with', allRoutes.length, 'URLs');
      },
    },
  };
}
