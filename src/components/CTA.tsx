
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white dark:bg-white dark:text-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Experience the Future?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
            Join thousands of users who trust Scout.gg for undetectable, 
            high-performance execution. The ultimate tool is just one click away.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800 hover-lift"
            asChild
          >
            <a 
              href="https://discord.gg/d5xrrv4j7U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <span>Join Our Discord</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
