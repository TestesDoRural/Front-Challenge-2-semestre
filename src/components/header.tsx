import type { MouseEvent } from "react";
import { Link } from "react-router-dom";

interface Props {
  onNavigate: (page: string) => void;
}

const Header = ({ onNavigate }: Props) => {
  function handleClick(event: MouseEvent, page: string) {
    //event.preventDefault();
    onNavigate(page);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Cardapio</Link>
        </li>
        <li>
          <Link to="/cart">Carrinho</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
