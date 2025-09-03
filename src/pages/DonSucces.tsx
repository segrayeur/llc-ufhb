import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Home, Share2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const DonSucces = () => {
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [donationData, setDonationData] = useState<any>(null);
  const { toast } = useToast();

  const reference = searchParams.get('reference');
  const trxref = searchParams.get('trxref');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference && !trxref) {
        setIsVerifying(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('verify-donation', {
          body: { reference: reference || trxref }
        });

        if (error) {
          throw error;
        }

        if (data.success) {
          setDonationData(data);
          if (data.payment_status === 'completed') {
            toast({
              title: "Paiement confirmé !",
              description: "Votre don a été traité avec succès",
            });
          }
        }
      } catch (error) {
        console.error('Erreur de vérification:', error);
        toast({
          title: "Erreur",
          description: "Impossible de vérifier le paiement",
          variant: "destructive",
        });
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [reference, trxref, toast]);

  const shareMessage = () => {
    const message = "Je viens de faire un don à l'UFR des Langues, Littératures et Civilisations ! 💚 Soutenez l'éducation supérieure en Côte d'Ivoire.";
    if (navigator.share) {
      navigator.share({
        title: 'Don UFR-LLC',
        text: message,
        url: window.location.origin
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      navigator.clipboard.writeText(`${message} ${window.location.origin}`);
      toast({
        title: "Lien copié !",
        description: "Le message a été copié dans votre presse-papiers",
      });
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-center text-muted-foreground">Vérification du paiement...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Don Confirmé - UFR-LLC | Merci pour votre Générosité</title>
        <meta name="description" content="Votre don a été confirmé avec succès. Merci de soutenir l'UFR des Langues, Littératures et Civilisations." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-white animate-bounce" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-in-up">
              <span className="gradient-text">Merci</span> pour votre Don !
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto zoom-in">
              Votre générosité contribue à l'excellence de l'enseignement supérieur
            </p>
          </div>
        </section>

        {/* Confirmation Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            {donationData && donationData.payment_status === 'completed' ? (
              <Card className="glass-effect border border-green-200 bg-green-50/50">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-800">Paiement Confirmé</CardTitle>
                  <CardDescription>
                    Votre don a été traité avec succès
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Montant :</span>
                      <span className="text-lg font-bold text-green-600">
                        {donationData.donation?.amount ? (donationData.donation.amount / 100).toLocaleString() : 'N/A'} FCFA
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Référence :</span>
                      <span className="text-sm font-mono">
                        {donationData.donation?.paystack_reference}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Statut :</span>
                      <Badge className="bg-green-100 text-green-800">
                        Confirmé
                      </Badge>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Un reçu sera envoyé à votre adresse email sous peu.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button asChild>
                        <Link to="/">
                          <Home className="mr-2 h-4 w-4" />
                          Retour à l'accueil
                        </Link>
                      </Button>
                      
                      <Button variant="outline" onClick={shareMessage}>
                        <Share2 className="mr-2 h-4 w-4" />
                        Partager
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="glass-effect border border-yellow-200 bg-yellow-50/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-yellow-800">Paiement en Attente</CardTitle>
                  <CardDescription>
                    Le paiement est en cours de traitement
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Votre paiement est en cours de vérification. Vous recevrez une confirmation par email dès que le traitement sera terminé.
                  </p>
                  
                  <Button asChild>
                    <Link to="/">
                      <Home className="mr-2 h-4 w-4" />
                      Retour à l'accueil
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Thank You Message */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Votre Impact</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Grâce à votre don, nous pourrons continuer à offrir un enseignement de qualité, 
              soutenir nos étudiants et développer la recherche en langues et littératures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">📚</div>
                <p className="text-sm text-muted-foreground">Amélioration des ressources pédagogiques</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">🎓</div>
                <p className="text-sm text-muted-foreground">Bourses pour étudiants méritants</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">🔬</div>
                <p className="text-sm text-muted-foreground">Financement de projets de recherche</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DonSucces;