

import { Logo } from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Clock,
  Linkedin
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const Footer = () => {
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
              {siteConfig.offer}. Specializing in Persian, Oriental, and all types of luxury rugs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gray-800 shrink-0" />
                <span className="text-gray-600">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gray-800" />
                <a href={`tel:${siteConfig.contact.phoneLink}`} className="text-gray-600 hover:text-blue-900 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gray-800" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-blue-900 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-gray-800" />
                <span className="text-gray-600">
                  {siteConfig.openingHours}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href={siteConfig.social.facebook} aria-label={`${siteConfig.name} On Facebook`} className="text-gray-600 hover:text-blue-900 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={siteConfig.social.instagram} aria-label={`${siteConfig.name} On Instagram`} className="text-gray-600 hover:text-blue-900 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={siteConfig.social.linkedin} aria-label={`${siteConfig.name} On LinkedIn`} className="text-gray-600 hover:text-blue-900 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={siteConfig.social.twitter} aria-label={`${siteConfig.name} On X(Twitter)`} className="text-gray-600 hover:text-blue-900 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="sm:col-span-1">
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {siteConfig.links.services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-600 hover:text-blue-900 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.links.main.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2">
            <iframe title={`${siteConfig.name} On Map`} src={siteConfig.contact.mapLink} width="100%" height="350" loading="lazy"></iframe>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
