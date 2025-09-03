import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Euro, Users, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Dons = () => {
  const [formData, setFormData] = useState({
    donor_name: '',
    donor_email: '',
    donor_phone: '',
    amount: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const suggestedAmounts = [5000, 10000, 25000, 50000, 100000];

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({ ...prev, amount: amount.toString() }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.donor_name || !formData.donor_email || !formData.amount) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    const amount = parseInt(formData.amount);
    if (amount < 100) {
      toast({
        title: "Erreur", 
        description: "Le montant minimum est de 100 FCFA",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-donation', {
        body: {
          donor_name: formData.donor_name,
          donor_email: formData.donor_email,
          donor_phone: formData.donor_phone,
          amount: amount,
          message: formData.message
        }
      });

      if (error) {
        throw error;
      }

      if (data.success) {
        // Rediriger vers Paystack dans un nouvel onglet
        window.open(data.payment_url, '_blank');
        
        toast({
          title: "Redirection vers Paystack",
          description: "Vous allez être redirigé vers la page de paiement",
        });
      } else {
        throw new Error(data.error || 'Erreur lors de l\'initialisation du paiement');
      }

    } catch (error: any) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: (error?.message || "Une erreur est survenue lors de l'initialisation du paiement"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Faire un Don - UFR-LLC | Soutenez l'Éducation</title>
        <meta name="description" content="Soutenez l'UFR des Langues, Littératures et Civilisations en faisant un don. Votre contribution aide à financer la recherche, les bourses étudiantes et l'amélioration des infrastructures." />
        <meta name="keywords" content="don, UFR-LLC, soutien, éducation, bourse, recherche, université" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-white animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-in-up">
              <span className="gradient-text">Soutenez</span> l'UFR-LLC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto zoom-in">
              Votre don contribue au développement de l'enseignement supérieur en langues et littératures
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Votre Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-effect border border-primary/20 hover-scale">
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Recherche Académique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Financement des projets de recherche en langues et civilisations
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border border-primary/20 hover-scale">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Bourses Étudiantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Aide financière pour les étudiants en difficulté économique
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border border-primary/20 hover-scale">
                <CardHeader className="text-center">
                  <Euro className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Amélioration des équipements et des espaces d'apprentissage
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="glass-effect border border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Faire un Don</CardTitle>
                <CardDescription className="text-center">
                  Votre générosité fait la différence dans la vie de nos étudiants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Montants suggérés */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Montant suggéré (FCFA)</Label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                      {suggestedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={formData.amount === amount.toString() ? "default" : "outline"}
                          onClick={() => handleAmountSelect(amount)}
                          className="text-sm"
                        >
                          {amount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Montant personnalisé */}
                  <div>
                    <Label htmlFor="amount">Montant personnalisé (FCFA) *</Label>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      min="100"
                      placeholder="Entrez votre montant"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Informations du donateur */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donor_name">Nom complet *</Label>
                      <Input
                        id="donor_name"
                        name="donor_name"
                        placeholder="Votre nom complet"
                        value={formData.donor_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="donor_email">Email *</Label>
                      <Input
                        id="donor_email"
                        name="donor_email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.donor_email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="donor_phone">Téléphone (optionnel)</Label>
                    <Input
                      id="donor_phone"
                      name="donor_phone"
                      placeholder="+225 XX XX XX XX XX"
                      value={formData.donor_phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Message optionnel */}
                  <div>
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Laissez un message de soutien..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  {/* Bouton de soumission */}
                  <Button
                    type="submit"
                    className="w-full text-lg py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Redirection en cours..."
                    ) : (
                      <>
                        <Heart className="mr-2 h-5 w-5" />
                        Faire un don avec Paystack
                      </>
                    )}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Paiement sécurisé via Paystack</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge variant="outline">Visa</Badge>
                      <Badge variant="outline">Mastercard</Badge>
                      <Badge variant="outline">Mobile Money</Badge>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Chaque Contribution Compte</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté de donateurs et aidez-nous à former la prochaine génération de leaders en langues et littératures.
            </p>
            <div className="flex justify-center">
              <Badge className="text-lg px-6 py-2">
                Merci pour votre générosité ! 🙏
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dons;