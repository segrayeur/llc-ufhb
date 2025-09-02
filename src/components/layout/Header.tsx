import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import ufrLogo from "@/assets/ufr-logo.png";
import universityLogo from "@/assets/university-logo.png";
const navigation = [{
  name: "Accueil",
  href: "/"
}, {
  name: "Mission & Vision",
  href: "/mission"
}, {
  name: "Équipe",
  href: "/equipe"
}, {
  name: "Historique",
  href: "/historique"
}, {
  name: "Départements",
  href: "/departements"
}, {
  name: "Projets",
  href: "/projets"
}, {
  name: "Structures",
  href: "/structures"
}, {
  name: "Partenaires",
  href: "/partenaires"
}, {
  name: "Actualités",
  href: "/actualites"
}, {
  name: "FAQ",
  href: "/faq"
}, {
  name: "Contact",
  href: "/contact"
}];
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => {
    return location.pathname === href;
  };
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar with Logos and Title */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={universityLogo} alt="Logo Université Félix Houphouët-Boigny" className="h-12 w-auto" />
            </div>
            
            <div className="text-center flex-1 px-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground">UFR  Langues, Littératures et Civilisations - LLC</h1>
              <p className="text-sm md:text-base text-primary-foreground/90 italic">
                Les Humanités au service de la société
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <img src={ufrLogo} alt="Logo UFR-LLC" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-academic ${isActive(item.href) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary hover:text-secondary-foreground"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-md text-base font-medium transition-academic ${isActive(item.href) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary hover:text-secondary-foreground"}`}>
                      {item.name}
                    </Link>)}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center text-sm text-muted-foreground">
            <span>📞 +225 0141037291</span>
            <span className="mx-2">|</span>
            <span>✉️ ufrllc@hotmail.com</span>
          </div>
        </div>
      </nav>
    </header>;
}