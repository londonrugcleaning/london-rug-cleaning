
import { Helmet } from "react-helmet-async";

interface HeadMetaProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  schema?: Record<string, any> | Record<string, any>[];
  children?: React.ReactNode;
}

export const HeadMeta = ({
  title = "London Rug Cleaning - Professional Rug Cleaning Services",
  description = "Expert rug cleaning services in London. Specializing in oriental, Persian, and antique rug cleaning with free collection and delivery. Get your free quote today!",
  canonicalUrl = "https://londonrugcleaning.co.uk",
  noindex = false,
  schema,
  children,
}: HeadMetaProps) => {
  const baseTitle = "London Rug Cleaning";
  const fullTitle = title === baseTitle ? title : `${title} | ${baseTitle}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {children}
    </Helmet>
  );
};
