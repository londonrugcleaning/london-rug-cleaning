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
    intro: "Persian rugs are more than just floor coverings – they're valuable works of art that require specialized care and attention. Our expert cleaning service preserves the integrity, colors, and value of your Persian rugs while ensuring they're thoroughly cleaned and refreshed.",
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
        answer: "The cost varies depending on the size and condition of your rug. We provide free assessments and quotes before proceeding with any cleaning work."
      },
      {
        question: "How long does Persian rug cleaning take?",
        answer: "Typically, the process takes 7-10 days to ensure proper cleaning and drying. We offer express services for urgent requirements."
      },
      {
        question: "Do you provide insurance for valuable Persian rugs?",
        answer: "Yes, all rugs in our care are fully insured. We specialize in handling valuable Persian rugs and provide comprehensive coverage."
      },
      {
        question: "How often should I clean my Persian rug?",
        answer: "We recommend professional cleaning every 18-24 months for Persian rugs in residential settings. High-traffic areas may require more frequent cleaning."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Persian Rug Cleaning London",
      "provider": {
        "@type": "LocalBusiness",
        "name": "London Rug Cleaning",
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
    description: "Professional Oriental rug cleaning services in London",
    hero: "/lovable-uploads/oriental-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/oriental-rug-1.jpg",
      "/lovable-uploads/oriental-rug-2.jpg",
      "/lovable-uploads/oriental-rug-3.jpg"
    ],
    intro: "Oriental rugs require specialized care to maintain their beauty and value. Our expert cleaning service combines traditional methods with modern technology to ensure the best results.",
    features: [
      "Expert care for all Oriental rug types",
      "Customized cleaning solutions",
      "Dye stability testing",
      "Fringe cleaning and repair",
      "Odor removal treatment",
      "Free collection and delivery",
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "Thorough inspection of your rug's condition and cleaning needs"
      },
      {
        title: "Pre-treatment Testing",
        description: "Testing for colorfastness and material stability"
      },
      {
        title: "Deep Cleaning",
        description: "Gentle but effective cleaning process using appropriate methods"
      },
      {
        title: "Drying Process",
        description: "Controlled environment drying to prevent damage"
      }
    ],
    benefits: [
      "Preserves rug integrity",
      "Extends lifespan",
      "Removes allergens",
      "Restores colors",
      "Protects investment"
    ],
    faqs: [
      {
        question: "What types of Oriental rugs do you clean?",
        answer: "We clean all types of Oriental rugs including Turkish, Chinese, Indian, and Afghani rugs."
      },
      {
        question: "Do you offer repairs for Oriental rugs?",
        answer: "Yes, we provide comprehensive repair services including fringe repair, edge binding, and patch work."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Oriental Rug Cleaning London",
      "provider": {
        "@type": "LocalBusiness",
        "name": "London Rug Cleaning",
        "areaServed": "London"
      },
      "serviceType": "Rug Cleaning",
      "description": "Professional Oriental rug cleaning services in London"
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
