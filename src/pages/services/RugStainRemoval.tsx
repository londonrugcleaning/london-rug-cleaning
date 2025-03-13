import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { HeadMeta } from "@/components/HeadMeta";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const RugStainRemoval = () => {
  const service = {
    title: "Rug Stain Removal",
    description: "Professional spot and stain treatment for all rug types in London",
    hero: "/images/rug-stain-removal-hero.jpg",
    gallery: [
      "/images/rug-stain-removal-1.jpg",
      "/images/rug-stain-removal-2.jpg",
      "/images/rug-stain-removal-3.jpg"
    ],
    intro: "Stains on valuable rugs can be distressing, particularly when they affect cherished or investment pieces. Our specialized rug stain removal service tackles a wide range of challenging stains while protecting your rug's delicate fibers, dyes, and structure. Using targeted treatments appropriate for each specific stain type and rug material, we achieve outstanding results even on stubborn, set-in stains that ordinary cleaning methods can't touch.",
    features: [
      "Specialized stain analysis and treatment",
      "Safe solutions for delicate fibers",
      "Color-safe stain removal techniques",
      "Treatment for organic and inorganic stains",
      "Red wine and food stain specialists",
      "Pet stain and odor elimination",
      "Ink and dye transfer resolution",
      "Oil and grease stain treatment",
      "Rust and water damage restoration",
      "Preventative stain protection"
    ],
    process: [
      {
        title: "Detailed stain assessment",
        description: "Expert identification of stain type, age, and penetration to determine optimal treatment approach"
      },
      {
        title: "Fiber and dye testing",
        description: "Testing of the rug's fibers and dyes to ensure safe treatment without damage"
      },
      {
        title: "Pre-treatment",
        description: "Application of specialized pre-treatments to break down stain molecules"
      },
      {
        title: "Targeted stain removal",
        description: "Precise application of stain-specific agents using techniques appropriate for your rug type"
      },
      {
        title: "Neutralization",
        description: "Thorough neutralization of cleaning agents to prevent residue or fiber damage"
      },
      {
        title: "Final inspection",
        description: "Comprehensive review of results and application of any additional treatments if needed"
      }
    ],
    benefits: [
      "Preserves rug value and appearance",
      "Removes unsightly blemishes",
      "Prevents permanent staining",
      "Extends rug lifespan",
      "Maintains rug beauty and integrity",
      "Improves hygiene and cleanliness"
    ],
    faqs: [
      {
        question: "Can you remove old stains that other cleaners couldn't fix?",
        answer: "Yes, we regularly rescue rugs with old, set-in stains that other cleaners couldn't resolve. Our specialized approach includes professional-grade stain removers that aren't available to general carpet cleaners, along with techniques specifically developed for different rug types. Even stains that have been present for years often respond to our targeted treatments."
      },
      {
        question: "Is it safe to use stain removers on expensive or antique rugs?",
        answer: "Our stain removal process for valuable rugs differs significantly from standard approaches. We first identify your rug's specific materials, construction, and dye types. We then carefully test all solutions on an inconspicuous area, and use only pH-balanced, fiber-appropriate treatments. For antique or delicate rugs, we employ specialized gentle methods that protect the rug's integrity while still achieving impressive stain removal."
      },
      {
        question: "How do you handle pet stains and odors?",
        answer: "Pet stains require a multi-faceted approach. We begin with enzyme treatments that break down the proteins in urine and other pet accidents. This is followed by specialized cleaning and neutralizing processes. For persistent odors, we employ additional deodorizing treatments that penetrate to the foundation of the rug. In severe cases, we may recommend our deep-saturation cleaning method which thoroughly addresses both the stain and odor."
      },
      {
        question: "What types of stains can you remove from rugs?",
        answer: "We successfully treat most common stains including red wine, coffee, tea, food spills, pet accidents, blood, ink, paint, makeup, oil, grease, and soil-based stains. We also address more challenging problems like dye bleeding, water damage, rust, and mold/mildew stains. The success rate depends on the stain type, rug material, and how long the stain has been present, but our specialized techniques achieve results in the vast majority of cases."
      },
      {
        question: "Do you offer any guarantees for stain removal?",
        answer: "We're confident in our stain removal expertise and achieve excellent results in most cases. However, due to variables such as previous DIY treatments, age of the stain, and certain dye-based stains, we cannot guarantee complete removal of every stain. We always provide honest assessments of expected outcomes during our initial inspection. If we believe a stain cannot be significantly improved, we'll tell you before proceeding with treatment."
      },
      {
        question: "How much does rug stain removal cost?",
        answer: "Our standard pricing for complete rug cleaning is £20-30 per square meter with a minimum charge of £70. For spot treatments and stain removal only, services start at £25 for small, simple stains and range up to £120+ for extensive or challenging stains requiring specialized treatments. We provide a detailed quotation after initial inspection, as additional treatments may be needed depending on the type and severity of stains."
      }
    ]
  };
  
  return (
    <>
      <HeadMeta
        title={`${service.title} | Professional Cleaning Services London`}
        description={service.description}
        canonicalUrl={`https://londonrugcleaning.co.uk/services/rug-stain-removal`}
        keywords={["rug stain removal", "carpet cleaning", "stain treatment", "london", "professional cleaning"]}
        ogImage="/images/rug-stain-removal-hero.jpg"
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
        
        <ServiceSchema 
          name={`${service.title} London`}
          description={service.description}
        />
        <LocalBusinessSchema />
      </div>
    </>
  );
};

export default RugStainRemoval;
