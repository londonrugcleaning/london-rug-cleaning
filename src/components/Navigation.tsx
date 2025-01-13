import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  FileText,
  List,
  MessageSquare,
  HelpCircle,
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "Persian Rug Cleaning", href: "/services/persian-rug-cleaning" },
    { name: "Oriental Rug Cleaning", href: "/services/oriental-rug-cleaning" },
    { name: "Wool Rug Cleaning", href: "/services/wool-rug-cleaning" },
    { name: "Area Rug Cleaning", href: "/services/area-rug-cleaning" },
    { name: "Pickup & Delivery", href: "/services/pickup-delivery" },
  ];

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: FileText },
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
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link to={service.href}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navigation.slice(1).map((item) => {
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
          <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Phone className="h-4 w-4" />
            Get Free Quote
          </Button>
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
              <div className="my-2 border-t pt-2">
                <p className="mb-2 text-sm font-medium text-muted-foreground">Services</p>
                {services.map((service) => (
                  <Button
                    key={service.name}
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={service.href}>{service.name}</Link>
                  </Button>
                ))}
              </div>
              <Button size="lg" className="mt-4 w-full gap-2 bg-blue-600 hover:bg-blue-700">
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