
import React from "react";
import { SitemapGenerator } from "@/components/seo/SitemapGenerator";

const Sitemap = () => {
  const baseUrl = "https://londonrugcleaning.co.uk";
  
  const sitemapUrls = [
    { loc: "/", lastmod: "2023-11-15", changefreq: "monthly", priority: 1.0 },
    { loc: "/about", lastmod: "2023-11-01", changefreq: "yearly", priority: 0.8 },
    { loc: "/services", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.9 },
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

  return <SitemapGenerator baseUrl={baseUrl} urls={sitemapUrls} />;
};

export default Sitemap;
