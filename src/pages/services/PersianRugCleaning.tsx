
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { HeadMeta } from "@/components/HeadMeta";

const PersianRugCleaning = () => {
  const service = {
    title: "Persian Rug Cleaning",
    description: "Expert Persian rug cleaning services in London combining traditional methods with modern technology",
    hero: "/images/persian-rug-hero.jpg",
    gallery: [
      "/images/persian-rug-1.jpg",
      "/images/persian-rug-2.jpg",
      "/images/persian-rug-3.jpg"
    ],
    intro: "Persian rugs are masterpieces of artisanal craftsmanship, distinguished by their intricate patterns, natural dyes, and hand-knotted construction. These valuable pieces require specialized cleaning expertise that respects their delicate nature while ensuring thorough cleansing. Our expert Persian rug cleaning service combines centuries-old traditional methods with modern cleaning technology to preserve the integrity, colors, and inherent value of your Persian rugs. With extensive experience in handling these precious textiles, we understand the unique care requirements of different Persian rug styles, from fine silk Qums to robust Heriz carpets.",
    features: [
      "Specialized cleaning for delicate Persian rugs",
      "Traditional hand-cleaning methods",
      "Natural dye preservation techniques",
      "Gentle pH-balanced solutions",
      "Deep dirt and stain removal",
      "Free collection and delivery in London",
      "Full insurance coverage",
      "Moth protection treatment",
      "Expert fringe cleaning and repair",
      "Climate-controlled drying process"
    ],
    process: [
      {
        title: "Initial inspection and assessment",
        description: "Expert evaluation of your rug's origin, age, dyes, and specific cleaning requirements"
      },
      {
        title: "Dust and dirt removal",
        description: "Specialized gentle beating and vacuum techniques to remove embedded particles while protecting delicate fibers"
      },
      {
        title: "Dye testing",
        description: "Careful testing of all colors to ensure dye stability before cleaning"
      },
      {
        title: "Hand washing",
        description: "Traditional Persian rug washing techniques using pH-balanced solutions and soft water"
      },
      {
        title: "Specialized stain treatment",
        description: "Targeted treatment for any spots or stains using appropriate cleaning agents for Persian rugs"
      },
      {
        title: "Controlled drying",
        description: "Climate-controlled drying process to prevent shrinkage or color bleeding"
      }
    ],
    benefits: [
      "Extends rug life span",
      "Preserves original colors",
      "Removes deep-seated dirt",
      "Eliminates allergens",
      "Prevents moth damage",
      "Maintains rug value"
    ],
    faqs: [
      {
        question: "How much does Persian rug cleaning cost?",
        answer: "Our standard pricing is £20-30 per square meter with a minimum charge of £70 regardless of rug size. Persian rugs, due to their valuable nature and specialized cleaning requirements, often fall at the higher end of this range. All prices include collection, professional cleaning, and delivery. Additional charges may apply for stubborn stains, heavy soiling, or extensive repairs."
      },
      {
        question: "How long does Persian rug cleaning take?",
        answer: "Typically, the process takes 7-10 days to ensure proper cleaning and drying. We offer express services for urgent requirements at an additional cost, with turnaround as quick as 3-5 days depending on the condition and size of your Persian rug."
      },
      {
        question: "Do you provide insurance for valuable Persian rugs?",
        answer: "Yes, all rugs in our care are fully insured. We specialize in handling valuable Persian rugs and provide comprehensive coverage during the entire cleaning process. Our insurance covers the full valuation of your rug from collection through to delivery."
      },
      {
        question: "How often should I clean my Persian rug?",
        answer: "We recommend professional cleaning every 18-24 months for Persian rugs in residential settings. High-traffic areas may require more frequent cleaning. Regular professional maintenance helps preserve the beauty, colors, and structural integrity of these valuable investments."
      },
      {
        question: "What makes Persian rugs require special cleaning?",
        answer: "Persian rugs are typically made with natural wool or silk fibers, delicate hand-knotted construction, and natural dyes. These elements require specialized cleaning approaches to prevent damage to the fibers, bleeding of colors, or distortion of the rug structure. Our cleaning methods are specifically tailored to these unique characteristics."
      },
      {
        question: "Can you remove old stains from Persian rugs?",
        answer: "Yes, we can successfully remove most stains from Persian rugs, even those that have been present for some time. Our technicians use specialized stain removal techniques appropriate for the specific type of stain and the rug's materials. However, some very old or improperly treated stains may be permanent."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Persian Rug Cleaning London",
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
      "description": "Expert Persian rug cleaning services in London combining traditional methods with modern technology",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "London"
      }
    }
  };
  
  return (
    <>
      <HeadMeta
        title={`${service.title} London | Professional Cleaning Services`}
        description={service.description}
        canonicalUrl={`https://londonrugcleaning.co.uk/services/persian-rug-cleaning`}
        schema={service.schema}
      />
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
            <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4" />
              02034888344
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PersianRugCleaning;
