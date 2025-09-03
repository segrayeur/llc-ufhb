import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet";

const ConditionsUtilisation = () => {
  return (
    <>
      <Helmet>
        <title>Conditions d'Utilisation - UFR-LLC</title>
        <meta name="description" content="Conditions d'utilisation du site web de l'UFR des Langues, Littératures et Civilisations" />
        <meta name="keywords" content="UFR-LLC, conditions utilisation, mentions légales, règlement site web" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-in-up">
              <span className="gradient-text">Conditions</span> d'Utilisation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto zoom-in">
              Règles et conditions d'utilisation de notre site web
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              
              {/* Introduction */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Préambule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site web 
                    de l'UFR des Langues, Littératures et Civilisations (UFR-LLC) de l'Université Félix Houphouët-Boigny.
                  </p>
                  <p className="text-muted-foreground">
                    L'accès et l'utilisation de ce site impliquent l'acceptation pleine et entière des présentes conditions. 
                    Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                  </p>
                </CardContent>
              </Card>

              {/* Objet */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Objet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Le présent site a pour objet de fournir des informations sur :
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Les formations et programmes d'études de l'UFR-LLC</li>
                    <li>• Les procédures d'admission et d'inscription</li>
                    <li>• Les activités de recherche et événements</li>
                    <li>• Les services aux étudiants et à la communauté</li>
                    <li>• Les contacts et informations pratiques</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Accès au site */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Accès au Site</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Conditions d'accès</h3>
                  <p className="text-muted-foreground">
                    L'accès au site est gratuit et ouvert à tous les utilisateurs ayant un accès à Internet. 
                    Tous les coûts afférents à l'accès au site sont exclusivement à la charge de l'utilisateur.
                  </p>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-semibold">Disponibilité</h3>
                  <p className="text-muted-foreground">
                    L'UFR-LLC s'efforce de maintenir accessible le site 24h/24 et 7j/7, sauf en cas de force majeure 
                    ou d'événement hors de son contrôle. L'UFR-LLC se réserve le droit d'interrompre, 
                    de suspendre momentanément ou de modifier sans préavis l'accès à tout ou partie du site.
                  </p>
                </CardContent>
              </Card>

              {/* Utilisation du site */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Utilisation du Site</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Usage autorisé</h3>
                  <p className="text-muted-foreground">
                    L'utilisateur s'engage à utiliser le site de manière loyale et conforme à sa destination. 
                    Il est autorisé à :
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Consulter les informations disponibles</li>
                    <li>• Utiliser les services proposés (formulaires, chatbot, etc.)</li>
                    <li>• Télécharger les documents mis à disposition</li>
                    <li>• Contacter l'UFR-LLC via les moyens prévus</li>
                  </ul>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-semibold">Interdictions</h3>
                  <p className="text-muted-foreground">Il est strictement interdit :</p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• D'utiliser le site à des fins illégales ou non autorisées</li>
                    <li>• De porter atteinte à l'intégrité ou à la sécurité du site</li>
                    <li>• De diffuser des contenus illicites, offensants ou contraires aux bonnes mœurs</li>
                    <li>• De reproduire, copier ou vendre tout ou partie du site sans autorisation</li>
                    <li>• D'extraire de manière systématique des données du site</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Propriété intellectuelle */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Propriété Intellectuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    L'ensemble des éléments présents sur ce site (textes, images, logos, vidéos, sons, etc.) 
                    est protégé par les droits de propriété intellectuelle. Ils appartiennent à l'UFR-LLC 
                    ou à ses partenaires.
                  </p>
                  <p className="text-muted-foreground">
                    Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, 
                    par quelque procédé que ce soit, sans autorisation préalable écrite de l'UFR-LLC 
                    est strictement interdite.
                  </p>
                </CardContent>
              </Card>

              {/* Données personnelles */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Données Personnelles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    L'UFR-LLC s'engage à respecter la confidentialité des données personnelles collectées 
                    via ce site. Le traitement de ces données est effectué conformément à notre 
                    <strong> Politique de Confidentialité</strong>.
                  </p>
                  <p className="text-muted-foreground">
                    L'utilisateur dispose d'un droit d'accès, de rectification et de suppression 
                    des données le concernant, qu'il peut exercer en contactant : 
                    <strong> ufrllc@hotmail.com</strong>
                  </p>
                </CardContent>
              </Card>

              {/* Responsabilités */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Responsabilités</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Responsabilité de l'UFR-LLC</h3>
                  <p className="text-muted-foreground">
                    L'UFR-LLC s'efforce de fournir des informations exactes et à jour. Cependant, 
                    elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations 
                    diffusées sur le site.
                  </p>
                  <p className="text-muted-foreground">
                    L'UFR-LLC ne saurait être tenue responsable des dommages directs ou indirects 
                    résultant de l'utilisation du site ou de l'impossibilité de l'utiliser.
                  </p>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-semibold">Responsabilité de l'utilisateur</h3>
                  <p className="text-muted-foreground">
                    L'utilisateur est seul responsable de l'utilisation qu'il fait du site et des 
                    informations qu'il consulte. Il s'engage à respecter les présentes conditions 
                    et la réglementation en vigueur.
                  </p>
                </CardContent>
              </Card>

              {/* Liens externes */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Liens Externes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Le site peut contenir des liens vers d'autres sites web. L'UFR-LLC n'exerce 
                    aucun contrôle sur ces sites et décline toute responsabilité quant à leur 
                    contenu ou leur disponibilité.
                  </p>
                  <p className="text-muted-foreground">
                    L'utilisateur reconnaît que l'UFR-LLC ne saurait être tenue responsable des 
                    dommages résultant de l'utilisation de ces sites externes.
                  </p>
                </CardContent>
              </Card>

              {/* Modifications */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Modifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    L'UFR-LLC se réserve le droit de modifier à tout moment les présentes conditions 
                    d'utilisation. Les modifications entrent en vigueur dès leur publication sur le site.
                  </p>
                  <p className="text-muted-foreground">
                    Il appartient à l'utilisateur de consulter régulièrement les conditions d'utilisation 
                    pour prendre connaissance des éventuelles modifications.
                  </p>
                </CardContent>
              </Card>

              {/* Droit applicable */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Droit Applicable</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Les présentes conditions d'utilisation sont régies par le droit ivoirien. 
                    En cas de litige, les tribunaux d'Abidjan seront seuls compétents.
                  </p>
                  <p className="text-muted-foreground">
                    Si une disposition des présentes conditions est déclarée nulle ou inapplicable, 
                    les autres dispositions conserveront leur pleine force et effet.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pour toute question relative aux présentes conditions d'utilisation :
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>UFR des Langues, Littératures et Civilisations</strong></p>
                    <p>Université Félix Houphouët-Boigny</p>
                    <p>Abidjan - Cocody, Côte d'Ivoire</p>
                    <p>Email : ufrllc@hotmail.com</p>
                    <p>Téléphone : +225 014 103 7291</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConditionsUtilisation;