
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
  Image,
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
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ];

  return (
    <header className="fixed top-4 z-50 mx-auto w-full">
      <nav className="container rounded-full border bg-white/90 py-2 shadow-lg px-4 backdrop-blur-xs w-full mx-auto" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="London Rug Cleaning - Home">
            <Logo />
          </Link>

          <div className="hidden items-center md:gap-2 lg:gap-4 md:flex">
            <Button
              variant={location.pathname === "/" ? "link" : "ghost"}
              asChild
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              <Link to="/" className="gap-2" aria-label="Home">
                <Home className="h-4 w-4" aria-hidden="true" />
                <span>Home</span>
              </Link>
            </Button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={location.pathname.startsWith("/services") ? "text-blue-700" : ""}
                    aria-label="Services menu"
                  >
                    <Link to="/services" className="flex items-center gap-2" aria-label="Services">
                      <List className="h-4 w-4" aria-hidden="true" />
                      <span>Services</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className={`block rounded-lg p-3 ${location.pathname === service.href ? 'text-blue-700' : ''}`}
                              aria-current={location.pathname === service.href ? "page" : undefined}
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
                  variant={location.pathname === item.href ? "link" : "ghost"}
                  asChild
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  <Link to={item.href} className="gap-2" aria-label={item.name}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
            <Button size="lg" asChild className="hidden gap-2 bg-blue-600 hover:bg-blue-700 lg:flex">
              <a href="tel:02034888344" aria-label="Call us: 020 3488 8344">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>020 3488 8344</span>
              </a>
            </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>

          {isOpen && (
            <div id="mobile-menu" className="absolute left-0 top-full mt-2 w-full rounded-lg border bg-white p-4 md:hidden">
              <div className="flex flex-col gap-2">
                <Button
                  variant={location.pathname === "/" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  <Link to="/" className="gap-2" aria-label="Home">
                    <Home className="h-4 w-4" aria-hidden="true" />
                    <span>Home</span>
                  </Link>
                </Button>

                <Button
                  variant={location.pathname === "/services" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === "/services" ? "page" : undefined}
                >
                  <Link to="/services" className="gap-2" aria-label="Services">
                    <List className="h-4 w-4" aria-hidden="true" />
                    <span>Services</span>
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
                      aria-current={location.pathname === item.href ? "page" : undefined}
                    >
                      <Link to={item.href} className="gap-2" aria-label={item.name}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span>{item.name}</span>
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
                      aria-current={location.pathname === service.href ? "page" : undefined}
                    >
                      <Link to={service.href} aria-label={service.name}>
                        <span>{service.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
                <Button size="lg" asChild className="mt-4 w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <a href="tel:02034888344" aria-label="Call us: 02034888344">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>02034888344</span>
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
