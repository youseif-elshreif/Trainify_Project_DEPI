import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface NavbarProps {
  isLoggedIn?: boolean;
  onScrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn = false,
  onScrollToSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "navbar-blur shadow-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold animate-fade-in-left">
            <span
              className={`${
                isScrolled ? "text-gray-900" : "text-white"
              } transition-all duration-300`}
            >
              Train<span className="gradient-text animate-gradient">fy</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#home"
              className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
                isScrolled
                  ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                  : "text-white hover:text-[#FF6B35] hover:bg-white/10"
              }`}
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
                isScrolled
                  ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                  : "text-white hover:text-[#FF6B35] hover:bg-white/10"
              }`}
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
                isScrolled
                  ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                  : "text-white hover:text-[#FF6B35] hover:bg-white/10"
              }`}
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
                isScrolled
                  ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                  : "text-white hover:text-[#FF6B35] hover:bg-white/10"
              }`}
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 animate-fade-in-right">
            {!isLoggedIn ? (
              <>
                <button
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 border border-transparent hover:border-[#FF6B35]/20"
                      : "text-white hover:text-[#FF6B35] hover:bg-white/10 border border-white/20 hover:border-[#FF6B35]/50"
                  }`}
                >
                  Login
                </button>
                <button className="bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#e55a2b] hover:to-[#d14c1f] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Register
                </button>
              </>
            ) : (
              <>
                <button
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 border border-transparent hover:border-[#FF6B35]/20"
                      : "text-white hover:text-[#FF6B35] hover:bg-white/10 border border-white/20 hover:border-[#FF6B35]/50"
                  }`}
                >
                  Dashboard
                </button>
                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#home"
                className="block text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300"
                onClick={(e) => handleNavClick(e, "services")}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                {!isLoggedIn ? (
                  <>
                    <button className="block w-full text-left text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300">
                      Login
                    </button>
                    <button className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white px-4 py-3 rounded-lg font-medium hover:from-[#e55a2b] hover:to-[#d14c1f] transition-all duration-300 shadow-lg">
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    <button className="block w-full text-left text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300">
                      Dashboard
                    </button>
                    <button className="block w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg">
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
