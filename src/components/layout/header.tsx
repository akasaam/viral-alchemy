
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const serviceLinks = [
    { 
      title: "Social Media Marketing", 
      description: "Build your brand presence and engage your audience with strategic social media campaigns.",
      href: "/services/social-media-marketing",
      icon: "/placeholder.svg",
      image: "/lovable-uploads/879c57a0-8687-4c6c-90c7-3bc3d3b61237.png"
    },
    { 
      title: "Search Engine Optimization", 
      description: "Improve your visibility and drive organic traffic with data-driven SEO strategies.",
      href: "/services/seo",
      icon: "/placeholder.svg",
      image: "/lovable-uploads/879c57a0-8687-4c6c-90c7-3bc3d3b61237.png"
    },
    { 
      title: "Content Marketing", 
      description: "Tell your brand story and establish authority with compelling content strategies.",
      href: "/services/content-marketing",
      icon: "/placeholder.svg",
      image: "/lovable-uploads/879c57a0-8687-4c6c-90c7-3bc3d3b61237.png"
    },
    { 
      title: "Website Development", 
      description: "Create stunning, high-performance websites that convert visitors into customers.",
      href: "/website-development",
      icon: "/placeholder.svg",
      image: "/lovable-uploads/879c57a0-8687-4c6c-90c7-3bc3d3b61237.png"
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Work With Us", path: "/careers" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/879c57a0-8687-4c6c-90c7-3bc3d3b61237.png" 
              alt="Primsy Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold">
              <span className="text-gradient">Primsy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="space-x-3">
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-sm font-medium px-4 py-2.5 transition-colors hover:text-va-purple ${
                    location.pathname.includes('/services') ? "text-va-purple" : "text-foreground"
                  }`}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-5 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                      {serviceLinks.map((service) => (
                        <li key={service.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                            >
                              <div className="mb-2 overflow-hidden rounded-md">
                                <img 
                                  src={service.image} 
                                  alt={service.title} 
                                  className="h-32 w-full object-cover transition-transform hover:scale-105"
                                />
                              </div>
                              <div className="mb-2 mt-2 text-lg font-medium">
                                {service.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Regular Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium px-4 py-2.5 rounded-md transition-colors hover:text-va-purple hover:bg-accent/50 ${
                      location.pathname === link.path ? "text-va-purple bg-accent/30" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* Theme Switch & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-accent/50"
              onClick={toggleMenu}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="p-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/lovable-uploads/879c57a0-8687-4c6c-90c7-3bc3d3b61237.png" 
                alt="Primsy Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold">
                <span className="text-gradient">Primsy</span>
              </span>
            </Link>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/50" onClick={toggleMenu}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          
          <nav className="mt-6 p-6 flex flex-col items-start space-y-6">
            <Link
              to="/services"
              className={`text-lg font-medium transition-colors hover:text-va-purple ${
                location.pathname.includes('/services') ? "text-va-purple" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors hover:text-va-purple ${
                  location.pathname === link.path ? "text-va-purple" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Service sub-links in mobile menu */}
            <div className="w-full mt-4 border-t border-border pt-6">
              <p className="text-sm font-semibold mb-4 text-muted-foreground">Our Services</p>
              <div className="space-y-4 pl-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <span className="text-sm">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
