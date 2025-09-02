import { BookOpen, GraduationCap, Users, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const Departements = () => {
  const departements = [
    {
      name: "Lettres Modernes",
      description: "Étude de la littérature française et francophone, linguistique française, stylistique et rhétorique.",
      specializations: ["Littérature française", "Littérature africaine", "Linguistique", "Stylistique"],
      icon: BookOpen,
      color: "bg-primary"
    },
    {
      name: "Anglais",
      description: "Formation en langue anglaise, littératures anglophone et américaine, civilisation britannique et américaine.",
      specializations: ["Littérature anglaise", "Littérature américaine", "Civilisation", "Linguistique anglaise"],
      icon: Globe,
      color: "bg-secondary"
    },
    {
      name: "Espagnol",
      description: "Enseignement de la langue espagnole, littératures hispaniques, civilisations ibérique et latino-américaine.",
      specializations: ["Littérature espagnole", "Littérature latino-américaine", "Civilisation hispanique", "Traduction"],
      icon: Globe,
      color: "bg-accent"
    },
    {
      name: "Allemand",
      description: "Formation en langue allemande, littérature et civilisation germaniques, relations interculturelles.",
      specializations: ["Littérature allemande", "Civilisation germanique", "Linguistique allemande", "Traduction"],
      icon: Globe,
      color: "bg-primary"
    },
    {
      name: "Portugais",
      description: "Étude de la langue portugaise, littératures lusophone, civilisations brésilienne et lusitanienne.",
      specializations: ["Littérature brésilienne", "Littérature portugaise", "Civilisation lusophone", "Linguistique"],
      icon: Globe,
      color: "bg-secondary"
    },
    {
      name: "Sciences du Langage",
      description: "Approche scientifique des langues, sociolinguistique, phonétique, morphologie et syntaxe.",
      specializations: ["Sociolinguistique", "Phonétique", "Morpho-syntaxe", "Acquisition du langage"],
      icon: Users,
      color: "bg-accent"
    }
  ];

  const formations = [
    {
      level: "Licence (L1, L2, L3)",
      duration: "3 ans",
      description: "Formation fondamentale dans la discipline choisie avec acquisition des bases théoriques et méthodologiques.",
      objectives: [
        "Maîtrise de la langue d'étude",
        "Connaissances littéraires et culturelles",
        "Méthodes d'analyse textuelle",
        "Expression écrite et orale"
      ]
    },
    {
      level: "Master (M1, M2)",
      duration: "2 ans",
      description: "Spécialisation approfondie avec initiation à la recherche et développement de l'expertise disciplinaire.",
      objectives: [
        "Expertise disciplinaire avancée",
        "Méthodologie de recherche",
        "Analyse critique approfondie",
        "Mémoire de recherche"
      ]
    },
    {
      level: "Doctorat (PhD)",
      duration: "3-5 ans",
      description: "Formation à la recherche de haut niveau avec production d'une thèse originale sous direction.",
      objectives: [
        "Recherche originale",
        "Contribution scientifique",
        "Publications académiques",
        "Enseignement universitaire"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Départements & Programmes | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Découvrez nos 6 départements : Lettres Modernes, Anglais, Espagnol, Allemand, Portugais, Sciences du Langage. Formations Licence, Master, Doctorat." />
        <meta name="keywords" content="départements, programmes, formations, licence, master, doctorat, langues, littératures, UFR-LLC" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Départements & Programmes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six départements d'excellence offrant une formation complète en langues, 
              littératures et civilisations
            </p>
          </div>
        </div>
      </div>

      {/* Départements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Départements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departements.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <Card key={index} className="academic-shadow transition-academic hover:shadow-lg h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 ${dept.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-center">
                      {dept.description}
                    </CardDescription>
                    <div>
                      <p className="font-semibold text-sm mb-2">Spécialisations :</p>
                      <div className="flex flex-wrap gap-2">
                        {dept.specializations.map((spec, specIndex) => (
                          <Badge key={specIndex} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Niveaux de Formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="academic-shadow h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{formation.level}</CardTitle>
                  <CardDescription className="text-lg font-medium text-accent">
                    Durée : {formation.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{formation.description}</p>
                  <div>
                    <p className="font-semibold mb-2">Objectifs :</p>
                    <ul className="space-y-1">
                      {formation.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conditions d'Admission</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-center">Licence (L1)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Baccalauréat toutes séries</li>
                    <li>• Dossier de candidature</li>
                    <li>• Test de niveau (selon le département)</li>
                    <li>• Entretien de motivation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-center">Master (M1)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Licence dans la discipline</li>
                    <li>• Moyenne minimale de 12/20</li>
                    <li>• Projet de recherche</li>
                    <li>• Entretien avec jury</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="text-center">Doctorat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Master 2 Recherche</li>
                    <li>• Projet de thèse détaillé</li>
                    <li>• Directeur de thèse agréé</li>
                    <li>• Soutenance de projet</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Débouchés */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Débouchés Professionnels</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle>Secteur de l'Éducation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Enseignement secondaire et supérieur</li>
                    <li>• Formation linguistique</li>
                    <li>• Conception pédagogique</li>
                    <li>• Administration éducative</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle>Communication & Médias</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Journalisme et édition</li>
                    <li>• Communication d'entreprise</li>
                    <li>• Relations publiques</li>
                    <li>• Médias numériques</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle>Services Linguistiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Traduction et interprétariat</li>
                    <li>• Expertise linguistique</li>
                    <li>• Conseil en communication</li>
                    <li>• Ingénierie linguistique</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle>Culture & Patrimoine</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Gestion culturelle</li>
                    <li>• Animation culturelle</li>
                    <li>• Tourisme culturel</li>
                    <li>• Patrimoine et musées</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Departements;