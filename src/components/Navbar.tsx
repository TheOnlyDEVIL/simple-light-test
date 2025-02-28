
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Zap } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Shield className="w-6 h-6" />
          <span className="text-xl font-bold tracking-tight">sniper</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#features" className="highlight-link text-sm font-medium">
            Features
          </a>
          <a href="#performance" className="highlight-link text-sm font-medium">
            Performance
          </a>
          <a href="#security" className="highlight-link text-sm font-medium">
            Security
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2 hover-lift"
            asChild
          >
            <a href="https://discord.gg/d5xrrv4j7U" target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4" />
              <span>Try Now</span>
            </a>
          </Button>
          
          <Button
            size="sm"
            className="hidden sm:flex items-center gap-2 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover-lift"
            asChild
          >
            <a href="https://discord.gg/d5xrrv4j7U" target="_blank" rel="noopener noreferrer">
              <Zap className="w-4 h-4" />
              <span>Join Discord</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
