
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-border pb-8 mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Shield className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">scout.gg</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors highlight-link">Features</a>
            <a href="#performance" className="text-sm text-muted-foreground hover:text-foreground transition-colors highlight-link">Performance</a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors highlight-link">Security</a>
            <a href="https://discord.gg/d5xrrv4j7U" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors highlight-link">Discord</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Scout.gg. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="https://discord.gg/d5xrrv4j7U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors highlight-link"
            >
              Terms of Service
            </a>
            <a 
              href="https://discord.gg/d5xrrv4j7U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors highlight-link"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
