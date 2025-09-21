import { useState } from "react";
import Onboarding from "./Onboarding";
import Dashboard from "./Dashboard";

const Index = () => {
  const [userData, setUserData] = useState<{ name: string; purpose: string } | null>(null);
  
  const handleOnboardingComplete = (data: { name: string; purpose: string }) => {
    setUserData(data);
  };

  const handleBack = () => {
    setUserData(null);
  };

  if (!userData) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return <Dashboard userData={userData} onBack={handleBack} />;
};

export default Index;