import { Award, Users, Headphones, CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  display?: string; // optional forced display (e.g. "4.8/5")
  suffix?: string;
  label: string;
  note?: string; // short microcopy explaining benefit to client
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Adjust these numbers/copy to reflect your honest achievements.
  const stats: StatItem[] = [
    {
      icon: Award,
      value: 10,
      suffix: "+",
      label: "Projects Delivered",
      note: "Focused, high-quality solutions — not churn."
    },
    {
      icon: Users,
      value: 9,
      suffix: "+",
      label: "Satisfied Clients",
      note: "Real clients, real results — references available."
    },
    {
      icon: CheckCircle,
      value: 4.,
      display: "4.8/5",
      label: "Avg. Client Rating",
      note: "High satisfaction from project outcomes."
    },
    {
      icon: Headphones,
      value: 24,
      suffix: "/7",
      label: "Support & Response",
      note: "Fast, clear communication — we keep you updated."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /**
   * Smooth counter using requestAnimationFrame for better visual fidelity.
   * Supports decimal values (like ratings) when needed.
   */
  const useCounter = (target: number, duration = 1500, enable = true) => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
      if (!enable) return;
      let start: number | null = null;
      const initial = 0;
      const delta = target - initial;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        // easeOutCubic
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

  const StatCard: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
    const count = useCounter(stat.value, 1400 + index * 150, isVisible);

    return (
      <div
        className="text-left p-6 rounded-2xl bg-gradient-to-bl from-white/3 to-white/2 backdrop-blur-sm shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
        style={{ animation: `fadeInUp 500ms ease ${index * 90}ms both` }}
        aria-label={`${stat.label}: ${stat.display ?? `${count}${stat.suffix ?? ""}`}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-tr from-primary/20 to-primary/10">
            <stat.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-primary bg-clip-text text-transparent leading-none">
              {stat.display ?? `${count}${stat.suffix ?? ""}`}
            </div>
            <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
          </div>
        </div>
        {stat.note && <p className="mt-3 text-sm text-muted-foreground/80">{stat.note}</p>}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="bg-[#050B18] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why clients choose us</h2>
        <p className="max-w-2xl text-sm text-muted-foreground mb-8">
          Small, focused teams move faster and care more. We pair deep attention to your product with reliable
          communication — perfect for startups and businesses that want quality without the overhead.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard stat={stat} index={idx} key={idx} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-muted-foreground/80">
            New here? We offer a short pilot engagement so you can evaluate delivery and fit before committing.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg px-5 py-2 text-sm font-semibold bg-gradient-primary text-black shadow-sm hover:brightness-105 transition"
          >
            Request a pilot
          </a>
        </div>
      </div>

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
