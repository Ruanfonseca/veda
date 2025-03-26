
const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-br from-purple-900 to-purple-800">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/gradient-particle-wave-background_23-2150521668.jpg')] bg-cover bg-center opacity-20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transformando realidades através de projetos sociais
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Desde 2009, desenvolvendo soluções e assessoria em políticas públicas para mulheres, crianças e adolescentes.
          </p>
          <a
            href="#contato"
            className="inline-block bg-purple-900/80 backdrop-blur-lg shadow-md text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
