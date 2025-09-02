import { HelpCircle, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqCategories = [
    {
      title: "Admission & Inscription",
      icon: "🎓",
      questions: [
        {
          id: "admission-1",
          question: "Quelles sont les conditions d'admission en Licence ?",
          answer: "Pour être admis en Licence 1, vous devez être titulaire du baccalauréat (toutes séries). Un test de niveau peut être organisé selon le département choisi. Le dossier de candidature doit être déposé avant la date limite fixée par l'administration."
        },
        {
          id: "admission-2",
          question: "Comment s'inscrire à l'UFR-LLC ?",
          answer: "L'inscription se fait en ligne sur la plateforme officielle de l'université, puis validation au secrétariat avec les pièces originales. Les pièces requises incluent : acte de naissance, diplôme du baccalauréat, photos d'identité, et certificat médical."
        },
        {
          id: "admission-3",
          question: "Quels sont les frais de scolarité ?",
          answer: "Les frais varient selon le niveau d'études : Licence (100 000 FCFA/an), Master (150 000 FCFA/an), Doctorat (200 000 FCFA/an). Des facilités de paiement peuvent être accordées sur demande motivée."
        },
        {
          id: "admission-4",
          question: "Y a-t-il des bourses disponibles ?",
          answer: "Oui, plusieurs types de bourses sont disponibles : bourses d'excellence académique, bourses sociales, bourses de mobilité internationale (AUF, ERASMUS+), et bourses de recherche pour les doctorants."
        }
      ]
    },
    {
      title: "Programmes & Formations",
      icon: "📚",
      questions: [
        {
          id: "programmes-1",
          question: "Quels départements sont disponibles ?",
          answer: "L'UFR-LLC compte 6 départements : Lettres Modernes, Anglais, Espagnol, Allemand, Portugais, et Sciences du Langage. Chaque département propose des formations de la Licence au Doctorat."
        },
        {
          id: "programmes-2",
          question: "Peut-on changer de département en cours d'études ?",
          answer: "Un changement de département est possible sous certaines conditions : avoir validé au moins un semestre, justifier de prérequis linguistiques, et obtenir l'accord des deux départements concernés."
        },
        {
          id: "programmes-3",
          question: "Y a-t-il des cours du soir ou à distance ?",
          answer: "Certains programmes proposent des cours en horaires aménagés pour les professionnels. L'enseignement hybride (présentiel/distanciel) est développé, notamment pour la formation continue."
        },
        {
          id: "programmes-4",
          question: "Quelle est la durée des formations ?",
          answer: "Licence : 3 ans (L1, L2, L3), Master : 2 ans (M1, M2), Doctorat : 3 à 5 ans selon la discipline et l'avancement de la recherche."
        }
      ]
    },
    {
      title: "Vie Étudiante",
      icon: "🎭",
      questions: [
        {
          id: "vie-1",
          question: "Y a-t-il des activités culturelles ?",
          answer: "L'UFR organise régulièrement des événements culturels : Festival des Langues, spectacles théâtraux multilingues, concours d'éloquence, ateliers d'écriture créative, et journées culturelles par département."
        },
        {
          id: "vie-2",
          question: "Existe-t-il des associations étudiantes ?",
          answer: "Plusieurs associations étudiantes sont actives : Association des Étudiants de l'UFR-LLC (AEUFR-LLC), clubs par département, groupe de théâtre universitaire, et cercle de débats multilingues."
        },
        {
          id: "vie-3",
          question: "Y a-t-il un service d'orientation ?",
          answer: "Le service d'orientation accompagne les étudiants dans leur parcours : conseil en orientation, aide à la réorientation, information sur les débouchés professionnels, et organisation du forum des métiers."
        },
        {
          id: "vie-4",
          question: "Peut-on faire un stage à l'étranger ?",
          answer: "Oui, grâce à nos partenariats internationaux, les étudiants peuvent effectuer des stages dans nos universités partenaires en Europe, en Amérique, et en Afrique. Des bourses de mobilité sont disponibles."
        }
      ]
    },
    {
      title: "Partenariats & International",
      icon: "🌍",
      questions: [
        {
          id: "international-1",
          question: "Quels sont les programmes d'échange disponibles ?",
          answer: "Nous proposons : ERASMUS+ avec l'Europe, échanges AUF dans l'espace francophone, programmes bilatéraux avec le Canada, cotutelles de thèse internationales, et stages en entreprises à l'étranger."
        },
        {
          id: "international-2",
          question: "Comment bénéficier d'une bourse de mobilité ?",
          answer: "Il faut : avoir validé au moins une année d'études, présenter un projet académique cohérent, maîtriser la langue du pays d'accueil, et déposer un dossier de candidature complet avant les dates limites."
        },
        {
          id: "international-3",
          question: "L'UFR accueille-t-elle des étudiants étrangers ?",
          answer: "Oui, nous accueillons chaque année des étudiants de toute l'Afrique et d'autres continents. Le CUEF propose des cours de français pour faciliter leur intégration académique."
        },
        {
          id: "international-4",
          question: "Y a-t-il des doubles diplômes ?",
          answer: "Nous proposons des programmes de double diplôme avec l'Université de Montréal (FLE), l'Université de Bordeaux (Littératures francophones), et développons d'autres partenariats similaires."
        }
      ]
    },
    {
      title: "Recherche & Carrières",
      icon: "🔬",
      questions: [
        {
          id: "recherche-1",
          question: "Quels sont les laboratoires de recherche ?",
          answer: "L'UFR-LLC dispose de deux laboratoires : LADYLAD (Laboratoire de Dynamique des Langues, Arts et Littératures) et LITEC (Laboratoire de Littératures, Textes et Civilisations)."
        },
        {
          id: "recherche-2",
          question: "Comment intégrer un programme doctoral ?",
          answer: "Il faut : être titulaire d'un Master 2 Recherche avec mention, présenter un projet de thèse original, trouver un directeur de thèse habilité, et soutenir le projet devant une commission d'admission."
        },
        {
          id: "recherche-3",
          question: "Quels sont les débouchés professionnels ?",
          answer: "Nos diplômés travaillent dans : l'enseignement (secondaire et supérieur), la traduction/interprétariat, les médias et communication, l'administration publique, les organisations internationales, et la recherche."
        },
        {
          id: "recherche-4",
          question: "Y a-t-il un accompagnement à l'insertion professionnelle ?",
          answer: "Oui, nous proposons : stages obligatoires, forum des métiers annuel, ateliers CV et entretiens, réseau d'anciens diplômés, et partenariats avec les entreprises du secteur."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Questions fréquentes sur l'UFR-LLC : admission, inscription, programmes, partenariats, recherche, vie étudiante. Toutes les réponses à vos questions." />
        <meta name="keywords" content="FAQ, questions fréquentes, admission, inscription, programmes, bourses, échanges, UFR-LLC" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trouvez rapidement les réponses à toutes vos questions sur l'admission, 
              les programmes, la vie étudiante et les opportunités internationales
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="academic-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <span className="text-3xl">{category.icon}</span>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.questions.map((faq) => (
                    <Collapsible
                      key={faq.id}
                      open={openItems.includes(faq.id)}
                      onOpenChange={() => toggleItem(faq.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between p-4 h-auto text-left hover:bg-muted"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openItems.includes(faq.id) ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4">
                        <div className="pt-2 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Besoin d'une aide supplémentaire ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si vous ne trouvez pas la réponse à votre question, notre équipe 
              est là pour vous aider.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="academic-shadow">
                <CardHeader className="text-center">
                  <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Accueil Étudiants</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Lundi à Vendredi<br />
                    8h00 - 16h00
                  </p>
                  <Button variant="outline" size="sm">
                    Prendre RDV
                  </Button>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    info@ufr-llc.ci<br />
                    Réponse sous 24h
                  </p>
                  <Button variant="outline" size="sm">
                    Envoyer un email
                  </Button>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <CardTitle>Téléphone</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    +225 01 41 03 72 91<br />
                    Accueil téléphonique
                  </p>
                  <Button variant="outline" size="sm">
                    Appeler
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="academic-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Guides Utiles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <span className="font-medium">Guide de l'Étudiant</span>
                    <span className="text-xs text-muted-foreground">Toutes les infos pratiques</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <span className="font-medium">Procédure d'Inscription</span>
                    <span className="text-xs text-muted-foreground">Étapes détaillées</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <span className="font-medium">Mobilité Internationale</span>
                    <span className="text-xs text-muted-foreground">Programmes d'échange</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <span className="font-medium">Vie sur le Campus</span>
                    <span className="text-xs text-muted-foreground">Services et activités</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Votre question n'est pas listée ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Aidez-nous à améliorer cette FAQ en nous suggérant de nouvelles questions 
              ou en nous faisant part de vos commentaires.
            </p>
            <Button size="lg">
              Suggérer une question
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;