
import { ServiceHero } from "@/components/service-detail/ServiceHero";
import { ServiceFeatures } from "@/components/service-detail/ServiceFeatures";
import { ServiceGallery } from "@/components/service-detail/ServiceGallery";
import { ServiceFAQ } from "@/components/service-detail/ServiceFAQ";
import { PricingTable } from "@/components/service-detail/PricingTable";
import { CTAButtons } from "@/components/CTAButtons";

const HandKnottedRugCleaning = () => {
  const service = {
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
        question: "How much does it cost to clean a hand-knotted rug?",
        answer: "Our standard pricing for hand-knotted rugs is £20-30 per square meter with a minimum charge of £70. Due to the specialized care required, hand-knotted rugs typically fall at the higher end of this range. All prices include collection, professional cleaning, and delivery. After initial inspection, we provide a detailed quotation as additional treatments may be needed based on the rug's specific condition and materials."
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
    </div>
  );
};

export default HandKnottedRugCleaning;
