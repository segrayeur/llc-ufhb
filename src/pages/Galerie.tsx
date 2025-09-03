import { useState } from "react";
import { Play, Image as ImageIcon, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Helmet } from "react-helmet";

const Galerie = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      src: "/public/lovable-uploads/9db0c164-74a6-4eea-beb5-c5a83c35e359.png",
      title: "Logo UFR-LLC",
      description: "Logo officiel de l'UFR des Langues, Littératures et Civilisations",
      category: "Institutionnel"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      title: "Bâtiment Principal UFR-LLC",
      description: "Vue extérieure du bâtiment principal de l'UFR-LLC",
      category: "Campus"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center",
      title: "Entrée Scolarité Centrale",
      description: "Entrée du bâtiment de la Scolarité Centrale - Section SHS 1 et SHS 2",
      category: "Campus"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&crop=center",
      title: "Bâtiment Pédagogique",
      description: "Façade du bâtiment pédagogique de l'UFR-LLC",
      category: "Infrastructure"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center",
      title: "Université Félix Houphouët-Boigny",
      description: "Entrée principale de l'Université Félix Houphouët-Boigny à Abidjan-Cocody",
      category: "Campus"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop&crop=center",
      title: "Campus Vue d'ensemble",
      description: "Vue panoramique du campus de l'UFR-LLC",
      category: "Campus"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&crop=center",
      title: "Cour Intérieure",
      description: "Espace de détente et de socialisation des étudiants",
      category: "Vie Étudiante"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&h=600&fit=crop&crop=center",
      title: "Bâtiment Académique",
      description: "Bâtiment abritant les salles de cours et bureaux administratifs",
      category: "Infrastructure"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center",
      title: "Salle de Cours Moderne",
      description: "Amphithéâtre équipé de technologies modernes pour l'enseignement",
      category: "Infrastructure"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center",
      title: "Bibliothèque Universitaire",
      description: "Espace de lecture et de recherche pour les étudiants",
      category: "Infrastructure"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center",
      title: "Cérémonie de Remise de Diplômes",
      description: "Cérémonie officielle de remise de diplômes de l'UFR-LLC",
      category: "Événements"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&crop=center",
      title: "Conférence Académique",
      description: "Conférence internationale sur les langues et civilisations",
      category: "Événements"
    }
  ];

  const videos = [
    {
      id: 1,
      src: "/gallery/video1.mp4",
      poster: "/gallery/video1-poster.jpg",
      title: "Présentation de l'UFR-LLC",
      description: "Découvrez notre institution en images",
      duration: "5:30",
      category: "Présentation"
    },
    {
      id: 2,
      src: "/gallery/video2.mp4",
      poster: "/gallery/video2-poster.jpg",
      title: "Journée Portes Ouvertes 2024",
      description: "Retour sur notre journée portes ouvertes",
      duration: "8:15",
      category: "Événements"
    },
    {
      id: 3,
      src: "/gallery/video3.mp4",
      poster: "/gallery/video3-poster.jpg",
      title: "Témoignages d'Étudiants",
      description: "Nos étudiants partagent leur expérience",
      duration: "12:45",
      category: "Témoignages"
    },
    {
      id: 4,
      src: "/gallery/video4.mp4",
      poster: "/gallery/video4-poster.jpg",
      title: "Laboratoire de Recherche",
      description: "Visite guidée de nos laboratoires",
      duration: "6:20",
      category: "Recherche"
    }
  ];

  const categories = ["Tous", "Campus", "Infrastructure", "Événements", "Vie Étudiante", "Institutionnel", "Présentation", "Témoignages", "Recherche"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPhotos = selectedCategory === "Tous" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const filteredVideos = selectedCategory === "Tous" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Galerie - UFR-LLC | Photos et Vidéos</title>
        <meta name="description" content="Découvrez la galerie photos et vidéos de l'UFR des Langues, Littératures et Civilisations. Campus, événements, vie étudiante et moments marquants." />
        <meta name="keywords" content="UFR-LLC, galerie, photos, vidéos, campus, événements, vie étudiante" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-in-up">
              <span className="gradient-text">Galerie</span> UFR-LLC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto zoom-in">
              Découvrez la vie de notre institution à travers nos photos et vidéos
            </p>
            <div className="flex justify-center space-x-4 bounce-in">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <ImageIcon className="mr-2 h-4 w-4" />
                {photos.length} Photos
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Video className="mr-2 h-4 w-4" />
                {videos.length} Vidéos
              </Badge>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="photos" className="text-lg">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="videos" className="text-lg">
                  <Video className="mr-2 h-4 w-4" />
                  Vidéos
                </TabsTrigger>
              </TabsList>

              {/* Photos Tab */}
              <TabsContent value="photos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredPhotos.map((photo, index) => (
                    <Dialog key={photo.id}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover-scale academic-shadow transition-academic group glass-effect border border-primary/20 zoom-in" style={{animationDelay: `${index * 0.1}s`}}>
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-t-lg">
                              <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.src = `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center`;
                                }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <ImageIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-sm mb-1 line-clamp-1">{photo.title}</h3>
                              <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{photo.description}</p>
                              <Badge variant="outline" className="text-xs">{photo.category}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="space-y-4">
                          <img
                            src={photo.src}
                            alt={photo.title}
                            className="w-full h-auto rounded-lg"
                            onError={(e) => {
                              e.currentTarget.src = `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center`;
                            }}
                          />
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                            <p className="text-muted-foreground mb-2">{photo.description}</p>
                            <Badge variant="outline">{photo.category}</Badge>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((video, index) => (
                    <Card key={video.id} className="hover-scale academic-shadow transition-academic group glass-effect border border-primary/20 zoom-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <video
                            className="w-full h-48 object-cover"
                            poster={video.poster}
                            controls
                            onError={(e) => {
                              e.currentTarget.poster = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center`;
                            }}
                          >
                            <source src={video.src} type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture vidéo.
                          </video>
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-black/70 text-white text-xs">
                              {video.duration}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-sm mb-1 line-clamp-1">{video.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{video.description}</p>
                          <div className="flex justify-between items-center">
                            <Badge variant="outline" className="text-xs">{video.category}</Badge>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Partagez vos moments</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vous avez des photos ou vidéos de nos événements ? N'hésitez pas à les partager avec nous !
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Envoyer vos médias
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Galerie;