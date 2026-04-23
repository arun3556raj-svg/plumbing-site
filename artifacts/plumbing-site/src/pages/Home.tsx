import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Services } from "@/components/landing/Services";
import { Values } from "@/components/landing/Values";
import { Projects } from "@/components/landing/Projects";
import { Process } from "@/components/landing/Process";
import { Testimonials } from "@/components/landing/Testimonials";
import { CtaBand } from "@/components/landing/CtaBand";
import { ContactFooter } from "@/components/landing/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Values />
      <Projects />
      <Process />
      <Testimonials />
      <CtaBand />
      <ContactFooter />
    </main>
  );
}