import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Hearthline completely transformed our outdated master bath. The bathroom installation was flawless, and they left the house spotless every single evening. True professionals.",
    author: "Sarah M.",
    location: "Oakridge Neighborhood"
  },
  {
    quote: "We had a severe kitchen jam that nobody else could fix. They showed up quickly, diagnosed the drainage line issue, and handled it perfectly. Highly recommended.",
    author: "David T.",
    location: "Pine Valley"
  },
  {
    quote: "The bathroom grout work they did made our shower look brand new again. It's rare to find contractors who communicate this well and do such meticulous work.",
    author: "Elena R.",
    location: "Westside District"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
        <Quote className="w-12 h-12 text-secondary/30 mx-auto mb-8" />
        
        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-2xl md:text-4xl font-serif text-foreground italic mb-8 leading-snug">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-bold text-foreground text-lg">{testimonials[current].author}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-secondary w-4' : 'bg-border'}`}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}