
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <a href="https://quedsoftoficial.vercel.app/" target="_blank"><p className="text-sm">Desenvolvido por QuedSoft</p></a>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="https://drive.google.com/file/d/1s_K7cRQ_OmK3x9E3lPXUA2Daz-LSoxrO/view?usp=sharing" target="_blank" className="hover:text-accent transition-colors">
              Termos de Uso
            </a>
            <a href="/politica-de-privacidade" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
