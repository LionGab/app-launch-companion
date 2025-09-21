import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Target, ArrowLeft, Plus } from "lucide-react";

interface DashboardProps {
  userData: { name: string; purpose: string };
  onBack: () => void;
}

const Dashboard = ({ userData, onBack }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("home");

  const connections = [
    { name: "Ana Silva", purpose: "Crescimento Pessoal", avatar: "AS", status: "online" },
    { name: "Carlos Santos", purpose: "Bem-estar", avatar: "CS", status: "offline" },
    { name: "Maria Oliveira", purpose: "Criatividade", avatar: "MO", status: "online" }
  ];

  const projects = [
    { title: "Meditação em Grupo", members: 8, type: "Bem-estar" },
    { title: "Círculo de Leitura", members: 12, type: "Crescimento" },
    { title: "Arte Colaborativa", members: 6, type: "Criatividade" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/20">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Constellation
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">Olá, {userData.name}</span>
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                {userData.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="home">Início</TabsTrigger>
            <TabsTrigger value="connections">Conexões</TabsTrigger>
            <TabsTrigger value="projects">Projetos</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Suas Conexões</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{connections.length}</div>
                  <p className="text-xs text-muted-foreground">
                    +2 desde a semana passada
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projects.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Participando ativamente
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Mensagens</CardTitle>
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    Não lidas hoje
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sua Constelação</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Pessoas conectadas com propósitos similares ao seu: {userData.purpose}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {connections.slice(0, 3).map((connection, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {connection.avatar}
                        </div>
                        <div>
                          <p className="font-medium">{connection.name}</p>
                          <p className="text-sm text-muted-foreground">{connection.purpose}</p>
                        </div>
                      </div>
                      <Badge variant={connection.status === "online" ? "default" : "secondary"}>
                        {connection.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Suas Conexões</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Encontrar Pessoas
              </Button>
            </div>

            <div className="grid gap-4">
              {connections.map((connection, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center">
                          {connection.avatar}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{connection.name}</h3>
                          <p className="text-muted-foreground">{connection.purpose}</p>
                          <Badge variant={connection.status === "online" ? "default" : "secondary"} className="mt-2">
                            {connection.status}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Conversar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Projetos Coletivos</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Criar Projeto
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.members} membros participando</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{project.type}</Badge>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;