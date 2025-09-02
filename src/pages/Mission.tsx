import { Target, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Mission = () => {
  return (
    <>
      <Helmet>
        <title>Mission & Vision | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Découvrez la mission, vision et valeurs de l'UFR des Langues, Littératures et Civilisations. Excellence académique, innovation et culture de paix." />
        <meta name="keywords" content="mission, vision, valeurs, UFR-LLC, excellence académique, innovation, culture de paix" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              L'UFR-LLC s'engage pour l'excellence académique et le développement 
              des humanités au service de la société
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Notre Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-center font-medium text-primary">
                  Former des spécialistes en langues, littératures et civilisations 
                  capables de répondre aux défis culturels, sociaux et économiques
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Dispenser une formation de qualité internationale en langues vivantes et littératures</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Développer la recherche scientifique en sciences humaines et sociales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Promouvoir le dialogue interculturel et le multilinguisme</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Contribuer au développement socio-économique de la Côte d'Ivoire et de l'Afrique</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Notre Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-center font-medium text-primary">
                  Être un pôle d'excellence académique et scientifique 
                  en Afrique de l'Ouest
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Devenir une référence internationale en formation humaniste</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Être reconnu pour l'innovation pédagogique et la recherche de pointe</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Rayonner au niveau continental et international</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Former les leaders culturels et intellectuels de demain</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center academic-shadow transition-academic hover:shadow-lg">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Excellence Académique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous visons l'excellence dans tous nos programmes de formation 
                  et nos activités de recherche
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center academic-shadow transition-academic hover:shadow-lg">
              <CardHeader>
                <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Ouverture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous cultivons l'ouverture d'esprit, le dialogue interculturel 
                  et les partenariats internationaux
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center academic-shadow transition-academic hover:shadow-lg">
              <CardHeader>
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous encourageons l'innovation pédagogique et méthodologique 
                  pour une formation moderne
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center academic-shadow transition-academic hover:shadow-lg">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Culture de Paix</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous promouvons la culture de paix, la tolérance 
                  et le vivre-ensemble harmonieux
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Notre Engagement</h2>
            <p className="text-lg text-muted-foreground mb-8">
              L'UFR-LLC s'engage à former des diplômés capables de contribuer au développement 
              durable, à la promotion de la diversité culturelle et à la construction d'un monde 
              plus juste et plus solidaire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Engagement qualité</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">360°</div>
                <div className="text-muted-foreground">Formation complète</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <div className="text-muted-foreground">Possibilités d'avenir</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;