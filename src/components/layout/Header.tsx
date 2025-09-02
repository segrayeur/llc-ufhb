import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import ufrLogo from "@/assets/ufr-logo-new.png";
import universityLogo from "@/assets/university-logo-new.png";

const navigation = [
  {
    name: "Accueil",
    href: "/"
  },
  {
    name: "Présentation",
    href: "/presentation",
    submenu: [
      { name: "Historique", href: "/historique" },
      { name: "Mission", href: "/mission" },
      { name: "Organigramme", href: "/equipe" }
    ]
  },
  {
    name: "Galerie",
    href: "/galerie",
    submenu: [
      { name: "Photos", href: "/galerie/photos" },
      { name: "Vidéos", href: "/galerie/videos" }
    ]
  },
  {
    name: "Actualités / Blog",
    href: "/actualites"
  },
  {
    name: "Départements & Structures",
    href: "/departements",
    submenu: [
      { name: "Départements", href: "/departements" },
      { name: "Instituts de recherche", href: "/structures" },
      { name: "Structures rattachées", href: "/partenaires" }
    ]
  },
  {
    name: "FAQ",
    href: "/faq"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar with Logos and Title */}
      <div className="hero-gradient text-white py-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full float-animation"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent rounded-full float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 zoom-in">
              <img src={ufrLogo} alt="Logo UFR-LLC" className="h-16 w-auto hover-scale pulse-glow" />
            </div>
            
            <div className="text-center flex-1 px-4 slide-in-up">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 gradient-text">
                UFR Langues, Littératures et Civilisations
              </h1>
              <p className="text-lg md:text-xl text-white/95 italic font-medium">
                Les Humanités au service de la Société
              </p>
            </div>
            
            <div className="flex items-center space-x-4 rotate-in">
              <img src={universityLogo} alt="Logo Université Félix Houphouët-Boigny" className="h-16 w-auto hover-scale pulse-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="glass-effect border-b border-white/20 relative">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link 
                    to={item.href} 
                    className={`px-4 py-3 rounded-lg text-sm font-semibold transition-academic hover-scale relative overflow-hidden ${
                      isActive(item.href) 
                        ? "bg-primary text-primary-foreground shadow-glow" 
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {item.submenu.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="hover-scale">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 hero-gradient">
                  <div className="flex flex-col space-y-2 mt-8">
                    {navigation.map((item, index) => (
                      <div key={item.name}>
                        <Link 
                          to={item.href} 
                          onClick={() => setIsOpen(false)} 
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-academic bounce-in ${
                            isActive(item.href) 
                              ? "bg-white/20 text-white" 
                              : "text-white/90 hover:bg-white/10"
                          }`}
                          style={{animationDelay: `${index * 100}ms`}}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.submenu.map(subItem => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center text-sm text-foreground/80 glass-effect px-4 py-2 rounded-full">
              <span className="hover:text-primary transition-colors">📞 +225 0141037291</span>
              <span className="mx-3 text-primary">|</span>
              <span className="hover:text-primary transition-colors">✉️ ufrllc@hotmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}