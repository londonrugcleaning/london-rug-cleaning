import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.hero}
            alt={service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-white/90">
              {service.description}
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-white">Rated 4.9/5 by our customers</span>
            </div>
            <Button size="lg" className="mt-8 gap-2 bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4" />
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Process Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold">Features & Benefits</h2>
              <ul className="mt-6 grid gap-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold">Our Process</h2>
              <ul className="mt-6 space-y-6">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold">
            Our Work
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service.schema) }}
      />

      {/* CTA Section */}
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
    </div>
  );
};

export default ServiceDetail;