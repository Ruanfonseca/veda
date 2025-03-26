
import Footer from "@/components/Footer";
import ProjectArea from "@/components/projects/ProjectArea";
import StatisticsSection from "@/components/projects/StatisticsSection";
import { Button } from "@/components/ui/button";
import { projectAreas, statistics } from "@/data/projectsData";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-8">
        <div className="container mx-auto px-4 py-12">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            Voltar
          </Button>

          <h1 className="text-4xl font-bold text-primary mb-12">
            Nossos Projetos e Impacto Social
          </h1>

          <StatisticsSection statistics={statistics} />

          {projectAreas.map((area, index) => (
            <div id={area.id} key={index}>
              <ProjectArea area={area} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
