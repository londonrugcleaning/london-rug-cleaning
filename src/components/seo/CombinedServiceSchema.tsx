import { Helmet } from 'react-helmet-async';

interface CombinedServiceSchemaProps {
  serviceType: string;
  serviceName: string;
  serviceDescription: string;
}

export const CombinedServiceSchema = ({
  serviceType,
  serviceName,
  serviceDescription,
}: CombinedServiceSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://londonrugcleaning.co.uk/#organization',
        name: 'London Rug Cleaning',
        url: 'https://londonrugcleaning.co.uk',
        logo: 'https://londonrugcleaning.co.uk/logo.png',
        image: 'https://londonrugcleaning.co.uk/og-image.png',
        telephone: '+442034888344',
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4 Maddison Court, 145 Great North Way',
          addressLocality: 'London',
          postalCode: 'NW4 1PW',
          addressCountry: 'GB',
        },
        areaServed: {
          '@type': 'City',
          name: 'London',
        },
        sameAs: [
          "https://www.facebook.com/londonrugcleaning",
          "https://twitter.com/londonrugclean",
          "https://www.instagram.com/londonrugcleaning"
        ],
      },
      {
        '@type': 'Service',
        serviceType: serviceType,
        name: serviceName,
        description: serviceDescription,
        provider: {
          '@id': 'https://londonrugcleaning.co.uk/#organization',
        },
        areaServed: {
          '@type': 'City',
          name: 'London',
        },
        offers: {
          '@type': 'Offer',
          priceSpecification: { // Corrected
            '@type': 'PriceSpecification',
            price: '20-30',
            priceCurrency: 'GBP',
            unitText: 'per square meter',
            minPrice: 70
          },
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};