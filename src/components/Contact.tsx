'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle, Instagram, Loader2, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from "react";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const { toast } = useToast();

  const clearInputs = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  const sendEmail = async () => {
    if (!nome || !email || !mensagem) {
      setModalMessage('Por favor, preencha todos os campos antes de enviar.');
      setModalSuccess(false);
      setModalIsOpen(true);
      return;
    }

    setIsLoading(true);

    const templateParams = {
      name: nome,
      message: mensagem,
      email: email,
      phone: telefone
    };

    try {
      const response = await emailjs.send(
        "service_usk7pz5",
        "template_9j8kc0h",
        templateParams,
        "WwknFyzpsEMdh7pUA"
      );

      if (response.status === 200 || response.status === 201) {
        setModalMessage(`Perfeito ${nome}, em breve retornaremos seu contato!`);
        setModalSuccess(true);
        clearInputs();
      } else {
        setModalMessage(`Erro no processo de envio: ${response.text}`);
        setModalSuccess(false);
      }
    } catch (err) {
      console.error("ERRO: ", err);
      setModalMessage('Ocorreu um erro ao enviar o email. Por favor, tente novamente.');
      setModalSuccess(false);
    } finally {
      setIsLoading(false);
      setModalIsOpen(true);
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5521967509161";
    const message = encodeURIComponent(`Olá, gostaria de saber mais sobre os serviços da Veda Consultoria.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="relative py-20 text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed"
        style={{ backgroundImage: "url('https://i.ibb.co/xSmzfW3B/logo.jpg')", backgroundPosition: "center" }}
      ></div>

      {/* Overlay com maior opacidade */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a alcançar o próximo nível
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white bg-opacity-20 rounded-2xl p-8 backdrop-blur-md">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent" size={24} />
                <a href="mailto:vedaconsultoria@gmail.com" className="text-gray-300 hover:text-accent transition-colors">
                  vedaconsultoria@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="text-accent" size={24} />
                <a
                  href="https://instagram.com/veda.consultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  @veda.consultoria
                </a>
              </div>
              <div className="mt-8">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  Contato via WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
                <div>
                  <Input
                    type="text"
                    placeholder="Nome"
                    className="w-full text-black"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full text-black"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensagem"
                    className="w-full min-h-[120px] text-black"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de resposta melhorado */}
      <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
        <DialogContent className={`border-2 ${modalSuccess ? 'border-green-500' : 'border-red-500'} max-w-md`}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {modalSuccess ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-green-500">Mensagem Enviada!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="text-red-500">Atenção</span>
                </>
              )}
            </DialogTitle>
            <DialogDescription className="pt-2 text-base">
              {modalMessage}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => setModalIsOpen(false)}
              className={`${modalSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white`}
            >
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
