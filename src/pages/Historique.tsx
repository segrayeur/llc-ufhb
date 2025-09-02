import { Calendar, Award, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Historique = () => {
  return (
    <>
      <Helmet>
        <title>Historique | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Histoire de l'UFR des Langues, Littératures et Civilisations. Création, évolution et contribution au développement académique en Côte d'Ivoire." />
        <meta name="keywords" content="historique, histoire, création, évolution, UFR-LLC, développement académique, Côte d'Ivoire" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Notre Historique
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une riche histoire au service de l'excellence académique et du développement 
              des humanités en Afrique de l'Ouest
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Foundation */}
              <Card className="academic-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Création de l'UFR-LLC</CardTitle>
                      <CardDescription className="text-lg">Années 1990</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20 space-y-4">
                  <p className="text-lg">
                    L'UFR des Langues, Littératures et Civilisations naît de la restructuration 
                    de l'enseignement supérieur ivoirien, dans le cadre de la création de 
                    l'Université de Cocody (actuelle Université Félix Houphouët-Boigny).
                  </p>
                  <p>
                    Cette création répond au besoin de former des spécialistes en humanités 
                    capables de contribuer au développement culturel et social de la Côte d'Ivoire 
                    et de l'Afrique de l'Ouest.
                  </p>
                </CardContent>
              </Card>

              {/* Development */}
              <Card className="academic-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Expansion des Programmes</CardTitle>
                      <CardDescription className="text-lg">Années 2000</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20 space-y-4">
                  <p className="text-lg">
                    Développement progressif des départements et diversification de l'offre 
                    de formation avec l'introduction de nouveaux programmes en langues vivantes.
                  </p>
                  <ul className="space-y-2">
                    <li>• Création du département d'Anglais</li>
                    <li>• Développement du département d'Espagnol</li>
                    <li>• Introduction de l'Allemand et du Portugais</li>
                    <li>• Renforcement des Sciences du Langage</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Recognition */}
              <Card className="academic-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Reconnaissance Internationale</CardTitle>
                      <CardDescription className="text-lg">Années 2010</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20 space-y-4">
                  <p className="text-lg">
                    Obtention de la Chaire UNESCO "Culture de la Paix" et développement 
                    de partenariats académiques internationaux.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Réalisations majeures :</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Chaire UNESCO "Culture de la Paix"</li>
                        <li>• Création du CUEF Abidjan</li>
                        <li>• Partenariats avec l'AUF</li>
                        <li>• Conventions internationales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Impact régional :</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Centre de référence en Afrique de l'Ouest</li>
                        <li>• Formation de cadres régionaux</li>
                        <li>• Recherche interculturelle</li>
                        <li>• Promotion du multilinguisme</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Modern Era */}
              <Card className="academic-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Modernisation et Innovation</CardTitle>
                      <CardDescription className="text-lg">Années 2020+</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20 space-y-4">
                  <p className="text-lg">
                    Adaptation aux défis contemporains avec l'intégration des technologies 
                    numériques et le renforcement de la recherche interdisciplinaire.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Innovations pédagogiques :</h4>
                      <p className="text-sm text-muted-foreground">
                        Plateforme numérique d'apprentissage, cours hybrides, 
                        laboratoires de langues modernes
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Recherche avancée :</h4>
                      <p className="text-sm text-muted-foreground">
                        Laboratoires LADYLAD et LITEC, publications internationales, 
                        colloques scientifiques
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Héritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="academic-shadow text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <CardTitle>Années d'Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plus de trois décennies au service de la formation 
                  en humanités et du développement culturel
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <CardTitle>Diplômés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Des milliers de diplômés contribuant au développement 
                  de la Côte d'Ivoire et de l'Afrique
                </p>
              </CardContent>
            </Card>

            <Card className="academic-shadow text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">Regional</div>
                <CardTitle>Rayonnement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Influence et reconnaissance dans toute l'Afrique 
                  de l'Ouest et au-delà
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Future */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Vers l'Avenir</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Forte de son riche passé, l'UFR-LLC continue d'évoluer pour répondre aux défis 
              du 21ème siècle tout en préservant ses valeurs fondamentales d'excellence 
              académique et de service à la société.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Nos priorités :</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Innovation pédagogique continue</li>
                  <li>• Recherche interdisciplinaire</li>
                  <li>• Partenariats internationaux renforcés</li>
                  <li>• Technologies numériques éducatives</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Notre engagement :</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Formation de qualité mondiale</li>
                  <li>• Promotion de la diversité culturelle</li>
                  <li>• Contribution au développement durable</li>
                  <li>• Leadership en humanités africaines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Historique;