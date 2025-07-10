
import { Users } from "lucide-react";
import logo from "../assets/logo.PNG";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Left side) */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Cowlytics Logo" className="h-16 w-16" />
          </a>

          {/* Right side: Links + Button */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="/feature"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </a>

            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://cal.com/baudoin-bolingo-cpe66z"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C4F7B] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              Get a Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
