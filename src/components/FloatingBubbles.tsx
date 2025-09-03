import { useState } from "react";
import { Phone, MessageCircle, Bot, X, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FloatingBubbles = () => {
  const [showContact, setShowContact] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "BONJOUR ,BIENVENUE A L'UFR - LLC, COMMENT POUVONS-NOUS VOUS AIDER?";
    const whatsappUrl = `https://wa.me/2250506854764?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChatbotClick = () => {
    setShowChat(!showChat);
  };

  const handleCallClick = () => {
    window.open('tel:+2250141037291', '_self');
  };

  const handleSmsClick = () => {
    window.open('sms:+2250506854764', '_self');
  };

  return (
    <>
      {/* Contact Bubble - Right Side */}
      <div className="fixed bottom-32 right-6 z-50">
        <div className="relative">
          {showContact && (
            <Card className="absolute bottom-16 right-0 w-80 mb-2 animate-fade-in glass-effect border border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Contactez-nous</h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowContact(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Téléphones</p>
                      <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary" onClick={handleCallClick}>+225 0141037291</p>
                      <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary" onClick={() => window.open('tel:+2250141035350', '_self')}>+225 0141035350</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary" onClick={handleSmsClick}>+225 0506854764</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Emails</p>
                      <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary" onClick={() => window.open('mailto:ufrllc@hotmail.com', '_blank')}>ufrllc@hotmail.com</p>
                      <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary" onClick={() => window.open('mailto:llc.ufr@gmail.com', '_blank')}>llc.ufr@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          <Button
            onClick={() => setShowContact(!showContact)}
            className="floating-element w-14 h-14 bg-red-500 hover:bg-red-600 text-white shadow-glow"
            style={{ bottom: '0px', right: '0px' }}
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* WhatsApp Bubble - Left Side */}
      <div className="fixed bottom-20 left-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="floating-element w-14 h-14 bg-green-600 hover:bg-green-700 text-white shadow-glow"
          style={{ bottom: '0px', left: '0px' }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* UFR Chatbot - Left Side */}
      <div className="fixed bottom-8 left-6 z-50">
        <div className="relative">
          {showChat && (
            <Card className="absolute bottom-16 left-0 w-80 h-96 mb-2 animate-fade-in glass-effect border border-white/20">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-orange-500" />
                    Assistant UFR-LLC
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowChat(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 bg-muted/20 rounded-lg p-4 mb-4 overflow-y-auto">
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-orange-100 to-green-100 p-3 rounded-lg">
                      <p className="text-sm">Bonjour ! Je suis l'assistant virtuel de l'UFR-LLC basé sur notre base de connaissances. Comment puis-je vous aider aujourd'hui ?</p>
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <p className="text-sm">Vous pouvez me poser des questions sur :</p>
                      <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
                        <li>• Les formations et départements</li>
                        <li>• Les procédures d'admission</li>
                        <li>• L'historique de l'UFR-LLC</li>
                        <li>• Les contacts et services</li>
                        <li>• Les partenariats et projets</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Posez votre question..."
                    className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button size="sm" className="px-3 bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600">
                    Envoyer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          <Button
            onClick={handleChatbotClick}
            className="floating-element w-14 h-14 bg-gradient-to-br from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white shadow-glow pulse-glow"
            style={{ bottom: '0px', left: '0px' }}
          >
            <Bot className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingBubbles;