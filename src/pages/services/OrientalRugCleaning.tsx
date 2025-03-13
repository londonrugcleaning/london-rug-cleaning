
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { CTAButtons } from "@/components/CTAButtons";

const OrientalRugCleaning = () => {
  const service = {
    title: "Oriental Rug Cleaning",
    description: "Professional Oriental rug cleaning services specializing in antique and traditional pieces",
    hero: "/images/oriental-rug-hero.jpg",
    gallery: [
      "/images/oriental-rug-1.jpg",
      "/images/oriental-rug-2.jpg",
      "/images/oriental-rug-3.jpg"
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
        answer: "Our standard pricing is £20-30 per square meter with a minimum charge of £70 regardless of rug size. Oriental rugs typically fall within this range, with more intricate or delicate pieces at the higher end. All prices include collection, professional cleaning, and delivery. After initial inspection, we provide a detailed quotation as additional specialized treatments may be recommended based on your rug's specific condition."
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
    },
    localSchema: {
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
      "url": "https://londonrugcleaning.com",
      "image": "https://londonrugcleaning.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/londonrugcleaning",
        "https://twitter.com/londonrugclean",
        "https://www.instagram.com/londonrugcleaning"
      ]
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
      
      <PricingTable title={`${service.title} Pricing`} />
      
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
          <div className="flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </section>
      
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service.schema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service.localSchema) }} 
      />
    </div>
  );
};

export default OrientalRugCleaning;
