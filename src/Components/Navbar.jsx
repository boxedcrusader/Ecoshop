import { useState, useEffect } from 'react';
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-100 shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              PAGES
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              DESIGNER
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              STORE
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              CONTACT
            </a>
            <CiUser />
            <CiShoppingCart />
            <CiSearch />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="space-y-2 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
            >
              HOME
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
            >
              PAGES
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
            >
              DESIGNER
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
            >
              STORE
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
