
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-purple-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center">
            <img
              src="/lovable-uploads/753a4cbc-b2e9-4b3b-8429-850ff33854e7.png"
              alt="Veda Logo"
              className="h-24 w-24 object-contain rounded-full mx-4"
            />
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")} className="text-white hover:text-accent transition-colors">Início</a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, "#servicos")} className="text-white hover:text-accent transition-colors">Serviços</a>
            <a href="#projetos" onClick={(e) => handleNavClick(e, "#projetos")} className="text-white hover:text-accent transition-colors">Projetos</a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, "#sobre")} className="text-white hover:text-accent transition-colors">Sobre</a>
            <a href="#clientes" onClick={(e) => handleNavClick(e, "#clientes")} className="text-white hover:text-accent transition-colors">Clientes</a>
            <a href="#contato" onClick={(e) => handleNavClick(e, "#contato")} className="text-white hover:text-accent transition-colors">Contato</a>
            <Link to="/library" className="text-white hover:text-accent transition-colors">Biblioteca Veda</Link>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <button className="text-white">
                  <Menu size={28} />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-primary">
                <div className="flex flex-col space-y-6 p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Menu</span>
                    <DrawerClose className="text-white">
                      <X size={28} />
                    </DrawerClose>
                  </div>
                  <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")} className="p-2">Início</a>
                  <a href="#servicos" onClick={(e) => handleNavClick(e, "#servicos")} className="p-2">Serviços</a>
                  <a href="#projetos" onClick={(e) => handleNavClick(e, "#projetos")} className="p-2">Projetos</a>
                  <a href="#sobre" onClick={(e) => handleNavClick(e, "#sobre")} className="p-2">Sobre</a>
                  <a href="#clientes" onClick={(e) => handleNavClick(e, "#clientes")} className="p-2">Clientes</a>
                  <a href="#contato" onClick={(e) => handleNavClick(e, "#contato")} className="p-2">Contato</a>
                  <Link to="/library" className="p-2">Biblioteca Veda</Link>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
