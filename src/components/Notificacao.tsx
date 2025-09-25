import React from "react";

interface NotificacaoProps {
  onClose: () => void;
}

const Notificacao: React.FC<NotificacaoProps> = ({ onClose }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] animate-slideDown">
      <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-xl shadow-lg border border-blue-300">
        <h3 className="text-lg font-semibold text-blue-500">
          Mensagem enviada
        </h3>
        <p className="text-sm text-gray-600">Sua resposta chegará por email</p>
        <button
          onClick={onClose}
          className="mt-2 px-3 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Notificacao;
