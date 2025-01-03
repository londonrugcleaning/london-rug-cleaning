import { ServiceCard } from "@/components/ServiceCard";
import { Droplets, Shield, Brush, Home, Truck } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <section className="hero-pattern py-24">
        <div className="container mx-auto px-4">
          <h1 className="animate-fade-up font-serif text-4xl font-semibold sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
            Comprehensive rug cleaning solutions for every need
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={Droplets}
              title="Deep Cleaning"
              description="Professional deep cleaning service using eco-friendly products"
            />
            <ServiceCard
              icon={Shield}
              title="Stain Protection"
              description="Advanced protection against future stains and spills"
            />
            <ServiceCard
              icon={Brush}
              title="Restoration"
              description="Expert restoration services for damaged or worn rugs"
            />
            <ServiceCard
              icon={Home}
              title="Pet Odor Removal"
              description="Specialized treatment to eliminate pet odors"
            />
            <ServiceCard
              icon={Truck}
              title="Free Collection"
              description="Complimentary pickup and delivery service"
            />
            <ServiceCard
              icon={Shield}
              title="Moth Treatment"
              description="Effective moth prevention and treatment"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;