import { Calendar, Users, Globe, BookOpen, Award, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const Projets = () => {
  return (
    <>
      <Helmet>
        <title>Projets & Actions | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Découvrez nos projets de recherche, colloques, séminaires et actions de promotion du multilinguisme et de la culture à l'UFR-LLC." />
        <meta name="keywords" content="projets, recherche, colloques, séminaires, multilinguisme, culture, UFR-LLC, actions" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Projets & Actions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des initiatives innovantes pour promouvoir la recherche, la culture 
              et le dialogue interculturel
            </p>
          </div>
        </div>
      </div>

      {/* Colloques et Séminaires */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Colloques & Séminaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="academic-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Colloque International Annuel</CardTitle>
                    <CardDescription>Langues et Cultures en Dialogue</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Événement phare réunissant chercheurs, enseignants et étudiants 
                  autour des enjeux contemporains des humanités.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Thèmes récents :</p>
                  <ul className="text-sm space-y-1">
                    <li>• "Littératures africaines et mondialisation"</li>
                    <li>• "Multilinguisme et identités culturelles"</li>
                    <li>• "Humanités numériques en Afrique"</li>
                    <li>• "Traduction et transferts culturels"</li>
                  </ul>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="secondary">Annuel</Badge>
                  <Badge variant="outline">International</Badge>
                  <Badge variant="outline">Recherche</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                  <div>
                    <CardTitle>Séminaires Doctoraux</CardTitle>
                    <CardDescription>Formation à la recherche</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Cycles de séminaires spécialisés pour accompagner les doctorants 
                  dans leur parcours de recherche.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Modules proposés :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Méthodologie de la recherche</li>
                    <li>• Techniques de rédaction académique</li>
                    <li>• Outils numériques pour la recherche</li>
                    <li>• Publication scientifique</li>
                  </ul>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="secondary">Mensuel</Badge>
                  <Badge variant="outline">Formation</Badge>
                  <Badge variant="outline">Doctorat</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                  <div>
                    <CardTitle>Journées Culturelles</CardTitle>
                    <CardDescription>Célébration de la diversité</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Événements culturels mettant en valeur la richesse des cultures 
                  représentées dans nos départements.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Activités :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Expositions littéraires et artistiques</li>
                    <li>• Spectacles théâtraux multilingues</li>
                    <li>• Conférences-débats</li>
                    <li>• Ateliers d'écriture créative</li>
                  </ul>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="secondary">Semestriel</Badge>
                  <Badge variant="outline">Culture</Badge>
                  <Badge variant="outline">Ouvert au public</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Ateliers de Formation</CardTitle>
                    <CardDescription>Perfectionnement professionnel</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Sessions de formation continue destinées aux professionnels 
                  de l'éducation et de la communication.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Formations offertes :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Pédagogie des langues étrangères</li>
                    <li>• Techniques de traduction</li>
                    <li>• Communication interculturelle</li>
                    <li>• Outils numériques éducatifs</li>
                  </ul>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="secondary">Trimestriel</Badge>
                  <Badge variant="outline">Formation continue</Badge>
                  <Badge variant="outline">Professionnels</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programmes de Recherche */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Programmes de Recherche Interuniversitaires</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-primary" />
                  <span>Projet CODESRIA</span>
                </CardTitle>
                <CardDescription>Conseil pour le Développement de la Recherche en Sciences Sociales en Afrique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Recherche collaborative sur "Les dynamiques linguistiques en Afrique de l'Ouest : 
                  entre langues nationales et langues internationales".
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm">Partenaires :</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Université Cheikh Anta Diop (Sénégal)</li>
                      <li>• Université de Ouagadougou (Burkina)</li>
                      <li>• Université d'Abomey-Calavi (Bénin)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Durée :</p>
                    <p className="text-xs text-muted-foreground">2022-2025</p>
                    <p className="font-semibold text-sm mt-2">Budget :</p>
                    <p className="text-xs text-muted-foreground">50 000 USD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-secondary" />
                  <span>Programme AUF</span>
                </CardTitle>
                <CardDescription>Agence Universitaire de la Francophonie</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "Littératures francophones contemporaines : enjeux esthétiques et 
                  sociopolitiques dans l'espace africain".
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm">Partenaires :</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Université de Montréal (Canada)</li>
                      <li>• Université de Bordeaux (France)</li>
                      <li>• Université Laval (Québec)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Durée :</p>
                    <p className="text-xs text-muted-foreground">2023-2026</p>
                    <p className="font-semibold text-sm mt-2">Budget :</p>
                    <p className="text-xs text-muted-foreground">75 000 EUR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-accent" />
                  <span>Projet UNESCO</span>
                </CardTitle>
                <CardDescription>Culture de la Paix et Dialogue Interculturel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Initiative de promotion de la culture de paix à travers l'éducation 
                  aux langues et aux cultures.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm">Objectifs :</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Promotion du multilinguisme</li>
                      <li>• Formation d'éducateurs</li>
                      <li>• Recherche-action</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Portée :</p>
                    <p className="text-xs text-muted-foreground">Afrique de l'Ouest</p>
                    <p className="font-semibold text-sm mt-2">Statut :</p>
                    <p className="text-xs text-muted-foreground">En cours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>Réseau APELA</span>
                </CardTitle>
                <CardDescription>Association pour l'Étude des Littératures Africaines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Participation active au réseau international de recherche sur 
                  les littératures africaines contemporaines.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm">Activités :</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Colloques internationaux</li>
                      <li>• Publications collectives</li>
                      <li>• Échanges d'étudiants</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Prochaine échéance :</p>
                    <p className="text-xs text-muted-foreground">Colloque 2024 - Abidjan</p>
                    <p className="font-semibold text-sm mt-2">Thème :</p>
                    <p className="text-xs text-muted-foreground">"Littératures et migrations"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotion du Multilinguisme */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Promotion du Multilinguisme et de la Culture</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle>Initiatives Locales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium">Festival des Langues</p>
                        <p className="text-sm text-muted-foreground">
                          Événement annuel célébrant la diversité linguistique ivoirienne
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium">Ateliers Communautaires</p>
                        <p className="text-sm text-muted-foreground">
                          Formation linguistique dans les quartiers populaires
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium">Concours d'Éloquence</p>
                        <p className="text-sm text-muted-foreground">
                          Compétition multilingue pour lycéens et étudiants
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle>Actions Internationales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium">Échanges Universitaires</p>
                        <p className="text-sm text-muted-foreground">
                          Programmes de mobilité étudiante et enseignante
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium">Coopération Sud-Sud</p>
                        <p className="text-sm text-muted-foreground">
                          Partenariats avec universités africaines et du Sud
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium">Publications Multilingues</p>
                        <p className="text-sm text-muted-foreground">
                          Revues et ouvrages en langues africaines et européennes
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="academic-shadow mt-8">
              <CardHeader>
                <CardTitle className="text-center">Impact et Résultats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">Projets de recherche actifs</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <p className="text-sm text-muted-foreground">Publications scientifiques/an</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <p className="text-sm text-muted-foreground">Participants aux événements</p>
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

export default Projets;