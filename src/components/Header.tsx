import { useState, useEffect } from "react";
import { Mail, Phone, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/akn.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
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
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass animate-glow" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Top Info Bar
          NOTE: when mobile menu opens we hide this on small screens to avoid duplicate contacts.
      */}
      <div className={`border-b border-border/50 text-sm ${isMobileMenuOpen ? "hidden sm:block" : "block"}`}>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4 gap-3">
          {/* Left: email + phone */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="mailto:Innovationbytes@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors whitespace-nowrap"
              aria-label="Email"
            >
              <Mail size={16} className="text-secondary" />
              <span className="text-xs sm:text-sm">Innovationbytes@gmail.com</span>
            </a>

            <a
              href="tel:+80033744676"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors whitespace-nowrap"
              aria-label="Phone"
            >
              {/* <Phone size={16} className="text-blue-400" />
              <span className="text-xs sm:text-sm">+91 8096000442</span> */}
            </a>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-1 rounded-md text-muted-foreground hover:text-primary hover:animate-pulse-glow transition-all"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="p-1 rounded-md text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="p-1 rounded-md text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="p-1 rounded-md text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              <img src={logo} alt="Innovation Bytes" className="w-full h-full object-cover rounded-md" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-200">Innovation Bytes</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-semibold text-gray-200 hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
        <Button
  id="contactus"
  className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full px-6 py-2 shadow-lg transition-transform transform-gpu hover:-translate-y-0.5"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Get Started
</Button>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none p-2 rounded-md hover:bg-white/5 transition"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
          <div className="w-6 h-6 relative">
            <div
              className={`absolute left-0 top-0 w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "rotate-45 top-2.5" : "-translate-y-1.5"}`}
            />
            <div
              className={`absolute left-0 top-2.5 w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <div
              className={`absolute left-0 top-5 w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "-rotate-45 top-2.5" : "translate-y-1.5"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu — higher z-index so it sits above floating elements */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#030b17] border-t border-gray-800 z-[999]">
          <nav className="flex flex-col items-center space-y-4 py-6 px-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-blue-400 font-semibold w-full text-center py-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="w-full flex justify-center pt-2">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-6 py-2">
                Get Started
              </Button>
            </div>

            {/* Mobile social + contact row */}
            {/* <div className="w-full flex flex-col gap-3 mt-6 border-t border-gray-800 pt-4">
              <a href="mailto:Innovationbytes@gmail.com" className="text-gray-300 hover:text-blue-400 text-sm flex items-center gap-2 justify-center">
                <Mail size={14} /> <span>Innovationbytes@gmail.com</span>
              </a>
              <a href="tel:+80033744676" className="text-gray-300 hover:text-blue-400 text-sm flex items-center gap-2 justify-center">
                <Phone size={14} /> <span>+800-3374-4676</span>
              </a>

              <div className="flex items-center justify-center gap-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <Facebook size={16} />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <Twitter size={16} />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <Youtube size={16} />
                </a>
              </div>
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
