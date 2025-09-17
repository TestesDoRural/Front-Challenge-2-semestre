import Card from "../components/MenuCard";
import { useState } from "react";

declare global {
  interface Window {
    watsonChatInstance?: any;
  }
}

const Main = () => {
  const [chatAberto, setChatAberto] = useState(false);

  const toggleChat = () => {
    if (!window.watsonChatInstance) {
      // Se ainda não carregou, tenta novamente
      const interval = setInterval(() => {
        if (window.watsonChatInstance) {
          if (chatAberto) {
            window.watsonChatInstance.closeWindow();
          } else {
            window.watsonChatInstance.openWindow();
          }
          setChatAberto(!chatAberto);
          clearInterval(interval);
        }
      }, 500);
      return;
    }

    if (chatAberto) {
      window.watsonChatInstance.closeWindow();
    } else {
      window.watsonChatInstance.openWindow();
    }

    setChatAberto(!chatAberto);
  };

  const opcoes = [
    { img: "/src/assets/icones-menu/icone-marcar-consulta.png", texto: "Marcar Consulta", path: "" },
    { img: "/src/assets/icones-menu/icone-consulta.png", texto: "Ver Consultas", path: "" },
    { img: "/src/assets/icones-menu/icone-localizacao.png", texto: "Localização", path: "" },
    { img: "/src/assets/icones-menu/icone-sobre.png", texto: "Sobre", path: "/sobre" },
    { img: "/src/assets/icones-menu/chatbot_5292556.png", texto: "Chatbot", onClick: toggleChat },
    { img: "/src/assets/icones-menu/icone-suporte.png", texto: "Suporte", path: "" },
    { img: "/src/assets/icones-menu/icone-equipe.png", texto: "Equipe", path: "/integrantes" },
    { img: "/src/assets/icones-menu/icone-faq.png", texto: "Faq", path: "/faq" },
    { img: "/src/assets/icones-menu/icone-contato.png", texto: "Contato", path: "/contato" },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-4xl max-w-6xl">
        {opcoes.map((op, idx) => {
          const isLast = idx === opcoes.length - 1;

          return (
            <div
              key={idx}
              className={
                isLast
                  ? 
                    "col-span-1 sm:col-span-2 md:col-span-1"
                  : ""
              }
            >
              {/* Card ocupa 100% do container */}
              <Card
                img={op.img} 
                texto={op.texto}
                path={op.path}
                onClick={op.onClick}
                className="h-full w-full"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
