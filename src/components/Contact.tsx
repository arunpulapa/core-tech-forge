// Contact.tsx
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // you can replace with real submission logic
    toast.success("Message sent successfully! We'll get back to you soon.");
    setName(""); setEmail(""); setPhone(""); setMessage(""); setAgree(false);
  };

  return (
    <section id="contact" className="bg-[#071023] py-20 text-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT - Form panel */}
          <div className="bg-gradient-to-b from-[#071826] to-[#001029] rounded-lg p-12 shadow-[0_20px_50px_rgba(2,12,27,0.6)]">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
              Send Us A Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent border-0 border-b border-slate-500 focus:border-slate-300 focus:outline-none py-3 placeholder-slate-400 text-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="w-full bg-transparent border-0 border-b border-slate-500 focus:border-slate-300 focus:outline-none py-3 placeholder-slate-400 text-white"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">Phone Number</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-slate-500 focus:border-slate-300 focus:outline-none py-3 placeholder-slate-400 text-white"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">How can we help you? Feel free to get in touch.</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-transparent border-0 border-b border-slate-500 focus:border-slate-300 focus:outline-none py-3 min-h-[120px] resize-none placeholder-slate-400 text-white"
                  placeholder="Write your message..."
                />
              </div>

              {/* Checkbox + Button row */}
              <div className="flex items-center justify-between mt-6">
                <label className="flex items-center gap-3 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="w-4 h-4 accent-sky-600"
                  />
                  <span>I agree that my data is collected and stored.</span>
                </label>

                <button
                  type="submit"
                  disabled={!agree}
                  className={`ml-6 inline-flex items-center justify-center rounded-full px-7 py-3 text-white font-semibold transition-transform shadow-lg
                    ${agree ? "bg-[#0f4bd8] hover:scale-[1.03]" : "bg-slate-700/60 cursor-not-allowed"}`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT - Marketing + Contact Info */}
          <div className="px-4 lg:px-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-6 w-0.5 bg-slate-600" />
              <a href="#contact" className="text-sm text-[#4f7ff6]">Contact Us</a>
              <div className="h-6 w-0.5 bg-slate-600" />
            </div>

            <h3 className="text-5xl md:text-[5.2rem] leading-[0.95] font-extrabold text-white mb-6">
              Your IT Solution <br /> Starts Here.
            </h3>

            <p className="text-slate-300 max-w-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <h4 className="text-xl font-bold text-white mb-4">Get In Touch</h4>

            <div className="space-y-4 text-slate-300 mb-6">
              <div>456 Creative District Ahmad Yani</div>
              <div>Medan, North Sumatera</div>
              <div className="text-white font-semibold mt-3">hola@dominantsite.com</div>
              <div className="text-white font-bold mt-2">555-278-4364</div>
            </div>

            {/* small social buttons */}
            <div className="flex gap-3">
              <button aria-label="facebook" className="w-10 h-10 rounded-sm border border-slate-600 flex items-center justify-center hover:bg-[#0f2b4e]">
                <Facebook size={16} />
              </button>
              <button aria-label="twitter" className="w-10 h-10 rounded-sm border border-slate-600 flex items-center justify-center hover:bg-[#0f2b4e]">
                <Twitter size={16} />
              </button>
              <button aria-label="youtube" className="w-10 h-10 rounded-sm border border-slate-600 flex items-center justify-center hover:bg-[#0f2b4e]">
                <Youtube size={16} />
              </button>
            </div>

            {/* decorative map / icons group - mimics right column stacked card look */}
            {/* <div className="mt-10 grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 p-4 bg-[#071226]/60 rounded-md border border-slate-700">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#163a97] to-[#0ea5d8]">
                  <MapPin size={18} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Visit Us</div>
                  <div className="text-slate-300 text-sm">123 Technology Drive</div>
                  <div className="text-slate-300 text-sm">Silicon Valley, CA 94025</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#071226]/60 rounded-md border border-slate-700">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#163a97] to-[#0ea5d8]">
                  <Phone size={18} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call Us</div>
                  <div className="text-slate-300 text-sm">+1 (555) 123-4567</div>
                  <div className="text-slate-300 text-sm">+1 (555) 987-6543</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#071226]/60 rounded-md border border-slate-700">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#163a97] to-[#0ea5d8]">
                  <Mail size={18} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Us</div>
                  <div className="text-slate-300 text-sm">info@aknextgen.com</div>
                  <div className="text-slate-300 text-sm">support@aknextgen.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#071226]/60 rounded-md border border-slate-700">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#163a97] to-[#0ea5d8]">
                  <Clock size={18} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Business Hours</div>
                  <div className="text-slate-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div className="text-slate-300 text-sm">Sat - Sun: Closed</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div> {/* container */}
    </section>
  );
};

export default Contact;
