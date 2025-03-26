
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const areas = [
  {
    title: "Mulher, empoderamento feminino e políticas públicas",
    description: "Projetos focados no empoderamento feminino, fortalecimento da participação política das mulheres e promoção da autonomia econômica...",
    expanded: "Projetos focados no empoderamento feminino, fortalecimento da participação política das mulheres e promoção da autonomia econômica. As iniciativas impactaram positivamente milhares de mulheres, incluindo candidatas a cargos eletivos, gestoras públicas, empreendedoras e trabalhadoras beneficiadas por programas sociais, com foco especial em grupos vulneráveis como vítimas de violência doméstica. Os resultados foram documentados em livros, e-books e relatórios estratégicos bastante úteis para as mulheres, os trabalhadores e estudiosos que se interessam pelos assuntos desta área temática."
  },
  {
    title: "Proteção dos direitos da criança e do adolescente e políticas públicas",
    description: "Pesquisas e projetos voltados à proteção dos direitos da criança e do adolescente...",
    expanded: "Pesquisas e projetos voltados à proteção dos direitos da criança e do adolescente, com ênfase na análise de políticas públicas, capacitação de profissionais e fortalecimento de redes de proteção. O impacto dessas iniciativas está no fortalecimento das políticas públicas e ampliação do acesso da população à estratégias de atendimento mais humanizadas e eficazes. Os resultados foram consolidados em publicações técnicas e documentos que servem como referência para gestores e especialistas na área da infância e juventude, bem como para adolescentes e jovens."
  },
  {
    title: "Desenvolvimento econômico, social, ambiental, urbano e sustentabilidade",
    description: "Projetos voltados ao desenvolvimento econômico, social, ambiental, urbano e sustentável...",
    expanded: "Projetos voltados ao desenvolvimento econômico, social, ambiental, urbano e sustentável, atuando em parceria com instituições públicas e privadas. Visaram capacitar gestores públicos, técnicos municipais, empreendedores e trabalhadores da assistência social e da saúde, fortalecendo a implementação de políticas públicas e promovendo ações de inclusão produtiva e social. Como impacto, os projetos resultaram na ampliação das oportunidades de geração de renda, qualificação de profissionais para a assistência à pessoa idosa, fortalecimento do empreendedorismo juvenil e aprimoramento da gestão pública municipal."
  },
  {
    title: "Desenvolvimento institucional",
    description: "Projetos que visam aprimorar a gestão de equipes e implementar metodologias inovadoras...",
    expanded: "Projetos que visam aprimorar a gestão de equipes, implementar metodologias inovadoras e viabilizar iniciativas sociais por meio de capacitações e suporte técnico. Foco na qualificação de profissionais, fortalecimento de organizações do terceiro setor e apoio à captação de recursos para políticas sociais. Como resultado, suas ações fortaleceram organizações sociais, aprimoraram a qualificação de profissionais e garantiram a sustentabilidade financeira de projetos voltados a públicos vulneráveis, promovendo maior eficiência na gestão e execução de políticas públicas e sociais."
  },
  {
    title: "Educação e Formação Profissional",
    description: "Criação e participação de cursos presenciais e EAD para diversas áreas sociais",
    expanded: "Criação e participação de cursos presenciais e EAD para diversas áreas sociais. Desenvolvimento de programas educacionais inovadores e formação continuada para profissionais do setor social."
  },
  {
    title: "Desenvolvimento Local e Regional",
    description: "Planejamento de políticas públicas e fortalecimento comunitário",
    expanded: "Planejamento de políticas públicas e fortalecimento comunitário. Implementação de estratégias para desenvolvimento territorial integrado e sustentável."
  }
];

const AreaA = () => {
  const [expandedAreas, setExpandedAreas] = useState<number[]>([]);

  const toggleArea = (index: number) => {
    setExpandedAreas(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Áreas de atuação
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Desenvolvemos soluções integradas para transformação social
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleArea(index)}
                className="w-full text-left flex justify-between items-start gap-4"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {area.title}
                </h3>
                {expandedAreas.includes(index) ? (
                  <ChevronUp className="w-5 h-5 mt-1 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 mt-1 flex-shrink-0" />
                )}
              </button>
              <p className="text-muted">
                {expandedAreas.includes(index) ? area.expanded : area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaA;
