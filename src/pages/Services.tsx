
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Droplets, Shield, Brush, Home, Truck, Bug, 
  Sparkles, Clock, Award, Paintbrush, Gem, 
  Feather, MapPin, Scissors, ShieldCheck
} from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";

const services = [
  {
    id: "persian-rug-cleaning",
    title: "Persian Rug Cleaning",
    description: "Expert care for your valuable Persian rugs using traditional methods and modern technology",
    icon: Gem,
    color: "bg-blue-100",
  },
  {
    id: "oriental-rug-cleaning",
    title: "Oriental Rug Cleaning",
    description: "Specialized cleaning for delicate oriental rugs with attention to detail",
    icon: Paintbrush,
    color: "bg-green-100",
  },
  {
    id: "wool-rug-cleaning",
    title: "Wool Rug Cleaning",
    description: "Professional wool rug cleaning that preserves fiber integrity and natural colors",
    icon: Feather,
    color: "bg-purple-100",
  },
  {
    id: "area-rug-cleaning",
    title: "Area Rug Cleaning",
    description: "Comprehensive cleaning solutions for all types of area rugs",
    icon: Home,
    color: "bg-yellow-100",
  },
  {
    id: "synthetic-rug-cleaning",
    title: "Synthetic Rug Cleaning",
    description: "Specialized cleaning for modern synthetic rugs using advanced techniques",
    icon: ShieldCheck,
    color: "bg-indigo-100",
  },
  {
    id: "antique-rug-cleaning",
    title: "Antique Rug Cleaning",
    description: "Delicate handling and restoration of vintage and antique rugs",
    icon: Award,
    color: "bg-amber-100",
  },
  {
    id: "hand-knotted-rug-cleaning",
    title: "Hand-Knotted Rug Cleaning",
    description: "Meticulous cleaning of handcrafted luxury rugs",
    icon: Scissors,
    color: "bg-pink-100",
  },
  {
    id: "rug-stain-removal",
    title: "Rug Stain Removal",
    description: "Professional spot and stain treatment for all rug types",
    icon: Droplets,
    color: "bg-teal-100",
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Professional <span className="text-blue-600">Rug Cleaning</span> Services in London
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Expert rug cleaning services near you. Specializing in Persian, Oriental, and Wool rugs
              with free collection and delivery across London.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButtons variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <Card className="group h-full cursor-pointer transition-all hover:shadow-lg">
                  <div className="p-6">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}>
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-semibold group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Ready to Get Your Rugs Professionally Cleaned?
            </h2>
            <p className="mt-4 text-blue-100">
              Book your free collection today and experience the difference of professional rug cleaning.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="mt-8"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
