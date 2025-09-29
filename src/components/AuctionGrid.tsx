import AuctionCard from "./AuctionCard";
import { Button } from "@/components/ui/button";
import leghornHen from "@/assets/leghorn-hen.jpg";
import rhodeIslandRed from "@/assets/rhode-island-red.jpg";
import australorp from "@/assets/australorp.jpg";

const auctionData = [
  {
    id: "1",
    name: "Poedeira Champion",
    breed: "Leghorn Branca",
    age: "8 meses",
    description: "Galinha de excelente linhagem, campeã em concursos regionais. Produção média de 280 ovos/ano.",
    currentBid: 450,
    bidCount: 8,
    timeLeft: "2h 15min",
    image: leghornHen,
    isHot: true
  },
  {
    id: "2", 
    name: "Galo Reprodutor Elite",
    breed: "Rhode Island Red",
    age: "1 ano",
    description: "Galo de genética superior, ideal para reprodução. Linhagem pura importada com certificado de origem.",
    currentBid: 850,
    bidCount: 12,
    timeLeft: "4h 32min",
    image: rhodeIslandRed,
    isHot: true
  },
  {
    id: "3",
    name: "Matriz Premium",
    breed: "Australorp Negra", 
    age: "6 meses",
    description: "Galinha de dupla aptidão, excelente para postura e carne. Plumagem negra com reflexos esverdeados.",
    currentBid: 380,
    bidCount: 5,
    timeLeft: "1h 45min",
    image: australorp
  },
  {
    id: "4",
    name: "Lote Especial Trio",
    breed: "Mix de Raças",
    age: "Variadas",
    description: "Lote especial com 3 galinhas de raças diferentes. Perfeito para iniciar um plantel diversificado.",
    currentBid: 1200,
    bidCount: 15,
    timeLeft: "6h 18min",
    image: leghornHen,
    isHot: true
  },
  {
    id: "5",
    name: "Frangas Jovens",
    breed: "Leghorn Branca",
    age: "4 meses",
    description: "Par de frangas jovens de excelente qualidade. Início de postura previsto para próximo mês.",
    currentBid: 320,
    bidCount: 3,
    timeLeft: "8h 42min",
    image: leghornHen
  },
  {
    id: "6",
    name: "Reprodutor Campeão",
    breed: "Rhode Island Red",
    age: "2 anos",
    description: "Galo experiente, pai de várias gerações premiadas. Genética comprovada e excelente fertilidade.",
    currentBid: 1450,
    bidCount: 18,
    timeLeft: "12h 15min",
    image: rhodeIslandRed,
    isHot: true
  }
];

const AuctionGrid = () => {
  return (
    <section id="leiloes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Leilões <span className="bg-gradient-hero bg-clip-text text-transparent">Ativos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Descubra galinhas de raça pura selecionadas pelos melhores criadores. 
            Faça seus lances e garante aves de qualidade superior para seu plantel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctionData.map((auction) => (
            <AuctionCard key={auction.id} {...auction} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="px-8">
            Ver Todos os Leilões
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuctionGrid;