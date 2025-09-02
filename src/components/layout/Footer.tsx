import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import ufrLogo from "@/assets/ufr-logo.png";
import universityLogo from "@/assets/university-logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={ufrLogo} alt="UFR-LLC" className="h-10 w-auto" />
              <img src={universityLogo} alt="UFHB" className="h-10 w-auto" />
            </div>
            <h3 className="text-lg font-semibold">UFR-LLC</h3>
            <p className="text-sm text-primary-foreground/80">
              Langues, Littératures et Civilisations - Les Humanités au service de la société et du développement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mission" className="hover:text-accent transition-academic">Mission & Vision</Link></li>
              <li><Link to="/equipe" className="hover:text-accent transition-academic">Équipe</Link></li>
              <li><Link to="/departements" className="hover:text-accent transition-academic">Départements</Link></li>
              <li><Link to="/projets" className="hover:text-accent transition-academic">Projets</Link></li>
              <li><Link to="/structures" className="hover:text-accent transition-academic">Structures</Link></li>
            </ul>
          </div>

          {/* Academic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Formation</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary-foreground/80">• Licence (L1, L2, L3)</span></li>
              <li><span className="text-primary-foreground/80">• Master (M1, M2)</span></li>
              <li><span className="text-primary-foreground/80">• Doctorat (PhD)</span></li>
              <li><Link to="/faq" className="hover:text-accent transition-academic">Questions fréquentes</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <span className="text-primary-foreground/80">
                  Université de Cocody (Abidjan)<br />
                  En face de l'ENS<br />
                  Côte d'Ivoire
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <div className="text-primary-foreground/80">
                  <div>+225 0141037291</div>
                  <div>+225 0141035350</div>
                  <div>WhatsApp: +225 0506854764</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <div className="text-primary-foreground/80">
                  <div>ufrllc@hotmail.com</div>
                  <div>llc.ufr@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} UFR-LLC - Université Félix Houphouët-Boigny. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/mentions-legales" className="hover:text-accent transition-academic">
                Mentions légales
              </Link>
              <Link to="/contact" className="hover:text-accent transition-academic">
                Contact
              </Link>
              <a 
                href="https://ufhb.edu.ci" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-academic flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>UFHB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}