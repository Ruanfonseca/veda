
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import crianca from '../assets/crianca.png';
import didatico from '../assets/didatico.png';
import abrigo from '../assets/elaborar.jpg';
import ods from '../assets/ods.png';
import acessoria from '../assets/planoDiretor.png';
import protecao from '../assets/protecao.jpg';
import turismo from '../assets/turismo.jpg';
import urbano from '../assets/urbano.jpg';
import vereanca from '../assets/vereanca.jpeg';

const projects = [
  {
    title: "Coordenação Técnica do Programa de Mentoria Política – Projeto Mulheres e Vereança ",
    description: "Fortalecimento da presença de mulheres na política por meio de capacitação e mentoria.",
    image: vereanca,
    id: "mulheres-vereanca"
  },

  {
    title: "Treinamento sobre Escuta Protegida para Redes de Proteção a Crianças e Adolescentes Vítimas ou Testemunhas de Violência.",
    description: "Capacitação de profissionais do sistema de garantia de direitos para a implementação de fluxos e protocolos da Lei da Escuta Protegida (Lei 13.431/2017).",
    image: crianca,
    id: "escuta-protegida-treinamento"
  },

  {
    title: "Coordenação do Projeto Redes de Proteção e Escuta Protegida",
    description: "Fortalecer as redes de proteção e fomentar a implementação da Lei da Escuta Protegida (Lei 13.431/2017). ",
    image: protecao,
    id: "redes-protecao"
  },

  {
    title: "Coordenação do Projeto A Primeira Infância e as Questões Urbanas",
    description: "Promover a escuta de crianças e adolescentes nos  processos de planejamento de  projetos urbanos e sociais.",
    image: urbano,
    id: "primeira-infancia-urbana"
  },

  {
    title: "Coordenação Técnica do Curso Livre de Formação de Condutores de Turismo",
    description: "Capacitar pessoas em vulnerabilidade social interessadas em exercer a ocupação de condutores de turismo, com ênfase na inclusão de pessoas com deficiência.",
    image: turismo,
    id: "condutores-turismo"
  },

  {
    title: "Coordenação Acadêmica de Curso de Pós-Graduação sobre Desenvolvimento Local e ODS",
    description: "Qualificação de profissionais para atuarem no planejamento e implementação de políticas alinhadas aos ODS.",
    image: ods,
    id: "desenvolvimento-ods"
  },

  {
    title: "Atualização de Material Didático sobre Gestão de Projetos",
    description: "Elaborar conteúdo sobre métodos ágeis de gestão de projetos para capacitar profissionais das forças armadas ",
    image: didatico,
    id: "material-didatico"
  },

  {
    title: "Elaboração de projetos sociais para captação de recursos  ",
    description: "Elaborar projetos sociais para viabilizar a captação de recursos via editais ou chamamentos de Organizações da Sociedade Civil ou da administração pública.",
    image: abrigo,
    id: "captacao-recursos"
  },

  {
    title: "Pesquisa sobre Implementação da Lei da Escuta Protegida  ",
    description: "Diagnosticar a implementação da Lei 13.431/2017 no Paraná. ",
    image: protecao,
    id: "pesquisa-escuta-protegida"
  },

  {
    title: "Assessoria técnica ao projeto de Revisão do Plano Diretor de Boa Vista ",
    description: "Elaboração de subsídios sobre o tema da Migração Venezuelana e da Primeira Infância para a revisão do Plano Diretor de Boa Vista ",
    image: acessoria,
    id: "plano-diretor-boa-vista"
  },
];

const ProjectsCarousel = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects#${projectId}`);
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nossos Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Conheça algumas das iniciativas que desenvolvemos para transformar realidades.
          </p>
          <Button
            onClick={() => navigate("/projects")}
            variant="outline"
            className="group"
          >
            Ver Todos os Projetos
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full max-w-6xl mx-auto py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="w-[300px] sm:w-[350px]"
            >
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 mx-4 cursor-pointer h-full"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 h-56 flex flex-col">
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-3 text-primary text-sm font-medium hover:underline">
                    Ver detalhes
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
