import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Safidy<span className="text-accent">Dev</span>
            </h3>
            <p className="text-muted-foreground">
              Développeur passionné | Créateur de solutions numériques
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © {currentYear} RAKOTONIRINA Safidy Miharimanana. Tous droits réservés.
            </p>
            
            <div className="flex items-center text-muted-foreground">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>et</span>
              <Code className="w-4 h-4 mx-1 text-primary" />
              <span>à Madagascar</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Portfolio développé avec React, TypeScript et Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;