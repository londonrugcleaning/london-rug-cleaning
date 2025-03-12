
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { CTAButtons } from "@/components/CTAButtons";

const AntiqueRugCleaning = () => {
  const service = {
    title: "Antique Rug Cleaning",
    description: "Specialized cleaning and preservation for valuable antique and vintage rugs in London",
    hero: "/lovable-uploads/antique-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/antique-rug-1.jpg",
      "/lovable-uploads/antique-rug-2.jpg",
      "/lovable-uploads/antique-rug-3.jpg"
    ],
    intro: "Antique rugs are treasured heirlooms that require extraordinary care during cleaning. Our specialized antique rug cleaning service combines traditional methods with modern conservation techniques to safely clean these valuable pieces while preserving their historical integrity, color stability, and structural condition. With decades of experience handling rare and valuable rugs, our master cleaners understand the unique requirements of antique textiles.",
    features: [
      "Specialized antique rug conservation",
      "Pre-cleaning stability testing",
      "Traditional hand-washing techniques",
      "Museum-quality preservation methods",
      "Color and dye stabilization",
      "Gentle pH-neutral cleaning solutions",
      "Careful structural reinforcement",
      "Climate-controlled drying process",
      "Full documentation and condition reports",
      "Free specialized transportation"
    ],
    process: [
      {
        title: "Heritage assessment",
        description: "Detailed examination of age, provenance, construction, dyes, and condition with documentation."
      },
      {
        title: "Conservation planning",
        description: "Development of a customized cleaning approach based on the rug's specific needs and vulnerabilities."
      },
      {
        title: "Controlled dust removal",
        description: "Gentle extraction of embedded particulates using specialized techniques for fragile textiles."
      },
      {
        title: "Hand washing",
        description: "Traditional hand cleaning using cold water and pH-neutral solutions appropriate for aged fibers."
      },
      {
        title: "Delicate drying",
        description: "Controlled air drying in a climate-regulated environment to prevent fiber stress."
      },
      {
        title: "Conservation finishing",
        description: "Careful blocking, stabilization of weak areas, and gentle grooming of pile."
      }
    ],
    benefits: [
      "Preserves historical and monetary value",
      "Extends lifespan of fragile antique textiles",
      "Removes harmful accumulated soil",
      "Stabilizes vulnerable areas",
      "Improves appearance while maintaining patina",
      "Prevents deterioration from embedded grit"
    ],
    faqs: [
      {
        question: "How do you determine if an antique rug is safe to clean?",
        answer: "We conduct a comprehensive assessment that includes dye stability testing, structural integrity evaluation, and fiber condition analysis. We examine previous repairs, look for areas of deterioration, and test for colorfastness. Based on these assessments, we develop a customized cleaning approach or may recommend alternative conservation methods if full cleaning presents too much risk."
      },
      {
        question: "Will cleaning diminish the value of my antique rug?",
        answer: "When properly performed, professional cleaning typically enhances rather than diminishes an antique rug's value. Accumulated soil contains abrasive particles that damage fibers over time. Our gentle conservation cleaning removes these harmful elements while preserving the rug's patina and historical character. We maintain detailed documentation of the rug's condition before and after cleaning."
      },
      {
        question: "How old must a rug be to require antique cleaning methods?",
        answer: "We generally recommend our specialized antique cleaning approach for rugs over 80 years old. However, some rugs made with traditional methods and natural dyes may benefit from antique cleaning protocols even if they're somewhat younger. Conversely, some older rugs that have been previously restored or treated may not require the full antique protocol."
      },
      {
        question: "Do you offer restoration services for damaged antique rugs?",
        answer: "Yes, we provide comprehensive restoration services for antique rugs, including reweaving, rewrapping, fringe replacement, side cord repair, foundation stabilization, and color restoration. Our master restorers use traditional techniques and materials that match the original construction methods. All restoration work is documented and performed with archival-quality materials."
      },
      {
        question: "How much does antique rug cleaning cost?",
        answer: "Our pricing for antique rugs typically starts at the higher end of our standard range of £20-30 per square meter, with a minimum charge of £70. Due to the specialized care and techniques required, antique rugs often require premium treatment which may cost more. All prices include careful collection, professional cleaning, and delivery. We provide a detailed quotation after initial inspection, as additional conservation treatments may be recommended based on your rug's specific condition."
      },
      {
        question: "How often should antique rugs be cleaned?",
        answer: "We recommend professional cleaning for antique rugs every 3-5 years under normal conditions. However, this varies based on the rug's specific condition, use, and environment. Rugs in low-traffic areas with stable climate conditions may go longer between cleanings. We offer maintenance assessments to help determine the optimal cleaning schedule for your specific piece."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Antique Rug Cleaning London",
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
      "description": "Specialized cleaning and preservation for valuable antique and vintage rugs in London",
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

export default AntiqueRugCleaning;
