import { Mail, Phone, Clock, MapPin, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
// import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";




const Footer = () => {
    const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
const handleSubscribe = () => {
  if (email.trim() === "") return; // prevent empty email
  setEmail(""); // clear input

  // Show popup after 10 seconds
  setTimeout(() => setShowPopup(true), 1000);

  // Optional: hide popup after 3 seconds once it appears
  setTimeout(() => setShowPopup(false), 10000); // 10s delay + 3s visible
};


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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-l-full px-6 py-3 text-black focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#003cff] hover:bg-blue-700 px-6 py-3 rounded-r-full font-semibold"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Your existing Footer Grid code here... */}

      {/* Popup */}
  {showPopup && (
  <div className="fixed bottom-5 right-5 z-50">
    <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-4 animate-slide-up-fade">
      <span>🎉 Successfully Subscribed!</span>
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="ml-4 text-white hover:text-gray-200 transition-colors"
      >
        ✕
      </button>
    </div>
  </div>
)}



      {/* Footer Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">       
            <span className="text-2xl font-bold">Innovation Bytes</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering businesses with Next-gen digital solutions that drive innovation, efficiency, and growth.
          </p>
          <div className="flex gap-3">
            <a href="#" className="border p-2 rounded hover:bg-blue-700 transition-colors">
              <Facebook size={16} className="text-white" />
            </a>
            <a href="#" className="border p-2 rounded hover:bg-sky-500 transition-colors">
              <Twitter size={16} className="text-white" />
            </a>
            <a href="#" className="border p-2 rounded hover:bg-[#0A66C2] transition-colors">
              <Linkedin size={16} className="text-white" />
            </a>
            <a href="#" className="border p-2 rounded hover:bg-[#E1306C] transition-colors">
              <Instagram size={16} className="text-white" />
            </a>
            <a href="#" className="border p-2 rounded hover:bg-red-600 transition-colors">
              <Mail size={16} className="text-white" />
            </a>

          </div>
        </div>

        {/* Extra Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Extra Links</h3>
         <ul className="space-y-2 text-gray-300">
  <li>
    <a href="#about-us" className="hover:text-blue-400 transition-colors">About Us</a>
  </li>
  <li>
    <a href="#our-team" className="hover:text-blue-400 transition-colors">Our Team</a>
  </li>
  <li>
    <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
  </li>
  <li>
    <a href="#case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a>
  </li>
  <li>
    <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
  </li>
</ul>

        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">➤ <a >Custom Development</a></li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">➤ <a >Cloud Solutions</a></li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">➤ <a >Cybersecurity Protection</a></li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">➤ <a >Testing & Maintenance</a></li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">➤ <a >IT Consulting</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5" />
              <span>Kukatpally 4th Phase, Hyderabad, Telangana, 500072</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> Innovationbytes@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 9502514857
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Mon - Sat: 09:00 - 19:00
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
        <p className="text-center">Innovation Bytes, 2024 © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
