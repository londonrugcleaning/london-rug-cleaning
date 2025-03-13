
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeadMeta } from "@/components/HeadMeta";

const Index = () => {
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
    "priceRange": "££",
    "areaServed": "London",
    "url": "https://londonrugcleaning.co.uk",
    "image": "https://londonrugcleaning.co.uk/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/londonrugcleaning",
      "https://twitter.com/londonrugclean",
      "https://www.instagram.com/londonrugcleaning"
    ]
  };

  return (
    <>
      <HeadMeta 
        title="London Rug Cleaning - Professional Rug Cleaning Services"
        description="Expert rug cleaning services in London. Specializing in oriental, Persian, and antique rug cleaning with free collection and delivery. Get your free quote today!"
        canonicalUrl="https://londonrugcleaning.co.uk"
        schema={schema}
      />
      <div className="min-h-screen">
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
