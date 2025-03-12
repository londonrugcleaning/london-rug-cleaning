
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  FileText,
  List,
  MessageSquare,
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "./Logo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const navigation = [
    { name: "About", href: "/about", icon: FileText },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-7xl px-4">
      <nav className="rounded-xl border bg-white/70 px-6 py-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <Logo />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <Button 
              variant={location.pathname === "/" ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={location.pathname.startsWith("/services") ? "bg-secondary" : ""}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className={`block rounded-lg p-3 ${location.pathname === service.href ? 'bg-secondary' : 'hover:bg-accent'}`}
                            >
                              <div className="text-sm font-medium">{service.name}</div>
                              <p className="text-xs leading-snug text-muted-foreground">
                                Professional {service.name.toLowerCase()} services in London
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <Button size="lg" asChild className="gap-2 bg-blue-600 hover:bg-blue-700">
              <a href="tel:02034888344">
                <Phone className="h-4 w-4" />
                02034888344
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>

          {isOpen && (
            <div className="absolute left-0 top-full mt-2 w-full rounded-lg border bg-white/70 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 md:hidden">
              <div className="flex flex-col gap-2">
                <Button
                  variant={location.pathname === "/" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/" className="gap-2">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </Button>
                
                <Button
                  variant={location.pathname === "/services" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/services" className="gap-2">
                    <List className="h-4 w-4" />
                    Services
                  </Link>
                </Button>
                
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
                      variant={location.pathname === service.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={service.href}>{service.name}</Link>
                    </Button>
                  ))}
                </div>
                <Button size="lg" asChild className="mt-4 w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <a href="tel:02034888344">
                    <Phone className="h-4 w-4" />
                    02034888344
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
