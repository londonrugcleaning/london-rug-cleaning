
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Clock 
} from "lucide-react";
import { CTAButtons } from "./CTAButtons";

export const Footer = () => {
  const services = [
    { name: "Persian Rug Cleaning", href: "/services/persian-rug-cleaning" },
    { name: "Oriental Rug Cleaning", href: "/services/oriental-rug-cleaning" },
    { name: "Wool Rug Cleaning", href: "/services/wool-rug-cleaning" },
    { name: "Area Rug Cleaning", href: "/services/area-rug-cleaning" },
    { name: "Synthetic Rug Cleaning", href: "/services/synthetic-rug-cleaning" },
    { name: "Antique Rug Cleaning", href: "/services/antique-rug-cleaning" },
    { name: "Hand-Knotted Rug Cleaning", href: "/services/hand-knotted-rug-cleaning" },
    { name: "Rug Stain Removal", href: "/services/rug-stain-removal" },
  ];

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-gray-300">
              Professional rug cleaning services in London. Specializing in Persian, Oriental, and all types of luxury rugs.
            </p>
            <CTAButtons showText={false} />
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-gray-300">
                  4 Maddison Court, 145 Great North Way, London, NW4 1PW
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-500" />
                <a href="tel:02034888344" className="text-gray-300 hover:text-white transition-colors">
                  020 3488 8344
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-500" />
                <a href="mailto:info@londonrugcleaning.com" className="text-gray-300 hover:text-white transition-colors">
                  info@londonrugcleaning.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-blue-500" />
                <span className="text-gray-300">
                  Mon - Sat: 8:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} London Rug Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
