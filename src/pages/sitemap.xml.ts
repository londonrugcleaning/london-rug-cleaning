import { getCollection, type CollectionEntry } from 'astro:content';
import { servicesData } from '@/data/services';

const baseUrl = "https://londonrugcleaning.co.uk";

export async function GET() {
    const posts = await getCollection('blog');

    // Static routes
    const staticRoutes = [
        { loc: "/", changefreq: "yearly", priority: 1.0 },
        { loc: "/about", changefreq: "yearly", priority: 0.8 },
        { loc: "/contact", changefreq: "yearly", priority: 0.8 },
        { loc: "/gallery", changefreq: "monthly", priority: 0.6 },
        { loc: "/services", changefreq: "yearly", priority: 0.9 },
        { loc: "/blog", changefreq: "weekly", priority: 0.7 },
    ];

    // Service pages
    const serviceRoutes = Object.keys(servicesData).map(id => ({
        loc: `/services/${id}`,
        changefreq: "monthly",
        priority: 0.8
    }));

    // Blog posts
    const blogRoutes = posts.map((post: CollectionEntry<'blog'>) => ({
        loc: `/blog/${post.slug}`,
        lastmod: post.data.date,
        changefreq: "monthly",
        priority: 0.7
    }));

    const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.loc}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}
    ${route.changefreq ? `<changefreq>${route.changefreq}</changefreq>` : ''}
    ${route.priority ? `<priority>${route.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}
