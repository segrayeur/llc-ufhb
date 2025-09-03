import { useState } from "react";
import { Phone, MessageCircle, Bot, X, Mail, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const FloatingBubbles = () => {
  const [showContact, setShowContact] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Bonjour ! Je suis l\'assistant virtuel de l\'UFR-LLC. Comment puis-je vous aider aujourd\'hui ?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    const message = "BONJOUR ,BIENVENUE A L'UFR - LLC, COMMENT POUVONS-NOUS VOUS AIDER?";
    const whatsappUrl = `https://wa.me/2250506854764?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = () => {
    window.open('tel:+2250141037291', '_blank');
  };

  const handleChatbotClick = () => {
    setShowChat(!showChat);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    try {
      const { data, error } = await supabase.functions.invoke('ufr-chat-openai', {
        body: { message: userMessage, sessionId }
      });

      if (error) throw error;

      // Update session ID from response
      if (data.sessionId && !sessionId) {
        setSessionId(data.sessionId);
      }

      // Add bot response to chat
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: data.response || 'Désolé, je n\'ai pas pu traiter votre demande.'
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Désolé, une erreur est survenue. Contactez-nous directement au +225 050 685 4764.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Bubbles Container - Fixed position bottom right */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex items-center space-x-2 bg-background/95 backdrop-blur-xl border border-white/30 rounded-full px-3 py-2 shadow-2xl"
        >
          {/* WhatsApp Bubble */}
          <Button
            onClick={handleWhatsAppClick}
            className="floating-element w-10 h-10 bg-green-600 hover:bg-green-700 text-white shadow-xl rounded-full transition-all duration-300 hover:scale-110"
            title="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </Button>

          {/* Contact Heart Bubble */}
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
                        <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary" 
                           onClick={() => window.open('tel:+2250141037291')}>+225 0141037291</p>
                        <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary"
                           onClick={() => window.open('tel:+2250141035350')}>+225 0141035350</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">WhatsApp</p>
                        <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary"
                           onClick={handleWhatsAppClick}>+225 0506854764</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium">Emails</p>
                        <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary"
                           onClick={() => window.open('mailto:ufrllc@hotmail.com')}>ufrllc@hotmail.com</p>
                        <p className="text-xs text-muted-foreground cursor-pointer hover:text-primary"
                           onClick={() => window.open('mailto:llc.ufr@gmail.com')}>llc.ufr@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            <Button
              onClick={() => setShowContact(!showContact)}
              className="floating-element w-10 h-10 bg-red-500 hover:bg-red-600 text-white shadow-xl rounded-full transition-all duration-300 hover:scale-110"
              title="Contact"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* UFR Chat AI Bubble */}
          <div className="relative">
            {showChat && (
              <Card className="absolute bottom-16 right-0 w-80 h-96 mb-2 animate-fade-in glass-effect border border-white/20">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg flex items-center">
                      <Bot className="h-5 w-5 mr-2 text-primary" />
                      Assistant UFR-LLC AI
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
                      {messages.map((message, index) => (
                        <div key={index} className={`p-3 rounded-lg ${
                          message.type === 'bot' 
                            ? 'bg-primary/10 mr-4' 
                            : 'bg-accent/10 ml-4'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="bg-primary/10 p-3 rounded-lg mr-4">
                          <p className="text-sm">Assistant en train de répondre...</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Input 
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Tapez votre message..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button 
                      size="sm" 
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputMessage.trim()}
                      className="px-3"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            <Button
              onClick={handleChatbotClick}
              className="floating-element w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl rounded-full transition-all duration-300 hover:scale-110"
              title="Assistant IA"
            >
              <Bot className="h-4 w-4" />
            </Button>
          </div>

          {/* Contact Phone Bubble */}
          <Button
            onClick={handleContactClick}
            className="floating-element w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white shadow-xl rounded-full transition-all duration-300 hover:scale-110"
            title="Téléphone"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export { FloatingBubbles };