
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
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
          {/* Column 1: About */}
          <div className="col-span-2">
            <div className="mb-3">
              <Logo />
            </div>
            <p className="mb-3 text-gray-600">
              Professional rug cleaning services in London. Specializing in Persian, Oriental, and all types of luxury rugs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gray-800 shrink-0" />
                <span className="text-gray-600">
                  4 Maddison Court, 145 Great North Way, London, NW4 1PW
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gray-800" />
                <a href="tel:02034888344" className="text-gray-600 hover:text-blue-900 transition-colors">
                  020 3488 8344
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gray-800" />
                <a href="mailto:info@londonrugcleaning.co.uk" className="text-gray-600 hover:text-blue-900 transition-colors">
                  info@londonrugcleaning.co.uk
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-gray-800" />
                <span className="text-gray-600">
                  Mon - Sat: 8:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="London Rug Cleaning On Facebook" className="text-gray-600 hover:text-blue-900 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="London Rug Cleaning On Instagram" className="text-gray-600 hover:text-blue-900 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="London Rug Cleaning On X(Twitter)" className="text-gray-600 hover:text-blue-900 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="sm:col-span-1">
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-600 hover:text-blue-900 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-600 hover:text-blue-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2">
          <iframe title="London Rug Cleaning On Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2478.309398196074!2d-0.2233922!3d51.5992193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610d2acd824c7%3A0x219763172089e8e4!2sMaddison%20Court%2C%20145%20Great%20N%20Wy.%2C%20London%20NW4%201PW%2C%20UK!5e0!3m2!1sen!2sus!4v1741790726700!5m2!1sen!2sus" width="100%" height="350"  loading="lazy"></iframe>

          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          <p>© {currentYear} London Rug Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
