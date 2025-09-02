import { Calendar, Users, BookOpen, Award, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Actualites = () => {
  const actualites = [
    {
      id: 1,
      title: "Rentrée Académique 2024-2025",
      date: "15 octobre 2024",
      category: "Académique",
      description: "Cérémonie officielle d'ouverture de l'année académique avec présentation des nouveaux programmes et accueil des étudiants internationaux.",
      image: "🎓",
      badge: "Nouveau",
      type: "academic"
    },
    {
      id: 2,
      title: "Colloque International sur le Multilinguisme",
      date: "5-7 novembre 2024",
      category: "Recherche",
      description: "3ème édition du colloque international 'Langues en Contact : Défis et Opportunités en Afrique de l'Ouest' avec 150 participants de 20 pays.",
      image: "🌍",
      badge: "À venir",
      type: "research"
    },
    {
      id: 3,
      title: "Soutenance de Thèse en Littérature Africaine",
      date: "28 octobre 2024",
      category: "Soutenance",
      description: "Soutenance publique de Mme KONE Mariam sur 'Représentations de la femme dans le roman ivoirien contemporain' sous la direction du Prof. DIABATE.",
      image: "📚",
      badge: "Soutenance",
      type: "academic"
    },
    {
      id: 4,
      title: "Prix UNESCO pour la Culture de Paix",
      date: "12 octobre 2024",
      category: "Distinction",
      description: "La Chaire UNESCO 'Culture de la Paix' de l'UFR-LLC reçoit une mention spéciale pour ses actions en faveur du dialogue interculturel.",
      image: "🏆",
      badge: "Prix",
      type: "award"
    },
    {
      id: 5,
      title: "Nouveau Partenariat avec l'Université de Montréal",
      date: "20 septembre 2024",
      category: "Partenariat",
      description: "Signature d'un accord de coopération académique incluant des échanges d'étudiants et un programme de double diplôme en FLE.",
      image: "🤝",
      badge: "Partenariat",
      type: "partnership"
    },
    {
      id: 6,
      title: "Festival des Langues et Cultures",
      date: "15-17 novembre 2024",
      category: "Culturel",
      description: "Événement annuel célébrant la diversité linguistique et culturelle avec spectacles, expositions et ateliers pour le grand public.",
      image: "🎭",
      badge: "Festival",
      type: "cultural"
    }
  ];

  const galerie = [
    {
      title: "Cérémonie de Remise des Diplômes 2024",
      date: "Juillet 2024",
      description: "Plus de 300 diplômés célébrés lors de la cérémonie annuelle en présence des autorités universitaires.",
      image: "🎓"
    },
    {
      title: "Journée Portes Ouvertes",
      date: "Mars 2024",
      description: "Découverte des formations et rencontres avec les équipes pédagogiques pour les futurs étudiants.",
      image: "🏛️"
    },
    {
      title: "Conférence Magistrale Prof. Achille MBEMBE",
      date: "Février 2024",
      description: "Conférence exceptionnelle sur 'L'Afrique et les Humanités Digitales' devant un amphithéâtre comble.",
      image: "🎤"
    },
    {
      title: "Atelier d'Écriture Créative",
      date: "Janvier 2024",
      description: "Session intensive d'écriture créative animée par des auteurs ivoiriens reconnus.",
      image: "✍️"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Actualités & Galerie | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Découvrez les dernières actualités de l'UFR-LLC : rentrée académique, colloques, soutenances, événements culturels et galerie photos." />
        <meta name="keywords" content="actualités, nouvelles, événements, colloques, soutenances, rentrée, galerie, UFR-LLC" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Actualités & Galerie
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Suivez l'actualité de l'UFR-LLC et découvrez nos événements, 
              réalisations et moments forts
            </p>
          </div>
        </div>
      </div>

      {/* Actualités Récentes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Actualités Récentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actualites.map((actualite) => (
              <Card key={actualite.id} className="academic-shadow transition-academic hover:shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{actualite.image}</div>
                    <Badge 
                      variant={actualite.type === 'award' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {actualite.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{actualite.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{actualite.date}</span>
                    <span>•</span>
                    <span>{actualite.category}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                    {actualite.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Académiques */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informations Académiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Calendrier Académique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span className="text-sm font-medium">Rentrée 2024-2025</span>
                    <Badge variant="outline">15 Oct</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span className="text-sm font-medium">Examens S1</span>
                    <Badge variant="outline">Jan 2025</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span className="text-sm font-medium">Congés semestriels</span>
                    <Badge variant="outline">Fév 2025</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span className="text-sm font-medium">Examens S2</span>
                    <Badge variant="outline">Juin 2025</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Calendrier complet
                </Button>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Examens & Soutenances</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-background rounded">
                    <p className="font-medium text-sm">Soutenance de Thèse</p>
                    <p className="text-xs text-muted-foreground">28 Oct - Littérature Africaine</p>
                  </div>
                  <div className="p-3 bg-background rounded">
                    <p className="font-medium text-sm">Examens L3</p>
                    <p className="text-xs text-muted-foreground">15-30 Nov - Tous départements</p>
                  </div>
                  <div className="p-3 bg-background rounded">
                    <p className="font-medium text-sm">Soutenances M2</p>
                    <p className="text-xs text-muted-foreground">Déc 2024 - Master Recherche</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Planning détaillé
                </Button>
              </CardContent>
            </Card>

            <Card className="academic-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Événements Étudiants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-background rounded">
                    <p className="font-medium text-sm">Accueil Nouveaux Étudiants</p>
                    <p className="text-xs text-muted-foreground">20 Oct - Amphithéâtre</p>
                  </div>
                  <div className="p-3 bg-background rounded">
                    <p className="font-medium text-sm">Forum des Métiers</p>
                    <p className="text-xs text-muted-foreground">25 Nov - Orientation</p>
                  </div>
                  <div className="p-3 bg-background rounded">
                    <p className="font-medium text-sm">Concours d'Éloquence</p>
                    <p className="text-xs text-muted-foreground">10 Déc - Multilingue</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Tous les événements
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galerie Photos/Vidéos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galerie.map((item, index) => (
              <Card key={index} className="academic-shadow transition-academic hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{item.date}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Voir les photos
                    </Button>
                    <Button variant="ghost" size="sm">
                      Vidéo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">
              Accéder à la galerie complète
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Restez Informé</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
              et ne manquer aucun événement important de l'UFR-LLC.
            </p>
            <Card className="academic-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="px-8">
                    S'abonner
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Nous respectons votre vie privée. Désabonnement possible à tout moment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Actualites;