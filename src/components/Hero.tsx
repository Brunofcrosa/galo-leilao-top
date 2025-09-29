import { Button } from "@/components/ui/button";
import heroRooster from "@/assets/hero-rooster.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight">
            Leilão Elite de
            <span className="bg-gradient-hero bg-clip-text text-transparent block">
              Galinhas de Raça
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg font-body">
            Participe do mais prestigioso leilão de aves do país. Galinhas de raça pura, 
            selecionadas pelos melhores criadores para garantir a excelência do seu plantel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Ver Lotes Disponíveis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Como Participar
            </Button>
          </div>
          
          <div className="flex items-center gap-6 justify-center lg:justify-start text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24</div>
              <div className="text-sm">Lotes Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">R$ 450</div>
              <div className="text-sm">Lance Mínimo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">48h</div>
              <div className="text-sm">Para Encerramento</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img 
              src={heroRooster} 
              alt="Galo premiado de raça superior" 
              className="w-full h-[600px] object-cover animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Stats Cards */}
          <div className="absolute -top-4 -right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
            <div className="text-sm text-muted-foreground">Próximo Lance</div>
            <div className="text-2xl font-bold text-primary">R$ 850</div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
            <div className="text-sm text-muted-foreground">Lances Ativos</div>
            <div className="text-2xl font-bold text-secondary">12</div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary))_1px,_transparent_0)] bg-[size:50px_50px]"></div>
      </div>
    </section>
  );
};

export default Hero;