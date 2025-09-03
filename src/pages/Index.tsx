import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AudioTestimonial } from "@/components/AudioTestimonial";
import { DonationButton } from "@/components/DonationButton";
import temoignageMarie from "@/assets/temoignage-marie.jpg";
import temoignageJean from "@/assets/temoignage-jean.jpg";
import temoignageAminata from "@/assets/temoignage-aminata.jpg";
import universityLogo from "@/assets/university-logo-new.png";
import ufrLogo from "@/assets/ufr-logo-new.png";
import { FloatingBubbles } from "@/components/FloatingBubbles";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>UFR-LLC | Accueil - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Bienvenue à l'UFR des Langues, Littératures et Civilisations de l'Université Félix Houphouët-Boigny d'Abidjan. Formation d'excellence en humanités, langues modernes et civilisations." />
        <meta name="keywords" content="UFR-LLC, accueil, université, langues, littératures, civilisations, Abidjan, formation" />
      </Helmet>

      {/* Hero Section Ultra Imposant */}
      <section className="relative h-screen flex items-center justify-center mega-institutional overflow-hidden">
        <FloatingBubbles />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Logo Central Ultra-Spectaculaire */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative mega-float">
            <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-3xl prestigious-card flex items-center justify-center institutional-shadow holographic">
              <div className="text-center text-white">
                <div className="text-9xl lg:text-[14rem] mb-8 filter drop-shadow-2xl neon-text">🏛️</div>
                <h3 className="text-3xl lg:text-5xl font-black gradient-text mb-4">UFR-LLC</h3>
                <div className="h-3 w-40 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
                <div className="mt-6 flex justify-center gap-3">
                  <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-16 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-full opacity-50 blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Titre Principal Ultra-Imposant */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center z-30">
          <h1 className="text-5xl lg:text-9xl font-black text-white mb-6 zoom-in tracking-tight gradient-text neon-text">
            EXCELLENCE LÉGENDAIRE
          </h1>
          <div className="h-2 w-64 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-4 animate-pulse"></div>
          <p className="text-2xl lg:text-4xl text-white/95 font-bold holographic">
            Université Félix Houphouët-Boigny
          </p>
        </div>

        {/* Description Monumentale */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-30 max-w-5xl px-4">
          <p className="text-lg lg:text-2xl text-white/90 mb-8 leading-relaxed prestigious-card p-8 rounded-3xl backdrop-blur-sm institutional-shadow">
            🌟 L'Unité de Formation et de Recherche en Langues, Littératures et Civilisations - 
            Temple du savoir et forge de l'élite intellectuelle depuis 1964
          </p>
        </div>

        {/* Navigation Flottante Ultra-Stable Droite */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
          {[
            { icon: "🎯", action: () => navigate('/mission'), label: "Mission", color: "from-blue-500 to-purple-600" },
            { icon: "👑", action: () => navigate('/equipe'), label: "Équipe", color: "from-purple-500 to-pink-600" },
            { icon: "🏛️", action: () => navigate('/departements'), label: "Départements", color: "from-green-500 to-blue-600" },
            { icon: "💖", action: () => navigate('/dons'), label: "Faire un Don", color: "from-red-500 to-pink-600" },
            { icon: "💎", action: () => navigate('/contact'), label: "Contact", color: "from-yellow-500 to-red-600" },
          ].map((item, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
              <Button
                size="lg"
                className="w-16 h-16 rounded-2xl bg-black/80 hover:bg-black/90 text-white border-2 border-white/60 hover:border-white/80 backdrop-blur-xl transition-all duration-300 text-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                onClick={item.action}
                title={item.label}
              >
                <span className="group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">
                  {item.icon}
                </span>
              </Button>
              {/* Label flottant */}
              <div className="absolute right-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className={`bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap shadow-2xl backdrop-blur-sm`}>
                  {item.label}
                </div>
                <div className={`absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-white`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Flottante Ultra-Stable Gauche */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
          {[
            { icon: "📚", action: () => navigate('/historique'), label: "Histoire", color: "from-indigo-500 to-purple-600" },
            { icon: "🔬", action: () => navigate('/structures'), label: "Recherche", color: "from-teal-500 to-green-600" },
            { icon: "🌍", action: () => navigate('/partenaires'), label: "Partenaires", color: "from-orange-500 to-red-600" },
            { icon: "📰", action: () => navigate('/actualites'), label: "Actualités", color: "from-cyan-500 to-blue-600" },
          ].map((item, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
              <Button
                size="lg"
                className="w-16 h-16 rounded-2xl bg-black/80 hover:bg-black/90 text-white border-2 border-white/60 hover:border-white/80 backdrop-blur-xl transition-all duration-300 text-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                onClick={item.action}
                title={item.label}
              >
                <span className="group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">
                  {item.icon}
                </span>
              </Button>
              {/* Label flottant */}
              <div className="absolute left-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className={`bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap shadow-2xl backdrop-blur-sm`}>
                  {item.label}
                </div>
                <div className={`absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-white`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton d'Action Principal Ultra-Spectaculaire */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
          <Button 
            size="lg" 
            className="modern-button bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 font-black text-xl px-20 py-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] hover:scale-105 transition-all duration-300 border-2 border-white/30"
            onClick={() => navigate('/departements')}
          >
            <span className="relative z-10 flex items-center gap-3">
              ✨ PROGRAMMES D'EXCELLENCE ✨
            </span>
          </Button>
        </div>
      </section>

      {/* Section Départements en Grille Massive */}
      <section className="py-32 institutional-gradient relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 slide-in-up tracking-tight gradient-text">
              NOS DÉPARTEMENTS
            </h2>
            <div className="h-2 w-48 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto zoom-in leading-relaxed">
              Six centres d'excellence pour forger l'élite intellectuelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {[
              {
                icon: "🇬🇧",
                title: "ANGLAIS",
                description: "Maîtrise parfaite de la langue de Shakespeare et excellence littéraire",
                gradient: "from-blue-500 to-blue-700",
                features: ["Littérature", "Civilisation", "Linguistique"]
              },
              {
                icon: "🇩🇪", 
                title: "ALLEMAND",
                description: "Rigueur germanique et tradition intellectuelle européenne",
                gradient: "from-red-500 to-yellow-500",
                features: ["Culture", "Philosophie", "Échanges"]
              },
              {
                icon: "🇪🇸",
                title: "ESPAGNOL",
                description: "Passion hispanique et richesse des cultures ibéro-américaines",
                gradient: "from-red-600 to-orange-500",
                features: ["Civilisation", "Littérature", "Communication"]
              },
              {
                icon: "🇵🇹",
                title: "PORTUGAIS",
                description: "Lusophonie et ouverture sur l'espace atlantique",
                gradient: "from-green-600 to-blue-600",
                features: ["Brésil", "Afrique", "Europe"]
              },
              {
                icon: "📚",
                title: "LETTRES MODERNES",
                description: "Excellence française et patrimoine littéraire universel",
                gradient: "from-purple-600 to-pink-600",
                features: ["Création", "Critique", "Pédagogie"]
              },
              {
                icon: "🧠",
                title: "SCIENCES DU LANGAGE",
                description: "Recherche de pointe et innovation linguistique",
                gradient: "from-teal-500 to-cyan-600",
                features: ["Recherche", "Innovation", "Analyse"]
              }
            ].map((dept, index) => (
              <Card 
                key={index} 
                className="group hover-scale transition-academic cursor-pointer prestigious-card border-2 border-white/30 hover:border-white/50 institutional-shadow hover:elite-glow rotate-in overflow-hidden h-[400px]"
                onClick={() => navigate('/departements')}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-15 group-hover:opacity-25 transition-opacity`}></div>
                <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">
                      {dept.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:gradient-text transition-all">
                      {dept.title}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-6 group-hover:w-28 transition-all"></div>
                    <p className="text-white/85 text-base leading-relaxed mb-6">
                      {dept.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {dept.features.map((feature, i) => (
                      <div key={i} className="text-white/70 text-sm bg-white/10 px-3 py-1 rounded-full inline-block mx-1">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Central */}
          <div className="text-center mt-20">
            <Button 
              size="lg" 
              className="bg-white/90 text-primary hover:bg-white font-black text-xl px-20 py-8 rounded-full elite-glow hover:scale-105 transition-all institutional-shadow"
              onClick={() => navigate('/departements')}
            >
              🏛️ Explorer Tous Nos Départements 🏛️
            </Button>
          </div>
        </div>
      </section>

      {/* Section Statistiques Monumentales */}
      <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-8xl font-black text-foreground mb-8 slide-in-up tracking-tight">
              L'EXCELLENCE 
              <span className="gradient-text block text-7xl lg:text-9xl">EN CHIFFRES</span>
            </h2>
            <div className="h-2 w-48 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto zoom-in leading-relaxed">
              60 années d'excellence académique et de leadership intellectuel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                number: "6", 
                label: "Départements d'Excellence", 
                icon: "🏛️", 
                gradient: "from-primary to-accent",
                description: "Six centres d'excellence académique"
              },
              { 
                number: "3", 
                label: "Niveaux Académiques", 
                icon: "🎓", 
                gradient: "from-accent to-secondary",
                description: "Licence, Master, Doctorat"
              },
              { 
                number: "2", 
                label: "Laboratoires de Recherche", 
                icon: "🔬", 
                gradient: "from-secondary to-primary",
                description: "Innovation et découvertes"
              },
              { 
                number: "1", 
                label: "Chaire UNESCO", 
                icon: "🏆", 
                gradient: "from-primary to-accent",
                description: "Reconnaissance internationale"
              }
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-12 prestigious-card institutional-shadow hover:elite-glow hover-scale group transition-academic overflow-hidden h-[350px]" 
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-15 group-hover:opacity-30 transition-opacity`}></div>
                <CardContent className="p-0 relative z-10 h-full flex flex-col justify-center">
                  <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-8xl font-black text-foreground mb-6 group-hover:gradient-text transition-all">{stat.number}</div>
                  <div className="h-2 w-20 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-6 group-hover:w-28 transition-all"></div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-center gap-2">
                      <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Points forts supplémentaires */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
            <div className="prestigious-slide text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 gradient-text">
                RAYONNEMENT INTERNATIONAL
              </h3>
              <div className="space-y-6">
                {[
                  { icon: "🌍", text: "Partenariats avec 25+ universités mondiales" },
                  { icon: "🎯", text: "Programmes d'excellence académique" },
                  { icon: "👨‍🏫", text: "Corps professoral de renommée internationale" },
                  { icon: "🔬", text: "Recherches révolutionnaires publiées" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6 group" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="text-3xl group-hover:scale-125 transition-transform">{item.icon}</div>
                    <span className="text-foreground text-xl font-medium group-hover:gradient-text transition-all">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="zoom-in text-center">
              <div className="prestigious-card p-12 rounded-3xl institutional-shadow">
                <div className="text-8xl mb-8">🏆</div>
                <h3 className="text-3xl font-bold gradient-text mb-6">DEPUIS 1964</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Six décennies d'excellence académique ininterrompue au service 
                  de la formation des élites intellectuelles africaines et mondiales.
                </p>
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

      {/* Section Contact Monumentale */}
      <section className="py-40 mega-institutional relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl lg:text-9xl font-black text-white mb-12 slide-in-up tracking-tight">
              REJOIGNEZ
              <span className="gradient-text block text-8xl lg:text-10xl">L'ÉLITE</span>
            </h2>
            <div className="h-3 w-64 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full mb-16"></div>
            
            <p className="text-2xl lg:text-4xl text-white/95 mb-20 max-w-5xl mx-auto zoom-in leading-relaxed prestigious-card p-12 rounded-3xl backdrop-blur-sm institutional-shadow">
              🌟 Intégrez l'élite académique de demain. Façonnez l'avenir intellectuel 
              de l'Afrique et du monde entier avec l'UFR-LLC.
            </p>
            
            {/* Boutons d'action principaux */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <Button 
                size="lg" 
                className="bg-white/90 text-primary hover:bg-white font-black text-xl px-8 py-8 rounded-2xl elite-glow hover:scale-105 transition-all institutional-shadow h-24"
                onClick={() => navigate('/departements')}
              >
                🏛️ NOS DÉPARTEMENTS
              </Button>
              <Button 
                size="lg" 
                className="bg-accent/90 text-white hover:bg-accent font-black text-xl px-8 py-8 rounded-2xl elite-glow hover:scale-105 transition-all institutional-shadow h-24"
                onClick={() => navigate('/contact')}
              >
                💎 NOUS CONTACTER
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-white/60 text-white hover:bg-white/20 backdrop-blur-md font-black text-xl px-8 py-8 rounded-2xl hover:scale-105 transition-all h-24"
                onClick={() => navigate('/mission')}
              >
                🎯 NOTRE MISSION
              </Button>
            </div>

            {/* Informations de contact prominentes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="prestigious-card p-8 rounded-2xl institutional-shadow">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">TÉLÉPHONE</h3>
                <p className="text-white/90">+225 014 103 7291</p>
              </div>
              <div className="prestigious-card p-8 rounded-2xl institutional-shadow">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-white mb-2">EMAIL</h3>
                <p className="text-white/90">ufrllc@hotmail.com</p>
              </div>
              <div className="prestigious-card p-8 rounded-2xl institutional-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-2">WHATSAPP</h3>
                <p className="text-white/90">+225 050 685 4764</p>
              </div>
            </div>
            
            <div className="mt-20 flex justify-center gap-8">
              <div className="w-6 h-6 bg-accent rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-6 h-6 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;