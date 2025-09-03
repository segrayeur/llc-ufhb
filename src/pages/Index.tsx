import { ArrowRight, BookOpen, Users, Target, Award, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>UFR-LLC | Accueil - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Bienvenue à l'UFR des Langues, Littératures et Civilisations de l'Université Félix Houphouët-Boigny d'Abidjan. Formation d'excellence en humanités, langues modernes et civilisations." />
        <meta name="keywords" content="UFR-LLC, accueil, université, langues, littératures, civilisations, Abidjan, formation" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full float-animation"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-accent rounded-full float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full float-animation" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-accent rounded-full float-animation" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/src/assets/university-logo-new.png" 
              alt="Logo Université Félix Houphouët-Boigny" 
              className="w-16 h-16 md:w-20 md:h-20 mr-6 opacity-90"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white slide-in-up">
              Bienvenue à l'<span className="gradient-text">UFR-LLC</span>
            </h1>
            <img 
              src="/src/assets/ufr-logo-new.png" 
              alt="Logo UFR-LLC" 
              className="w-16 h-16 md:w-20 md:h-20 ml-6 opacity-90"
            />
          </div>
          <p className="text-2xl md:text-3xl text-white/95 mb-8 max-w-4xl mx-auto zoom-in font-light">
            Les Humanités au service de la société et du développement
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto rotate-in leading-relaxed">
            L'UFR des Langues, Littératures et Civilisations forme des spécialistes de haut niveau 
            capables de répondre aux défis culturels, sociaux et économiques de notre époque.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center bounce-in">
            <Button asChild size="lg" className="text-lg px-10 py-4 hover-scale shadow-glow glass-effect border border-white/20 text-white hover:bg-white/20">
              <Link to="/mission">
                Découvrir notre mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-4 hover-scale glass-effect border-2 border-white text-white hover:bg-white/10" asChild>
              <Link to="/departements">
                Nos programmes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text slide-in-up">Accès Rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="academic-shadow transition-academic hover-scale cursor-pointer group glass-effect border border-primary/20 zoom-in" style={{animationDelay: '0.1s'}}>
              <Link to="/mission">
                <CardHeader className="text-center pb-4">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4 group-hover:text-accent transition-academic pulse-glow" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Mission & Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Découvrez notre mission, vision et valeurs académiques
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
            </Card>

            <Card className="academic-shadow transition-academic hover-scale cursor-pointer group glass-effect border border-primary/20 zoom-in" style={{animationDelay: '0.2s'}}>
              <Link to="/equipe">
                <CardHeader className="text-center pb-4">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4 group-hover:text-accent transition-academic pulse-glow" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Notre Équipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Rencontrez notre équipe pédagogique et administrative
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
            </Card>

            <Card className="academic-shadow transition-academic hover-scale cursor-pointer group glass-effect border border-primary/20 zoom-in" style={{animationDelay: '0.3s'}}>
              <Link to="/departements">
                <CardHeader className="text-center pb-4">
                  <BookOpen className="h-16 w-16 text-primary mx-auto mb-4 group-hover:text-accent transition-academic pulse-glow" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Départements</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Explorez nos programmes en langues et littératures
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
            </Card>

            <Card className="academic-shadow transition-academic hover-scale cursor-pointer group glass-effect border border-primary/20 zoom-in" style={{animationDelay: '0.4s'}}>
              <Link to="/contact">
                <CardHeader className="text-center pb-4">
                  <Phone className="h-16 w-16 text-primary mx-auto mb-4 group-hover:text-accent transition-academic pulse-glow" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Contactez-nous pour toute information
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Un pôle d'excellence académique</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Depuis sa création, l'UFR-LLC s'impose comme un centre de référence en Afrique de l'Ouest 
                pour la formation en langues, littératures et civilisations. Nos programmes innovants 
                préparent les étudiants aux défis du monde moderne.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Formation d'excellence reconnue internationalement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Corps professoral hautement qualifié</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Partenariats académiques internationaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Recherche de pointe en humanités</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/historique">
                  En savoir plus sur notre histoire
                </Link>
              </Button>
            </div>
            <div className="bg-card rounded-lg p-8 academic-shadow">
              <h3 className="text-2xl font-bold mb-6 text-center">Nos chiffres</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Départements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Niveaux (L, M, D)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Laboratoires</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">Chaire UNESCO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Audio Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Témoignages Audio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="academic-shadow hover-scale glass-effect border border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Dr. Marie Kouassi</CardTitle>
                <CardDescription>Diplômée en Littérature Anglaise</CardDescription>
              </CardHeader>
              <CardContent>
                <audio controls className="w-full mb-4">
                  <source src="/audio/temoignage1.mp3" type="audio/mpeg" />
                  Votre navigateur ne supporte pas l'audio.
                </audio>
                <p className="text-sm text-muted-foreground">
                  "Mon parcours à l'UFR-LLC m'a permis d'acquérir une expertise exceptionnelle..."
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow hover-scale glass-effect border border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Prof. Jean Bakayoko</CardTitle>
                <CardDescription>Ancien étudiant en Allemand</CardDescription>
              </CardHeader>
              <CardContent>
                <audio controls className="w-full mb-4">
                  <source src="/audio/temoignage2.mp3" type="audio/mpeg" />
                  Votre navigateur ne supporte pas l'audio.
                </audio>
                <p className="text-sm text-muted-foreground">
                  "L'excellence académique de l'UFR-LLC est reconnue internationalement..."
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow hover-scale glass-effect border border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Dr. Aminata Traoré</CardTitle>
                <CardDescription>Chercheuse en Sciences du Langage</CardDescription>
              </CardHeader>
              <CardContent>
                <audio controls className="w-full mb-4">
                  <source src="/audio/temoignage3.mp3" type="audio/mpeg" />
                  Votre navigateur ne supporte pas l'audio.
                </audio>
                <p className="text-sm text-muted-foreground">
                  "Les opportunités de recherche offertes sont extraordinaires..."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez-nous</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez nos programmes de formation et intégrez une institution d'excellence 
            au cœur de l'Afrique de l'Ouest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/departements">
                Découvrir nos programmes
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;