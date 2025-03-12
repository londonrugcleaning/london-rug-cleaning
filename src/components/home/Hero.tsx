
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CTAButtons } from "../CTAButtons";

export const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Shield,
      title: "Expert Rug Care",
      description: "Specialized in Persian & Oriental Rugs"
    },
    {
      icon: Truck,
      title: "Free Collection",
      description: "Available across London"
    },
    {
      icon: MapPin,
      title: "Local Service",
      description: "Professional cleaners near you"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <div className="animate-fade-up space-y-8">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Professional{" "}
                <span className="text-blue-600">Rug Cleaning</span>{" "}
                <span className="block">Service in London</span>
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <span className="ml-2 font-semibold">4.9</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Over 1,000+ satisfied customers
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                Expert care for all types of rugs - From antique Persian to modern designs. 
                Trusted by London residents for over 30 years.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" />
            <img
              src="/lovable-uploads/a7674ddc-b624-4dd8-aea9-54b266946b3f.png"
              alt="Professional Rug Cleaning Service"
              className="relative z-10 mx-auto max-w-lg rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="animate-fade-up rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
