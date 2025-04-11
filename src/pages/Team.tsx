
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import imagemAdriana from '../assets/adriana.jpeg';
import imagemRosimere from '../assets/rosimere-veda.jpeg';


const Team = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-20">
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
              Nossa Equipe
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={imagemAdriana}
                    alt="Membro da equipe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">Adriana Valle Mota</h3>
                <p className="text-muted">Sócia Fundadora</p>
                <p className="text-muted">
                  Eu Adriana Valle Mota, sou nascida e criada em Niterói, região metropolitana do Rio de Janeiro, de onde me mudei somente em 2023, para morar na capital do estado. Sou graduada em pedagogia pela UNIRIO e mestre pelo Programa de Estudos Pós Graduados em Política Social da UFF. Sou mãe, educadora popular, gosto muito de trabalhar em equipe e de atuar em projetos multidisciplinares. Nas horas vagas eu gosto de carnaval, samba e futebol, sou frequentadora assídua do Maracanã e integro dois blocos de carnaval, um no Rio e outro em Niterói.
                </p>
                <p className="text-muted">
                  Tenho experiência na gestão legislativa e também tive oportunidade de atuar no executivo, atuando sempre de forma comprometida com a educação e os direitos humanos, particularmente os direitos das mulheres e da população LGBTIA+. Ao longo de minha trajetória profissional adquiri experiência na implementação, avaliação e monitoramento de projetos de desenvolvimento social e promoção de direitos humanos, em particular os voltados para mulheres em situação de violência.
                </p>
                <p className="text-muted">
                  Como educadora popular, sou qualificada para exercer a moderação de oficinas, em particular para a capacitação em temas de direitos humanos, direitos das mulheres, gênero, diversidade, violências, direitos sexuais e reprodutivos e mulheres na política. Também tenho experiência na coordenação e execução de projetos, desde a sua redação, controle orçamentário, acompanhamento programático, coordenação de equipes e elaboração de relatórios narrativos e financeiros.
                </p>
                <p className="text-muted">
                  Quer saber mais um pouco? <a href="http://lattes.cnpq.br/9294669067093761" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Confira o Currículo Lattes</a>
                </p>
              </div>

              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={imagemRosimere}
                    alt="Membro da equipe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">Rosimere Souza</h3>
                <p className="text-muted">Sócia Fundadora</p>
                <p className="text-muted">
                  Eu Rosimere de Souza, sou pernambucana e vivo no Rio de Janeiro desde criança. Aqui cresci e desenvolvi meus estudos e minha trajetória profissional. Sou graduada, mestre e doutora em Serviço Social pela PUC Rio. Casada há mais de 20 anos, gosto da vida em família, com os amigos, de viagens, de gatos, de plantas e de trabalhar.
                  Sou uma profissional com experiência de pesquisa e assessoria em políticas públicas, especialmente nas áreas de assistência social, direitos humanos, direitos da criança e do adolescente, política urbana e ambiental.
                  Minha trajetória profissional é marcada pelo compromisso com a qualificação da atuação de gestores, técnicos, conselheiros de políticas públicas e integrantes das organizações da sociedade civil, por meio de treinamento, palestras, cursos e oficinas de trabalho. Atuo como docente nos cursos no CAPACITA SUAS, nos cursos de Introdução ao Controle Social, Introdução à Vigilância Socioassistencial e Introdução à Elaboração de Planos Municipais da Assistência Social, na UNIASSELVI, de onde sou conteudista de temas sobre políticas sociais e serviço social. E no IBAM atuo como docente em temas relacionados às políticas de direitos da criança e do adolescente. Neste campo da formação venho atuado com mentoria para mulheres visando o fortalecimento da participação feminina na política e, no campo do empreendedorismo no sentido de contribuir para aumentar suas possibilidades de inclusão produtiva.
                  Como pesquisadora passei por diversos temas desde aqueles relacionados à política urbana (planos diretores e projetos de trabalho social), políticas sociais, políticas de segurança pública, além das políticas para mulheres e direitos da criança e do adolescente, com trabalhos publicados.
                  Além dessas expertises tenho habilidade para conceber e coordenar metodologias para o exercício coletivo de avaliação e planejamento de políticas públicas, organizações sociais e coletivos. Nesta direção durante anos me aperfeiçoei no trabalho de elaboração de projetos para captação de recursos junto a governos, organizações e fundos internacionais e fundos privados.
                  Meu trabalho se destaca pela capacidade de articular teoria e prática, promovendo soluções inovadoras e eficazes para o aprimoramento de políticas públicas.
                  Atendo a um público diversificado, abrangendo desde gestores e técnicos até comunidades em situação de vulnerabilidade, sempre com um olhar humanizado e um compromisso com a transformação social. Quer saber mais um pouco?
                </p>
                <p className="text-muted">
                  <a href="http://lattes.cnpq.br/0808489822484696" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center">
                    Confira o Currículo Lattes
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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

export default Team;
