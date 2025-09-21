import { useState } from "react";
import Onboarding from "./Onboarding";
import Dashboard from "./Dashboard";

const Index = () => {
  const [currentStage, setCurrentStage] = useState<string | null>(null);
  
  const handleStageSelect = (stage: string) => {
    setCurrentStage(stage);
  };

  const handleStageChange = () => {
    setCurrentStage(null);
  };

  if (!currentStage) {
    return <Onboarding onStageSelect={handleStageSelect} />;
  }

  return <Dashboard currentStage={currentStage} onStageChange={handleStageChange} />;
};

export default Index;
