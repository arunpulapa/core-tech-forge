// Contact.tsx
import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

const API_URL = "https://backend.Innovation Bytes.live"; // change if needed

const SuccessModal: React.FC<{
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  autoCloseMs?: number | null;
}> = ({ open, onClose, title = "Thank you for reaching out!", subtitle = "We appreciate your message. Expect a response within 24 hours.", autoCloseMs = 4000 }) => {
  useEffect(() => {
    if (!open || !autoCloseMs) return;
    const t = setTimeout(() => onClose(), autoCloseMs);
    return () => clearTimeout(t);
  }, [open, autoCloseMs, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl transform transition-all">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Check circle */}
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#6ee7b7] to-[#4f46e5] shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{subtitle}</p>

          <div className="mt-4 w-full">
            <button
              onClick={onClose}
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Close window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [products, setProducts] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // success modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleProductToggle = (product: string) => {
    setProducts((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setProducts([]);
    setMessage("");
    setAgree(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agree) {
      toast.error("Please agree to data collection before sending.");
      return;
    }

    if (!name.trim() || !email.trim() || !service.trim() || !message.trim()) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const payload = {
      first_name: name,
      last_name: "", // keep if you don't collect last name separately
      email,
      phone,
      subject: service,
      products,
      message,
    };

    try {
      setSubmitting(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let errText = `Server responded with status ${res.status}`;
        try {
          const errJson = await res.json();
          errText = errJson.detail || errJson.message || JSON.stringify(errJson);
        } catch {
          // ignore parse error
        }
        throw new Error(errText);
      }

      // success: show modal
      setShowSuccessModal(true);
      toast.success("Message sent successfully!");
      // log response if needed
      await res.json().catch(() => ({}));
      resetForm();
    } catch (err: any) {
      console.error("Contact submit error:", err);
      toast.error(`Failed to send message: ${err.message || err}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#071023] py-20 text-slate-200">
      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        // optional: customize title/subtitle
        title="Thank you for reaching out!"
        subtitle="We appreciate your message. Expect a response within 24 hours."
        autoCloseMs={4000} // change to null to disable auto close
      />

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

              {/* Service Type Dropdown */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">Subject</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full bg-transparent border-0 border-b border-slate-500 focus:border-slate-300 focus:outline-none py-3 text-white"
                >
                  <option value="" disabled className="text-slate-600 bg-[#071023]">
                    Select a service
                  </option>
                  <option className="text-black">Web Development</option>
                  <option className="text-black">Mobile Development</option>
                  <option className="text-black">Testing & Maintenance</option>
                  <option className="text-black">IT Consulting</option>
                  <option className="text-black">AI & Automation</option>
                  <option className="text-black">UI/UX Design</option>
                  <option className="text-black">Careers</option>
                  <option className="text-black">Others</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  How can we help you? Feel free to get in touch.
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-transparent border-0 border-b border-slate-500 focus:border-slate-300 focus:outline-none py-3 min-h-[120px] resize-none placeholder-slate-400 text-white"
                  placeholder="Write your message..."
                />
              </div>

              {/* Checkbox + Button row */}
              <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
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
                  disabled={!agree || submitting}
                  className={`ml-auto inline-flex items-center justify-center rounded-full px-7 py-3 text-white font-semibold transition-transform shadow-lg
                    ${
                      agree && !submitting
                        ? "bg-[#0f4bd8] hover:scale-[1.03]"
                        : "bg-slate-700/60 cursor-not-allowed"
                    }`}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT - Info */}
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
              Transforming ideas into intelligent, scalable, and secure digital experiences.
            </p>

            <h4 className="text-xl font-bold text-white mb-4">Get In Touch</h4>

            <div className="space-y-4 text-slate-300 mb-6">
              <div>Kukatpally 4th Phase, Hyderabad, Telangana, 500072</div>
              <div>India</div>
              <div className="text-white font-semibold mt-3">Innovationbytes@gmail.com</div>
              <div className="text-white font-bold mt-2">+91 9502514857</div>
            </div>

            <div className="flex gap-3">
              <button aria-label="facebook" className="w-10 h-10 rounded-sm border border-slate-600 flex items-center justify-center hover:bg-[#0f2b4e]">
                <Facebook size={16} />
              </button>
              <button aria-label="twitter"  className="w-10 h-10 rounded-sm border border-slate-600 flex items-center justify-center hover:bg-[#0f2b4e]">
                <a href="https://x.com/AkNextgen" target="_blank" rel="noopener noreferrer">
                  <Twitter size={16} />
                </a>
              </button>
              <button aria-label="youtube" className="w-10 h-10 rounded-sm border border-slate-600 flex items-center justify-center hover:bg-[#0f2b4e]">
                <Youtube size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
