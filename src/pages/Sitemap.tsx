
import React, { useEffect, useState } from "react";
import { SitemapGenerator, SitemapURL } from "@/components/seo/SitemapGenerator";
import { HeadMeta } from "@/components/HeadMeta";
import { getAllBlogPosts } from "@/lib/blog";

const Sitemap = () => {
  const baseUrl = "https://londonrugcleaning.co.uk";
  const [sitemapUrls, setSitemapUrls] = useState<SitemapURL[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      // Static routes
      const staticRoutes: SitemapURL[] = [
        { loc: "/", lastmod: "2023-11-15", changefreq: "yearly", priority: 1.0 },
        { loc: "/about", lastmod: "2023-11-01", changefreq: "yearly", priority: 0.8 },
        { loc: "/services", lastmod: "2023-11-10", changefreq: "yearly", priority: 0.9 },
        { loc: "/contact", lastmod: "2023-11-01", changefreq: "yearly", priority: 0.8 },
        { loc: "/blog", lastmod: "2023-11-20", changefreq: "weekly", priority: 0.7 },
        { loc: "/gallery", lastmod: "2023-11-05", changefreq: "monthly", priority: 0.6 },
        
        // Service pages
        { loc: "/services/persian-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
        { loc: "/services/oriental-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
        { loc: "/services/antique-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
        { loc: "/services/area-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
        { loc: "/services/wool-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
        { loc: "/services/hand-knotted-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
        { loc: "/services/rug-stain-removal", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
        { loc: "/services/synthetic-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
      ];
      
      // Get all blog posts
      try {
        const blogPosts = await getAllBlogPosts();
        const blogRoutes = blogPosts.map(post => ({
          loc: `/blog/${post.slug}`,
          lastmod: post.date,
          changefreq: "monthly" as const,
          priority: 0.7
        }));
        
        // Combine static routes with blog routes
        setSitemapUrls([...staticRoutes, ...blogRoutes]);
      } catch (error) {
        console.error("Error fetching blog posts for sitemap:", error);
        setSitemapUrls(staticRoutes);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    // Set XML content type using response headers
    if (document.querySelector('pre') && sitemapUrls.length > 0) {
      const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;
      
      document.querySelector('pre')!.textContent = xmlString;
    }
  }, [baseUrl, sitemapUrls]);

  return (
    <>
      <HeadMeta 
        title="Sitemap" 
        description="Sitemap for London Rug Cleaning website"
        noindex={true}
      />
      {sitemapUrls.length > 0 && <SitemapGenerator baseUrl={baseUrl} urls={sitemapUrls} />}
      <pre style={{ display: 'none' }}></pre>
    </>
  );
};

export default Sitemap;
