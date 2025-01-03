import { ServiceCard } from "@/components/ServiceCard";
import { Droplets, Shield, Brush, Home, Truck } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive rug cleaning solutions tailored to your needs
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  );
};