import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const purposes = [
  { id: "growth", label: "Crescimento Pessoal", icon: Target },
  { id: "community", label: "Construir Comunidade", icon: Users },
  { id: "wellness", label: "Bem-estar", icon: Heart },
  { id: "creativity", label: "Criatividade", icon: Sparkles }
];

interface OnboardingProps {
  onComplete: (data: { name: string; purpose: string }) => void;
}

const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");

  const handleSubmit = () => {
    if (name && selectedPurpose) {
      onComplete({ name, purpose: selectedPurpose });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/20 p-4">
      <div className="max-w-2xl mx-auto pt-20">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Constellation
          </h1>
          <p className="text-muted-foreground">Encontre sua constelação de pertencimento</p>
        </div>

        {step === 1 && (
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Como você gostaria de ser chamado?</h2>
                <p className="text-muted-foreground">Seu nome será como outros membros te conhecerão</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Seu nome</Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-lg p-4"
                />
              </div>

              <Button 
                onClick={() => setStep(2)} 
                disabled={!name.trim()}
                className="w-full"
                size="lg"
              >
                Continuar
              </Button>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Qual seu propósito principal?</h2>
                <p className="text-muted-foreground">Isso nos ajuda a conectar você com pessoas similares</p>
              </div>

              <div className="grid gap-4">
                {purposes.map((purpose) => {
                  const IconComponent = purpose.icon;
                  const isSelected = selectedPurpose === purpose.id;
                  
                  return (
                    <Card
                      key={purpose.id}
                      className={`p-4 cursor-pointer transition-all hover:scale-[1.02] ${
                        isSelected ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setSelectedPurpose(purpose.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{purpose.label}</h3>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Voltar
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={!selectedPurpose}
                  className="flex-1"
                  size="lg"
                >
                  Entrar na Constellation
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Onboarding;