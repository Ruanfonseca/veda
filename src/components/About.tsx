
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import imagem from '/lovable-uploads/753a4cbc-b2e9-4b3b-8429-850ff33854e7.png';


const About = () => {
  const navigate = useNavigate();

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={imagem}
                alt="Equipe Veda Consultoria"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre a Veda Consultoria
            </h2>
            <p className="text-muted mb-6">
              A Veda Consultoria em Projetos Sociais é uma sociedade simples limitada, fundada em 2009 e dirigida por duas mulheres. Nossa atuação empresarial se baseia em anos de experiência em assessoria, consultoria, pesquisa e treinamentos, o campo das políticas para as mulheres e crianças e adolescentes.
              Eu Rosimere de Souza, sou pernambucana e vivo no Rio de Janeiro desde criança. Aqui cresci e desenvolvi meus estudos e minha trajetória profissional. Sou graduada, mestre e doutora em Serviço Social pela PUC Rio. Casada há mais de 20 anos, gosto da vida em família, com os amigos, de viagens, de gatos, de plantas e de trabalhar.
              Sou uma profissional com experiência de pesquisa e assessoria em políticas públicas, especialmente nas áreas de assistência social, direitos humanos, direitos da criança e do adolescente, política urbana e ambiental.
              Minha trajetória profissional é marcada pelo compromisso com a qualificação da atuação de gestores, técnicos, conselheiros de políticas públicas e integrantes das organizações da sociedade civil, por meio de treinamento, palestras, cursos e oficinas de trabalho. Atuo como docente nos cursos no CAPACITA SUAS, nos cursos de Introdução ao Controle Social, Introdução à Vigilância Socioassistencial e Introdução à Elaboração de Planos Municipais da Assistência Social, na UNIASSELVI, de onde sou conteudista de temas sobre políticas sociais e serviço social. E no IBAM atuo como docente em temas relacionados às políticas de direitos da criança e do adolescente. Neste campo da formação venho atuado com mentoria para mulheres visando o fortalecimento da participação feminina na política e, no campo do empreendedorismo no sentido de contribuir para aumentar suas possibilidades de inclusão produtiva.
              Como pesquisadora passei por diversos temas desde aqueles relacionados à política urbana (planos diretores e projetos de trabalho social), políticas sociais, políticas de segurança pública, além das políticas para mulheres e direitos da criança e do adolescente, com trabalhos publicados.
              Além dessas expertises tenho habilidade para conceber e coordenar metodologias para o exercício coletivo de avaliação e planejamento de políticas públicas, organizações sociais e coletivos. Nesta direção durante anos me aperfeiçoei no trabalho de elaboração de projetos para captação de recursos junto a governos, organizações e fundos internacionais e fundos privados.
              Meu trabalho se destaca pela capacidade de articular teoria e prática, promovendo soluções inovadoras e eficazes para o aprimoramento de políticas públicas.
              Atendo a um público diversificado, abrangendo desde gestores e técnicos até comunidades em situação de vulnerabilidade, sempre com um olhar humanizado e um compromisso com a transformação social. Quer saber mais um pouco?

            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">

              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Missão</h4>
                <p className="text-muted">
                  Transformar realidades através de projetos sociais inovadores e sustentáveis,
                  promovendo a igualdade de gênero e os direitos fundamentais.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Direitos Humanos</h4>
                <p className="text-muted">
                  A Veda Consultoria atua de forma comprometida com a promoção e defesa dos direitos humanos,
                  acreditando que todas as pessoas devem ser tratadas com dignidade, respeito e justiça.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Valores</h4>
                <ul className="text-muted list-disc list-inside">
                  <li>Compromisso Social</li>
                  <li>Igualdade</li>
                  <li>Inovação</li>
                  <li>Ética</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                onClick={() => navigate("/logo")}
                variant="outline"
                className="w-full md:w-auto"
              >
                História da Logo
              </Button>
              <Button
                onClick={() => navigate("/team")}
                variant="outline"
                className="w-full md:w-auto"
              >
                Conheça Nossa Equipe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">
            Nossa Trajetória de Impacto Social
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100+ </div>
              <p className="text-muted">Municípios</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">23+ </div>
              <p className="text-muted">Projetos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Mais de 5.000</div>
              <p className="text-muted">Pessoas beneficiadas diretamente</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                27 unidades
              </div>
              <p className="text-muted">
                Alcance em todos os estados da federação
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">+ </div>
              <p className="text-muted">Produção de diversas publicações com conteúdo técnico</p>
            </div>
          </div>
          <p className="text-muted text-center mt-8 max-w-2xl mx-auto">
            Esses números refletem nosso compromisso em formar profissionais, fortalecer políticas públicas e transformar vidas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
