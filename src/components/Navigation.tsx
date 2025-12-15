import { useState } from "react";
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
import { siteConfig } from "@/config/site";

export const Navigation = ({ currentPath = "" }: { currentPath?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use currentPath prop directly
  const activePath = currentPath;

  const services = siteConfig.links.services;

  const iconMap: Record<string, any> = {
    "About": FileText,
    "Gallery": Image,
    "Blog": FileText,
    "Contact": MessageSquare,
    "FAQ": FileText
  };

  const navigation = siteConfig.links.main.filter(link => link.name !== "FAQ").map(link => ({
    ...link,
    icon: iconMap[link.name] || FileText
  }));

  return (
    <header className="fixed top-4 z-50 mx-auto w-full">
      <nav className="container rounded-full border bg-white/90 py-2 shadow-lg px-4 backdrop-blur-xs w-full mx-auto" aria-label="Main navigation">
        <div className="flex items-center justify-between">

          <a href="/" aria-label={`${siteConfig.name} - Home`}>
            <Logo />
          </a>

          <div className="hidden items-center md:gap-2 lg:gap-4 md:flex">
            <Button
              variant={activePath === "/" ? "link" : "ghost"}
              asChild
              aria-current={activePath === "/" ? "page" : undefined}
            >
              <a href="/" className="gap-2" aria-label="Home">
                <Home className="h-4 w-4" aria-hidden="true" />
                <span>Home</span>
              </a>
            </Button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={activePath.startsWith("/services") ? "text-blue-800" : ""}
                    aria-label="Services menu"
                  >
                    <a href="/services" className="flex items-center gap-2" aria-label="Services">
                      <List className="h-4 w-4" aria-hidden="true" />
                      <span>Services</span>
                    </a>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={service.href}
                              className={`block rounded-lg p-3 ${activePath === service.href ? 'text-blue-800' : ''}`}
                              aria-current={activePath === service.href ? "page" : undefined}
                            >
                              <div className="text-sm font-medium">{service.name}</div>
                              <p className="text-xs leading-snug text-muted-foreground">
                                Professional {service.name.toLowerCase()} services in London
                              </p>
                            </a>
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
                  variant={activePath === item.href ? "link" : "ghost"}
                  asChild
                  aria-current={activePath === item.href ? "page" : undefined}
                >
                  <a href={item.href} className="gap-2" aria-label={item.name}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>
          <Button size="lg" asChild className="hidden gap-2 bg-blue-800 hover:bg-blue-900 lg:flex">
            <a href={`tel:${siteConfig.contact.phoneLink}`} aria-label={`Call us: ${siteConfig.contact.phone}`}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>{siteConfig.contact.phone}</span>
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
                  variant={activePath === "/" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                  aria-current={activePath === "/" ? "page" : undefined}
                >
                  <a href="/" className="gap-2" aria-label="Home">
                    <Home className="h-4 w-4" aria-hidden="true" />
                    <span>Home</span>
                  </a>
                </Button>

                <Button
                  variant={activePath === "/services" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                  aria-current={activePath === "/services" ? "page" : undefined}
                >
                  <a href="/services" className="gap-2" aria-label="Services">
                    <List className="h-4 w-4" aria-hidden="true" />
                    <span>Services</span>
                  </a>
                </Button>

                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.name}
                      variant={activePath === item.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      asChild
                      onClick={() => setIsOpen(false)}
                      aria-current={activePath === item.href ? "page" : undefined}
                    >
                      <a href={item.href} className="gap-2" aria-label={item.name}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span>{item.name}</span>
                      </a>
                    </Button>
                  );
                })}
                <div className="my-2 border-t pt-2">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">Services</p>
                  {services.map((service) => (
                    <Button
                      key={service.name}
                      variant={activePath === service.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      asChild
                      onClick={() => setIsOpen(false)}
                      aria-current={activePath === service.href ? "page" : undefined}
                    >
                      <a href={service.href} aria-label={service.name}>
                        <span>{service.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
                <Button size="lg" asChild className="mt-4 w-full gap-2 bg-blue-800 hover:bg-blue-900">
                  <a href={`tel:${siteConfig.contact.phoneLink}`} aria-label={`Call us: ${siteConfig.contact.phone}`}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{siteConfig.contact.phoneLink}</span>
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
