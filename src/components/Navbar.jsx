import { Link, useLocation } from "react-router-dom";
import { Home, Bus, HelpCircle } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600"
      : "text-gray-500 hover:text-blue-500";

  return (
    <nav className="flex justify-around items-center py-2 border-t bg-white shadow-sm">
      <Link to="/" className={linkClass("/")}>
        <div className="flex flex-col items-center">
          <Home className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </div>
      </Link>
      <Link to="/buses" className={linkClass("/buses")}>
        <div className="flex flex-col items-center">
          <Bus className="w-5 h-5" />
          <span className="text-xs">Buses</span>
        </div>
      </Link>
      <Link to="/help" className={linkClass("/help")}>
        <div className="flex flex-col items-center">
          <HelpCircle className="w-5 h-5" />
          <span className="text-xs">Help</span>
        </div>
      </Link>
    </nav>
  );
};
export default Navbar;
