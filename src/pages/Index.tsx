
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection title="Get a Free Quote" />

      {/* Footer */}
      <footer className="border-t bg-gradient-to-b from-blue-50 to-cream-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">London Rug Cleaning</h3>
              <p className="text-muted-foreground">
                Professional rug cleaning services in London with over 30 years of experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-blue-600">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-blue-600">About Us</Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-blue-600">Services</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-blue-600">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-blue-600">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/persian-rug-cleaning" className="text-muted-foreground hover:text-blue-600">
                    Persian Rug Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/oriental-rug-cleaning" className="text-muted-foreground hover:text-blue-600">
                    Oriental Rug Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/wool-rug-cleaning" className="text-muted-foreground hover:text-blue-600">
                    Wool Rug Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/rug-stain-removal" className="text-muted-foreground hover:text-blue-600">
                    Rug Stain Removal
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Button asChild variant="link" className="p-0 text-primary">
                    <a href="tel:02034888344" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      020 3488 8344
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@londonrugcleaning.co.uk</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>4 Maddison Court, 145 Great North Way, NW4 1PW</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 London Rug Cleaning. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
