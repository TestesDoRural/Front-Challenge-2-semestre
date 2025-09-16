const Footer = () => {
  return (
    <footer className="bg-[#222] text-white text-center p-5">
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 text-sm md:text-base">
          &copy; 2025 Projeto Chatbot HC — Todos os direitos reservados.
        </p>
        <p className="mb-4 text-xs md:text-sm">
          Desenvolvido por Giovane Amato, Lucas Vieira e Matheus Roque.
        </p>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:space-x-6">
          <a
            href="#"
            title="Instagram"
            className="text-[#44aaff] hover:underline text-sm md:text-base transition-transform duration-300 hover:scale-110 inline inline w-8 h-8"
          >
            <img src="/src/assets/Icones/icone-instagram.png" alt="Instagram"/>
          </a>
          <a
            href="#"
            title="LinkedIn"
            className="text-[#44aaff] hover:underline text-sm md:text-base transition-transform duration-300 hover:scale-110 inline inline w-8 h-8"
          >
            <img src="/src/assets/Icones/icone-linkedin.png" alt="Instagram"/>
          </a>
          <a
            href="mailto:contato@projetoviagem.com"
            title="E-mail"
            className="text-[#44aaff] hover:underline text-sm md:text-base transition-transform duration-300 hover:scale-110 inline w-8 h-8"
          >
            <img src="/src/assets/Icones/email.png" alt="Instagram"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;