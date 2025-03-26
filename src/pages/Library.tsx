
import Footer from "@/components/Footer";
import LibrarySection from "@/components/library/LibrarySection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Library = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="outline" className="mb-6 bg-white/10 text-white hover:bg-white/20 border-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para página inicial
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Biblioteca Veda</h1>
          <p className="text-xl opacity-90">
            Publicações e materiais técnicos produzidos com a participação de nossa equipe
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <LibrarySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Library;
