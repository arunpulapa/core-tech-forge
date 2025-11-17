import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Headphones, CheckCircle } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  display?: string; // optional forced display (e.g. "4.8/5")
  suffix?: string;
  label: string;
  note?: string; // short microcopy explaining benefit to client
}

const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.28) => {
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

const useCounter = (target: number, duration = 1400, enable = true) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (!enable) return;
    let start: number | null = null;
    const initial = 0;
    const delta = target - initial;

    const step = (t: number) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = initial + delta * eased;
      setCount(Number.isInteger(target) ? Math.floor(current) : Number(current.toFixed(1)));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(Number.isInteger(target) ? target : Number(target.toFixed(1)));
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, enable]);
  return count;
};

const StatCard: React.FC<{ stat: StatItem; idx: number; visible: boolean }> = ({ stat, idx, visible }) => {
  const count = useCounter(stat.value, 1100 + idx * 120, visible);
  const Icon = stat.icon;
  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-white/3 to-white/6 backdrop-blur-md border border-white/6 shadow-xl hover:scale-[1.02] transition-transform"
      style={{ animation: `fadeInUp 500ms ease ${idx * 80}ms both` }}
      aria-label={`${stat.label}: ${stat.display ?? `${count}${stat.suffix ?? ""}`}`}
    >
      {/* decorative neon lines */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity">
        <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none" className="mix-blend-screen">
          <defs>
            <linearGradient id={`g-${idx}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#0ea5a4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <rect x="-10" y="-10" width="220" height="220" fill={`url(#g-${idx})`} />
        </svg>
      </div>

      <div className="flex items-start gap-4 relative z-10">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-purple-400 text-black shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)]">
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-3">
            <div className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
              {stat.display ?? `${count}${stat.suffix ?? ""}`}
            </div>
            {stat.suffix && <div className="text-sm text-white/60"></div>}
          </div>
          <div className="mt-1 text-sm font-medium text-white/80">{stat.label}</div>
          {stat.note && <div className="mt-3 text-xs text-white/60">{stat.note}</div>}
        </div>
      </div>

      {/* subtle glow bottom */}
      <div className="absolute left-4 right-4 bottom-3 h-[6px] rounded-full opacity-30 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-md" />
    </div>
  );
};

const Stats: React.FC<{ stats?: StatItem[] }> = ({
  stats = [
    { icon: Award, value: 10, suffix: "+", label: "Projects Delivered", note: "Focused, high-quality solutions — not churn." },
    { icon: Users, value: 9, suffix: "+", label: "Satisfied Clients", note: "Real clients, real results — references available." },
    { icon: CheckCircle, value: 4.8, display: "4.8/5", label: "Avg. Client Rating", note: "High satisfaction from project outcomes." },
    { icon: Headphones, value: 24, suffix: "/7", label: "Support & Response", note: "Fast, clear communication — we keep you updated." },
  ],
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(ref);

  return (
    <section ref={ref} className="relative bg-[#02061a] py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#03061a] to-[#071233] opacity-80" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div>
            <h3 className="text-sm text-cyan-300 font-medium">Why clients choose us</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Trusted. Fast. Thoughtful.</h2>
            <p className="mt-3 text-sm text-white/70 max-w-2xl">Small, focused teams move faster and care more. We pair deep attention to your product with reliable communication — perfect for startups and businesses that want quality without the overhead.</p>
          </div>

          <div className="hidden md:block">
            <div className="inline-flex items-center gap-4 p-2 rounded-full bg-white/3 border border-white/6 shadow-sm">
              <div className="text-xs text-white/80">Pilot projects</div>
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs font-semibold">Start today</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} idx={i} visible={visible} />
          ))}
        </div>
      </div>

      <style >{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
