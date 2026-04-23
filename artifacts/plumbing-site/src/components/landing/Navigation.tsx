import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, Menu, X, Wrench } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-md group-hover:bg-secondary transition-colors">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Hearthline.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">Services</a>
          <a href="#projects" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">Projects</a>
          <a href="#process" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">Our Process</a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:555-0123" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-secondary transition-colors">
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </a>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Request Service
          </a>
        </div>

        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <a href="#services" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#projects" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#process" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileOpen(false)}>Our Process</a>
          <a href="#contact" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileOpen(false)}>Contact</a>
          <div className="h-px w-full bg-border my-2"></div>
          <a href="tel:555-0123" className="flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </a>
          <a href="#contact" className="bg-primary text-primary-foreground px-4 py-3 rounded-md text-sm font-medium text-center">
            Request Service
          </a>
        </div>
      )}
    </header>
  );
}