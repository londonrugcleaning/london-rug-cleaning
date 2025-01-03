import { useState } from "react";
import { Brush, Droplets, Home, Phone, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProcessStep } from "@/components/ProcessStep";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your message",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-fade-up font-serif text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Professional Rug Cleaning in{" "}
              <span className="text-primary">London</span>
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
              Expert care for all types of rugs, from antique Persian to modern
              designs. Free collection and delivery across London.
            </p>
            <div className="mt-10 animate-fade-up">
              <Button size="lg" className="rounded-full">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-muted-foreground">
              Simple steps to get your rugs looking like new
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <ProcessStep
              number="1"
              title="Book Collection"
              description="Schedule a free collection at a time that suits you"
            />
            <ProcessStep
              number="2"
              title="Inspection"
              description="We thoroughly inspect your rug and create a cleaning plan"
            />
            <ProcessStep
              number="3"
              title="Deep Clean"
              description="Using our specialized cleaning methods and products"
            />
            <ProcessStep
              number="4"
              title="Free Delivery"
              description="We return your beautifully cleaned rug to your door"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-cream-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Read about experiences from our satisfied customers
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah Johnson"
              role="Homeowner in Chelsea"
              content="Exceptional service! They removed a wine stain I thought was permanent. My Persian rug looks brand new."
            />
            <TestimonialCard
              name="James Wilson"
              role="Interior Designer"
              content="As an interior designer, I trust them with my clients' valuable rugs. Their attention to detail is outstanding."
            />
            <TestimonialCard
              name="Emma Thompson"
              role="Antique Collector"
              content="Their expertise in handling antique rugs is impressive. They restored my 19th-century rug beautifully."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Request a quote or ask us any questions
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-xl animate-fade-up"
          >
            <div className="grid gap-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-cream-50 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>020 1234 5678</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            © 2024 London Rug Cleaning. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;