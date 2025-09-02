import { Award, Globe, Users, BookOpen, Heart, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const Structures = () => {
  return (
    <>
      <Helmet>
        <title>Structures Rattachées | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Découvrez les structures rattachées à l'UFR-LLC : Chaire UNESCO Culture de la Paix et CUEF Abidjan. Missions et activités." />
        <meta name="keywords" content="structures rattachées, Chaire UNESCO, Culture de la Paix, CUEF Abidjan, UFR-LLC" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Structures Rattachées
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des institutions d'excellence qui renforcent notre mission académique 
              et notre rayonnement international
            </p>
          </div>
        </div>
      </div>

      {/* Chaire UNESCO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="academic-shadow mb-12">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl mb-4">Chaire UNESCO "Culture de la Paix"</CardTitle>
                <CardDescription className="text-lg">
                  Une mission internationale de promotion de la paix par l'éducation et la culture
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Target className="h-5 w-5 text-accent mr-2" />
                        Mission
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        La Chaire UNESCO "Culture de la Paix" de l'UFR-LLC a pour mission de promouvoir 
                        la culture de paix, la tolérance et le dialogue interculturel à travers 
                        l'enseignement, la recherche et l'action communautaire.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium">Objectifs principaux :</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Promouvoir l'éducation à la paix</li>
                          <li>• Développer la recherche sur les conflits et leur résolution</li>
                          <li>• Faciliter le dialogue interculturel et interreligieux</li>
                          <li>• Former des acteurs de paix</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 text-accent mr-2" />
                        Programmes de Formation
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="font-medium">Master en Culture de Paix</p>
                          <p className="text-sm text-muted-foreground">
                            Formation spécialisée en résolution de conflits et médiation
                          </p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="font-medium">Certificat en Dialogue Interculturel</p>
                          <p className="text-sm text-muted-foreground">
                            Programme court pour professionnels et leaders communautaires
                          </p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="font-medium">Ateliers de Formation</p>
                          <p className="text-sm text-muted-foreground">
                            Sessions de sensibilisation dans les communautés
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Users className="h-5 w-5 text-accent mr-2" />
                        Activités et Réalisations
                      </h3>
                      <div className="space-y-4">
                        <Card className="border-l-4 border-l-primary">
                          <CardContent className="pt-4">
                            <p className="font-medium">Conférences Internationales</p>
                            <p className="text-sm text-muted-foreground">
                              Organisation de colloques annuels sur la paix et la réconciliation
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="pt-4">
                            <p className="font-medium">Recherche Collaborative</p>
                            <p className="text-sm text-muted-foreground">
                              Partenariats avec universités et centres de recherche internationaux
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-accent">
                          <CardContent className="pt-4">
                            <p className="font-medium">Actions Communautaires</p>
                            <p className="text-sm text-muted-foreground">
                              Interventions dans les zones de tension et post-conflit
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Reconnaissance et Partenariats</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">UNESCO</Badge>
                        <Badge variant="outline">ONU</Badge>
                        <Badge variant="outline">Union Africaine</Badge>
                        <Badge variant="outline">CEDEAO</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        La Chaire bénéficie du soutien de l'UNESCO et collabore avec de nombreuses 
                        organisations internationales pour la promotion de la paix et du dialogue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-center">Impact et Statistiques</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <p className="text-sm text-muted-foreground">Personnes formées</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">25+</div>
                      <p className="text-sm text-muted-foreground">Projets réalisés</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15</div>
                      <p className="text-sm text-muted-foreground">Pays partenaires</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <p className="text-sm text-muted-foreground">Années d'activité</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CUEF Abidjan */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="academic-shadow">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Globe className="h-10 w-10 text-secondary-foreground" />
                </div>
                <CardTitle className="text-3xl mb-4">CUEF Abidjan</CardTitle>
                <CardDescription className="text-lg">
                  Centre Universitaire d'Enseignement du Français
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 text-accent mr-2" />
                        Présentation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Le CUEF Abidjan est un centre spécialisé dans l'enseignement du français 
                        langue étrangère (FLE) et la formation des enseignants de français. 
                        Il accueille des étudiants internationaux et forme des professionnels 
                        de l'enseignement du français.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium">Missions principales :</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Enseignement du français langue étrangère</li>
                          <li>• Formation d'enseignants de FLE</li>
                          <li>• Recherche en didactique du français</li>
                          <li>• Certification et évaluation linguistique</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Public Cible</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-background rounded-lg">
                          <p className="font-medium">Étudiants Internationaux</p>
                          <p className="text-sm text-muted-foreground">
                            Formation intensive en français pour poursuivre des études supérieures
                          </p>
                        </div>
                        <div className="p-3 bg-background rounded-lg">
                          <p className="font-medium">Professionnels</p>
                          <p className="text-sm text-muted-foreground">
                            Perfectionnement linguistique pour besoins professionnels
                          </p>
                        </div>
                        <div className="p-3 bg-background rounded-lg">
                          <p className="font-medium">Enseignants</p>
                          <p className="text-sm text-muted-foreground">
                            Formation continue en didactique du FLE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Award className="h-5 w-5 text-accent mr-2" />
                        Programmes et Certifications
                      </h3>
                      <div className="space-y-4">
                        <Card className="border-l-4 border-l-primary">
                          <CardContent className="pt-4">
                            <p className="font-medium">Cours Intensifs de Français</p>
                            <p className="text-sm text-muted-foreground">
                              Niveaux A1 à C2 selon le CECRL
                            </p>
                            <div className="flex space-x-2 mt-2">
                              <Badge variant="outline" className="text-xs">120h</Badge>
                              <Badge variant="outline" className="text-xs">Certificat</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="pt-4">
                            <p className="font-medium">Français sur Objectifs Spécifiques</p>
                            <p className="text-sm text-muted-foreground">
                              Français médical, juridique, commercial, technique
                            </p>
                            <div className="flex space-x-2 mt-2">
                              <Badge variant="outline" className="text-xs">80h</Badge>
                              <Badge variant="outline" className="text-xs">Spécialisé</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-accent">
                          <CardContent className="pt-4">
                            <p className="font-medium">Formation FLE</p>
                            <p className="text-sm text-muted-foreground">
                              Diplôme universitaire d'enseignement du FLE
                            </p>
                            <div className="flex space-x-2 mt-2">
                              <Badge variant="outline" className="text-xs">1 an</Badge>
                              <Badge variant="outline" className="text-xs">Diplôme</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Équipements et Services</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Laboratoire de langues multimédia</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Médiathèque spécialisée en FLE</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Salles de classe équipées</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Plateforme d'apprentissage en ligne</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Centre d'examens certifiés</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-center">Résultats et Performance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary">300+</div>
                      <p className="text-sm text-muted-foreground">Étudiants/an</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">95%</div>
                      <p className="text-sm text-muted-foreground">Taux de réussite</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">20+</div>
                      <p className="text-sm text-muted-foreground">Nationalités</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">15+</div>
                      <p className="text-sm text-muted-foreground">Années d'expérience</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Synergie et Collaboration</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="academic-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Une Collaboration Enrichissante</h3>
                  <p className="text-lg text-muted-foreground">
                    La Chaire UNESCO et le CUEF Abidjan collaborent étroitement avec l'UFR-LLC 
                    pour renforcer l'excellence académique et le rayonnement international.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Domaines de Collaboration :</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Recherche interdisciplinaire</li>
                      <li>• Formation des formateurs</li>
                      <li>• Échanges d'étudiants et d'enseignants</li>
                      <li>• Publications scientifiques communes</li>
                      <li>• Organisation d'événements internationaux</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Bénéfices Mutuels :</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Diversification de l'offre de formation</li>
                      <li>• Renforcement de la visibilité internationale</li>
                      <li>• Accès à des financements spécialisés</li>
                      <li>• Partage d'expertise et de ressources</li>
                      <li>• Contribution au développement durable</li>
                    </ul>
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

export default Structures;