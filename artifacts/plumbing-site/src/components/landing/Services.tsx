import { motion } from "framer-motion";
import { Bath, Droplet, Wrench, Scissors, Grid3X3, Hammer } from "lucide-react";
import { assetUrl } from "@/lib/utils";

const services = [
  {
    icon: <Bath className="w-6 h-6" />,
    title: "Bathroom Installation",
    desc: "Our flagship service. Full-scale, premium bathroom installation handling everything from demolition to final tile. A studio-quality finish in your home.",
    featured: true,
    image: assetUrl("/images/service-bath-install.png")
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "General Plumbing",
    desc: "Reliable, master-level plumbing for everyday residential needs. Leaks, fixtures, valves, and routine maintenance done right the first time.",
    featured: false
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Pipeline Repair & Install",
    desc: "Expert bathroom pipeline installation and pipe line repair. We ensure perfect flow and lasting durability behind the walls.",
    featured: false
  },
  {
    icon: <Grid3X3 className="w-6 h-6" />,
    title: "Bathroom Grouting",
    desc: "Meticulous bathroom grout work to refresh tired tiles. We seal and protect your investment against moisture with precision.",
    featured: false
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Drainage Lines",
    desc: "Comprehensive drainage line clearing, repair, and replacement. Smooth flow restored without destroying your property.",
    featured: false
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "Jam Clearing",
    desc: "Fast, effective kitchen jam and bathroom jam clearing. We clear blockages quickly and cleanly so your household can keep running.",
    featured: false
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Craftsmanship in Every Detail.</h3>
          <p className="text-lg text-muted-foreground">
            From complete bathroom installations to clearing a stubborn kitchen jam, we bring the same level of premium care to every job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border ${
                svc.featured ? 'border-secondary/30 bg-primary text-primary-foreground md:col-span-2 lg:col-span-2 shadow-xl' : 'border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all'
              }`}
            >
              {svc.featured && svc.image && (
                <div className="absolute inset-0 z-0">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
                </div>
              )}
              
              <div className={`relative z-10 p-8 h-full flex flex-col ${svc.featured ? 'justify-center max-w-xl' : ''}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                  svc.featured ? 'bg-secondary text-white' : 'bg-primary/5 text-primary group-hover:bg-secondary group-hover:text-white transition-colors'
                }`}>
                  {svc.icon}
                </div>
                <h4 className={`text-xl font-bold font-serif mb-3 ${svc.featured ? 'text-2xl md:text-3xl' : ''}`}>
                  {svc.title}
                </h4>
                <p className={`${svc.featured ? 'text-primary-foreground/80 text-lg' : 'text-muted-foreground'}`}>
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
