import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";

interface ServiceProcess {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceDetails {
  title: string;
  description: string;
  hero: string;
  gallery: string[];
  intro: string;
  features: string[];
  process: ServiceProcess[];
  benefits: string[];
  faqs: FAQ[];
  schema: Record<string, any>;
}

const serviceDetails: Record<string, ServiceDetails> = {
  "persian-rug-cleaning": {
    title: "Persian Rug Cleaning",
    description: "Expert Persian rug cleaning services in London with free collection and delivery",
    hero: "/lovable-uploads/persian-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/persian-rug-1.jpg",
      "/lovable-uploads/persian-rug-2.jpg",
      "/lovable-uploads/persian-rug-3.jpg"
    ],
    intro: "Persian rugs are more than just floor coverings – they're valuable works of art that require specialized care and attention. Our expert cleaning service preserves the integrity, colors, and value of your Persian rugs while ensuring they're thoroughly cleaned and refreshed. With decades of experience cleaning luxury rugs across London, we understand the unique requirements of these handcrafted treasures.",
    features: [
      "Specialized cleaning for delicate Persian rugs",
      "Traditional hand-cleaning methods",
      "Color and pattern preservation",
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
        description: "We carefully examine your rug's condition, materials, and any specific cleaning requirements."
      },
      {
        title: "Dust and dirt removal",
        description: "Using specialized equipment to remove embedded dirt without damaging delicate fibers."
      },
      {
        title: "Gentle hand washing",
        description: "Traditional Persian rug cleaning techniques with pH-balanced solutions."
      },
      {
        title: "Specialized stain treatment",
        description: "Targeted treatment for any spots or stains using appropriate cleaning agents."
      },
      {
        title: "Controlled drying process",
        description: "Climate-controlled drying to prevent shrinkage or color bleeding."
      },
      {
        title: "Final quality check",
        description: "Thorough inspection to ensure perfect cleaning results and condition."
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
        answer: "The cost varies depending on the size and condition of your rug. We provide free assessments and quotes before proceeding with any cleaning work. Persian rug cleaning typically starts from £8 per square foot, with an average 6x9 rug costing approximately £150-£250 for a complete professional cleaning."
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
      "description": "Expert Persian rug cleaning services in London with free collection and delivery",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "London"
      }
    }
  },
  "oriental-rug-cleaning": {
    title: "Oriental Rug Cleaning",
    description: "Professional Oriental rug cleaning services in London with specialized care for traditional and antique pieces",
    hero: "/lovable-uploads/oriental-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/oriental-rug-1.jpg",
      "/lovable-uploads/oriental-rug-2.jpg",
      "/lovable-uploads/oriental-rug-3.jpg"
    ],
    intro: "Oriental rugs are treasured possessions that embody centuries of artisanal tradition. Our specialized Oriental rug cleaning service combines time-honored techniques with modern technology to care for these exquisite pieces. Whether you have Chinese, Turkish, Indian, Pakistani, Afghan, Tibetan, and Moroccan rugs, our expert team understands the unique characteristics and cleaning requirements of each style.",
    features: [
      "Expert care for all Oriental rug types",
      "Customized cleaning solutions for each rug",
      "Dye stability testing and color preservation",
      "Fringe cleaning and repair",
      "Odor removal treatment",
      "Free collection and delivery across London",
      "Full insurance coverage for valuable pieces",
      "Gentle cleaning agents for delicate fibers",
      "Hand-finished details",
      "Natural drying process"
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "Thorough inspection of your rug's origin, materials, construction, and condition"
      },
      {
        title: "Pre-treatment Testing",
        description: "Testing for colorfastness and material stability to determine the optimal cleaning method"
      },
      {
        title: "Dust and Particle Removal",
        description: "Special beating and vacuum techniques to remove deeply embedded particles"
      },
      {
        title: "Customized Cleaning",
        description: "Hand washing with appropriate solutions based on your rug's specific characteristics"
      },
      {
        title: "Spot Treatment",
        description: "Targeted stain removal for any problem areas"
      },
      {
        title: "Controlled Drying",
        description: "Careful air drying in a temperature-controlled environment to preserve shape and prevent damage"
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
      "description": "Professional Oriental rug cleaning services in London with specialized care for traditional and antique pieces",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "London"
      }
    }
  },
  "wool-rug-cleaning": {
    title: "Wool Rug Cleaning",
    description: "Expert wool rug cleaning services in London with specialized care for natural fibers",
    hero: "/lovable-uploads/wool-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/wool-rug-1.jpg",
      "/lovable-uploads/wool-rug-2.jpg",
      "/lovable-uploads/wool-rug-3.jpg"
    ],
    intro: "Wool rugs require special attention and care to maintain their natural beauty and longevity. Our expert cleaning service ensures your wool rugs are cleaned thoroughly while preserving their unique characteristics and extending their lifespan.",
    features: [
      "Specialized wool fiber cleaning",
      "pH-balanced solutions",
      "Natural fiber protection",
      "Moth prevention treatment",
      "Gentle drying process",
      "Color preservation",
      "Free collection and delivery",
      "Full insurance coverage",
      "Expert fringe cleaning",
      "Stain protection treatment"
    ],
    process: [
      {
        title: "Fiber analysis",
        description: "We analyze your wool rug's fiber type and condition to determine the best cleaning approach."
      },
      {
        title: "Gentle dusting",
        description: "Careful removal of dry soil and debris without damaging wool fibers."
      },
      {
        title: "Specialized cleaning",
        description: "Using wool-specific cleaning solutions and techniques."
      },
      {
        title: "Moth prevention",
        description: "Application of safe, effective moth prevention treatment."
      },
      {
        title: "Controlled drying",
        description: "Careful drying process to prevent shrinkage and maintain shape."
      }
    ],
    benefits: [
      "Preserves wool quality",
      "Extends rug lifespan",
      "Prevents moth damage",
      "Maintains natural oils",
      "Improves appearance",
      "Removes allergens"
    ],
    faqs: [
      {
        question: "How often should wool rugs be cleaned?",
        answer: "We recommend professional cleaning every 12-18 months for wool rugs, or more frequently in high-traffic areas."
      },
      {
        question: "Will cleaning damage my wool rug?",
        answer: "No, our specialized cleaning process is designed to protect and preserve wool fibers while thoroughly cleaning your rug."
      },
      {
        question: "How do you prevent shrinkage?",
        answer: "We use controlled temperature and humidity during cleaning and drying to prevent wool fiber shrinkage."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Wool Rug Cleaning London",
      "provider": {
        "@type": "LocalBusiness",
        "name": "London Rug Cleaning",
        "areaServed": "London"
      },
      "serviceType": "Rug Cleaning",
      "description": "Expert wool rug cleaning services in London with specialized care for natural fibers"
    }
  },
  "area-rug-cleaning": {
    title: "Area Rug Cleaning",
    description: "Professional area rug cleaning services for all types and sizes",
    hero: "/lovable-uploads/area-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/area-rug-1.jpg",
      "/lovable-uploads/area-rug-2.jpg",
      "/lovable-uploads/area-rug-3.jpg"
    ],
    intro: "Area rugs come in various materials, sizes, and styles, each requiring specific cleaning approaches. Our professional cleaning service caters to all types of area rugs, ensuring they receive the appropriate care and treatment.",
    features: [
      "All rug types cleaned",
      "Custom cleaning solutions",
      "Stain removal expertise",
      "Size-appropriate handling",
      "Deep cleaning process",
      "Free pickup and delivery",
      "Satisfaction guarantee",
      "Quick turnaround time",
      "Pet stain treatment",
      "Deodorizing service"
    ],
    process: [
      {
        title: "Initial assessment",
        description: "Evaluating rug type, condition, and cleaning requirements."
      },
      {
        title: "Pre-treatment",
        description: "Application of appropriate cleaning solutions for specific stains."
      },
      {
        title: "Deep cleaning",
        description: "Thorough cleaning using suitable methods for the rug type."
      },
      {
        title: "Finishing",
        description: "Final grooming and inspection to ensure quality results."
      }
    ],
    benefits: [
      "Enhanced appearance",
      "Longer rug life",
      "Healthier home",
      "Odor elimination",
      "Stain protection",
      "Professional results"
    ],
    faqs: [
      {
        question: "What types of area rugs do you clean?",
        answer: "We clean all types of area rugs including synthetic, natural fiber, hand-knotted, and machine-made rugs."
      },
      {
        question: "How long does the cleaning process take?",
        answer: "Typically 5-7 days, though we offer express service for urgent needs."
      },
      {
        question: "Do you clean oversized rugs?",
        answer: "Yes, we have facilities to handle rugs of all sizes, including very large area rugs."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Area Rug Cleaning London",
      "provider": {
        "@type": "LocalBusiness",
        "name": "London Rug Cleaning",
        "areaServed": "London"
      },
      "serviceType": "Rug Cleaning",
      "description": "Professional area rug cleaning services for all types and sizes"
    }
  },
  "synthetic-rug-cleaning": {
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
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <ServiceHero
        title={service.title}
        description={service.description}
        heroImage={service.hero}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      <ServiceFeatures features={service.features} process={service.process} />
      <ServiceGallery title={service.title} gallery={service.gallery} />
      <ServiceFAQ faqs={service.faqs} />

      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold">
              Ready to Clean Your {service.title.split(" ")[0]} Rug?
            </h2>
            <p className="mt-4 text-blue-100">
              Book your free collection today and experience our professional service.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
              Schedule Free Collection
            </Button>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service.schema) }}
      />
    </div>
  );
};

export default ServiceDetail;
