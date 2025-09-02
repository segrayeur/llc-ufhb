import { Building, Globe, Users, HandHeart, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const Partenaires = () => {
  return (
    <>
      <Helmet>
        <title>Partenaires | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Découvrez nos partenaires institutionnels et académiques : UNESCO, AUF, universités internationales et institutions de recherche." />
        <meta name="keywords" content="partenaires, UNESCO, AUF, universités partenaires, coopération internationale, UFR-LLC" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Partenaires
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un réseau international d'excellence pour renforcer notre mission 
              académique et notre impact global
            </p>
          </div>
        </div>
      </div>

      {/* Université Félix Houphouët-Boigny */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Institution de Rattachement</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="academic-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Building className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Université Félix Houphouët-Boigny</CardTitle>
                <CardDescription className="text-lg">
                  Notre université de rattachement et partenaire principal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Présentation</h3>
                    <p className="text-muted-foreground mb-4">
                      L'Université Félix Houphouët-Boigny, créée en 1964, est la plus ancienne 
                      et la plus prestigieuse université de Côte d'Ivoire. Elle constitue un 
                      pôle d'excellence en Afrique de l'Ouest.
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">Chiffres clés :</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Plus de 60 000 étudiants</li>
                        <li>• 13 UFR et grandes écoles</li>
                        <li>• Plus de 1 500 enseignants-chercheurs</li>
                        <li>• Classée parmi les meilleures universités africaines</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Collaboration avec l'UFR-LLC</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-medium">Ressources Partagées</p>
                        <p className="text-sm text-muted-foreground">
                          Bibliothèque centrale, laboratoires, infrastructure numérique
                        </p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-medium">Programmes Transversaux</p>
                        <p className="text-sm text-muted-foreground">
                          Cours inter-UFR, projets multidisciplinaires, recherche collaborative
                        </p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="font-medium">Rayonnement International</p>
                        <p className="text-sm text-muted-foreground">
                          Partenariats internationaux, échanges académiques, coopération
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organismes Internationaux */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Organismes Internationaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="academic-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">UNESCO</CardTitle>
                    <CardDescription>Organisation des Nations Unies pour l'éducation, la science et la culture</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Partenariat stratégique à travers la Chaire UNESCO "Culture de la Paix" 
                  et participation aux programmes éducatifs et culturels de l'organisation.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Domaines de coopération :</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Éducation à la paix et aux droits humains</li>
                    <li>• Promotion du multilinguisme</li>
                    <li>• Sauvegarde du patrimoine culturel</li>
                    <li>• Recherche en sciences humaines</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Chaire UNESCO</Badge>
                  <Badge variant="outline">Culture de Paix</Badge>
                  <Badge variant="outline">Patrimoine</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">AUF</CardTitle>
                    <CardDescription>Agence Universitaire de la Francophonie</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Membre actif du réseau francophone mondial, l'UFR-LLC bénéficie des programmes 
                  de mobilité, de formation et de recherche de l'AUF.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Programmes bénéficiaires :</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Bourses de mobilité étudiante</li>
                    <li>• Formations doctorales en réseau</li>
                    <li>• Projets de recherche collaborative</li>
                    <li>• Ressources numériques francophones</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Francophonie</Badge>
                  <Badge variant="outline">Mobilité</Badge>
                  <Badge variant="outline">Recherche</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Universités Partenaires */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Universités Partenaires</h2>
          
          {/* Partenaires Africains */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Partenaires Africains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université Cheikh Anta Diop</CardTitle>
                  <CardDescription>Dakar, Sénégal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Coopération en littératures africaines et sociolinguistique
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Échanges</Badge>
                    <Badge variant="outline" className="text-xs">Recherche</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de Ouagadougou</CardTitle>
                  <CardDescription>Ouagadougou, Burkina Faso</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Programmes conjoints en sciences du langage
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Formations</Badge>
                    <Badge variant="outline" className="text-xs">Colloques</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université d'Abomey-Calavi</CardTitle>
                  <CardDescription>Cotonou, Bénin</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Recherche collaborative en patrimoine oral
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Patrimoine</Badge>
                    <Badge variant="outline" className="text-xs">Publications</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de Lomé</CardTitle>
                  <CardDescription>Lomé, Togo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Partenariat en littératures comparées
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Littérature</Badge>
                    <Badge variant="outline" className="text-xs">Doctorat</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de Yaoundé I</CardTitle>
                  <CardDescription>Yaoundé, Cameroun</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Échanges en linguistique appliquée
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Linguistique</Badge>
                    <Badge variant="outline" className="text-xs">Formation</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université du Ghana</CardTitle>
                  <CardDescription>Legon, Ghana</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Coopération en études anglophones
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Anglais</Badge>
                    <Badge variant="outline" className="text-xs">Culture</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Partenaires Européens */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Partenaires Européens</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de Bordeaux</CardTitle>
                  <CardDescription>Bordeaux, France</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Programme Erasmus+ et recherche en littératures francophones
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Erasmus+</Badge>
                    <Badge variant="outline" className="text-xs">Francophonie</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université Paul Valéry</CardTitle>
                  <CardDescription>Montpellier, France</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Cotutelles de thèse et projets FLE
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Cotutelle</Badge>
                    <Badge variant="outline" className="text-xs">FLE</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de Liège</CardTitle>
                  <CardDescription>Liège, Belgique</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Recherche en linguistique comparée
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Linguistique</Badge>
                    <Badge variant="outline" className="text-xs">Comparée</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de Bamberg</CardTitle>
                  <CardDescription>Bamberg, Allemagne</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Échanges DAAD et études germaniques
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">DAAD</Badge>
                    <Badge variant="outline" className="text-xs">Allemand</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Partenaires Américains */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Partenaires des Amériques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de Montréal</CardTitle>
                  <CardDescription>Montréal, Canada</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Programmes d'échange et recherche comparative
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Québec</Badge>
                    <Badge variant="outline" className="text-xs">Comparatisme</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université Laval</CardTitle>
                  <CardDescription>Québec, Canada</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Coopération en traductologie et FLE
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Traduction</Badge>
                    <Badge variant="outline" className="text-xs">Pédagogie</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Université de São Paulo</CardTitle>
                  <CardDescription>São Paulo, Brésil</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Recherche en littératures lusophone et africaine
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Lusophonie</Badge>
                    <Badge variant="outline" className="text-xs">Afrique-Brésil</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Partenariats */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types de Partenariats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Échanges Académiques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mobilité étudiante et enseignante</li>
                  <li>• Stages et missions d'étude</li>
                  <li>• Programmes d'échange bilatéraux</li>
                  <li>• Cotutelles de thèse internationales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Recherche Collaborative</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Projets de recherche conjoints</li>
                  <li>• Publications scientifiques communes</li>
                  <li>• Laboratoires virtuels partagés</li>
                  <li>• Conférences internationales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Formations Conjointes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Diplômes en double cursus</li>
                  <li>• Certificats internationaux</li>
                  <li>• Écoles d'été spécialisées</li>
                  <li>• Formations continues partagées</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact des Partenariats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact de nos Partenariats</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="academic-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <p className="text-sm text-muted-foreground">Partenaires actifs</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <p className="text-sm text-muted-foreground">Étudiants en mobilité/an</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <p className="text-sm text-muted-foreground">Projets collaboratifs</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <p className="text-sm text-muted-foreground">Continents représentés</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-xl font-semibold text-center mb-6">Bénéfices pour nos Étudiants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Opportunités Académiques :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Accès à des formations internationales</li>
                        <li>• Diversité des approches pédagogiques</li>
                        <li>• Ressources documentaires étendues</li>
                        <li>• Encadrement scientifique renforcé</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Développement Personnel :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ouverture interculturelle</li>
                        <li>• Compétences linguistiques</li>
                        <li>• Réseau professionnel international</li>
                        <li>• Employabilité accrue</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partenaires;