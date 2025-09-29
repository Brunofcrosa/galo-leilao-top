import { Gavel, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Gavel className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">LeilãoElite</h3>
                <p className="text-sm text-background/70">Galinhas de Raça</p>
              </div>
            </div>
            <p className="text-background/80 font-body leading-relaxed max-w-md">
              O mais prestigioso leilão online de galinhas de raça do Brasil. 
              Conectamos criadores especializados com aves de qualidade superior há mais de 15 anos.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#leiloes" className="text-background/80 hover:text-primary transition-colors">Leilões Ativos</a></li>
              <li><a href="#como-participar" className="text-background/80 hover:text-primary transition-colors">Como Participar</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Regulamento</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Criadores Parceiros</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Histórico de Leilões</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>contato@leilaoelite.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-1" />
                <span>São Paulo - SP<br />Brasil</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-background/10 rounded-lg">
              <h5 className="font-semibold mb-2">Horário de Atendimento</h5>
              <p className="text-sm text-background/80">
                Segunda à Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
        
        {/* Linha divisória e copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm font-body">
              © 2024 LeilãoElite. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm font-body">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;