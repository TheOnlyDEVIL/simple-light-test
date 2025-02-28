
import { Shield, Zap, Target, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Completely Undetectable",
      description: "Our advanced cloaking technology ensures you're never detected. With 99 UNC and 99 SUNC, Sniper provides the highest level of security available."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Experience minimal latency with our optimized execution engine. Run scripts instantly with no slowdowns or performance issues."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Bulletproof Security",
      description: "Our multi-layered security architecture protects your account and keeps your activities private. Sniper is built with security as the top priority."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Execution",
      description: "Execute any script with pinpoint accuracy. Our engine ensures perfect execution every time, with no errors or mishaps."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider bg-secondary text-primary rounded-full">
            FEATURES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-gradient">Why Choose Sniper?</h2>
          <p className="text-lg text-muted-foreground">
            Experience the new standard in execution. Sniper combines unmatched undetectability 
            with superior performance to deliver the ultimate tool.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card reveal-on-scroll p-8 rounded-2xl border bg-card hover:glass-morphism dark:hover:glass-morphism-dark"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
