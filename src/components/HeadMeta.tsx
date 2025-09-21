
import { Helmet } from "react-helmet-async";

interface HeadMetaProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  ogLocale?: string;
  twitterCard?: string;
  schema?: Record<string, any> | Record<string, any>[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  children?: React.ReactNode;
}

export const HeadMeta = ({
  title = "London Rug Cleaning - Professional Rug Cleaning Services",
  description,
  canonicalUrl = "https://londonrugcleaning.co.uk",
  noindex = false,
  ogImage = "https://londonrugcleaning.co.uk/og-image.png",
  ogImageAlt = "London Rug Cleaning - Professional Rug Cleaning Services",
  ogType = "website",
  ogLocale = "en_GB",
  twitterCard = "summary_large_image",
  schema,
  publishedTime,
  modifiedTime,
  author = "London Rug Cleaning",
  children,
}: HeadMetaProps) => {
  const baseTitle = "London Rug Cleaning";
  const fullTitle = title === baseTitle ? title : `${title} | ${baseTitle}`;

  const baseDescription = "Expert rug cleaning services in London. Specializing in oriental, Persian, and antique rug cleaning with free collection and delivery. Get your free quote today!";
  const fullDescription = description ? `${description}` : baseDescription;


  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="London Rug Cleaning" />

      {/* Article-specific OG tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {ogType === "article" && <meta property="article:author" content={author} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {children}
    </Helmet>
  );
};
