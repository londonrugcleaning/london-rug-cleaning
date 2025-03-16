
import { ServiceCard } from "@/components/ServiceCard";
import { Droplets, Shield, Brush, Gem, Sparkles, Feather, Award, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Our Professional Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Expert rug cleaning solutions tailored to your needs, with free
            collection and delivery across London
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Sparkles}
            title="Persian Rug Cleaning"
            description="Expert care for your valuable Persian rugs using traditional methods and modern technology"
          />
          <ServiceCard
            icon={Brush}
            title="Oriental Rug Cleaning"
            description="Specialized cleaning for delicate oriental rugs with attention to detail"
          />
          <ServiceCard
            icon={Feather}
            title="Wool Rug Cleaning"
            description="Professional wool rug cleaning that preserves fiber integrity and natural colors"
          />
          <ServiceCard
            icon={BadgeCheck}
            title="Area Rug Cleaning"
            description="Comprehensive cleaning solutions for all types of area rugs"
          />
          <ServiceCard
            icon={Shield}
            title="Synthetic Rug Cleaning"
            description="Specialized cleaning for modern synthetic rugs using advanced techniques"
          />
          <ServiceCard
            icon={Award}
            title="Antique Rug Cleaning"
            description="Delicate handling and restoration of vintage and antique rugs"
          />
          <ServiceCard
            icon={Gem}
            title="Hand-Knotted Rug Cleaning"
            description="Meticulous cleaning of handcrafted luxury rugs"
          />
          <ServiceCard
            icon={Droplets}
            title="Rug Stain Removal"
            description="Professional spot and stain treatment for all rug types"
          />
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild className="bg-blue-900 hover:bg-blue-900">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
