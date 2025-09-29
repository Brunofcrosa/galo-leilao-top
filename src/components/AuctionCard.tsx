import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";

interface AuctionCardProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  description: string;
  currentBid: number;
  bidCount: number;
  timeLeft: string;
  image: string;
  isHot?: boolean;
}

const AuctionCard = ({ 
  name, 
  breed, 
  age, 
  description, 
  currentBid, 
  bidCount, 
  timeLeft, 
  image,
  isHot = false 
}: AuctionCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-2 hover:border-primary/20">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={`${name} - ${breed}`}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isHot && (
            <Badge className="absolute top-3 left-3 bg-destructive/90 text-destructive-foreground animate-pulse-glow">
              <TrendingUp className="w-3 h-3 mr-1" />
              Em Alta
            </Badge>
          )}
          <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary">
            Lote #{Math.floor(Math.random() * 100) + 1}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <CardTitle className="text-xl font-display text-foreground mb-1">{name}</CardTitle>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Badge variant="secondary" className="text-xs">
              {breed}
            </Badge>
            <span className="text-sm">• {age}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 font-body">
          {description}
        </p>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-muted-foreground">Lance Atual</div>
              <div className="text-2xl font-bold text-primary">
                R$ {currentBid.toLocaleString('pt-BR')}
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Users className="w-4 h-4" />
                {bidCount} lances
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Termina em {timeLeft}</span>
          </div>
          
          <Button variant="auction" className="w-full" size="lg">
            Fazer Lance
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuctionCard;