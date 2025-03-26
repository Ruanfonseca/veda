
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-8">
        <div className="container mx-auto px-4">
          <Button
            variant="outline"
            className="mb-8"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Button>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Nossa Logo
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/a3e3fdcd-00fe-477a-83fd-2d5f3cd0a942.png"
                  alt="Logo Veda Consultoria"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-6">
                <p className="text-muted">
                  Nossa logo foi criada por uma das mulheres integrantes do Programa Global de Cultura de Paz,
                  a palestrante, empresária e colunista Dulce Magalhães e tem estreita relação com o nome da empresa.
                </p>

                <p className="text-muted">
                  A palavra VEDA em sânscrito significa precisamente saber, conhecimento, missão da empresa
                  que nasce a partir da união das suas fundadoras: disseminar o conhecimento em prol do
                  aprimoramento das políticas sociais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Logo;

