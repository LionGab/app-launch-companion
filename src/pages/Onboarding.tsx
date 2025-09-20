import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Baby, Calendar, Sparkles, Users } from "lucide-react";

const journeyStages = [
  {
    id: "sonhadora",
    title: "Sonhadora",
    subtitle: "Sonho de ser mãe um dia",
    description: "Educação reprodutiva e planejamento do futuro",
    icon: Sparkles,
    color: "from-pink-400 to-purple-400",
  },
  {
    id: "preparadora",
    title: "Preparadora", 
    subtitle: "Tentando engravidar",
    description: "Tracking de ovulação e suporte emocional",
    icon: Calendar,
    color: "from-purple-400 to-indigo-400",
  },
  {
    id: "gestante",
    title: "Gestante",
    subtitle: "Grávida e radiante",
    description: "Acompanhamento semanal personalizado",
    icon: Heart,
    color: "from-pink-500 to-rose-400",
  },
  {
    id: "mae",
    title: "Mãe Fresh",
    subtitle: "Acabei de ser mãe",
    description: "Suporte 24h e dicas práticas",
    icon: Baby,
    color: "from-rose-400 to-pink-500",
  },
  {
    id: "apoiadora",
    title: "Apoiadora",
    subtitle: "Quero apoiar outras mulheres",
    description: "Compartilhe experiências e apoie outras mães",
    icon: Users,
    color: "from-indigo-400 to-purple-500",
  },
];

interface OnboardingProps {
  onStageSelect: (stage: string) => void;
}

const Onboarding = ({ onStageSelect }: OnboardingProps) => {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-nava-rose via-background to-nava-lavender p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r var(--gradient-primary) rounded-full flex items-center justify-center mb-4">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              NAVA Journey
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-2">
            Sua jornada única como mulher
          </p>
          <p className="text-muted-foreground">
            Escolha onde você está agora na sua jornada
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {journeyStages.map((stage) => {
            const IconComponent = stage.icon;
            const isSelected = selectedStage === stage.id;
            
            return (
              <Card
                key={stage.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isSelected 
                    ? "ring-2 ring-primary shadow-lg bg-gradient-to-br from-primary/10 to-primary/5" 
                    : "hover:shadow-md"
                }`}
                onClick={() => setSelectedStage(stage.id)}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {stage.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {selectedStage && (
          <div className="text-center">
            <Button
              onClick={() => onStageSelect(selectedStage)}
              size="lg"
              className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar minha jornada
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;