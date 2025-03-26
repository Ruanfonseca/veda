export default function Services() {
    return (
        <section id="servicos" className="relative py-20 text-white">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-fixed"
                style={{ backgroundImage: "url('https://i.ibb.co/xSmzfW3B/logo.jpg')", backgroundPosition: "center" }}
            ></div>

            {/* Overlay com maior opacidade */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Serviços que oferecemos
                </h2>
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    Oferecemos uma gama de serviços para potencializar o impacto de projetos sociais e políticas públicas:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-semibold mb-2">✔ Consultoria e Assessoria Técnica</h4>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-semibold mb-2">✔ Elaboração e Gestão de Projetos</h4>
                        <p className="text-gray-300 text-sm">Editais públicos, privados e internacionais</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-semibold mb-2">✔ Pesquisas Qualitativas e Quantitativas</h4>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-semibold mb-2">✔ Produção de Materiais Didáticos</h4>
                        <p className="text-gray-300 text-sm">Conteúdo para EAD</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-semibold mb-2">✔ Treinamentos e Capacitações</h4>
                        <p className="text-gray-300 text-sm">Presenciais e online</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-semibold mb-2">✔ Facilitação de Processos Coletivos</h4>
                        <p className="text-gray-300 text-sm">Rodas de conversa, seminários, oficinas</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-semibold mb-2">✔ Avaliação e Monitoramento</h4>
                        <p className="text-gray-300 text-sm">Políticas Públicas e Projetos Sociais</p>
                    </div>
                </div>
                <p className="text-center text-gray-300 mt-12 max-w-2xl mx-auto">
                    Trabalhamos de forma estratégica, garantindo eficiência, inovação e impacto social duradouro.
                </p>
            </div>
        </section>
    );
}