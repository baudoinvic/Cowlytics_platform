// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Users } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-sm border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <Users className="h-8 w-8 text-blue-600" />
//             <span className="text-xl font-bold text-gray-900">Cowlytics</span>
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/"
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               Features
//             </Link>
//             <Link
//               to="/about"
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/contact"
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>

//           <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Users } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Cowlytics</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
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
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
