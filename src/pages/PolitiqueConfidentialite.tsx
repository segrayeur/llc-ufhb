import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - UFR-LLC</title>
        <meta name="description" content="Politique de confidentialité de l'UFR des Langues, Littératures et Civilisations - Protection des données personnelles" />
        <meta name="keywords" content="UFR-LLC, politique confidentialité, données personnelles, RGPD, protection vie privée" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-in-up">
              <span className="gradient-text">Politique</span> de Confidentialité
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto zoom-in">
              Protection et respect de vos données personnelles
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
                  <CardTitle className="text-2xl text-primary">Introduction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    L'UFR des Langues, Littératures et Civilisations (UFR-LLC) de l'Université Félix Houphouët-Boigny 
                    s'engage à protéger la confidentialité et la sécurité des informations personnelles de ses utilisateurs, 
                    étudiants, personnel et visiteurs de son site web.
                  </p>
                  <p className="text-muted-foreground">
                    Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et 
                    protégeons vos informations personnelles conformément à la réglementation en vigueur.
                  </p>
                </CardContent>
              </Card>

              {/* Collecte de données */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Collecte des Données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Données collectées</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Informations d'identification : nom, prénoms, date de naissance</li>
                    <li>• Coordonnées : adresse email, numéro de téléphone, adresse postale</li>
                    <li>• Informations académiques : niveau d'études, formations suivies, résultats</li>
                    <li>• Données de navigation : adresse IP, cookies, données de session</li>
                    <li>• Correspondances : emails, messages via le chatbot ou formulaires de contact</li>
                  </ul>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-semibold">Moyens de collecte</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Formulaires d'inscription et de candidature</li>
                    <li>• Navigation sur notre site web</li>
                    <li>• Interactions avec notre assistant virtuel</li>
                    <li>• Communications par email ou téléphone</li>
                    <li>• Participation à nos événements</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Utilisation des données */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Utilisation des Données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Nous utilisons vos données personnelles pour :</p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Gérer les inscriptions et admissions</li>
                    <li>• Assurer le suivi pédagogique des étudiants</li>
                    <li>• Communiquer des informations importantes</li>
                    <li>• Améliorer nos services et notre site web</li>
                    <li>• Répondre à vos demandes d'information</li>
                    <li>• Organiser des événements et activités</li>
                    <li>• Respecter nos obligations légales et réglementaires</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Partage des données */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Partage des Données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, 
                    sauf dans les cas suivants :
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Avec votre consentement explicite</li>
                    <li>• Pour répondre à des obligations légales</li>
                    <li>• Avec des prestataires de services nécessaires au fonctionnement (hébergement, maintenance)</li>
                    <li>• Avec d'autres institutions académiques dans le cadre de partenariats</li>
                    <li>• En cas de transfert ou cession d'activité</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sécurité */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Sécurité des Données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
                    vos données personnelles contre :
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• L'accès non autorisé</li>
                    <li>• La modification, la divulgation ou la destruction</li>
                    <li>• La perte accidentelle</li>
                    <li>• Les cyberattaques</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Ces mesures incluent le chiffrement des données, l'authentification sécurisée, 
                    la sauvegarde régulière et la formation du personnel.
                  </p>
                </CardContent>
              </Card>

              {/* Droits des utilisateurs */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Vos Droits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Vous disposez des droits suivants concernant vos données personnelles :</p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Droit d'accès</strong> : connaître les données que nous détenons sur vous</li>
                    <li>• <strong>Droit de rectification</strong> : corriger les données inexactes</li>
                    <li>• <strong>Droit d'effacement</strong> : demander la suppression de vos données</li>
                    <li>• <strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
                    <li>• <strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                    <li>• <strong>Droit à la limitation</strong> : limiter l'utilisation de vos données</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Pour exercer ces droits, contactez-nous à : <strong>ufrllc@hotmail.com</strong>
                  </p>
                </CardContent>
              </Card>

              {/* Conservation */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Conservation des Données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Nous conservons vos données personnelles :</p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Pendant la durée de votre relation avec l'UFR-LLC</li>
                    <li>• Pour la durée nécessaire aux finalités poursuivies</li>
                    <li>• Conformément aux obligations légales de conservation</li>
                    <li>• Les données académiques : 50 ans minimum</li>
                    <li>• Les données de contact : 3 ans après la fin de la relation</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>UFR des Langues, Littératures et Civilisations</strong></p>
                    <p>Université Félix Houphouët-Boigny</p>
                    <p>Abidjan - Cocody, Côte d'Ivoire</p>
                    <p>Email : ufrllc@hotmail.com</p>
                    <p>Téléphone : +225 014 103 7291</p>
                  </div>
                </CardContent>
              </Card>

              {/* Mise à jour */}
              <Card className="glass-effect border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Mise à Jour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cette politique de confidentialité peut être mise à jour périodiquement. 
                    La date de dernière modification est indiquée ci-dessous. Nous vous encourageons 
                    à consulter régulièrement cette page.
                  </p>
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

export default PolitiqueConfidentialite;