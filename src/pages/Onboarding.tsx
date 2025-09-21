import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Baby, Calendar, Sparkles, Users } from "lucide-react";

const journeyStages = [
  {
    id: "sonhadora",
    title: "Sonhadora",
    subtitle: "Sonho em ser mãe um dia",
    description: "Educação reprodutiva e preparação emocional",
    icon: Sparkles,
    color: "from-pink-400 to-rose-400",
  },
  {
    id: "tentante",
    title: "Tentante", 
    subtitle: "Tentando engravidar",
    description: "Ciclos, ovulação e apoio emocional real",
    icon: Calendar,
    color: "from-rose-400 to-pink-500",
  },
  {
    id: "gravida",
    title: "Grávida",
    subtitle: "Vivendo a gravidez",
    description: "Semana a semana com a Nath",
    icon: Heart,
    color: "from-pink-500 to-red-400",
  },
  {
    id: "mae_fresh",
    title: "Mãe Fresh",
    subtitle: "Recém-mãe como eu!",
    description: "Puerpério, amamentação e autocuidado",
    icon: Baby,
    color: "from-red-400 to-pink-600",
  },
  {
    id: "mae_real",
    title: "Mãe Real",
    subtitle: "Maternidade na vida real",
    description: "Rotina, desafios e celebrações do dia a dia",
    icon: Users,
    color: "from-pink-600 to-purple-500",
  },
];

interface OnboardingProps {
  onStageSelect: (stage: string) => void;
}

const Onboarding = ({ onStageSelect }: OnboardingProps) => {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-nava-pink/30 via-background to-nava-coral/30 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-nava-pink to-nava-coral rounded-full flex items-center justify-center mb-4">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-nava-coral bg-clip-text text-transparent">
              NAVA Mães
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-2">
            Sua jornada de maternidade com a Nath
          </p>
          <p className="text-muted-foreground">
            Em qual fase você está agora, linda?
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
              className="bg-gradient-to-r from-nava-pink to-nava-coral hover:from-nava-pink/90 hover:to-nava-coral/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Bora começar! 💕
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;