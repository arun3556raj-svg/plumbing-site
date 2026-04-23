import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/utils";

const projects = [
  {
    title: "Master Bath Remodel",
    category: "Bathroom Installation",
    image: assetUrl("/images/project-transformation.png")
  },
  {
    title: "Vintage Copper Reroute",
    category: "Pipeline Repair",
    image: assetUrl("/images/service-plumbing.png")
  },
  {
    title: "Subway Tile & Seal",
    category: "Bathroom Grout Work",
    image: assetUrl("/images/service-grout.png")
  },
  {
    title: "Emergency Kitchen Fix",
    category: "Kitchen Jam",
    image: assetUrl("/images/service-kitchen-jam.png")
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Showcase</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Work That Speaks for Itself.</h3>
            <p className="text-lg text-primary-foreground/80">
              We take immense pride in the tangible results we leave behind. Take a look at some of our recent installations and rescues in local homes.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-medium text-secondary hover:text-white transition-colors">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted/10 cursor-pointer"
            >
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-secondary font-medium text-sm mb-2">{proj.category}</p>
                <h4 className="text-2xl font-serif font-bold text-white">{proj.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
