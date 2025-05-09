
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { CTAButtons } from "@/components/CTAButtons";

const AreaRugCleaning = () => {
  const service = {
    title: "Area Rug Cleaning",
    description: "Professional area rug cleaning services for all types and sizes",
    hero: "/images/area-rug-hero.webp",
    gallery: [
      "/images/area-rug-1.webp",
      "/images/area-rug-2.webp",
      "/images/area-rug-3.webp"
    ],
    intro: "Area rugs require specialized cleaning approaches based on their varied materials, construction methods, and designs. Our comprehensive area rug cleaning service handles rugs of all sizes and types, from small accent rugs to large room-sized pieces. We tailor our cleaning methods to each rug's specific requirements, ensuring optimal results while preserving colors, textures, and structural integrity.",
    features: [
      "Customized cleaning for all rug types",
      "Size-appropriate handling techniques",
      "Deep soil and stain removal",
      "Pet stain and odor treatment",
      "Comprehensive deodorizing",
      "Free collection and delivery",
      "Quick turnaround options",
      "Edge and fringe cleaning",
      "Protective treatments available",
      "Satisfaction guarantee"
    ],
    process: [
      {
        title: "Detailed inspection",
        description: "Assessment of rug type, materials, construction, soiling level, and any special concerns."
      },
      {
        title: "Customized pre-treatment",
        description: "Application of appropriate pre-cleaning treatments based on rug composition and needs."
      },
      {
        title: "Thorough cleaning",
        description: "Using specialized methods tailored to the rug's specific materials and construction."
      },
      {
        title: "Spot treatment",
        description: "Targeted stain removal using appropriate techniques for the specific stain and fiber type."
      },
      {
        title: "Proper drying",
        description: "Controlled drying methods that maintain rug shape and dimensional stability."
      },
      {
        title: "Final grooming",
        description: "Professional finishing to restore pile direction and enhance appearance."
      }
    ],
    benefits: [
      "Improves indoor air quality",
      "Removes embedded dirt and allergens",
      "Extends rug life and appearance",
      "Restores vibrant colors",
      "Eliminates odors and bacteria",
      "Protects your flooring investment"
    ],
    faqs: [
      {
        question: "What types of area rugs do you clean?",
        answer: "We clean all types of area rugs including hand-knotted, hand-tufted, hand-woven, machine-made, natural fiber (wool, cotton, silk, jute, sisal), synthetic fiber (nylon, polyester, olefin), indoor/outdoor rugs, and specialty rugs like shag, flatweaves, and Moroccan styles. Each receives cleaning tailored to its specific requirements."
      },
      {
        question: "How do you handle different sizes of area rugs?",
        answer: "Our facility is equipped to handle area rugs of all sizes, from small 2'x3' accent rugs to oversized 12'x18' room rugs. We have specialized equipment and adequate space for proper cleaning of large rugs. For extremely oversized rugs, we may use sectional cleaning techniques to ensure thorough and even results."
      },
      {
        question: "Can you remove pet stains and odors from area rugs?",
        answer: "Yes, we specialize in pet stain and odor removal from area rugs. We use a multi-step approach that includes enzyme treatments to break down organic matter, specialized deodorizing agents, and appropriate cleaning methods based on the rug's materials. Even severe pet damage can usually be significantly improved with our professional treatments."
      },
      {
        question: "How long does the area rug cleaning process take?",
        answer: "Standard area rug cleaning typically takes 5-7 business days from pickup to delivery. This includes assessment, cleaning, thorough drying, and quality inspection. For urgent needs, we offer express service with 2-3 day turnaround at an additional charge, subject to our current schedule."
      },
      {
        question: "What's the difference between cleaning area rugs and wall-to-wall carpet?",
        answer: "Area rug cleaning is much more specialized than carpet cleaning. Area rugs often have delicate fringes, backing materials, and construction that requires handling by specialists. We clean area rugs in our dedicated facility with controlled conditions, unlike on-site carpet cleaning. Our process includes more thorough dust removal, immersion washing when appropriate, and proper drying techniques."
      },
      {
        question: "How much does it cost to clean an area rug?",
        answer: "Our standard pricing is £20-30 per square meter with a minimum charge of £70 regardless of rug size. For example, a small 1m² rug would cost £70, while a large 4m² rug would range from £80-£120. All prices include collection, professional cleaning, and delivery. Additional charges may apply for stubborn stains, heavy soiling, pet odors, or extensive damage requiring special treatments."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Area Rug Cleaning London",
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
      "description": "Professional area rug cleaning services for all types and sizes in London",
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
          <h2 className="text-3xl font-semibold mb-6">
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

export default AreaRugCleaning;
