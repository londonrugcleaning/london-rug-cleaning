import { ServiceCard } from "@/components/ServiceCard";
import { Droplets, Shield, Brush, Home, Truck, Bug, Sparkles, Clock } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Our Professional Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive rug cleaning solutions tailored to your needs, with free
            collection and delivery across London
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Droplets}
            title="Deep Cleaning"
            description="Professional deep cleaning service using eco-friendly products and advanced techniques for all types of rugs"
          />
          <ServiceCard
            icon={Shield}
            title="Stain Protection"
            description="Advanced protection treatment to guard against future stains and spills, extending your rug's life"
          />
          <ServiceCard
            icon={Brush}
            title="Restoration"
            description="Expert restoration services for damaged or worn rugs, including fringe repair and reweaving"
          />
          <ServiceCard
            icon={Home}
            title="Pet Odor Removal"
            description="Specialized treatment to eliminate pet odors and stains while preserving your rug's natural fibers"
          />
          <ServiceCard
            icon={Bug}
            title="Moth Treatment"
            description="Effective moth prevention and treatment to protect your valuable rugs from damage"
          />
          <ServiceCard
            icon={Truck}
            title="Free Collection"
            description="Complimentary pickup and delivery service throughout London, making the process hassle-free"
          />
          <ServiceCard
            icon={Sparkles}
            title="Oriental & Persian Rugs"
            description="Specialized cleaning for delicate and valuable oriental and Persian rugs"
          />
          <ServiceCard
            icon={Clock}
            title="Same-Day Service"
            description="Available for urgent cleaning needs, subject to scheduling and location"
          />
        </div>
      </div>
    </section>
  );
};