import { Phone, Mail, MapPin, Wrench } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary pt-24 pb-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-secondary text-white p-2 rounded-md">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight text-white">
                Hearthline.
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Premium local bathroom installation and master plumbing services. Doing it right, every single time.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <a href="tel:555-0123" className="flex items-center gap-3 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@hearthline.com" className="flex items-center gap-3 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>hello@hearthline.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span>Serving the greater metropolitan area and surrounding neighborhoods.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#services" className="hover:text-secondary transition-colors">Bathroom Installation</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Pipeline Repair</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Drainage Lines</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Kitchen & Bathroom Jams</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Bathroom Grout Work</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-lg">Hours</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8am - 2pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Emergency Only</span>
              </li>
            </ul>
            <div className="mt-6 inline-block bg-white/10 px-4 py-2 rounded text-sm text-white border border-white/10">
              24/7 Emergency Support Available
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Hearthline Plumbing & Bath Co. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}