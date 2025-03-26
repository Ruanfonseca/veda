
import About from "@/components/About";
import AreaA from "@/components/AreaA";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <AreaA />
      <Services />
      <Projects />
      <About />
      <Clients />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
};

export default Index;
