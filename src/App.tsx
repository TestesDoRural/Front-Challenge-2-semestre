import Header from "./components/header";
import Integrantes from "./routes/integrantes";
import Contato from "./routes/contato";
import Main from "./routes/main";
import Faq from "./routes/faq";
import Footer from "./components/Footer";
import Sobre from "./routes/Sobre";
import MainHome from "./components/MainHome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/main" element={<Main />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;