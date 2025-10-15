import { useState } from "react";
import { Mail, MapPin, Phone, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Case Studies",
    "Pages",
    "Contact",
  ];

  return (
    <header className="w-full bg-[#030b17] text-white">
      {/* Top Info Bar */}
      <div className="border-b border-gray-800 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4 space-y-2 sm:space-y-0">
          <div className="flex flex-wrap items-center space-x-6 text-gray-300">
            <span className="flex items-center space-x-2">
              <MapPin size={15} className="text-blue-500" />
              <span>456 Creative District Ahmad Yani, Medan</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail size={15} className="text-blue-500" />
              <span>hola@dominantsite.com</span>
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
         <a href="/" className="flex items-center space-x-3"> <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center"> <span className="text-primary-foreground font-bold text-xl">AK</span> </div> <span className="text-xl md:text-2xl font-bold text-foreground">Ak NextGen Solutions</span> </a>
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
          <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full px-8 py-2">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
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
