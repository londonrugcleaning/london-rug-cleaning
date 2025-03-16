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
    description: "Expert Persian rug cleaning services in London combining traditional methods with modern technology",
    hero: "/lovable-uploads/persian-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/persian-rug-1.jpg",
      "/lovable-uploads/persian-rug-2.jpg",
      "/lovable-uploads/persian-rug-3.jpg"
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
      "description": "Expert Persian rug cleaning services in London combining traditional methods with modern technology",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "London"
      }
    }
  },
  "oriental-rug-cleaning": {
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
    intro: "Wool rugs require special attention due to their natural fibers and unique properties. Our eco-friendly wool rug cleaning service maintains the softness, durability, and appearance of your wool rugs while extending their lifespan. We understand the specific requirements of wool and use specialized techniques that preserve the natural lanolin and fiber integrity.",
    features: [
      "Specialized wool fiber cleaning",
      "pH-balanced natural solutions",
      "Natural fiber preservation techniques",
      "Eco-friendly cleaning methods",
      "Moth prevention treatment",
      "Gentle controlled drying process",
      "Color and texture preservation",
      "Free collection and delivery",
      "Expert fringe cleaning and restoration",
      "Wool-specific stain protection treatment"
    ],
    process: [
      {
        title: "Comprehensive inspection",
        description: "We thoroughly examine your wool rug for specific care requirements and condition assessment."
      },
      {
        title: "Natural dust removal",
        description: "Gentle but effective removal of dust and dry soil without damaging delicate wool fibers."
      },
      {
        title: "Wool-specific washing",
        description: "Cleaning with pH-balanced solutions designed specifically for natural wool fibers."
      },
      {
        title: "Gentle stain treatment",
        description: "Careful spot treatment using wool-safe products and techniques."
      },
      {
        title: "Natural drying process",
        description: "Controlled temperature drying that preserves wool's natural elasticity and prevents shrinkage."
      },
      {
        title: "Wool conditioning",
        description: "Application of natural conditioning agents to maintain wool's softness and resilience."
      }
    ],
    benefits: [
      "Maintains wool's natural oils and softness",
      "Extends rug lifespan significantly",
      "Preserves natural colors and texture",
      "Removes allergens and dust mites",
      "Prevents moth damage",
      "Maintains wool's natural insulating properties"
    ],
    faqs: [
      {
        question: "How often should wool rugs be professionally cleaned?",
        answer: "For wool rugs in residential settings, we recommend professional cleaning every 18-24 months. Rugs in high-traffic areas or homes with children and pets may benefit from more frequent cleaning, approximately every 12-18 months. Regular professional maintenance helps preserve the natural beauty and extends the lifespan of your wool investment."
      },
      {
        question: "Will professional cleaning damage the natural oils in my wool rug?",
        answer: "No, our specialized wool cleaning process is designed to preserve the natural lanolin oils in wool fibers. We use gentle, pH-balanced cleaning solutions and techniques specifically developed for wool. Our methods clean thoroughly while maintaining wool's natural properties, softness, and resilience."
      },
      {
        question: "How do you prevent shrinkage when cleaning wool rugs?",
        answer: "We prevent shrinkage through carefully controlled cleaning and drying processes. Our technicians use regulated water temperatures, gentle agitation, and specialized drying techniques in temperature-controlled environments. This maintains the dimensional stability of wool rugs throughout the cleaning process."
      },
      {
        question: "Do you use eco-friendly methods for wool rug cleaning?",
        answer: "Yes, we prioritize eco-friendly cleaning methods for all natural fiber rugs, especially wool. Our cleaning solutions are biodegradable, non-toxic, and specifically formulated to be gentle on both wool fibers and the environment. We minimize water usage and avoid harsh chemicals that could damage wool or harm the ecosystem."
      },
      {
        question: "How do you handle moth damage in wool rugs?",
        answer: "For wool rugs with moth damage, we provide a two-part service: treatment and prevention. First, we thoroughly clean the rug to remove any moth larvae or eggs. Then we apply safe, effective moth repellent treatments. We can also repair moth damage through specialized reweaving and restoration techniques to restore the rug's appearance and integrity."
      },
      {
        question: "What makes wool rugs require different cleaning than synthetic rugs?",
        answer: "Wool rugs require specialized cleaning because wool is a natural, protein-based fiber with unique properties. Wool has scales along the fiber that can lock together and cause shrinkage if improperly cleaned. Wool also contains natural lanolin oils that should be preserved. Additionally, wool can be more sensitive to high alkalinity, temperature extremes, and aggressive agitation than synthetic fibers."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Wool Rug Cleaning London",
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
      "description": "Expert wool rug cleaning services in London with specialized care for natural fibers",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "London"
      }
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
        answer: "Area rug cleaning costs vary based on size, material, construction, and condition. Basic synthetic rugs typically start at £4-6 per square foot, while wool rugs range from £6-10 per square foot. Hand-knotted, silk, or antique rugs may cost £8-15+ per square foot. We provide exact quotes after assessing your specific rug."
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
  },
  
  "antique-rug-cleaning": {
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
        answer: "Antique rug cleaning is priced based on the rug's size, age, condition, and the complexity of required treatments. Prices typically range from £12-25 per square foot. We provide detailed price quotes after in-person assessment. While this represents a premium over standard cleaning, the specialized methods and materials required for proper antique conservation justify the investment for valuable pieces."
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
    }
  },
  
  "hand-knotted-rug-cleaning": {
    title: "Hand-Knotted Rug Cleaning",
    description: "Specialized cleaning for luxury hand-knotted rugs with meticulous attention to detail",
    hero: "/lovable-uploads/hand-knotted-rug-hero.jpg",
    gallery: [
      "/lovable-uploads/hand-knotted-rug-1.jpg",
      "/lovable-uploads/hand-knotted-rug-2.jpg",
      "/lovable-uploads/hand-knotted-rug-3.jpg"
    ],
    intro: "Hand-knotted rugs represent the pinnacle of rug craftsmanship and require cleaning methods that preserve their intricate details and structural integrity. Our specialized hand-knotted rug cleaning service honors the artistry in these luxury pieces while providing thorough cleaning that enhances their beauty and longevity. With exacting techniques and specialized knowledge, we ensure these valuable rugs receive the premium care they deserve.",
    features: [
      "Expert cleaning for handcrafted luxury rugs",
      "Careful knot and fringe preservation",
      "Preservation of intricate details and patterns",
      "Material-specific cleaning approaches",
      "Foundation and structure protection",
      "Gentle hand washing techniques",
      "Free collection and delivery",
      "Full insurance coverage",
      "Color stabilization",
      "Professional finishing and grooming"
    ],
    process: [
      {
        title: "Detailed craftsmanship assessment",
        description: "Evaluation of knot count, material composition, and construction methods to determine optimal cleaning approach."
      },
      {
        title: "Specialized dust extraction",
        description: "Careful removal of embedded particulates while protecting delicate knotting and structure."
      },
      {
        title: "Hand cleaning",
        description: "Gentle hand washing with appropriate cleaning agents for the specific materials in your hand-knotted rug."
      },
      {
        title: "Precise stain treatment",
        description: "Targeted spot cleaning with techniques that protect dyes and fibers."
      },
      {
        title: "Controlled drying",
        description: "Carefully monitored drying process to maintain shape and prevent stress on the knots."
      },
      {
        title: "Expert finishing",
        description: "Meticulous grooming and finishing to restore the rug's original appearance and texture."
      }
    ],
    benefits: [
      "Preserves craftsmanship and artistic value",
      "Extends the lifespan of investment-quality rugs",
      "Maintains structural integrity",
      "Enhances appearance without compromising authenticity",
      "Prevents premature wear of delicate elements",
      "Protects your investment"
    ],
    faqs: [
      {
        question: "How can I tell if my rug is truly hand-knotted?",
        answer: "Hand-knotted rugs typically show slight irregularities in pattern when viewed from the back, with visible individual knots. The fringe is an integral part of the foundation, not sewn on. You can also feel the density and weight, as hand-knotted rugs are generally heavier and more flexible than machine-made alternatives. We're happy to provide an assessment to confirm your rug's construction."
      },
      {
        question: "How often should I clean my hand-knotted rug?",
        answer: "For most hand-knotted rugs in residential settings, professional cleaning every 2-4 years is recommended. However, this varies based on traffic, exposure to soiling, and environmental conditions. Regular vacuuming (without the beater bar) and immediate attention to spills can extend the time between professional cleanings."
      },
      {
        question: "Why does hand-knotted rug cleaning cost more than regular rug cleaning?",
        answer: "Hand-knotted rug cleaning requires specialized expertise, more time-intensive processes, and often involves rare or delicate materials. Our technicians must clean with precision to preserve intricate patterns and structural integrity. The process typically takes longer and requires specialized cleaning agents suitable for high-value rugs, which contributes to the higher cost."
      },
      {
        question: "Can you repair damaged areas in my hand-knotted rug?",
        answer: "Yes, we offer expert repair services specifically for hand-knotted rugs. Our skilled artisans can reweave damaged areas, reconstruct fringes, rebuild edges, and repair foundation issues. We match materials and techniques to the original construction methods, ensuring repairs blend seamlessly with the existing structure."
      },
      {
        question: "Will cleaning fade the colors in my hand-knotted rug?",
        answer: "Our specialized cleaning process for hand-knotted rugs is designed to preserve colors while achieving thorough cleaning. We first test dye stability and then select appropriate cleaning methods and solutions. For rugs with sensitive dyes, we use specialized techniques that minimize any risk of color migration or fading."
      },
      {
        question: "How do you handle silk elements in hand-knotted rugs?",
        answer: "Hand-knotted rugs with silk elements or highlights require special attention. Our technicians identify silk components and use specialized cleaning methods appropriate for this delicate material. We use different solutions and handling techniques for silk versus wool sections of the same rug, ensuring each fiber type receives optimal care."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Hand-Knotted Rug Cleaning London",
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
      "description": "Specialized cleaning for luxury hand-knotted rugs with meticulous attention to detail",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "London"
      }
    }
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  if (!serviceId || !serviceDetails[serviceId]) {
    return <div>Service not found</div>;
  }
  
  const service = serviceDetails[serviceId];
  
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
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Get Your {service.title} Service?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and consultation. We offer free collection and delivery across London.
          </p>
          <Button size="lg" className="gap-2 bg-blue-700 hover:bg-blue-700">
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

export default ServiceDetail;
