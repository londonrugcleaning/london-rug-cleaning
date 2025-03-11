
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";

const SyntheticRugCleaning = () => {
  const service = {
    title: "Synthetic Rug Cleaning",
    description: "Expert cleaning for modern synthetic rugs with advanced cleaning techniques and technology",
    hero: "/lovable-uploads/synthetic-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/synthetic-rug-1.jpg",
      "/lovable-uploads/synthetic-rug-2.jpg",
      "/lovable-uploads/synthetic-rug-3.jpg"
    ],
    intro: "Synthetic rugs require different cleaning approaches than natural fiber rugs. Our specialized synthetic rug cleaning service uses modern techniques and solutions specifically formulated for nylon, polyester, polypropylene, and other synthetic materials. We help restore the appearance and extend the lifespan of your modern rugs while removing deeply embedded dirt and allergens.",
    features: [
      "Specialized synthetic fiber cleaning",
      "Advanced stain removal technology",
      "Deep cleaning for high-traffic synthetic rugs",
      "Fast-drying methods",
      "Static reduction treatment",
      "Color restoration and brightening",
      "Free collection and delivery service",
      "Affordable pricing for synthetic rugs",
      "Eco-friendly cleaning options",
      "Protection treatments available"
    ],
    process: [
      {
        title: "Fiber analysis",
        description: "Identifying your specific synthetic fiber type to determine the ideal cleaning approach"
      },
      {
        title: "Pre-treatment",
        description: "Application of specialized solutions to loosen dirt and prepare fibers for cleaning"
      },
      {
        title: "Hot water extraction",
        description: "Deep cleaning with equipment specially calibrated for synthetic fibers"
      },
      {
        title: "Stain treatment",
        description: "Targeted treatment of any stains or spots with synthetic-specific solutions"
      },
      {
        title: "Rapid drying",
        description: "Accelerated drying process suitable for synthetic materials"
      },
      {
        title: "Finishing treatment",
        description: "Application of protective finishes to improve appearance and longevity"
      }
    ],
    benefits: [
      "Restores appearance and vibrancy",
      "Extends rug lifespan",
      "Removes allergens and bacteria",
      "Eliminates odors",
      "Improves indoor air quality",
      "Prevents permanent staining"
    ],
    faqs: [
      {
        question: "How often should synthetic rugs be cleaned?",
        answer: "We recommend professional cleaning for synthetic rugs every 12-18 months for average household use. Rugs in high-traffic areas or homes with children, pets, or allergy sufferers may benefit from more frequent cleaning, approximately every 6-12 months."
      },
      {
        question: "Are there advantages to synthetic rug cleaning vs. natural fiber cleaning?",
        answer: "Yes, synthetic rugs generally dry faster after cleaning, are more resistant to staining, and typically cost less to clean professionally. Synthetic fibers also withstand more aggressive cleaning methods when needed for tough stains without risk of damage to the fibers."
      },
      {
        question: "Can you remove pet odors from synthetic rugs?",
        answer: "Yes, our specialized cleaning process for synthetic rugs includes effective deodorizing treatments specifically designed to eliminate pet odors. For severe cases, we apply additional enzyme treatments that break down organic materials causing the odors."
      },
      {
        question: "How much does synthetic rug cleaning cost?",
        answer: "Synthetic rug cleaning is generally more affordable than natural fiber rug cleaning, with prices typically starting from £5-7 per square foot. Most standard 8x10 synthetic rugs can be professionally cleaned for approximately £100-140, depending on condition and soiling level."
      },
      {
        question: "Will cleaning damage the backing of my synthetic rug?",
        answer: "Our cleaning methods are designed to be safe for all parts of your synthetic rug, including the backing. We use controlled amounts of moisture and appropriate drying techniques to ensure the backing doesn't delaminate or deteriorate during the cleaning process."
      },
      {
        question: "How long does it take to clean synthetic rugs?",
        answer: "The cleaning process for synthetic rugs is typically faster than for natural fiber rugs. Most synthetic rugs can be cleaned and returned within 3-5 days, with optional express service available for 1-2 day turnaround in urgent situations."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Synthetic Rug Cleaning London",
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
      "description": "Expert cleaning for modern synthetic rugs with advanced cleaning techniques and technology",
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

export default SyntheticRugCleaning;
