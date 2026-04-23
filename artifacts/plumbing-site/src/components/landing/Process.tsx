import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Inspect",
    desc: "We arrive on time, assess your space, and listen to your vision or diagnose the problem carefully."
  },
  {
    num: "02",
    title: "Analyze",
    desc: "We provide a clear, transparent plan—whether it's an intricate bathroom installation or a swift kitchen jam fix."
  },
  {
    num: "03",
    title: "Execute",
    desc: "With drop cloths down, we work cleanly and methodically, ensuring perfect plumbing and precise bathroom breaking/rebuilding."
  },
  {
    num: "04",
    title: "Finish",
    desc: "We test everything, clean the site impeccably, and leave you with a flawless result."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
          >
            <img 
              src="/images/process-tradesperson.png" 
              alt="Tradesperson working cleanly" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Method</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-12">The Hearthline Standard.</h3>

            <div className="space-y-8 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-border -z-10"></div>

              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-background border-2 border-secondary text-secondary font-bold flex items-center justify-center shadow-sm">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold font-serif text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}