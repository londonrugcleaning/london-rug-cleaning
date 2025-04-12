
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeadMeta } from "@/components/HeadMeta";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const Index = () => {
  return (
    <>
      <HeadMeta
        title="London Rug Cleaning - Professional Rug Cleaner in London"
        description="Expert rug cleaning services in London. Specializing in oriental, Persian, and antique rug cleaning with free collection and delivery. Get your free quote today"
        canonicalUrl="https://londonrugcleaning.co.uk"
        ogImage="/og-image.png"
      />
      <div className="min-h-screen">
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <LocalBusinessSchema />
    </>
  );
};

export default Index;
