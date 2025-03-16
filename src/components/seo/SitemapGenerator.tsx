
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

interface SitemapGeneratorProps {
  baseUrl: string;
  urls: SitemapURL[];
}

export const SitemapGenerator = ({ baseUrl, urls }: SitemapGeneratorProps) => {
  const [sitemapContent, setSitemapContent] = useState<string>("");

  useEffect(() => {
    // Generate XML content
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
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

    setSitemapContent(xmlContent);
  }, [baseUrl, urls]);

  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
};

// Export a utility function to format the date for sitemap
export const formatSitemapDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};
