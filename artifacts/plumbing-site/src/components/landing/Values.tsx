import { motion } from "framer-motion";
import { Shield, Clock, PaintBucket } from "lucide-react";

export function Values() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Respect for your home. <br />
              <span className="text-muted-foreground">Pride in our work.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We aren't a faceless commercial outfit. We are local tradespeople who understand that we are walking into your home. We lay down drop cloths, we wear clean boots, and we treat your bathroom breaking and renovations with extreme care.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2 text-foreground">Locally Trusted</h4>
                  <p className="text-muted-foreground">We rely on neighborhood word-of-mouth. Our reputation is built on doing the right thing, every single time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <PaintBucket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2 text-foreground">Pristine Workspaces</h4>
                  <p className="text-muted-foreground">Bathroom installation is messy. We manage the dust, protect your floors, and clean up thoroughly daily.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2 text-foreground">On-Time Reliability</h4>
                  <p className="text-muted-foreground">We show up when we say we will. No endless waiting windows. Your time is as valuable as ours.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="/images/service-plumbing.png" 
                alt="Perfectly soldered copper pipes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Abstract decorative pipe shape */}
            <svg className="absolute -bottom-8 -left-8 w-32 h-32 text-secondary opacity-20 -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M10,90 L10,50 A40,40 0 0,1 50,10 L90,10" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}