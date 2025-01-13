import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";

const serviceDetails = {
  "persian-rug-cleaning": {
    title: "Persian Rug Cleaning",
    description: "Expert Persian rug cleaning services in London",
    features: [
      "Specialized cleaning for delicate Persian rugs",
      "Traditional hand-cleaning methods",
      "Color and pattern preservation",
      "Gentle pH-balanced solutions",
      "Deep dirt and stain removal",
      "Free collection and delivery",
    ],
    process: [
      "Initial inspection and assessment",
      "Dust and dirt removal",
      "Gentle hand washing",
      "Specialized stain treatment",
      "Controlled drying process",
      "Final quality check",
    ],
  },
  "oriental-rug-cleaning": {
    title: "Oriental Rug Cleaning",
    description: "Professional Oriental rug cleaning services",
    features: [
      "Expert care for all Oriental rug types",
      "Customized cleaning solutions",
      "Dye stability testing",
      "Fringe cleaning and repair",
      "Odor removal treatment",
      "Free collection and delivery",
    ],
    process: [
      "Detailed inspection",
      "Pre-treatment testing",
      "Gentle cleaning process",
      "Spot treatment",
      "Controlled drying",
      "Final inspection",
    ],
  },
  // ... Add similar details for other services
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {service.description}
            </p>
            <Button size="lg" className="mt-8 gap-2 bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4" />
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold">Features & Benefits</h2>
              <ul className="mt-6 space-y-4">
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
              <ul className="mt-6 space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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