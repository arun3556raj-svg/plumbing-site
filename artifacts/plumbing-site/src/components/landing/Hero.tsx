import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { assetUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-semibold mb-6 border border-primary/10">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Trusted Local Home Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] text-foreground mb-6">
              Masterful Plumbing & <span className="text-secondary italic">Bathroom Installation.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Family-run, locally trusted residential contractors. We treat your home with respect, arrive on time, and leave every bathroom better than we found it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors group">
                Request a Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground px-8 py-4 rounded-md font-medium text-lg hover:bg-muted transition-colors">
                Explore Services
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <div className="text-sm font-medium text-foreground">
                <span className="block font-bold">5.0 Average Rating</span>
                <span className="text-muted-foreground">from local homeowners</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src={assetUrl("/images/hero-bathroom.png")} 
                alt="Clean modern bathroom installation" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Clean, Careful Work</p>
                  <p className="text-muted-foreground text-xs">Drop cloths always used.</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary -z-10 rounded-2xl opacity-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
