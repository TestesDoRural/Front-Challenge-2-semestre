// src/components/MenuCard.tsx
import { Link } from "react-router-dom";

interface MenuCardProps {
  img: string;
  texto: string;
  path?: string;
  className?: string;
  onClick?: () => void;
}

const MenuCard = ({ img, texto, path, onClick }: MenuCardProps) => {
  const content = (
    <div
      className={`bg-white rounded-xl overflow-hidden 
        shadow-[0_6px_15px_-5px_rgba(59,130,246,0.15)] 
        hover:shadow-[0_8px_20px_-5px_rgba(59,130,246,0.25)] 
        hover:-translate-y-1 transition-all duration-300 
        flex flex-col items-center justify-between text-center
        aspect-square p-3 cursor-pointer
      `}
      onClick={onClick}
    >
      <div className="w-full h-5/5 flex items-center justify-center">
        <img src={img} alt={texto} className="max-h-40 object-contain" />
      </div>
      <p className="text-gray-800 text-lg font-bold pb-4">{texto}</p>
    </div>
  );

  if (path) {
    return <Link to={path}>{content}</Link>;
  }

  return content;
};

export default MenuCard;
