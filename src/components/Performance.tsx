
import { Button } from "@/components/ui/button";

const Performance = () => {
  const metrics = [
    { label: "UNC Score", value: "99", unit: "/100" },
    { label: "SUNC Score", value: "99", unit: "/100" },
    { label: "Detection Rate", value: "0", unit: "%" },
    { label: "Execution Speed", value: "<5", unit: "ms" }
  ];
  
  return (
    <section id="performance" className="py-20 md:py-32 bg-secondary dark:bg-accent relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider bg-background text-primary rounded-full">
                PERFORMANCE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gradient">
                Unmatched Speed & Reliability
              </h2>
              <p className="text-muted-foreground mb-8">
                Sniper sets a new standard with its industry-leading performance metrics. 
                Our executor delivers the fastest execution times while maintaining complete 
                undetectability, giving you the edge you need.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 text-xs font-medium bg-background rounded-full">Instant Execution</span>
                <span className="px-3 py-1 text-xs font-medium bg-background rounded-full">Zero Lag</span>
                <span className="px-3 py-1 text-xs font-medium bg-background rounded-full">Perfect Reliability</span>
                <span className="px-3 py-1 text-xs font-medium bg-background rounded-full">0% Detection Rate</span>
              </div>
              
              <Button 
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover-lift"
                asChild
              >
                <a href="https://discord.gg/d5xrrv4j7U" target="_blank" rel="noopener noreferrer">
                  Experience It Yourself
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal-on-scroll">
              {metrics.map((metric, index) => (
                <div key={index} className="p-6 rounded-2xl bg-background hover:glass-morphism dark:hover:glass-morphism-dark border hover-lift">
                  <div className="text-5xl font-bold mb-2 text-gradient">
                    {metric.value}
                    <span className="text-xl text-muted-foreground">{metric.unit}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
