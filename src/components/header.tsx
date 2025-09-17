import { NavLink } from "react-router-dom";
import logo from "../assets/Logos/logohc.png";
import medc from "../assets/Logos/Logo_medicinaUsp.jpg";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      
      <div className="flex justify-between items-center px-10 bg-white shadow-md">
        <img src={logo} alt="Logo Hospital das Clínicas" className="h-30 w-70" />

      
      <nav className="bg-blue-400 text-white flex justify-center py-2 rounded-4xl shadow-md w-100 space-x-4">
        {[
          { name: "Home", path: "/main" },
          { name: "Integrantes", path: "/integrantes" },
          { name: "FAQ", path: "/faq" },
          { name: "Contato", path: "/contato" },
        ].map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-blue-600 rounded-full transition-colors ${
                isActive ? "bg-blue-700 font-semibold" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <img src={medc} alt="Logo Medicina USP" className="h-25 w-50" />
      </div>
    </header>
  );
};

export default Header;
