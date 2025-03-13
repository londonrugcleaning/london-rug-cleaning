
import { SchemaMarkup } from "./SchemaMarkup";

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
}

export const ServiceSchema = ({
  name,
  description,
  serviceType = "Rug Cleaning",
  areaServed = "London"
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "provider": {
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
      "areaServed": areaServed
    },
    "serviceType": serviceType,
    "description": description,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": areaServed
    }
  };

  return <SchemaMarkup schema={schema} />;
};
