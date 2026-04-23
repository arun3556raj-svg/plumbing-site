export function CtaBand() {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
            Ready to upgrade your bathroom?
          </h2>
          <p className="text-white/80 text-lg">
            Or need urgent plumbing support? We're ready to help.
          </p>
        </div>
        <div className="shrink-0 flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-white text-secondary px-8 py-4 rounded-md font-bold text-lg hover:bg-white/90 transition-colors shadow-lg">
            Request an Estimate
          </a>
          <a href="tel:555-0123" className="bg-secondary-foreground/10 text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary-foreground/20 transition-colors">
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}