import { useState } from "react";
import { Phone, MessageCircle, Bot, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FloatingBubbles = () => {
  const [showContact, setShowContact] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "BONJOUR, BIENVENUE À L'UFR-LLC, COMMENT POUVONS-NOUS VOUS AIDER?";
    const whatsappUrl = `https://wa.me/2250506854764?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChatbotClick = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      {/* Contact Bubble */}
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
                      <p className="text-xs text-muted-foreground">+225 0141037291</p>
                      <p className="text-xs text-muted-foreground">+225 0141035350</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="text-xs text-muted-foreground">+225 0506854764</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Emails</p>
                      <p className="text-xs text-muted-foreground">ufrllc@hotmail.com</p>
                      <p className="text-xs text-muted-foreground">llc.ufr@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          <Button
            onClick={() => setShowContact(!showContact)}
            className="floating-element w-14 h-14 bg-primary hover:bg-primary/90 text-white shadow-glow"
            style={{ bottom: '0px', right: '0px' }}
          >
            <Phone className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* WhatsApp Bubble */}
      <div className="fixed bottom-20 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="floating-element w-14 h-14 bg-green-600 hover:bg-green-700 text-white shadow-glow"
          style={{ bottom: '0px', right: '0px' }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chatbot Bubble */}
      <div className="fixed bottom-8 right-6 z-50">
        <div className="relative">
          {showChat && (
            <Card className="absolute bottom-16 right-0 w-80 h-96 mb-2 animate-fade-in glass-effect border border-white/20">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-primary" />
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
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm">Bonjour ! Je suis l'assistant virtuel de l'UFR-LLC. Comment puis-je vous aider aujourd'hui ?</p>
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <p className="text-sm">Vous pouvez me poser des questions sur :</p>
                      <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
                        <li>• Les formations disponibles</li>
                        <li>• Les procédures d'admission</li>
                        <li>• Les départements</li>
                        <li>• Les contacts</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Tapez votre message..."
                    className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm" className="px-3">
                    Envoyer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          <Button
            onClick={handleChatbotClick}
            className="floating-element w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow pulse-glow"
            style={{ bottom: '0px', right: '0px' }}
          >
            <Bot className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingBubbles;