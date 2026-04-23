import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-primary-foreground/10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
              <Counter end={25} suffix="+" />
            </div>
            <p className="text-sm md:text-base font-medium text-primary-foreground/80">Years of Local Experience</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
              <Counter end={1200} suffix="+" />
            </div>
            <p className="text-sm md:text-base font-medium text-primary-foreground/80">Bathrooms Installed</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
              <Counter end={100} suffix="%" />
            </div>
            <p className="text-sm md:text-base font-medium text-primary-foreground/80">Satisfaction Guarantee</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
              <Counter end={24} suffix="/7" />
            </div>
            <p className="text-sm md:text-base font-medium text-primary-foreground/80">Emergency Support</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}