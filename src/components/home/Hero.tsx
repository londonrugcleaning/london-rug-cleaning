import { Button } from "@/components/ui/button";
import { Check, MapPin, Truck, Shield } from "lucide-react";

export const Hero = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Expert Rug Cleaning",
      description: "Specialized in Persian, Oriental & Wool Rugs"
    },
    {
      icon: Truck,
      title: "Free Collection & Delivery",
      description: "Available across all London areas"
    },
    {
      icon: MapPin,
      title: "Local Service",
      description: "Professional rug cleaners near you"
    }
  ];

  const services = [
    "Persian Rug Cleaning Specialists",
    "Oriental Rug Restoration",
    "Wool Rug Deep Cleaning",
    "Area Rug Cleaning Services",
    "Same-Day Service Available",
    "Free Collection & Delivery"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white">
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-up font-serif text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Professional{" "}
            <span className="text-primary">Rug Cleaning</span>{" "}
            <span className="block mt-2">in London</span>
          </h1>
          <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
            Expert care for all types of rugs - From antique Persian to modern designs. 
            Trusted by London residents for over 30 years.
          </p>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="animate-fade-up rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 animate-fade-up">
            <div className="mx-auto max-w-2xl rounded-xl bg-secondary/50 p-6">
              <ul className="grid grid-cols-2 gap-3 text-left">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full w-full sm:w-auto">
              Get Your Free Quote
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
              Find Rug Cleaners Near You
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};