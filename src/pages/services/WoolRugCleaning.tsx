
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { CTAButtons } from "@/components/CTAButtons";

const WoolRugCleaning = () => {
  const service = {
    title: "Wool Rug Cleaning",
    description: "Specialized cleaning for premium wool rugs to maintain their beauty and extend their lifespan",
    hero: "/images/wool-rug-hero.jpg",
    gallery: [
      "/images/wool-rug-1.jpg",
      "/images/wool-rug-2.jpg",
      "/images/wool-rug-3.jpg"
    ],
    intro: "Wool rugs represent some of the finest floor coverings available, prized for their durability, natural beauty, and luxurious feel. However, wool's unique properties—including its susceptibility to water damage, dye bleeding, and shrinkage—mean that improper cleaning can cause permanent harm. Our specialized wool rug cleaning service takes these sensitivities into account, providing thorough yet gentle cleaning that preserves your wool rug's inherent qualities while extending its lifespan.",
    features: [
      "Specialized wool-safe cleaning",
      "Natural lanolin preservation",
      "Gentle pH-balanced solutions",
      "Color and dye stabilization",
      "Controlled moisture cleaning",
      "Moth prevention treatments",
      "Free collection and delivery",
      "Full insurance coverage",
      "Expert fringe cleaning",
      "Proper blocking and finishing"
    ],
    process: [
      {
        title: "Wool assessment",
        description: "Evaluation of wool type, construction method, dyes, and current condition"
      },
      {
        title: "Specialized dusting",
        description: "Thorough dry soil removal using methods that protect wool fibers"
      },
      {
        title: "Dye testing",
        description: "Careful testing to ensure colorfast cleaning without bleeding or fading"
      },
      {
        title: "Hand washing",
        description: "Gentle cleaning with wool-safe, pH-controlled solutions"
      },
      {
        title: "Controlled rinsing",
        description: "Thorough yet careful rinsing to remove all cleaning agents"
      },
      {
        title: "Proper drying",
        description: "Controlled drying methods that prevent shrinkage and distortion"
      }
    ],
    benefits: [
      "Extends rug lifespan significantly",
      "Maintains wool's natural properties",
      "Removes harmful grit and soil",
      "Prevents moth damage",
      "Preserves colors and texture",
      "Improves indoor air quality"
    ],
    faqs: [
      {
        question: "How often should I have my wool rug professionally cleaned?",
        answer: "We recommend professional cleaning for wool rugs every 2-3 years for rugs in normal household use. However, rugs in high-traffic areas or homes with children, pets, or allergy sufferers may benefit from more frequent cleaning, perhaps annually. Regular vacuuming between professional cleanings is important to prevent soil buildup."
      },
      {
        question: "Why can't I clean my wool rug myself?",
        answer: "Wool rugs can be permanently damaged by incorrect cleaning methods including excessive moisture, improper agitation, high alkalinity, or high temperatures. Common issues from DIY cleaning include shrinkage, color bleeding, browning, distortion, and fiber damage. Our professional process manages these risks while ensuring deep cleaning."
      },
      {
        question: "Will cleaning remove the lanolin from my wool rug?",
        answer: "Our specialized wool cleaning process preserves as much of wool's natural lanolin as possible. This natural oil gives wool its characteristic softness and soil resistance. While some lanolin is inevitably removed during any cleaning process, our gentle methods and wool-safe solutions minimize this loss while still achieving thorough cleaning."
      },
      {
        question: "How do you handle the fringes on my wool rug?",
        answer: "Fringes (usually made of cotton) are cleaned separately from the wool portion of the rug using appropriate cleaning agents and techniques. We take extra care to prevent tangling, yellowing, or weakening of the fringe fibers. After cleaning, fringes are carefully combed and straightened during the drying process."
      },
      {
        question: "Do you offer moth prevention for wool rugs?",
        answer: "Yes, we offer optional moth prevention treatments that can be applied after cleaning. These safe, odorless treatments deter moths from laying eggs in your wool rug, helping prevent future damage. We also provide advice on home care practices that minimize moth risk, such as regular vacuuming and periodic rotation."
      },
      {
        question: "How much does wool rug cleaning cost?",
        answer: "Our standard pricing is £20-30 per square meter with a minimum charge of £70 regardless of rug size. Wool rugs typically fall in the middle to upper part of this range depending on their construction and condition. All prices include collection, professional cleaning, and delivery. After initial inspection, we provide a detailed quotation as additional treatments may be needed based on your rug's specific condition."
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
      "description": "Specialized cleaning for premium wool rugs to maintain their beauty and extend their lifespan",
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

export default WoolRugCleaning;
