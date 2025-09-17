const Integrantes = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8">
      
      {/* Card do Giovane */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl p-6 mb-8 bg-white rounded-xl shadow-lg border border-blue-600 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
        <img
          src="/src/assets/Foto_Integrantes/GiovaneS_Integrantes.jfif"
          alt="Foto do Integrante Giovane"
          className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 border-2 border-blue-600"
        />
        <div className="flex-grow text-center sm:text-left">
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Nome: Giovane Amato dos Santos</li>
            <li>RM: 561336</li>
            <li>Turma: 1TDSPK</li>
            <li>Cursando ADS - FIAP</li>
          </ul>
        </div>
        <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/giovane-amato-276217306/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Icones/icone-linkedin.png" alt="Icone do LinkedIn" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/RuralGiovane" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Icones/icone_github.png" alt="Icone do GitHub" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Card do Lucas */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl p-6 mb-8 bg-white rounded-xl shadow-lg border border-blue-600 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
        <img
          src="/src/assets/Foto_Integrantes/LucasV_Integrantes.jfif"
          alt="Foto do Integrante Lucas Vieira"
          className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 border-2 border-blue-600"
        />
        <div className="flex-grow text-center sm:text-left">
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Nome: Lucas Figueiredo Vieira</li>
            <li>RM: 561342</li>
            <li>Turma: 1TDSPK</li>
            <li>Cursando ADS - FIAP</li>
          </ul>
        </div>
        <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/devlucasvieira/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Icones/icone-linkedin.png" alt="Icone do LinkedIn" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/DevLuqinhas" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Icones/icone_github.png" alt="Icone do GitHub" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Card do Matheus */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg border border-blue-600 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
        <img
          src="/src/assets/Foto_Integrantes/MatheusR_Integrantes.jfif"
          alt="Foto do Integrante Matheus"
          className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 border-2 border-blue-600"
        />
        <div className="flex-grow text-center sm:text-left">
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Nome: Matheus Roque Arantes</li>
            <li>RM: 561959</li>
            <li>Turma: 1TDSPK</li>
            <li>Cursando ADS - FIAP</li>
          </ul>
        </div>
        <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/matheus-roque-arantes-446280328/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Icones/icone-linkedin.png" alt="Icone do LinkedIn" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/roque-arantes" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Icones/icone_github.png" alt="Icone do GitHub" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Integrantes;