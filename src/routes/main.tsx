import Card from "../components/MenuCard";
import { useState } from "react";

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

    // Se já carregou, alterna
    if (chatAberto) {
      window.watsonChatInstance.closeWindow();
    } else {
      window.watsonChatInstance.openWindow();
    }

    setChatAberto(!chatAberto);
  };

  const opcoes = [
    {
      img: "/imagens/opcao1.png",
      texto: "Opção 1",
      path: "/opcao1",
    },
    {
      img: "/imagens/opcao2.png",
      texto: "Opção 2",
      path: "/opcao2",
    },
    {
      img: "/imagens/opcao3.png",
      texto: "Opção 3",
      path: "/opcao3",
    },
    {
      img: "/imagens/opcao4.png",
      texto: "Opção 4",
      path: "/opcao4",
    },
    {
      img: "/src/assets/Icones/chatbot_5292556.png",
      texto: "Chatbot",
      onClick: toggleChat,
    },
    {
      img: "/imagens/opcao6.png",
      texto: "Opção 6",
      path: "/opcao6",
    },
    {
      img: "/imagens/opcao7.png",
      texto: "Opção 7",
      path: "/opcao7",
    },
    {
      img: "/imagens/opcao8.png",
      texto: "Opção 8",
      path: "/opcao8",
    },
    {
      img: "/imagens/opcao9.png",
      texto: "Opção 9",
      path: "/opcao9",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {opcoes.map((op, idx) => (
          <Card
            key={idx}
            img={op.img}
            texto={op.texto}
            path={op.path}
            onClick={op.onClick}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
