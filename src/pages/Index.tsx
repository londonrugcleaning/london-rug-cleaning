
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection title="Get a Free Quote" />

      {/* Footer */}
      <footer className="border-t bg-cream-50 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <Button asChild variant="link" className="flex items-center gap-2 hover:text-primary">
              <a href="tel:02034888344">
                <Phone className="h-5 w-5 text-primary" />
                <span>02034888344</span>
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>4 Maddison Court, 145 Great North Way, NW4 1PW</span>
            </div>
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
