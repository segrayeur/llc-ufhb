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
      <section className="academic-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Bienvenue à l'UFR-LLC
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Les Humanités au service de la société et du développement
          </p>
          <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto">
            L'UFR des Langues, Littératures et Civilisations forme des spécialistes de haut niveau 
            capables de répondre aux défis culturels, sociaux et économiques de notre époque.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/mission">
                Découvrir notre mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link to="/departements">
                Nos programmes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Accès rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="academic-shadow transition-academic hover:shadow-lg cursor-pointer group">
              <Link to="/mission">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-academic" />
                  <CardTitle>Mission & Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Découvrez notre mission, vision et valeurs académiques
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg cursor-pointer group">
              <Link to="/equipe">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-academic" />
                  <CardTitle>Notre Équipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Rencontrez notre équipe pédagogique et administrative
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg cursor-pointer group">
              <Link to="/departements">
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-academic" />
                  <CardTitle>Départements</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Explorez nos programmes en langues et littératures
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg cursor-pointer group">
              <Link to="/contact">
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-academic" />
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Contactez-nous pour toute information
                  </CardDescription>
                </CardContent>
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