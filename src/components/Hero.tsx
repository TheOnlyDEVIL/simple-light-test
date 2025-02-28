
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider bg-secondary text-primary rounded-full animate-fade-in" style={{ animationDelay: "0.1s" }}>
            INTRODUCING SCOUT.GG
          </div>

          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient animate-fade-in glitch"
            style={{ animationDelay: "0.2s" }}
          >
            The Ultimate Undetectable Executor
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground mx-auto mb-10 max-w-2xl animate-fade-in shimmer"
            style={{ animationDelay: "0.3s" }}
          >
            Experience unparalleled performance with 99 UNC and 99 SUNC. 
            Scout.gg provides the most secure, efficient, and undetectable 
            execution environment available today.
          </p>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover-lift pulse"
              asChild
            >
              <a href="https://discord.gg/d5xrrv4j7U" target="_blank" rel="noopener noreferrer">
                Get Scout.gg Now
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto group hover-lift"
              asChild
            >
              <a href="#features">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className="mt-16 md:mt-24 max-w-5xl mx-auto px-6 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl animate-float">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl md:text-4xl font-bold text-white text-balance glow">Superior Performance. Complete Undetectability.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
