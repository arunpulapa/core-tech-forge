import { Mail, Phone, Clock, MapPin, Facebook, Twitter, Youtube } from "lucide-react";
// import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#050B18] text-white pt-16 pb-6">
      {/* Top: Newsletter */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-white/10 pb-10 gap-6">
          <h2 className="text-3xl font-bold">Stay Connected, Stay Informed.</h2>
          <div className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-l-full px-6 py-3 text-black focus:outline-none"
            />
            <button className="bg-[#003cff] hover:bg-blue-700 px-6 py-3 rounded-r-full font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
        {/* Logo + Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <img src="../../assets/aknextgensolutions_logo.jpg" alt="Ak NextGen Logo" className="w-8 h-8" /> */}
            <span className="text-2xl font-bold">Ak NextGen</span>
          </div>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
          </p>
          <div className="flex gap-3">
            <a href="#" className="border p-2 hover:bg-white/10">
              <Facebook size={16} />
            </a>
            <a href="#" className="border p-2 hover:bg-white/10">
              <Twitter size={16} />
            </a>
            <a href="#" className="border p-2 hover:bg-white/10">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Extra Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Extra Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#our-team">Our Team</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">➤ <a >Custom Development</a></li>
            <li className="flex items-center gap-2">➤ <a >Cloud Solutions</a></li>
            <li className="flex items-center gap-2">➤ <a >Cybersecurity Protection</a></li>
            <li className="flex items-center gap-2">➤ <a >Infrastructure Management</a></li>
            <li className="flex items-center gap-2">➤ <a >Data Analytics</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5" />
              <span>456 Creative District Ahmad Yani, Medan, North Sumatera</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> hola@dominantsite.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +800-3374-4676
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Mon - Sat: 09:00 - 17:00
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-6 mt-6 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <div className="flex gap-6">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help</a>
        </div>
        <p className="text-center">Ak NextGen, 2024 © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
