import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Users, Flame, Crown, Calendar } from "lucide-react";

interface CommunityTabProps {
  stage: string;
}

const communityData = {
  sonhadora: {
    groupName: "Círculo das Sonhadoras",
    members: "12.4K",
    posts: [
      {
        id: 1,
        author: "Ana Paula",
        timeAgo: "2h atrás",
        content: "Meninas, alguém mais fica ansiosa pensando em quando vai ser a hora certa? 💭",
        likes: 47,
        comments: 23,
        badge: "Sonhadora Level 3"
      },
      {
        id: 2,
        author: "Camila R.",
        timeAgo: "4h atrás", 
        content: "Comecei a fazer yoga para me preparar mentalmente. Quem mais está nessa? 🧘‍♀️",
        likes: 89,
        comments: 31,
        badge: "Premium"
      }
    ]
  },
  preparadora: {
    groupName: "Preparadoras Unidas",
    members: "8.7K",
    posts: [
      {
        id: 1,
        author: "Júlia Santos",
        timeAgo: "1h atrás",
        content: "Ciclo 6 e ainda nada... mas não vou desistir! Força para todas nós 💪",
        likes: 156,
        comments: 45,
        badge: "Warrior"
      },
      {
        id: 2,
        author: "Mariana L.",
        timeAgo: "3h atrás",
        content: "Dica: app de tracking + temperatura basal mudaram meu jogo completamente! 📊",
        likes: 203,
        comments: 67,
        badge: "Preparadora Expert"
      }
    ]
  },
  gestante: {
    groupName: "Mamães Radiantes",
    members: "15.2K",
    posts: [
      {
        id: 1,
        author: "Beatriz",
        timeAgo: "30min atrás",
        content: "20 semanas hoje! Finalmente sentindo os primeiros chutinhos 👶💕",
        likes: 234,
        comments: 78,
        badge: "20 Semanas"
      },
      {
        id: 2,
        author: "Fernanda M.",
        timeAgo: "2h atrás",
        content: "Ultrassom 4D marcado para semana que vem... não vejo a hora! 😍",
        likes: 145,
        comments: 34,
        badge: "3º Trimestre"
      }
    ]
  },
  mae: {
    groupName: "Mães Fresh 24h",
    members: "22.1K",
    posts: [
      {
        id: 1,
        author: "Carla Regina",
        timeAgo: "1h atrás",
        content: "3 da manhã aqui... amamentação noturna. Alguém mais acordada? 🌙",
        likes: 89,
        comments: 156,
        badge: "Mãe Fresh"
      },
      {
        id: 2,
        author: "Patrícia L.",
        timeAgo: "4h atrás",
        content: "Primeiro sorriso do bebê hoje! Meu coração não coube no peito ❤️",
        likes: 267,
        comments: 45,
        badge: "2 Meses"
      }
    ]
  },
  apoiadora: {
    groupName: "Rede de Apoio",
    members: "5.3K",
    posts: [
      {
        id: 1,
        author: "Sandra Oliveira",
        timeAgo: "2h atrás",
        content: "Mentoreei 3 gestantes essa semana. Ver o crescimento delas é incrível! 🌟",
        likes: 134,
        comments: 28,
        badge: "Mentora Gold"
      },
      {
        id: 2,
        author: "Roberta K.",
        timeAgo: "5h atrás",
        content: "Workshop sobre amamentação foi um sucesso! 50 mães participaram 👏",
        likes: 198,
        comments: 67,
        badge: "Embaixadora"
      }
    ]
  }
};

const CommunityTab = ({ stage }: CommunityTabProps) => {
  const data = communityData[stage as keyof typeof communityData];

  return (
    <div className="space-y-6">
      {/* Community Header */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{data.groupName}</h3>
              <p className="text-muted-foreground">{data.members} mulheres conectadas</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-1" />
              Eventos
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-pink-500">
              Nova Conversa
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Mais ativa hoje: <strong>Discussões sobre sintomas</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <Crown className="w-4 h-4 text-yellow-500" />
            <span>3 mentoras online</span>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold">SOS Rápido</h4>
            <p className="text-sm text-muted-foreground">Precisa de ajuda imediata?</p>
          </div>
        </Card>
        
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold">Grupos Privados</h4>
            <p className="text-sm text-muted-foreground">Conversas mais íntimas</p>
          </div>
        </Card>
        
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full flex items-center justify-center mx-auto">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold">Mentoria VIP</h4>
            <p className="text-sm text-muted-foreground">Sessões 1 para 1</p>
          </div>
        </Card>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Conversas Recentes</h3>
          <Button variant="ghost" size="sm">
            Ver todas
          </Button>
        </div>
        
        {data.posts.map((post) => (
          <Card key={post.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white">
                    {post.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{post.author}</span>
                    <Badge variant="secondary" className="text-xs">
                      {post.badge}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                  </div>
                  <p className="text-foreground mb-3">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityTab;