
interface LocalBusinessSchemaProps {
  priceRange?: string;
  areaServed?: string;
  url?: string;
  image?: string;
  socialProfiles?: string[];
}

export const LocalBusinessSchema = ({
  priceRange = "££",
  areaServed = "London",
  url = "https://londonrugcleaning.co.uk",
  image = "https://londonrugcleaning.co.uk/images/logo.png",
  socialProfiles = [
    "https://www.facebook.com/londonrugcleaning",
    "https://twitter.com/londonrugclean",
    "https://www.instagram.com/londonrugcleaning"
  ]
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "London Rug Cleaning",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Maddison Court, 145 Great North Way",
      "addressLocality": "London",
      "postalCode": "NW4 1PW",
      "addressCountry": "UK"
    },
    "telephone": "02034888344",
    "priceRange": priceRange,
    "areaServed": areaServed,
    "url": url,
    "image": image,
    "sameAs": socialProfiles
  };

  return <SchemaMarkup schema={schema} />;
};
