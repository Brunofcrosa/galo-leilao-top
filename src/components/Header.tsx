import { Button } from "@/components/ui/button";
import { Gavel, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <Gavel className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-foreground">
              LeilãoElite
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Galinhas de Raça
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#leiloes" className="text-foreground hover:text-primary transition-colors font-medium">
            Leilões Ativos
          </a>
          <a href="#como-participar" className="text-foreground hover:text-primary transition-colors font-medium">
            Como Participar
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre Nós
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
            Contato
          </a>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="w-4 h-4 mr-2" />
            Entrar
          </Button>
          <Button variant="default" size="sm">
            Cadastrar
          </Button>
          
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;