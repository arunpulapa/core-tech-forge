import React, { useEffect, useRef, useState } from "react";

type ProgressMap = { itSupport: number; itSecurity: number; cloudSupport: number };

const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.18) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
};

const useMouseParallax = (ref: React.RefObject<HTMLElement | null>, intensity = 10) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const tx = x * intensity;
      const ty = y * intensity;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${(-ty / 3).toFixed(2)}deg) rotateY(${(tx / 3).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      el.style.transform = `translate3d(0,0,0) rotateX(0deg) rotateY(0deg)`;
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, intensity]);
};

/** Smooth counter hook */
const useCounter = (target: number, enabled = true, duration = 1200) => {
  const [n, setN] = useState<number>(0);
  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    const initial = 0;
    const delta = target - initial;
    const step = (t: number) => {
      if (!start) start = t;
      const prog = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 4);
      const cur = initial + delta * eased;
      setN(Number.isInteger(target) ? Math.floor(cur) : Number(cur.toFixed(1)));
      if (prog < 1) requestAnimationFrame(step);
      else setN(target);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, duration]);
  return n;
};

const Skill = ({ label, value, visible }: { label: string; value: number; visible: boolean }) => (
  <div
    className="rounded-2xl p-3 bg-white/4 backdrop-blur-sm border border-white/6 shadow-lg hover:shadow-2xl transform transition"
    style={{ willChange: "transform, opacity" }}
  >
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm font-semibold text-white/90">{label}</div>
      <div className="text-sm font-semibold text-cyan-300">{visible ? `${value}%` : `0%`}</div>
    </div>
    <div className="w-full bg-white/8 h-3 rounded-full overflow-hidden">
      <div
        className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all ease-out duration-1000"
        style={{ width: visible ? `${value}%` : "0%" }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={visible ? value : 0}
      />
    </div>
  </div>
);

const AboutUs: React.FC<{
  eyebrow?: string;
  title?: string;
  copy?: string;
  years?: number;
  progress?: ProgressMap;
  parallaxIntensity?: number;
}> = ({
  eyebrow = "| Who we are",
  title = "Shaping the Future of Tech",
  copy = "We architect resilient, secure and scalable products. Small teams, high craft — delivering tangible outcomes.",
  years = 2,
  progress = { itSupport: 94, itSecurity: 86, cloudSupport: 90 },
  parallaxIntensity = 10,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(ref);
  useMouseParallax(heroRef, parallaxIntensity);
  const yearCount = useCounter(years, visible, 900);

  return (
    <section ref={ref} id="about-us" className="relative overflow-hidden py-28 text-white">
      {/* layered gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#001026] via-[#041033] to-[#02101b]" />

      {/* animated neon mesh lines */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full opacity-30"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lg1" x1="0" x2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
          </linearGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* diagonal grid */}
        <g stroke="#fff" strokeOpacity="0.04" strokeWidth="0.5" filter="url(#soft)">
          {[...Array(14)].map((_, i) => {
            const y = i * 60;
            return <line key={i} x1={0} y1={y} x2={1200} y2={y + 40} />;
          })}
        </g>

        {/* drifting orbs */}
        <circle cx="1100" cy="60" r="120" fill="url(#lg1)" opacity="0.12" />
        <circle cx="80" cy="720" r="90" fill="url(#lg1)" opacity="0.08" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — hero / image with parallax */}
        <div className="relative order-2 lg:order-1">
          <div
            ref={heroRef}
            className={`rounded-3xl overflow-hidden transform transition-all duration-1000 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/6 backdrop-blur-sm ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ willChange: "transform" }}
          >
            <div className="relative w-full h-[520px] bg-gradient-to-tr from-[#071229] to-[#08102a]">
              {/* background image */}
              <img
                src="https://i.pinimg.com/736x/a6/f6/cb/a6f6cbbd846324a7f5ac8a53bf2d16bf.jpg"
                alt="futuristic team"
                className="absolute inset-0 w-full h-full object-cover opacity-85 mix-blend-screen transform transition-transform duration-700"
              />

              {/* holographic grid */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600" aria-hidden>
                <g stroke="#fff" strokeOpacity="0.03" strokeWidth="0.5">
                  {[...Array(10)].map((_, i) => (
                    <line key={i} x1={0} y1={(i + 1) * 60} x2={800} y2={(i + 1) * 60} />
                  ))}
                </g>
              </svg>

              {/* floating badge */}
              <div
                className={`absolute right-6 bottom-6 w-[260px] p-4 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-md border border-white/8 shadow-lg transform transition-all duration-700 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-black font-bold shadow-inner">
                    AI
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold leading-none">
                      {visible ? yearCount : 0} <span className="text-base">+</span>
                    </div>
                    <div className="text-xs text-white/70 uppercase tracking-wide">Years of craft</div>
                  </div>
                </div>
              </div>

              {/* faint neon underline */}
              <div className="absolute left-6 top-6 w-28 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-60 blur-sm" />
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div className={`order-1 lg:order-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-1000`}>
          <p className="text-sm text-cyan-300 font-medium mb-2">{eyebrow}</p>

          <h2 id="about-heading" className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {title.includes(" ") ? (
              <>
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">
                  {title.split(" ").slice(-1)}
                </span>
              </>
            ) : (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">{title}</span>
            )}
          </h2>

          <p className="text-white/75 mb-6 text-lg leading-relaxed">{copy}</p>

          {/* micro-cards (3D tilt on hover) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white/4 backdrop-blur-sm border border-white/6 shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold mb-1">Innovation & Adaptability</h3>
              <p className="text-white/70 text-sm">We adopt modern stacks and continuous delivery for fast iteration.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/4 backdrop-blur-sm border border-white/6 shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold mb-1">Customer-Centric Delivery</h3>
              <p className="text-white/70 text-sm">Transparent communication, regular demos, and clear roadmaps.</p>
            </div>
          </div>

          <p className="text-white/70 mb-6">Small, dedicated teams deliver more attention, better quality, and faster feedback loops.</p>

          {/* skill bars — stronger visuals */}
          <div className="space-y-4 mb-6">
            <Skill label="Software Development" value={progress.itSupport} visible={visible} />
            <Skill label="IT Security" value={progress.itSecurity} visible={visible} />
            <Skill label="Cloud Support" value={progress.cloudSupport} visible={visible} />
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-2xl hover:scale-105 transition-transform"
              style={{ minWidth: 160 }}
            >
              Request a demo
            </a>
            <a href="#services" className="text-sm text-white/70 hover:text-white underline-offset-2">
              Explore services
            </a>
          </div>
        </div>
      </div>

      {/* animated bottom glows */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 overflow-hidden">
        <svg className="w-full h-full opacity-25" viewBox="0 0 1600 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0 60 C400 10 1200 110 1600 60 L1600 120 L0 120 Z" fill="#06b6d4" fillOpacity="0.02" />
        </svg>
      </div>

      <style>{`
        /* small floating animation for orbs/gradients to feel alive */
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        svg > circle { animation: floaty 7s ease-in-out infinite; }
        /* better focus ring for keyboard users */
        a:focus { outline: none; box-shadow: 0 0 0 4px rgba(56,189,248,0.12); border-radius: 999px; }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
