
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";

const OrientalRugCleaning = () => {
  const service = {
    title: "Oriental Rug Cleaning",
    description: "Professional Oriental rug cleaning services specializing in antique and traditional pieces",
    hero: "/lovable-uploads/oriental-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/oriental-rug-1.jpg",
      "/lovable-uploads/oriental-rug-2.jpg",
      "/lovable-uploads/oriental-rug-3.jpg"
    ],
    intro: "Oriental rugs are distinguished by their unique characteristics, from intricate tribal patterns to sophisticated court designs. Each type presents its own cleaning challenges, whether it's silk highlights in Chinese rugs, vegetable dyes in Turkish pieces, or delicate knots in antique carpets. Our specialized Oriental rug cleaning service addresses common issues like dye bleeding, fiber deterioration, and foundation weakening while preserving the distinctive qualities of each piece. We combine traditional cleaning wisdom with modern conservation techniques to ensure your Oriental rug receives the most appropriate and effective treatment.",
    features: [
      "Expert care for all Oriental rug types",
      "Antique rug conservation methods",
      "Traditional cleaning techniques",
      "Dye stability testing",
      "Color and pattern preservation",
      "Foundation strengthening",
      "Free collection and delivery",
      "Full insurance coverage",
      "Expert fringe restoration",
      "Climate-controlled facility"
    ],
    process: [
      {
        title: "Detailed Assessment",
        description: "Comprehensive evaluation of rug type, age, construction method, and condition"
      },
      {
        title: "Pre-cleaning Testing",
        description: "Thorough testing of dyes, fibers, and structure to determine optimal cleaning approach"
      },
      {
        title: "Gentle Dust Removal",
        description: "Careful removal of embedded dirt using techniques appropriate for antique and delicate rugs"
      },
      {
        title: "Hand Cleaning",
        description: "Traditional washing methods using appropriate solutions for each type of Oriental rug"
      },
      {
        title: "Specialized Care",
        description: "Targeted treatment of specific issues like dye bleeding, worn areas, or foundation problems"
      },
      {
        title: "Controlled Drying",
        description: "Careful drying in a climate-controlled environment to prevent any damage"
      }
    ],
    benefits: [
      "Preserves rug integrity and value",
      "Extends lifespan significantly",
      "Removes allergens and dust mites",
      "Restores vibrant colors and patterns",
      "Protects your investment",
      "Improves indoor air quality"
    ],
    faqs: [
      {
        question: "What types of Oriental rugs do you clean?",
        answer: "We clean all types of Oriental rugs including Turkish, Chinese, Indian, Pakistani, Afghan, Tibetan, and Moroccan rugs. Each type receives cleaning treatments specifically tailored to its unique characteristics, materials, and construction methods."
      },
      {
        question: "Do you offer repairs for Oriental rugs?",
        answer: "Yes, we provide comprehensive repair services including fringe repair, edge binding, patch work, reweaving, and restoration for damaged areas. Our skilled artisans can address most structural and aesthetic issues to restore your Oriental rug's beauty and integrity."
      },
      {
        question: "How do you prevent color bleeding in Oriental rugs?",
        answer: "We always perform dye stability tests before cleaning any Oriental rug. Based on these results, we select appropriate cleaning solutions and techniques. For rugs with sensitive dyes, we use specialized methods that clean effectively while preventing color migration."
      },
      {
        question: "Can antique Oriental rugs be safely cleaned?",
        answer: "Yes, antique Oriental rugs can be safely cleaned with proper techniques. We use gentle methods specifically designed for fragile, aged fibers and structures. Our specialists have extensive experience with valuable antique pieces and understand the delicate care they require."
      },
      {
        question: "How much does Oriental rug cleaning cost?",
        answer: "Oriental rug cleaning typically costs between £7-£15 per square foot depending on the rug's size, age, condition, and complexity. We provide free, no-obligation quotes after assessing your specific rug, so you'll know the exact cost before any work begins."
      },
      {
        question: "How long will my Oriental rug last after professional cleaning?",
        answer: "With proper care including professional cleaning every 2-3 years, Oriental rugs can last for generations. Regular professional cleaning not only keeps your rug looking beautiful but also removes abrasive dirt and grit that would otherwise wear down fibers over time."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Oriental Rug Cleaning London",
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
      "description": "Professional Oriental rug cleaning services specializing in antique and traditional pieces",
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

export default OrientalRugCleaning;
