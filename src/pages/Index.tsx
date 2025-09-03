import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AudioTestimonial } from "@/components/AudioTestimonial";
import temoignageMarie from "@/assets/temoignage-marie.jpg";
import temoignageJean from "@/assets/temoignage-jean.jpg";
import temoignageAminata from "@/assets/temoignage-aminata.jpg";
import universityLogo from "@/assets/university-logo-new.png";
import ufrLogo from "@/assets/ufr-logo-new.png";
import FloatingBubbles from "@/components/FloatingBubbles";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>UFR-LLC | Accueil - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Bienvenue à l'UFR des Langues, Littératures et Civilisations de l'Université Félix Houphouët-Boigny d'Abidjan. Formation d'excellence en humanités, langues modernes et civilisations." />
        <meta name="keywords" content="UFR-LLC, accueil, université, langues, littératures, civilisations, Abidjan, formation" />
      </Helmet>

      {/* Hero Section Spectaculaire */}
      <section className="relative min-h-screen flex items-center justify-center mega-institutional overflow-hidden">
        <FloatingBubbles />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-8 mb-12 prestigious-slide">
                <div className="relative">
                  <img 
                    src={universityLogo} 
                    alt="Logo Université Félix Houphouët-Boigny" 
                    className="h-24 w-24 object-contain hover-scale elite-glow rounded-full p-2"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-lg"></div>
                </div>
                <div className="relative">
                  <img 
                    src={ufrLogo} 
                    alt="Logo UFR-LLC" 
                    className="h-24 w-24 object-contain hover-scale elite-glow rounded-full p-2"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-accent to-primary rounded-full opacity-20 blur-lg"></div>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 zoom-in tracking-tight">
                Bienvenue à l'
                <span className="gradient-text block text-6xl lg:text-8xl font-black">UFR-LLC</span>
              </h1>
              
              <div className="mb-6 rotate-in">
                <p className="text-2xl lg:text-3xl text-white/95 font-semibold mb-2">
                  Université Félix Houphouët-Boigny
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl bounce-in leading-relaxed institutional-shadow bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                🌟 L'Unité de Formation et de Recherche en Langues, Littératures et Civilisations 
                forme l'élite intellectuelle de demain. Excellence académique, innovation pédagogique 
                et rayonnement international depuis 1964.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white/25 hover:bg-white/35 text-white border-2 border-white/40 backdrop-blur-md transition-academic text-lg px-8 py-4 elite-glow font-semibold"
                  onClick={() => navigate('/mission')}
                >
                  ✨ Découvrir notre mission
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 text-white hover:bg-white/15 backdrop-blur-md transition-academic text-lg px-8 py-4 font-semibold"
                  onClick={() => navigate('/departements')}
                >
                  🎓 Nos programmes d'excellence
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative mega-float">
                <div className="w-[450px] h-[450px] rounded-full prestigious-card flex items-center justify-center institutional-shadow">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-6 filter drop-shadow-lg">🏛️</div>
                    <h3 className="text-3xl font-bold mb-4 gradient-text">Excellence Académique</h3>
                    <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-4"></div>
                    <p className="text-white/90 text-xl font-medium">Depuis 1964</p>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-8 bg-gradient-glow rounded-full opacity-30 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards Prestigieuses */}
      <section className="py-24 institutional-gradient relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6 slide-in-up tracking-tight">
              ✨ Accès Privilégié ✨
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-6"></div>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto zoom-in leading-relaxed">
              Découvrez l'excellence de notre institution à travers nos services d'élite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: "🎯",
                title: "Mission & Vision",
                description: "Notre excellence académique et nos ambitions",
                path: "/mission",
                gradient: "from-primary to-accent"
              },
              {
                icon: "👑",
                title: "Notre Élite",
                description: "Nos professeurs et chercheurs d'exception",
                path: "/equipe",
                gradient: "from-accent to-primary"
              },
              {
                icon: "🏛️",
                title: "Départements",
                description: "Nos filières d'excellence internationale",
                path: "/departements",
                gradient: "from-primary to-accent"
              },
              {
                icon: "💎",
                title: "Contact VIP",
                description: "Rejoignez notre communauté d'élite",
                path: "/contact",
                gradient: "from-accent to-primary"
              }
            ].map((card, index) => (
              <Card 
                key={index} 
                className="group hover-scale transition-academic cursor-pointer prestigious-card border-2 border-white/30 hover:border-white/50 institutional-shadow hover:elite-glow rotate-in overflow-hidden"
                onClick={() => navigate(card.path)}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
                    {card.title}
                  </h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-4 group-hover:w-24 transition-all"></div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section Époustouflante */}
      <section className="py-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="prestigious-slide">
              <div className="mb-8">
                <h2 className="text-6xl font-bold text-foreground mb-4 tracking-tight">
                  L'Excellence 
                  <span className="gradient-text block text-7xl font-black">Légendaire</span>
                </h2>
                <div className="h-2 w-40 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
              </div>
              
              <p className="text-2xl text-muted-foreground mb-12 leading-relaxed prestigious-card p-8 rounded-2xl backdrop-blur-sm">
                🏆 Depuis 1964, l'UFR-LLC règne en maître absolu sur l'excellence académique. 
                Temple du savoir et forge de l'élite intellectuelle, notre institution transcende 
                les frontières pour former les leaders de demain dans les domaines des langues, 
                littératures et civilisations.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: "🌍", text: "Rayonnement international d'exception", color: "primary" },
                  { icon: "👨‍🏫", text: "Corps professoral d'élite mondiale", color: "accent" },
                  { icon: "🔬", text: "Recherche révolutionnaire", color: "secondary" },
                  { icon: "🤝", text: "Partenariats prestigieux globaux", color: "primary" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</div>
                    <div className={`w-4 h-4 bg-${item.color} rounded-full group-hover:scale-110 transition-transform elite-glow`}></div>
                    <span className="text-foreground text-xl font-medium group-hover:gradient-text transition-all">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="zoom-in">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "6", label: "Départements d'Excellence", icon: "🏛️", gradient: "from-primary to-accent" },
                  { number: "3", label: "Niveaux Académiques", icon: "🎓", gradient: "from-accent to-secondary" },
                  { number: "2", label: "Laboratoires de Recherche", icon: "🔬", gradient: "from-secondary to-primary" },
                  { number: "1", label: "Chaire UNESCO", icon: "🏆", gradient: "from-primary to-accent" }
                ].map((stat, index) => (
                  <Card key={index} className={`text-center p-8 prestigious-card institutional-shadow hover:elite-glow hover-scale group transition-academic overflow-hidden`} style={{animationDelay: `${index * 0.1}s`}}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 group-hover:opacity-25 transition-opacity`}></div>
                    <CardContent className="p-0 relative z-10">
                      <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{stat.icon}</div>
                      <div className="text-5xl font-black text-foreground mb-3 group-hover:gradient-text transition-all">{stat.number}</div>
                      <div className="h-1 w-12 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-3 group-hover:w-16 transition-all"></div>
                      <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex justify-center gap-1">
                          <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Audio Section Somptueuse */}
      <section className="py-24 institutional-gradient relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6 gradient-text tracking-tight">
              🎙️ Témoignages d'Excellence 🎙️
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-6"></div>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Écoutez les voix de nos diplômés d'exception
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                image: temoignageMarie,
                name: "Dr. Marie Kouassi",
                title: "Diplômée en Littérature Anglaise",
                text: "Mon parcours à l'UFR-LLC m'a permis d'acquérir une expertise exceptionnelle en littérature anglaise. Les professeurs sont d'un niveau remarquable et l'environnement académique est très stimulant. Je recommande vivement cette formation à tous ceux qui souhaitent exceller dans les humanités.",
                voice: "Sarah",
                gradient: "from-primary to-accent"
              },
              {
                image: temoignageJean,
                name: "Prof. Jean Bakayoko", 
                title: "Ancien étudiant en Allemand",
                text: "L'excellence académique de l'UFR-LLC est reconnue internationalement. Grâce à ma formation en allemand ici, j'ai pu développer mes compétences linguistiques et culturelles. Aujourd'hui professeur, je peux témoigner de la qualité exceptionnelle de cette institution.",
                voice: "George",
                gradient: "from-accent to-secondary"
              },
              {
                image: temoignageAminata,
                name: "Dr. Aminata Traoré",
                title: "Chercheuse en Sciences du Langage", 
                text: "Les opportunités de recherche offertes à l'UFR-LLC sont extraordinaires. En sciences du langage, j'ai bénéficié d'un encadrement de qualité et d'un accès à des ressources remarquables. Cette formation m'a préparée excellemment à ma carrière de chercheuse.",
                voice: "Laura",
                gradient: "from-secondary to-primary"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="prestigious-card border-2 border-white/30 hover:border-white/50 institutional-shadow hover:elite-glow hover-scale group transition-academic overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/30 group-hover:border-white/50 transition-all">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-glow rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {testimonial.name}
                  </h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-3 group-hover:w-20 transition-all"></div>
                  <p className="text-white/80 text-lg mb-6 font-medium">
                    {testimonial.title}
                  </p>
                  
                  <AudioTestimonial 
                    text={testimonial.text}
                    voice={testimonial.voice as any}
                    className="mb-6"
                  />
                  
                  <p className="text-white/70 text-sm leading-relaxed italic">
                    "{testimonial.text.substring(0, 80)}..."
                  </p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Majestueux */}
      <section className="py-32 mega-institutional relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 slide-in-up tracking-tight">
              Rejoignez l'
              <span className="gradient-text block text-7xl lg:text-8xl">Élite UFR-LLC</span>
            </h2>
            <div className="h-2 w-48 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full mb-12"></div>
            
            <p className="text-2xl lg:text-3xl text-white/95 mb-16 max-w-4xl mx-auto zoom-in leading-relaxed prestigious-card p-10 rounded-3xl backdrop-blur-sm">
              🌟 Intégrez l'élite académique et devenez un leader de demain. 
              Contribuez à l'excellence légendaire de l'enseignement supérieur 
              et façonnez l'avenir intellectuel de l'Afrique.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center rotate-in">
              <Button 
                size="lg" 
                className="bg-white/90 text-primary hover:bg-white font-bold text-xl px-12 py-6 rounded-2xl elite-glow hover:scale-105 transition-all institutional-shadow"
                onClick={() => navigate('/departements')}
              >
                ✨ Découvrir nos programmes d'excellence
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-white/60 text-white hover:bg-white/20 backdrop-blur-md font-bold text-xl px-12 py-6 rounded-2xl hover:scale-105 transition-all"
                onClick={() => navigate('/contact')}
              >
                💎 Rejoignez l'élite
              </Button>
            </div>
            
            <div className="mt-16 flex justify-center gap-6">
              <div className="w-4 h-4 bg-accent rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;