

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Cowlytics Logo" className="h-16 w-16" />
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="flex flex-col space-y-2 py-4 md:hidden">
            <NavLinks onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ onClick }) => (
  <>
    <Link
      to="/"
      onClick={onClick}
      className="text-gray-700 hover:text-blue-600"
    >
      Home
    </Link>
    <Link
      to="/feature"
      onClick={onClick}
      className="text-gray-700 hover:text-blue-600"
    >
      Features
    </Link>
    <Link
      to="/about"
      onClick={onClick}
      className="text-gray-700 hover:text-blue-600"
    >
      About Us
    </Link>
    <Link
      to="/contact"
      onClick={onClick}
      className="text-gray-700 hover:text-blue-600"
    >
      Contact Us
    </Link>
    <a
      href="https://cal.com/baudoin-bolingo-cpe66z"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#1C4F7B] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
    >
      Get a Demo
    </a>
  </>
);

export default Navbar;
