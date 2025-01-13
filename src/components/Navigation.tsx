import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, FileText, List, MessageSquare, HelpCircle, Menu, X, Phone, MapPin } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: FileText },
    { name: "Services", href: "/services", icon: List },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="font-serif text-2xl font-semibold">
          London Rug Cleaning
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant={location.pathname === item.href ? "secondary" : "ghost"}
                asChild
              >
                <Link to={item.href} className="gap-2">
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            );
          })}
          <div className="flex items-center gap-2 ml-4">
            <Button variant="outline" size="sm" className="gap-2">
              <MapPin className="h-4 w-4" />
              Find Near You
            </Button>
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Get Free Quote
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant={location.pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.href} className="gap-2">
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  </Button>
                );
              })}
              <Button size="sm" className="mt-4 w-full gap-2">
                <MapPin className="h-4 w-4" />
                Find Near You
              </Button>
              <Button size="sm" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};