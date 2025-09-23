import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { unidades } from '../data/UnidadesData'; 


const ITENS_POR_PAGINA = 8;

const Localizacao = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [direcaoAnimacao, setDirecaoAnimacao] = useState<'left' | 'right'>('right');

  const totalPaginas = Math.ceil(unidades.length / ITENS_POR_PAGINA);

  const irParaProxima = () => {
    setDirecaoAnimacao('right');
    setPaginaAtual((pag) => (pag + 1) % totalPaginas);
  };

  const irParaAnterior = () => {
    setDirecaoAnimacao('left');
    setPaginaAtual((pag) => (pag - 1 + totalPaginas) % totalPaginas);
  };

  const indiceInicial = paginaAtual * ITENS_POR_PAGINA;
  const unidadesVisiveis = unidades.slice(indiceInicial, indiceInicial + ITENS_POR_PAGINA);

  return (
    <div className="w-full flex justify-center py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-blue-500 mb-8">Unidades</h1>
        
        <div className="relative">
          <button 
            onClick={irParaAnterior}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all text-cyan-500"
            aria-label="Página anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div 
            key={paginaAtual} 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 animate-roll-in-${direcaoAnimacao}`}
          >
            {unidadesVisiveis.map((unidade) => (
              <Link 
                key={unidade.id}
                to={`/unidades/${unidade.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-2 block"
              >
                <div className="w-full h-40 bg-gray-200">
                  <img src={unidade.img} alt={unidade.nome} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-blue-500">
                  <h3 className="text-white font-semibold text-center truncate">{unidade.nome}</h3>
                </div>
              </Link>
            ))}
          </div>

          <button 
            onClick={irParaProxima}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all text-cyan-500"
            aria-label="Próxima página"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Localizacao;