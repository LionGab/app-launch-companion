import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  Users, 
  BookOpen,
  Target,
  Zap,
  Crown
} from "lucide-react";
import CommunityTab from "@/components/CommunityTab";
import AIChat from "@/components/AIChat";
import TrackingTab from "@/components/TrackingTab";

const stageContent = {
  sonhadora: {
    title: "Sua Jornada de Sonhadora ✨",
    subtitle: "Preparando o terreno para seus sonhos",
    color: "from-pink-400 to-purple-400",
    features: ["Educação Reprodutiva", "Planejamento Familiar", "Comunidade de Sonhadoras"]
  },
  preparadora: {
    title: "Sua Jornada de Preparação 🌸",
    subtitle: "Cada dia mais perto do seu sonho",
    color: "from-purple-400 to-indigo-400", 
    features: ["Tracking de Ovulação", "Dicas de Fertilidade", "Suporte Emocional"]
  },
  gestante: {
    title: "Sua Jornada Gestante 💗",
    subtitle: "Vivendo o milagre da vida",
    color: "from-pink-500 to-rose-400",
    features: ["Acompanhamento Semanal", "Marcos da Gravidez", "Preparação para o Parto"]
  },
  mae: {
    title: "Sua Jornada de Mãe Fresh 👶",
    subtitle: "Os primeiros passos juntas",
    color: "from-rose-400 to-pink-500",
    features: ["SOS 24h", "Vlogs da Nathália", "Rede de Apoio"]
  },
  apoiadora: {
    title: "Sua Jornada de Apoiadora 🤝",
    subtitle: "Transformando vidas através do apoio",
    color: "from-indigo-400 to-purple-500",
    features: ["Mentoria", "Rede de Apoio", "Impacto Social"]
  }
};

interface DashboardProps {
  currentStage: string;
  onStageChange: () => void;
}

const Dashboard = ({ currentStage, onStageChange }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const content = stageContent[currentStage as keyof typeof stageContent];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-nava-rose/30 via-background to-nava-lavender/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${content.color} flex items-center justify-center`}>
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">NAVA Journey</h1>
                <p className="text-sm text-muted-foreground">Olá, Maria! 👋</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
              <Button variant="ghost" size="sm" onClick={onStageChange}>
                Mudar Fase
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Stage Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent mb-2">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">{content.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {content.features.map((feature) => (
              <Badge key={feature} variant="outline" className="border-primary/30 text-primary">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="tracking" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Tracking
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Comunidade
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              IA Nathália
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Daily Insights */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Insights do Dia</h3>
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Dias de streak</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-500/10 to-pink-500/5 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">89%</div>
                  <div className="text-sm text-muted-foreground">Progress mensal</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">247</div>
                  <div className="text-sm text-muted-foreground">Pontos NAVA</div>
                </div>
              </div>
            </Card>

            {/* Weekly Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Progresso Semanal</h3>
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Metas da Semana</span>
                    <span>4/5</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Tracking diário ✅</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Participação comunidade ✅</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Leitura educativa ✅</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Exercício regular ⏳</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Latest from Nathália */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Últimas da Nathália</h3>
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Vlog: Minha rotina matinal na gravidez</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Compartilho como adaptei minha rotina para cuidar melhor de mim e do bebê...
                    </p>
                    <Button variant="link" className="p-0 text-primary">
                      Assistir agora →
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="tracking">
            <TrackingTab stage={currentStage} />
          </TabsContent>

          <TabsContent value="community">
            <CommunityTab stage={currentStage} />
          </TabsContent>

          <TabsContent value="chat">
            <AIChat />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;