import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const progress = {
    itSupport: 94,
    itSecurity: 86,
    cloudSupport: 90,
  };

  // Animated counter hook
  const useAnimatedCounter = (target: number, enabled: boolean, duration = 1200) => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
      if (!enabled) return;
      let start: number | null = null;
      const initial = 0;
      const delta = target - initial;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progressTime = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progressTime, 3);
        const current = initial + delta * eased;
        setCount(Number.isInteger(target) ? Math.floor(current) : Number(current.toFixed(1)));
        if (progressTime < 1) requestAnimationFrame(step);
        else setCount(target);
      };

      const raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [target, enabled, duration]);

    return count;
  };

  const years = useAnimatedCounter(2, isVisible, 1200);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative bg-[#030b17] text-white py-20 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative lg:order-1">
          <div
            className={`rounded-md overflow-hidden transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 -rotate-1"
            }`}
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src="https://i.pinimg.com/736x/02/61/96/026196c12bf94ebae9533c5d06e20bfe.jpg"
              alt="Tech Experts"
              className="rounded-md w-full h-[400px] md:h-[520px] object-cover shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* small stacked image */}
          <div
            className={`absolute bottom-[-60px] left-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            aria-hidden
          >
            <img
              src="https://i.pinimg.com/736x/21/ce/96/21ce960479fc576304613e852c7d4f59.jpg"
              alt="Team Working"
              className="rounded-md w-[200px] md:w-[260px] h-[150px] md:h-[200px] object-cover border-4 border-[#030b17] shadow-lg hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Years badge */}
          <div
            className={`absolute bottom-[-132px] left-16 text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            aria-hidden
          >
            {/* <div className="bg-gradient-to-r from-blue-600/20 to-sky-500/20 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/5">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-none">{years}+</h2>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide">Years Experience</p>
            </div> */}
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } mt-20 md:mt-0`}
        >
          <p className="text-blue-500 font-medium mb-2" >| About Us</p>
          <h2 id="about-heading" className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Experts In Tech <br /> Evolution.
          </h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            As an IT Solution and Services Company, we deliver practical, reliable solutions that prioritize your
            satisfaction and growth.
          </p>

          {/* small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div
              className={`p-4 rounded-xl bg-gradient-to-br from-white/2 to-white/3 border border-white/6 shadow-sm transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-lg font-bold text-white mb-1">Innovation & Adaptability</h3>
              <p className="text-gray-400 text-sm">Continuous innovation to keep your product future-ready.</p>
            </div>

            <div
              className={`p-4 rounded-xl bg-gradient-to-br from-white/2 to-white/3 border border-white/6 shadow-sm transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-lg font-bold text-white mb-1">Customer-Centric Excellence</h3>
              <p className="text-gray-400 text-sm">We place your needs first — clear communication, dependable delivery.</p>
            </div>
          </div>

          <p className="text-gray-300 mb-6">
            We prefer quality over quantity. Small, dedicated teams mean better attention to detail and faster iteration.
          </p>

          {/* Progress Bars */}
          <div className="space-y-5">
            {Object.entries(progress).map(([key, value], idx) => (
              <div
                key={key}
                className={`p-4 rounded-lg bg-[#061025] border border-white/6 transform transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-white">
                    {key === "itSupport"
                      ? "Software Development"
                      : key === "itSecurity"
                      ? "IT Security"
                      : "Cloud Support"}
                  </span>
                  <span className="text-blue-400 font-semibold" aria-live="polite">
                    {isVisible ? `${value}%` : "0%"}
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full transition-all ease-out duration-1500"
                    style={{
                      width: isVisible ? `${value}%` : "0%",
                      background:
                        key === "itSupport"
                          ? "linear-gradient(90deg,#2563eb,#06b6d4)"
                          : key === "itSecurity"
                          ? "linear-gradient(90deg,#0ea5e9,#7c3aed)"
                          : "linear-gradient(90deg,#10b981,#06b6d4)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <a
              href="#contact"
              className="inline-block rounded-lg px-6 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-sky-400 text-black shadow-sm hover:brightness-105 transition"
              style={{ width: "45%", textAlign: "center" }}
            >
              Request a demo
            </a>
            <p className="text-sm text-gray-400 max-w-xl">
              New here? We offer short pilot engagements so you can evaluate delivery and fit before any long-term commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <svg
        className="absolute -right-10 top-10 opacity-10 w-60 h-60 pointer-events-none animate-float"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="40" r="70" fill="url(#g1)" />
      </svg>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @media (max-width: 1024px) {
          .container { grid-template-columns: 1fr !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
