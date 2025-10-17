import { useState, useEffect } from "react";
import { Mail, Phone, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/akn.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Case Studies",
    "Projects",
    "Contact",
  ];

  // Add scroll listener to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-[#030b17] text-white sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md bg-opacity-90" : ""
      }`}
    >
      {/* Top Info Bar */}
      <div className="border-b border-gray-800 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4 space-y-2 sm:space-y-0">
          <div className="flex flex-wrap items-center space-x-6 text-gray-300">
            <span className="flex items-center space-x-2">
              <Mail size={15} className="text-blue-500" />
              <span>aknextgensolutions@gmail.com</span>
            </span>
            <span className="flex items-center space-x-2">
              <Phone size={15} className="text-blue-500" />
              <span>+800-3374-4676</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a href="#" className="p-1 hover:text-blue-500 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-1 hover:text-blue-500 transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="p-1 hover:text-blue-500 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-lg flex items-center justify-center shadow-lg">
              <img src={logo} alt="AK NextGen Solutions" className="rounded-md"/>
              {/* <span className="text-white font-bold text-xl">AK</span> */}
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-200">
              Ak NextGen Solutions
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-semibold hover:text-blue-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full px-8 py-2 shadow-lg transition-transform transform-gpu hover:-translate-y-0.5">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#030b17] border-t border-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-blue-500 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-8 py-2">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
