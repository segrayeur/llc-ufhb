import { Shield, Eye, Lock, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Mentions légales du site web de l'UFR des Langues, Littératures et Civilisations. Éditeur, responsabilité, propriété intellectuelle, données personnelles." />
        <meta name="keywords" content="mentions légales, éditeur, responsabilité, propriété intellectuelle, RGPD, données personnelles, UFR-LLC" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Informations légales et conditions d'utilisation du site web 
              de l'UFR des Langues, Littératures et Civilisations
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Éditeur */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Éditeur du Site</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">UFR des Langues, Littératures et Civilisations (UFR-LLC)</p>
                  <p>Université Félix Houphouët-Boigny</p>
                  <p>BP V 34 Abidjan</p>
                  <p>Côte d'Ivoire</p>
                </div>
                <div>
                  <p className="font-semibold">Responsable de la publication :</p>
                  <p>Le Doyen de l'UFR-LLC</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-accent" />
                    <span>+225 01 41 03 72 91</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>ufrllc@hotmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle>Hébergement et Développement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Hébergeur :</p>
                  <p>Services informatiques de l'Université Félix Houphouët-Boigny</p>
                  <p>Abidjan, Côte d'Ivoire</p>
                </div>
                <div>
                  <p className="font-semibold">Développement technique :</p>
                  <p>Service Communication et Informatique de l'UFR-LLC</p>
                </div>
              </CardContent>
            </Card>

            {/* Propriété Intellectuelle */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-primary" />
                  <span>Propriété Intellectuelle</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Droits d'auteur :</p>
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) 
                    est protégé par le droit d'auteur et appartient à l'UFR-LLC ou à ses partenaires. 
                    Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Marques et logos :</p>
                  <p>
                    Les marques, logos et dénominations de l'UFR-LLC et de l'Université Félix Houphouët-Boigny 
                    sont des marques déposées. Leur utilisation sans autorisation constitue une contrefaçon 
                    passible de sanctions civiles et pénales.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Utilisation autorisée :</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Consultation personnelle et privée</li>
                    <li>Citation avec mention de la source</li>
                    <li>Liens hypertextes vers le site (avec accord préalable pour la page d'accueil)</li>
                    <li>Utilisation pédagogique dans le cadre de l'enseignement supérieur</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle>Responsabilité et Limitation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Exactitude des informations :</p>
                  <p>
                    L'UFR-LLC s'efforce de maintenir l'exactitude et la mise à jour des informations 
                    diffusées sur ce site. Cependant, elle ne peut garantir l'exactitude, la complétude 
                    ou l'actualité de ces informations.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Limitation de responsabilité :</p>
                  <p>
                    L'UFR-LLC ne saurait être tenue responsable des dommages directs ou indirects 
                    résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Liens externes :</p>
                  <p>
                    Les liens vers des sites externes sont fournis à titre informatif. L'UFR-LLC 
                    n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant 
                    à leur contenu.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Protection des Données */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-primary" />
                  <span>Protection des Données Personnelles</span>
                </CardTitle>
                <CardDescription>
                  Conformément à la réglementation sur la protection des données personnelles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Responsable du traitement :</p>
                  <p>UFR des Langues, Littératures et Civilisations</p>
                  <p>Représentée par son Doyen</p>
                </div>
                <div>
                  <p className="font-semibold">Données collectées :</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Données d'inscription (nom, prénom, email, téléphone)</li>
                    <li>Données de navigation (adresse IP, cookies techniques)</li>
                    <li>Données académiques (parcours, résultats, avec consentement)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Finalités du traitement :</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Gestion des inscriptions et de la scolarité</li>
                    <li>Communication institutionnelle</li>
                    <li>Amélioration des services proposés</li>
                    <li>Statistiques anonymisées</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Conservation des données :</p>
                  <p>
                    Les données personnelles sont conservées pendant la durée nécessaire aux finalités 
                    pour lesquelles elles ont été collectées, conformément aux obligations légales 
                    et réglementaires.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Vos droits :</p>
                  <p>
                    Conformément à la réglementation, vous disposez des droits d'accès, de rectification, 
                    d'effacement, de portabilité, de limitation du traitement et d'opposition. 
                    Pour exercer ces droits, contactez-nous à : 
                    <a href="mailto:dpo@ufr-llc.ci" className="text-primary hover:text-accent ml-1">
                      dpo@ufr-llc.ci
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle>Politique des Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Cookies utilisés :</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                    <li><strong>Cookies de préférences :</strong> Mémorisation de vos choix linguistiques</li>
                    <li><strong>Cookies statistiques :</strong> Mesure d'audience (anonymisés)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Gestion des cookies :</p>
                  <p>
                    Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être alerté 
                    de leur présence. La désactivation des cookies peut affecter le fonctionnement du site.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit Applicable */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle>Droit Applicable et Juridiction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Droit applicable :</p>
                  <p>
                    Les présentes mentions légales sont régies par le droit ivoirien. 
                    Toute contestation sera soumise aux tribunaux compétents d'Abidjan.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Règlement des litiges :</p>
                  <p>
                    En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. 
                    À défaut d'accord, les tribunaux d'Abidjan seront seuls compétents.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact et Mise à Jour */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle>Contact et Mise à Jour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Contact pour questions légales :</p>
                  <p>
                    Pour toute question relative aux présentes mentions légales ou à la protection 
                    des données personnelles :
                  </p>
                  <div className="mt-2">
                    <p>Email : <a href="mailto:legal@ufr-llc.ci" className="text-primary hover:text-accent">legal@ufr-llc.ci</a></p>
                    <p>Téléphone : +225 01 41 03 72 91</p>
                    <p>Courrier : UFR-LLC, BP V 34 Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Mise à jour :</p>
                  <p>
                    Les présentes mentions légales peuvent être modifiées à tout moment. 
                    La version en vigueur est celle accessible sur le site web.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Dernière mise à jour : Octobre 2024
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
};

export default MentionsLegales;