import Header from "./components/header";
import Integrantes from "./routes/integrantes";
import Contato from "./routes/contato";
import Main from "./routes/main";
import Faq from "./routes/faq";
import Footer from "./components/Footer";
import Sobre from "./routes/sobre";
import MainHome from "./components/MainHome";
import VerConsultas from "./routes/VerConsultas";
import Localizacao from "./routes/Localizacao";
import UnidadeDetalhe from "./routes/unidadeDetalhes";
import SuporteSite from "./routes/SuporteSite";
import { Routes, Route } from "react-router-dom";
import ScrollTopPage from "./components/ScrollTopPage"; 

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <ScrollTopPage />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/main" element={<Main />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/VerConsultas" element={<VerConsultas />} />
            <Route path="/Localizacao" element={<Localizacao />} />
            <Route path="/unidades/:unidadeId" element={<UnidadeDetalhe />} />
            <Route path="/SuporteSite" element={<SuporteSite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;