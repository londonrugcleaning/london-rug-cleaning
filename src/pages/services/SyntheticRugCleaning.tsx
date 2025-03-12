
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { CTAButtons } from "@/components/CTAButtons";

const SyntheticRugCleaning = () => {
  const service = {
    title: "Synthetic Rug Cleaning",
    description: "Professional cleaning services for all types of synthetic and machine-made rugs",
    hero: "/images/synthetic-rug-hero.jpg",
    gallery: [
      "/images/synthetic-rug-1.jpg",
      "/images/synthetic-rug-2.jpg",
      "/images/synthetic-rug-3.jpg"
    ],
    intro: "Synthetic rugs offer durability and stain resistance, but they require specialized cleaning approaches to maintain their appearance and extend their lifespan. Our synthetic rug cleaning service is specifically designed to address the unique characteristics of nylon, polyester, polypropylene (olefin), and other manufactured fibers, providing thorough cleaning without damaging the materials or backing.",
    features: [
      "Specialized synthetic fiber cleaning",
      "Safe for all machine-made rugs",
      "Stain and soil removal",
      "Static reduction treatments",
      "Fast drying processes",
      "Free collection and delivery",
      "Backing preservation",
      "Odor elimination",
      "Allergen removal",
      "Color and texture restoration"
    ],
    process: [
      {
        title: "Material Assessment",
        description: "Identification of specific synthetic fibers and construction methods to determine optimal cleaning approach"
      },
      {
        title: "Pre-treatment",
        description: "Application of specialized pre-cleaning agents designed for synthetic materials"
      },
      {
        title: "Thorough Cleaning",
        description: "Deep cleaning using methods and solutions specifically formulated for manufactured fibers"
      },
      {
        title: "Stain Treatment",
        description: "Targeted removal of spots and stains with fiber-appropriate techniques"
      },
      {
        title: "Rapid Drying",
        description: "Accelerated drying process to prevent backing damage and mildew growth"
      },
      {
        title: "Finishing",
        description: "Final grooming to restore appearance and texture, plus optional treatments for future protection"
      }
    ],
    benefits: [
      "Extends rug lifespan",
      "Restores bright colors and patterns",
      "Removes embedded soil and allergens",
      "Eliminates odors",
      "Prevents premature wear",
      "Improves appearance and feel"
    ],
    faqs: [
      {
        question: "What types of synthetic rugs do you clean?",
        answer: "We clean all types of synthetic rugs including those made from nylon, polyester, polypropylene (olefin), acrylic, viscose/rayon, and blended fibers. This includes machine-made rugs, tufted rugs, indoor/outdoor rugs, shag rugs, and microfiber rugs. Each type receives cleaning tailored to its specific material properties."
      },
      {
        question: "How do you clean synthetic rugs differently from natural fiber rugs?",
        answer: "Synthetic rugs require different cleaning approaches than natural fibers like wool or silk. We use cleaning agents and techniques specifically designed for manufactured fibers, which often can tolerate more aggressive cleaning methods. We also adjust the pH levels of our cleaning solutions to optimize results for synthetic materials, and we employ specialized processes for removing oil-based soils that synthetic fibers tend to attract."
      },
      {
        question: "Can you remove pet stains and odors from my synthetic rug?",
        answer: "Yes, synthetic rugs often respond very well to pet stain and odor treatments. We use enzymatic cleaners that break down organic matter in pet accidents, followed by specialized deodorizers. One advantage of synthetic fibers is that they typically don't absorb odors as deeply as natural fibers, making complete odor removal more achievable."
      },
      {
        question: "How long will it take my synthetic rug to dry after cleaning?",
        answer: "Synthetic rugs typically dry much faster than natural fiber rugs. Most synthetic rugs will be completely dry within 6-12 hours after cleaning, compared to 24-48 hours for wool rugs. We also offer accelerated drying services if you need your rug returned more quickly."
      },
      {
        question: "Will cleaning damage the backing of my synthetic rug?",
        answer: "Our cleaning methods are designed to protect the backing materials found in synthetic rugs. We control moisture levels carefully to prevent backing distortion, adhesive breakdown, or latex degradation. For rugs with sensitive backings, we utilize low-moisture cleaning approaches that provide thorough cleaning while minimizing risks."
      },
      {
        question: "How much does synthetic rug cleaning cost?",
        answer: "Our synthetic rug cleaning typically costs £20-25 per square meter, usually at the lower end of our standard range of £20-30, with a minimum charge of £70 regardless of size. This pricing includes collection, professional cleaning, and delivery. The exact price depends on the rug's size, condition, and any additional treatments needed. After initial inspection, we provide a detailed quotation."
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
      "description": "Professional cleaning services for all types of synthetic and machine-made rugs",
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

export default SyntheticRugCleaning;
