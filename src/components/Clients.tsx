
import { Users } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const clients = [
  {
    name: "Escola Nacional de Administração Pública",
    logo: "https://bibliotecadigital.economia.gov.br/retrieve/8357f24c-2e58-4eba-b1e4-724bf6f80f54",
  },
  {
    name: "Ministério dos Direitos Humanos",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/MDCAssinatura.png/300px-MDCAssinatura.png",
  },
  {
    name: "Ministério da Mulher",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MMAssinatura.png/1920px-MMAssinatura.png",
  },
  {
    name: "Prefeitura Rio de janeiro",
    logo: "https://www.rio.rj.gov.br/Portal-2018-theme/images/common/logo-prefeitura-noticias-2021.png",
  },

  {
    name: "Secretaria Municipal",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMPIKt5-5gpCPAhlhbEnBYPYqNIXhEzbf9g&s",
  },
  {
    name: "Uniasselvi",
    logo: "  https://amigoedu-blog-uploads.s3.amazonaws.com/uploads/2021/02/faculdade-uniasselvi.jpg",
  },


  {
    name: "IBAM",
    logo: "https://i0.wp.com/limpezapublica.com.br/wp-content/uploads/2020/08/Ibam_vertical_cmyk_300dpi-scaled-e1597665450427.jpg?fit=300%2C212&ssl=1",
  },

  {
    name: "Ecology",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEpXpic6SrPPw/company-logo_200_200/company-logo_200_200/0/1631358145501/ecologyandenvironmentdobrasil_logo?e=2147483647&v=beta&t=LDB_Uyzjcv5MfzeOh7snGpO08xa82-2gVTtAGeostkQ",
  },

  {
    name: "BID",
    logo: "  https://semeia.org.br/wp-content/uploads/2023/02/BID-1.jpg",
  },

  {
    name: "Asplande",
    logo: "https://www.asplande.org.br/wp-content/uploads/2021/03/LOGO-ASPLANDE-perfil.jpg",
  },

  {
    name: "Krupp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Thyssenkrupp_AG_Logo_2015.svg/1200px-Thyssenkrupp_AG_Logo_2015.svg.png",
  },

  {
    name: "Abrigo Doce Morada",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuD3qL7yd9zIYe4saT-oetALUTcvhfKOhNmZ4hITNZxSgpRrWufknOXqYDAnjQJWAJXw&usqp=CAU"
  },

  {
    name: "Instituto de Promoção e Defesa de Direitos Humanos Carolina de Jesus ",
    logo: "https://static.wixstatic.com/media/ca61e5_b7563b58d3114b49b67b803d66b65b8c~mv2.jpeg/v1/fill/w_187,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3afc40b2-7573-4605-adfa-0bd42de66f8f.jpeg"
  }
];

const clientCategories = [
  {
    title: "Órgãos Governamentais",
    items: [
      "Escola Nacional de Administração Pública",
      "Ministério dos Direitos Humanos",
      "Ministério da Mulher",
      "Prefeitura Municipal do Rio de Janeiro",
      "Secretaria Especial de Integração Metropolitana do Rio de Janeiro",
      "Secretaria Municipal de Assistência Social do Rio de Janeiro",
      "Secretaria Nacional dos Direitos da Criança e do Adolescente",
    ]
  },
  {
    title: "Organizações Internacionais e ONGs",
    items: [
      "Banco Interamericano de Desenvolvimento (BID)",
      "Fundo das Populações das Nações Unidas (UNFPA)",
      "Organização dos Estados Ibero-americanos",
    ]
  },
  {
    title: "Instituições de Ensino e Pesquisa",
    items: [
      "Universidade Leonardo da Vinci (UNIASSELVI)",
      "Faculdade do Instituto Brasileiro de Administração Municipal (IBAM)",
    ]
  },
  {
    title: "Setor Privado e Empresas",
    items: [
      "Anis",
      "Asplande",
      "Ecology and Environment do Brasil Ltda",
      "Fundo Elas",
      "IPAS",
      "Klabin S. A",
      "REDEH",
      "Rede Nami",
      "Singulares",
      "MMX",
      "LLX",
      "EBX",
      "ThyssenKrupp",
    ]
  }
];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Clientes e Parceiros
          </h2>
          <p className="text-gray-600 mb-8">
            A Veda Consultoria tem uma trajetória consolidada de participação em projetos
            envolvendo instituições renomadas do setor público e privado.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="mb-16 bg-white rounded-xl p-8 shadow-lg">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="py-4"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 h-32">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Client Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {clientCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-2 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Client Counter */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <Users className="w-6 h-6 text-accent" />
            <span className="text-primary font-medium">+100 projetos desenvolvidos para organizações públicas e privadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
