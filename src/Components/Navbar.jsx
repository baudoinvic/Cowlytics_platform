
import { Users } from "lucide-react";


const Navbar = () => {
  return (
    // <nav className="bg-white shadow-sm border-b">
    //   <div className="container mx-auto px-4">
    //     <div className="flex items-center justify-between h-16">
    //       <a href="/" className="flex items-center space-x-2">
    //         <Users className="h-8 w-8 text-blue-600" />
    //         <span className="text-xl font-bold text-gray-900">Cowlytics</span>
    //       </a>

    //       <div className="hidden md:flex items-center space-x-8">
    //         <a
    //           href="/"
    //           className="text-gray-700 hover:text-blue-600 transition-colors"
    //         >
    //           Home
    //         </a>
    //         <a
    //           href="/about"
    //           className="text-gray-700 hover:text-blue-600 transition-colors"
    //         >
    //           About Us
    //         </a>
    //         <a
    //           href="/contact"
    //           className="text-gray-700 hover:text-blue-600 transition-colors"
    //         >
    //           Contact Us
    //         </a>
    //       </div>

    //       <button className="bg-[#1C4F7B] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300">
    //         Get Started
    //       </button>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Left side) */}
          <a href="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Cowlytics</span>
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

            <button className="bg-[#1C4F7B] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
