import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Heart, Sparkles, MessageCircle, Clock, Smile } from "lucide-react";

const initialMessages = [
  {
    id: 1,
    type: "ai" as const,
    content: "Oi, linda! Eu sou a Nathália Virtual 💕 Estou aqui 24h para te acompanhar nessa jornada incrível. Como você está se sentindo hoje?",
    timestamp: "Agora",
    reactions: ["💕", "👏"]
  },
  {
    id: 2,
    type: "user" as const,
    content: "Oi Nath! Estou um pouco ansiosa com algumas mudanças no meu ciclo...",
    timestamp: "Agora"
  },
  {
    id: 3,
    type: "ai" as const,
    content: "Entendo perfeitamente, amor! A ansiedade é super normal nessa fase. Primeiro, respira fundo comigo... 🌸 Me conta: que tipo de mudanças você notou? E quando foi a última vez que você registrou seus sintomas no tracking?",
    timestamp: "Agora",
    reactions: ["🥰", "🌸"]
  }
];

const quickReplies = [
  "Estou bem, obrigada! 😊",
  "Tenho uma dúvida sobre...",
  "Preciso de apoio emocional",
  "Me fala sobre sintomas",
  "Quero compartilhar uma conquista!"
];

const AIChat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: newMessage,
      timestamp: "Agora"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai" as const,
        content: "Que linda pergunta! 💕 Deixa eu te ajudar com isso... Como mãe recente, sei exatamente como você está se sentindo. É completamente normal ter essas dúvidas!",
        timestamp: "Agora",
        reactions: ["💕", "👏", "🌟"]
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickReply = (reply: string) => {
    setNewMessage(reply);
  };

  return (
    <div className="space-y-6">
      {/* AI Chat Header */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-xl">
                N
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold">IA Nathália</h3>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>
            <p className="text-muted-foreground mb-1">Sua companheira 24h na jornada da maternidade</p>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Online agora
            </div>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div className="flex items-center gap-1 mb-1">
              <MessageCircle className="w-4 h-4" />
              1.2M+ conversas
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Resp. média: 2s
            </div>
          </div>
        </div>
      </Card>

      {/* Chat Messages */}
      <Card className="p-6 min-h-[400px] max-h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : ''}`}>
                <div className={`p-4 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-primary to-pink-500 text-white' 
                    : 'bg-muted text-foreground'
                }`}>
                  <p>{message.content}</p>
                  {message.reactions && (
                    <div className="flex gap-1 mt-2">
                      {message.reactions.map((reaction, idx) => (
                        <span key={idx} className="text-lg">{reaction}</span>
                      ))}
                    </div>
                  )}
                </div>
                <p className={`text-xs text-muted-foreground mt-1 ${
                  message.type === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {message.timestamp}
                </p>
              </div>
              {message.type === 'ai' && (
                <Avatar className="w-8 h-8 mr-3">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-sm">
                    N
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <Avatar className="w-8 h-8 mr-3">
                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-sm">
                  N
                </AvatarFallback>
              </Avatar>
              <div className="bg-muted p-4 rounded-2xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Quick Replies */}
      <Card className="p-4">
        <h4 className="text-sm font-medium mb-3 text-muted-foreground">Respostas rápidas:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {quickReplies.map((reply) => (
            <Button
              key={reply}
              variant="outline"
              size="sm"
              onClick={() => handleQuickReply(reply)}
              className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            >
              {reply}
            </Button>
          ))}
        </div>
        
        {/* Message Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Escreva sua mensagem para a Nathália..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* AI Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
          <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
          <h4 className="font-semibold mb-1">Suporte Emocional</h4>
          <p className="text-xs text-muted-foreground">24h de apoio e compreensão</p>
        </Card>
        
        <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
          <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <h4 className="font-semibold mb-1">Dicas Personalizadas</h4>
          <p className="text-xs text-muted-foreground">Baseadas na sua jornada</p>
        </Card>
        
        <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
          <Smile className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <h4 className="font-semibold mb-1">Motivação Diária</h4>
          <p className="text-xs text-muted-foreground">Lembrete de autocuidado</p>
        </Card>
      </div>
    </div>
  );
};

export default AIChat;