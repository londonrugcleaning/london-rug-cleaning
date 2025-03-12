
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
