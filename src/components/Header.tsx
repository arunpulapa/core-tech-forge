// Header.tsx
import { useEffect, useRef, useState } from "react";
import { Facebook, Twitter, Youtube, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = ["Home", "About Us", "Services", "Projects", "Contact"];

const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("Home");
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      // simple active section highlight by anchor in viewport
      for (const item of menuItems) {
        const id = item.toLowerCase().replace(/\s+/g, "-");
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActive(item);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile on resize to avoid stuck state
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/40 shadow-lg" : "bg-transparent"
      }`}
      aria-label="Main header"
    >
      {/* Top bar (small) */}
      <div className={`hidden sm:flex items-center justify-between gap-4 px-6 py-2 border-b border-white/6 text-sm`}>
        <div className="flex items-center gap-4">
          <a href="mailto:Innovationbytes@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white">
            <Mail size={14} /> <span>Innovationbytes@gmail.com</span>
          </a>
          <a href="tel:+919502514857" className="flex items-center gap-2 text-white/80 hover:text-white">
            <Phone size={14} /> <span>+91 9502514857</span>
          </a>
        </div>

        <div className="flex items-center gap-3 text-white/80">
          <a aria-label="Facebook" href="#" className="hover:scale-110 transform transition">
            <Facebook size={14} />
          </a>
          <a aria-label="Twitter" href="#" className="hover:scale-110 transform transition">
            <Twitter size={14} />
          </a>
          <a aria-label="Instagram" href="#" className="hover:scale-110 transform transition">
            <Instagram size={14} />
          </a>
          <a aria-label="LinkedIn" href="#" className="hover:scale-110 transform transition">
            <Linkedin size={14} />
          </a>
        </div>
      </div>

      {/* main header */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Innovation Bytes - home"
            onClick={(e) => {
              // small smooth scroll to top
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* glowing badge */}
            <div
              className="relative w-12 h-12 rounded-xl flex items-center justify-center
              bg-gradient-to-br from-[#06b6d4] via-[#7c3aed] to-[#f472b6]
              text-black font-extrabold text-lg tracking-wide
              shadow-[0_6px_30px_rgba(124,58,237,0.18)]
              ring-0 group-hover:scale-105 transition-transform duration-300"
              style={{ willChange: "transform" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 filter drop-shadow-[0_6px_18px_rgba(96,165,250,0.12)]">
                IB
              </span>

              {/* soft neon rim */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  boxShadow:
                    "0 6px 24px rgba(6,182,212,0.14), inset 0 1px 0 rgba(255,255,255,0.03)",
                  mixBlendMode: "screen",
                }}
              />
            </div>

            {/* name + subtle tagline */}
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">Innovation Bytes</span>
              <span className="text-xs text-white/60 -mt-0.5">Build • Secure • Scale</span>
            </div>
          </a>

          {/* nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((m) => {
              const id = m.toLowerCase().replace(/\s+/g, "-");
              const isActive = active === m;
              return (
                <a
                  key={m}
                  href={`#${id}`}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{m}</span>
                  {/* animated underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                id="contactus"
                className="rounded-full px-5 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-xl transform transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-cyan-300/25"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>

            {/* mobile toggle */}
            <button
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileOpen((s) => !s)}
              className="lg:hidden w-11 h-9 rounded-lg flex items-center justify-center bg-gradient-to-tr from-white/3 to-white/6 border border-white/6 shadow-sm hover:scale-105 transition"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
                <rect x="1" y="1" width="20" height="2" rx="1" fill="white" style={{ transformOrigin: "center" }} className={`${isMobileOpen ? "transform rotate-45 translate-y-[6px]" : ""}`} />
                <rect x="1" y="7" width="20" height="2" rx="1" fill="white" className={`${isMobileOpen ? "opacity-0" : "opacity-100"} transition-opacity`} />
                <rect x="1" y="13" width="20" height="2" rx="1" fill="white" className={`${isMobileOpen ? "transform -rotate-45 -translate-y-[6px]" : ""}`} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transform transition-all duration-350 ${
          isMobileOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-b from-[#021025] to-[#04102a] border-b border-white/6 shadow-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-purple-400 font-extrabold text-black">IB</div>
              <div>
                <div className="font-bold text-white">Innovation Bytes</div>
                <div className="text-xs text-white/60">Build • Secure • Scale</div>
              </div>
            </div>

            <button onClick={() => setIsMobileOpen(false)} className="p-2 rounded-md bg-white/5">
              Close
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            {menuItems.map((m) => (
              <a
                key={m}
                href={`#${m.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsMobileOpen(false)}
                className="py-3 px-2 rounded-md text-white/90 hover:bg-white/5 transition"
              >
                {m}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <Button onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2">
              Get Started
            </Button>

            <div className="ml-auto flex gap-2">
              <a href="#" className="p-2 rounded bg-white/5"><Facebook size={16} /></a>
              <a href="#" className="p-2 rounded bg-white/5"><Twitter size={16} /></a>
              <a href="#" className="p-2 rounded bg-white/5"><Youtube size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* small styles for animations (respects prefers-reduced-motion) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
