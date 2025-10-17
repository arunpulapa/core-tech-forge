import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      image: client1,
      name: "Husain Bakar",
      role: "COO of HealthPro Systems",
      quote:
        "Their Secure Telemedicine Platform Transformed Patient Care, Reducing Wait Times By 40%. A True Partner In Innovation!",
    },
    {
      image: client2,
      name: "Lisa Gimenez",
      role: "Director of FinEdge Group",
      quote:
        "Their Blockchain Solution Streamlined Our Transactions And Eliminated Fraud Risks. Exceptional Expertise And Flawless Execution!",
    },
    {
      image: client3,
      name: "Michael Roberts",
      role: "CTO of VisionTech Global",
      quote:
        "An incredible experience from start to finish. The team delivered beyond expectations with precision and creativity.",
    },
  ];

  // duplicate items so we can loop seamlessly
  const items = [...testimonials, ...testimonials];

  // auto-scroll settings
  const SCROLL_SPEED = 0.45; // px per frame, tweak to slow/fast
  const containerRef = useRef(null);
  const rafRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let running = true;

    const step = () => {
      if (!running) return;
      if (!isHovered) {
        container.scrollLeft = container.scrollLeft + SCROLL_SPEED;
      }

      // reset when we've scrolled past half (because of duplication)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = container.scrollLeft - container.scrollWidth / 2;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovered]);

  // manual scroll by card (prev/next)
  const scrollByCard = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector(".testimonial-card") as HTMLElement | null;
    const gap = 24; // should match the CSS gap (gap-6 = 24px)
    const step = (card ? card.offsetWidth + gap : 340);
    container.scrollTo({ left: container.scrollLeft + (direction === "right" ? step : -step), behavior: "smooth" });
  };

  return (
    <section className="bg-[#050B18] text-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 mb-12">
          <div>
            <p className="text-blue-500 font-semibold mb-4">| Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Trusted By <br /> Global Leaders.
            </h2>
            <p className="text-gray-400 max-w-xl hidden md:block">
              Real client success stories that showcase measurable impact and long-term partnership.
            </p>
          </div>

          {/* Controls (visible on md+) */}
          <div className="flex items-center gap-3 md:ml-6">
            {/* <button
              aria-label="Previous testimonials"
              onClick={() => scrollByCard("left")}
              className="hidden md:inline-flex p-2 rounded-full bg-[#0B1728]/60 hover:bg-[#0B1728] transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={() => scrollByCard("right")}
              className="hidden md:inline-flex p-2 rounded-full bg-[#0B1728]/60 hover:bg-[#0B1728] transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button> */}
          </div>
        </div>

        {/* Grid fallback for small screens -> single-row carousel for md+ */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {/* Keep original 3-column layout behaviour on small screens (stacked) */}
          <Card className="bg-[#0A1224] border border-gray-800 p-6 flex flex-col justify-center text-center">
            <h3 className="text-4xl md:text-6xl font-bold mb-2">4.9</h3>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
              ))}
            </div>
            <p className="text-gray-400 mb-6">( 3,700 Reviews )</p>
            <h4 className="text-xl font-bold mb-4 leading-tight">Client Voices, Powerful Results.</h4>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-full w-fit mx-auto"
            >
              More Testimonials
            </a>
          </Card>

          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#081020] to-[#0E1B35] border border-gray-800 p-6 relative overflow-hidden group"
            >
              <CardContent className="p-0">
                <Quote className="absolute top-4 right-4 text-blue-700 opacity-30 h-8 w-8" />
                <div className="flex items-center mb-4 gap-4">
                  {/* <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                  /> */}
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    {/* <p className="text-sm text-blue-400">{t.role}</p> */}
                  </div>
                </div>
                <p className="italic text-gray-200 text-base leading-relaxed">{t.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Single-row carousel for md+ */}
        <div
          className="hidden md:block relative mt-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Rating Card + visible CTA as first item (not duplicated) */}
          <div
            className="flex gap-6 overflow-x-hidden no-scrollbar py-6"
            ref={containerRef}
            role="list"
            tabIndex={0}
            aria-label="Client testimonials carousel"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") scrollByCard("right");
              if (e.key === "ArrowLeft") scrollByCard("left");
            }}
          >
            {/* Rating card (single) */}
            <motion.div
              className="min-w-[320px] max-w-[360px] flex-shrink-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-[#0A1224] border border-gray-800 p-6 flex flex-col justify-between text-center shadow-2xl h-full">
                <div>
                  <h3 className="text-5xl font-bold mb-2">4.9</h3>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6">( 3,700 Reviews )</p>
                  <h4 className="text-xl font-bold mb-4 leading-tight">Client Voices, Powerful Results.</h4>
                </div>

                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded-full"
                >
                  More Testimonials
                </a>
              </Card>
            </motion.div>

            {/* Testimonials duplicated for seamless effect */}
            {items.map((t, i) => (
              <motion.div
                key={`${t.name}-${i}`}
                className="testimonial-card min-w-[320px] max-w-[360px] flex-shrink-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % testimonials.length) * 0.06 }}
              >
                <Card className="bg-gradient-to-br from-[#081020] to-[#0E1B35] border border-gray-800 p-6 h-full shadow-2xl">
                  <CardContent className="p-0">
                    <Quote className="text-blue-700 opacity-20 h-8 w-8 float-right" />

                    <div className="flex items-center gap-4 mb-4">
                      {/* <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                      /> */}
                      <div>
                        <p className="font-bold text-white">{t.name}</p>
                        {/* <p className="text-sm text-blue-400">{t.role}</p> */}
                      </div>
                    </div>

                    <p className="italic text-gray-200 text-sm leading-relaxed mb-4 h-[72px] overflow-hidden">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="h-4 w-4 fill-blue-500 text-blue-500" />
                        ))}
                      </div>

                      {/* <div className="text-xs text-gray-400">3,700 Reviews</div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* subtle left/right gradient hint */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#050B18] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#050B18] to-transparent" />
        </div>

        {/* Dots / indicators */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? "w-6 bg-blue-500" : "w-2 bg-gray-500/50"}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
