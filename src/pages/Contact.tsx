import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | UFR-LLC - Université Félix Houphouët-Boigny</title>
        <meta name="description" content="Contactez l'UFR des Langues, Littératures et Civilisations. Adresse, téléphone, email et formulaire de contact. Université de Cocody, Abidjan." />
        <meta name="keywords" content="contact, UFR-LLC, adresse, téléphone, email, Cocody, Abidjan, Université Félix Houphouët-Boigny" />
      </Helmet>

      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions 
              concernant nos formations et nos services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>Adresse</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Université de Cocody (Abidjan)<br />
                    En face de l'École Normale Supérieure (ENS)<br />
                    Côte d'Ivoire
                  </p>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>Téléphones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Standard :</span>
                    <a href="tel:+2250141037291" className="text-primary hover:text-accent">
                      +225 01 41 03 72 91
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Administration :</span>
                    <a href="tel:+2250141035350" className="text-primary hover:text-accent">
                      +225 01 41 03 53 50
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-accent" />
                    <span className="font-medium">WhatsApp :</span>
                    <a href="https://wa.me/2250506854764" className="text-primary hover:text-accent">
                      +225 05 06 85 47 64
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>Emails</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Principal :</span>
                    <a href="mailto:ufrllc@hotmail.com" className="text-primary hover:text-accent">
                      ufrllc@hotmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Alternatif :</span>
                    <a href="mailto:llc.ufr@gmail.com" className="text-primary hover:text-accent">
                      llc.ufr@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="academic-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>Horaires d'ouverture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi :</span>
                      <span className="font-medium">07h30 - 17h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi :</span>
                      <span className="font-medium">08h00 - 12h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche :</span>
                      <span className="text-muted-foreground">Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input id="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input id="lastName" placeholder="Votre nom" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="+225 XX XX XX XX XX" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input id="subject" placeholder="Objet de votre message" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez votre demande..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Directions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment nous trouver</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="academic-shadow">
              <CardHeader>
                <CardTitle>Accès à l'UFR-LLC</CardTitle>
                <CardDescription>
                  Située au cœur du campus universitaire de Cocody
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">En transport public :</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Bus SOTRA : Ligne Adjamé - Cocody</li>
                      <li>• Taxi communal : Arrêt "Université"</li>
                      <li>• Wôrô-wôrô : Direction Cocody Université</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">En véhicule personnel :</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Prendre la voie express de Cocody</li>
                      <li>• Sortie "Université Félix Houphouët-Boigny"</li>
                      <li>• Parking disponible sur le campus</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Point de repère :</strong> L'UFR-LLC se trouve en face de l'École Normale Supérieure (ENS), 
                    dans l'enceinte du campus universitaire de Cocody.
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

export default Contact;