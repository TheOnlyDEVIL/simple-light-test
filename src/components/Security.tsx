
import { Shield, LockKeyhole, EyeOff } from "lucide-react";

const Security = () => {
  return (
    <section id="security" className="py-20 md:py-32 relative">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider bg-secondary text-primary rounded-full">
            SECURITY
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-gradient">
            Complete Undetectability
          </h2>
          <p className="text-lg text-muted-foreground">
            Our state-of-the-art security system ensures you're never detected. 
            Scout.gg creates a perfect shield between you and detection mechanisms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 reveal-on-scroll">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Protection</h3>
            <p className="text-muted-foreground">
              Multiple security layers work in perfect harmony to keep you protected at all times, 
              ensuring your activities remain completely private.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 reveal-on-scroll" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary mb-6">
              <LockKeyhole className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Bulletproof Encryption</h3>
            <p className="text-muted-foreground">
              Military-grade encryption secures all your data and communication, making it 
              impossible for anyone to intercept or analyze your activities.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary mb-6">
              <EyeOff className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Perfect Anonymity</h3>
            <p className="text-muted-foreground">
              Our unique signature masking technology makes your presence completely invisible, 
              giving you the freedom to operate without constraints.
            </p>
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto p-8 rounded-2xl border glass-morphism dark:glass-morphism-dark reveal-on-scroll">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Experience 99 UNC and 99 SUNC</h3>
            <p className="text-muted-foreground mb-0">
              Scout.gg is the only executor to achieve perfect 99/99 scores in both UNC and SUNC metrics, 
              setting a new industry standard for undetectability and secure execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
