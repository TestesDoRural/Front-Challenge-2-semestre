import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Integrantes from "./routes/integrantes";
import Contato from "./routes/contato";
import Main from "./routes/main";
import Faq from "./routes/faq";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const onNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header onNavigate={onNavigate} />
      {currentPage === "home" && <Main />}
      {currentPage === "menu" && <Integrantes />}
      {currentPage === "cart" && <Faq />}
      {currentPage === "about" && <Contato />}
    </>
  );
}


export default App;
