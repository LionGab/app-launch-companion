import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, TrendingUp, Heart, Droplets, Thermometer, Moon, Sun } from "lucide-react";

interface TrackingTabProps {
  stage: string;
}

const trackingData = {
  sonhadora: {
    mainMetric: "Preparação",
    progress: 65,
    streak: 12,
    features: [
      { name: "Educação Reprodutiva", icon: Target, progress: 78, color: "text-pink-500" },
      { name: "Hábitos Saudáveis", icon: Heart, progress: 45, color: "text-purple-500" },
      { name: "Planejamento Financeiro", icon: TrendingUp, progress: 60, color: "text-indigo-500" }
    ]
  },
  preparadora: {
    mainMetric: "Ciclo Atual",
    progress: 45,
    streak: 28,
    features: [
      { name: "Temperatura Basal", icon: Thermometer, progress: 85, color: "text-red-500" },
      { name: "Ovulação", icon: Droplets, progress: 70, color: "text-blue-500" },
      { name: "Sintomas", icon: Heart, progress: 90, color: "text-pink-500" }
    ]
  },
  gestante: {
    mainMetric: "Semanas",
    progress: 65,
    streak: 156,
    features: [
      { name: "Peso & Medidas", icon: TrendingUp, progress: 80, color: "text-green-500" },
      { name: "Movimentos do Bebê", icon: Heart, progress: 95, color: "text-pink-500" },
      { name: "Sintomas", icon: Target, progress: 75, color: "text-purple-500" }
    ]
  },
  mae: {
    mainMetric: "Recuperação",
    progress: 80,
    streak: 45,
    features: [
      { name: "Amamentação", icon: Heart, progress: 85, color: "text-pink-500" },
      { name: "Sono do Bebê", icon: Moon, progress: 60, color: "text-indigo-500" },
      { name: "Humor & Energia", icon: Sun, progress: 70, color: "text-yellow-500" }
    ]
  },
  apoiadora: {
    mainMetric: "Impacto",
    progress: 90,
    streak: 67,
    features: [
      { name: "Mulheres Apoiadas", icon: Heart, progress: 95, color: "text-pink-500" },
      { name: "Sessões de Mentoria", icon: Target, progress: 88, color: "text-purple-500" },
      { name: "Workshops Realizados", icon: TrendingUp, progress: 75, color: "text-green-500" }
    ]
  }
};

const TrackingTab = ({ stage }: TrackingTabProps) => {
  const data = trackingData[stage as keyof typeof trackingData];

  return (
    <div className="space-y-6">
      {/* Main Progress Card */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {data.mainMetric}
            </h3>
            <p className="text-muted-foreground">Seu progresso geral</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary mb-1">{data.progress}%</div>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {data.streak} dias streak 🔥
            </Badge>
          </div>
        </div>
        
        <Progress value={data.progress} className="h-3 mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-white/50 rounded-lg">
            <div className="text-xl font-bold text-green-600">Consistente</div>
            <div className="text-sm text-muted-foreground">Status atual</div>
          </div>
          <div className="text-center p-3 bg-white/50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">7/7</div>
            <div className="text-sm text-muted-foreground">Esta semana</div>
          </div>
          <div className="text-center p-3 bg-white/50 rounded-lg">
            <div className="text-xl font-bold text-purple-600">+15%</div>
            <div className="text-sm text-muted-foreground">Vs. mês anterior</div>
          </div>
        </div>
      </Card>

      {/* Detailed Tracking */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column - Metrics */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Métricas Principais
          </h3>
          
          {data.features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.name} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <IconComponent className={`w-5 h-5 ${feature.color}`} />
                    <span className="font-medium">{feature.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{feature.progress}%</span>
                </div>
                <Progress value={feature.progress} className="h-2" />
              </Card>
            );
          })}
        </div>

        {/* Right Column - Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Registrar Hoje
          </h3>
          
          <div className="grid gap-3">
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-dashed border-2 border-primary/30">
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold">Registro Rápido</h4>
                <p className="text-sm text-muted-foreground">Como você está hoje?</p>
                <Button size="sm" className="w-full">Registrar Agora</Button>
              </div>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold mb-3">Últimos Registros</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-sm">Hoje, 08:30</span>
                  <Badge variant="outline" className="text-xs">Excelente</Badge>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-sm">Ontem, 20:15</span>
                  <Badge variant="outline" className="text-xs">Muito bem</Badge>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Anteontem, 09:00</span>
                  <Badge variant="outline" className="text-xs">Normal</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-yellow-600" />
                <h4 className="font-semibold text-yellow-800">Insights da Semana</h4>
              </div>
              <p className="text-sm text-yellow-700">
                Você está 23% mais consistente que a média. Continue assim! 🌟
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Weekly Overview */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Visão Semanal
        </h3>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs text-muted-foreground mb-2">{day}</div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                index < 5 
                  ? 'bg-gradient-to-br from-primary to-pink-500 text-white' 
                  : index === 5 
                  ? 'bg-yellow-100 text-yellow-600 border-2 border-yellow-300'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {index < 5 ? '✓' : index === 5 ? '!' : '?'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            5 dias completos, 1 parcial, 1 pendente
          </span>
          <Button variant="link" size="sm" className="text-primary">
            Ver detalhes →
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TrackingTab;