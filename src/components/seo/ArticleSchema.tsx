
import { SchemaMarkup } from "./SchemaMarkup";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  keywords?: string[];
}

export const ArticleSchema = ({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified = datePublished,
  authorName = "London Rug Cleaning",
  keywords = []
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "London Rug Cleaning",
      "logo": {
        "@type": "ImageObject",
        "url": "https://londonrugcleaning.co.uk/images/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": keywords.join(", ")
  };

  return <SchemaMarkup schema={schema} />;
};
