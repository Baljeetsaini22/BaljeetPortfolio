import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-md">
      <div className="w-full p-[7.5%] flex items-center justify-between py-4 shadow-md shadow-yellow-400">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-yellow-400">BS</div>

        {/* Center: Menu (Desktop only) */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <Link
              to="/"
              state={{ scrollTo: "home" }}
              className="hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "about" }}
              className="hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "skills" }}
              className="hover:text-yellow-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "projects" }}
              className="hover:text-yellow-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              state={{ scrollTo: "services" }}
              className="hover:text-yellow-400"
            >
              Services
            </Link>
          </li>
        </ul>

        {/* Right: Let's Talk + Hamburger (mobile) */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="sm:inline-block bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Let's Talk
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden text-yellow-400 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-500 ease-in-out shadow-md shadow-yellow-400 ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg text-white">
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              state={{ scrollTo: "home" }}
              className="hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              state={{ scrollTo: "about" }}
              className="hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              state={{ scrollTo: "skills" }}
              className="hover:text-yellow-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              state={{ scrollTo: "projects" }}
              className="hover:text-yellow-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/services"
              className="hover:text-yellow-400"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
