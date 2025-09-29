import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, CreditCard, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Cadastre-se",
    description: "Crie sua conta gratuita e faça a verificação dos seus dados para participar dos leilões.",
    step: "01"
  },
  {
    icon: Search,
    title: "Explore os Lotes",
    description: "Navegue pelos lotes disponíveis, veja fotos detalhadas e informações completas de cada ave.",
    step: "02"
  },
  {
    icon: CreditCard,
    title: "Faça seu Lance",
    description: "Participe dos lances em tempo real. Sistema seguro e transparente para todos os participantes.",
    step: "03"
  },
  {
    icon: Trophy,
    title: "Arrematação",
    description: "Vencendo o leilão, você receberá instruções para pagamento e retirada das aves.",
    step: "04"
  }
];

const HowToParticipate = () => {
  return (
    <section id="como-participar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Como <span className="bg-gradient-hero bg-clip-text text-transparent">Participar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Participe dos nossos leilões em apenas 4 passos simples. 
            Processo rápido, seguro e transparente para todos os participantes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative text-center group hover:shadow-card transition-all duration-300 bg-gradient-card border-2 hover:border-primary/20">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {step.step}
              </div>
              
              <CardHeader className="pt-8">
                <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-display text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border-2 border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-muted-foreground mb-6 font-body">
              Junte-se aos criadores mais experientes do país e encontre as melhores aves para seu plantel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8">
                Criar Conta Gratuita
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Ver Regulamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;