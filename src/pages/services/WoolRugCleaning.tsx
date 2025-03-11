
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";

const WoolRugCleaning = () => {
  const service = {
    title: "Wool Rug Cleaning",
    description: "Expert wool rug cleaning services in London with specialized care for natural fibers",
    hero: "/lovable-uploads/wool-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/wool-rug-1.jpg",
      "/lovable-uploads/wool-rug-2.jpg",
      "/lovable-uploads/wool-rug-3.jpg"
    ],
    intro: "Wool rugs require special attention due to their natural fibers and unique properties. Our eco-friendly wool rug cleaning service maintains the softness, durability, and appearance of your wool rugs while extending their lifespan. We understand the specific requirements of wool and use specialized techniques that preserve the natural lanolin and fiber integrity.",
    features: [
      "Specialized wool fiber cleaning",
      "pH-balanced natural solutions",
      "Natural fiber preservation techniques",
      "Eco-friendly cleaning methods",
      "Moth prevention treatment",
      "Gentle controlled drying process",
      "Color and texture preservation",
      "Free collection and delivery",
      "Expert fringe cleaning and restoration",
      "Wool-specific stain protection treatment"
    ],
    process: [
      {
        title: "Comprehensive inspection",
        description: "We thoroughly examine your wool rug for specific care requirements and condition assessment."
      },
      {
        title: "Natural dust removal",
        description: "Gentle but effective removal of dust and dry soil without damaging delicate wool fibers."
      },
      {
        title: "Wool-specific washing",
        description: "Cleaning with pH-balanced solutions designed specifically for natural wool fibers."
      },
      {
        title: "Gentle stain treatment",
        description: "Careful spot treatment using wool-safe products and techniques."
      },
      {
        title: "Natural drying process",
        description: "Controlled temperature drying that preserves wool's natural elasticity and prevents shrinkage."
      },
      {
        title: "Wool conditioning",
        description: "Application of natural conditioning agents to maintain wool's softness and resilience."
      }
    ],
    benefits: [
      "Maintains wool's natural oils and softness",
      "Extends rug lifespan significantly",
      "Preserves natural colors and texture",
      "Removes allergens and dust mites",
      "Prevents moth damage",
      "Maintains wool's natural insulating properties"
    ],
    faqs: [
      {
        question: "How often should wool rugs be professionally cleaned?",
        answer: "For wool rugs in residential settings, we recommend professional cleaning every 18-24 months. Rugs in high-traffic areas or homes with children and pets may benefit from more frequent cleaning, approximately every 12-18 months. Regular professional maintenance helps preserve the natural beauty and extends the lifespan of your wool investment."
      },
      {
        question: "Will professional cleaning damage the natural oils in my wool rug?",
        answer: "No, our specialized wool cleaning process is designed to preserve the natural lanolin oils in wool fibers. We use gentle, pH-balanced cleaning solutions and techniques specifically developed for wool. Our methods clean thoroughly while maintaining wool's natural properties, softness, and resilience."
      },
      {
        question: "How do you prevent shrinkage when cleaning wool rugs?",
        answer: "We prevent shrinkage through carefully controlled cleaning and drying processes. Our technicians use regulated water temperatures, gentle agitation, and specialized drying techniques in temperature-controlled environments. This maintains the dimensional stability of wool rugs throughout the cleaning process."
      },
      {
        question: "Do you use eco-friendly methods for wool rug cleaning?",
        answer: "Yes, we prioritize eco-friendly cleaning methods for all natural fiber rugs, especially wool. Our cleaning solutions are biodegradable, non-toxic, and specifically formulated to be gentle on both wool fibers and the environment. We minimize water usage and avoid harsh chemicals that could damage wool or harm the ecosystem."
      },
      {
        question: "How do you handle moth damage in wool rugs?",
        answer: "For wool rugs with moth damage, we provide a two-part service: treatment and prevention. First, we thoroughly clean the rug to remove any moth larvae or eggs. Then we apply safe, effective moth repellent treatments. We can also repair moth damage through specialized reweaving and restoration techniques to restore the rug's appearance and integrity."
      },
      {
        question: "What makes wool rugs require different cleaning than synthetic rugs?",
        answer: "Wool rugs require specialized cleaning because wool is a natural, protein-based fiber with unique properties. Wool has scales along the fiber that can lock together and cause shrinkage if improperly cleaned. Wool also contains natural lanolin oils that should be preserved. Additionally, wool can be more sensitive to high alkalinity, temperature extremes, and aggressive agitation than synthetic fibers."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Wool Rug Cleaning London",
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
        "areaServed": "London"
      },
      "serviceType": "Rug Cleaning",
      "description": "Expert wool rug cleaning services in London with specialized care for natural fibers",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "London"
      }
    }
  };
  
  return (
    <div>
      <ServiceHero 
        title={service.title} 
        description={service.description} 
        heroImage={service.hero} 
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg">{service.intro}</p>
          </div>
        </div>
      </section>
      
      <ServiceFeatures 
        features={service.features} 
        process={service.process} 
      />
      
      <ServiceGallery 
        title={service.title}
        gallery={service.gallery}
      />
      
      <ServiceFAQ 
        faqs={service.faqs}
      />
      
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-6">
            Ready to Get Your {service.title} Service?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and consultation. We offer free collection and delivery across London.
          </p>
          <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Phone className="h-4 w-4" />
            02034888344
          </Button>
        </div>
      </section>
      
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service.schema) }} 
      />
    </div>
  );
};

export default WoolRugCleaning;
