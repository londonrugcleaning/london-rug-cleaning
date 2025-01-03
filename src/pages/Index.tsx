import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />

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