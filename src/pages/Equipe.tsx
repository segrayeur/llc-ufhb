import { Users, Mail, Phone, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Equipe = () => {
  return (
    <>
      <Helmet>
        <title>Équipe | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Découvrez l'équipe dirigeante et administrative de l'UFR des Langues, Littératures et Civilisations. Doyen, Vice-Doyens, services et laboratoires." />
        <meta name="keywords" content="équipe, doyen, vice-doyen, administration, UFR-LLC, laboratoires, services" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une équipe expérimentée et dévouée au service de l'excellence académique 
              et du développement des humanités
            </p>
          </div>
        </div>
      </div>

      {/* Direction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Direction</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="academic-shadow transition-academic hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <CardTitle>Doyen</CardTitle>
                <CardDescription>Direction générale de l'UFR</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="font-medium">Prof. [Nom du Doyen]</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>doyen.llc@ufhb.edu.ci</span>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-secondary-foreground" />
                </div>
                <CardTitle>Vice-Doyen chargé de la Pédagogie</CardTitle>
                <CardDescription>Coordination des enseignements</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="font-medium">Prof. [Nom du Vice-Doyen]</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>vd.pedagogie@ufhb.edu.ci</span>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-accent-foreground" />
                </div>
                <CardTitle>Vice-Doyen chargé de la Recherche</CardTitle>
                <CardDescription>Coordination de la recherche</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="font-medium">Prof. [Nom du Vice-Doyen]</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>vd.recherche@ufhb.edu.ci</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Secrétariat */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Secrétariat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span>Secrétariat du Doyen</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+225 01 41 03 72 91</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>secretariat.llc@ufhb.edu.ci</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gestion administrative générale, courrier officiel, 
                  rendez-vous avec la direction
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span>Secrétariat Académique</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+225 01 41 03 53 50</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>scolarite.llc@ufhb.edu.ci</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Inscriptions, scolarité, examens, délivrance de diplômes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Rattachés */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services Rattachés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="academic-shadow transition-academic hover:shadow-lg">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Service Informatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Gestion des systèmes informatiques, support technique, 
                  plateforme numérique
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Service Comptabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Gestion financière, budget, comptabilité générale, 
                  facturation
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Assurance Qualité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Évaluation des programmes, amélioration continue, 
                  standards académiques
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow transition-academic hover:shadow-lg">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Relations publiques, site web, réseaux sociaux, 
                  événements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Laboratoires */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Laboratoires de Recherche</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="text-xl">LADYLAD</CardTitle>
                <CardDescription>
                  Laboratoire de Dynamique des Langues, Arts et Littératures
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Recherche interdisciplinaire sur la dynamique des langues, 
                  les arts et les littératures dans l'espace francophone africain.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Axes de recherche :</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sociolinguistique et politique linguistique</li>
                    <li>• Littératures orales et écrites</li>
                    <li>• Arts performatifs et patrimoine culturel</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="text-xl">LITEC</CardTitle>
                <CardDescription>
                  Laboratoire de Littératures, Textes et Civilisations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Étude des textes littéraires et des civilisations dans une 
                  perspective comparative et interculturelle.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Axes de recherche :</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Analyse textuelle et critique littéraire</li>
                    <li>• Civilisations et cultures comparées</li>
                    <li>• Traduction et transferts culturels</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipe;