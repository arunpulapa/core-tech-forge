import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
  image: client1,
  name: "Vijay Varikuti",
  role: "Founder, Sri Venkateswara Traders – Hyderabad",
  quote:
    "Innovation Bytes built our company website with a sleek and modern design. Our clients now find it easier to explore our services online, and the site loads lightning fast. Excellent work by the team!",
},
{
  image: client2,
  name: "Venkatesh Naidu",
  role: "Managing Partner, TaxEase Consultants – Vijayawada",
  quote:
    "The custom dashboard developed by Innovation Bytes completely transformed how we handle client tax filings. Everything from reports to analytics is now centralized and effortless to track. A big productivity boost for our firm!",
},
{
  image: client3,
  name: "Ravi Teja",
  role: "Director, Sai InfraTech Solutions – Guntur",
  quote:
    "Their CRM app helped us manage leads, clients, and follow-ups in one place. Our sales team works more efficiently, and communication with customers has become much smoother. Highly recommend Innovation Bytes!",
},

  ];

  // duplicate for seamless looping
  const items = [...testimonials, ...testimonials];

  // tweakable speed (pixels per frame)
  const SCROLL_SPEED = 0.6;

  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // page visibility

  // inject CSS to hide scrollbars for the scroll container (works cross-browser)
  useEffect(() => {
    const styleId = "testimonials-scrollbar-hide";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        /* hide scrollbar for the testimonial scroll container */
        .testimonial-scroll {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .testimonial-scroll::-webkit-scrollbar { display: none; } /* Chrome, Safari, Opera */
      `;
      document.head.appendChild(style);
    }
  }, []);

  // handle page visibility to pause animation when tab is hidden
  useEffect(() => {
    const handle = () => setIsVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handle);
    return () => document.removeEventListener("visibilitychange", handle);
  }, []);

  // auto-scroll loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ensure initial scroll is within first half so reset logic works predictably
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = container.scrollLeft - container.scrollWidth / 2;
    }

    let running = true;

    const step = () => {
      if (!running) return;

      // pause if hovered or page not visible
      if (!isHovered && isVisible) {
        // increment scroll
        container.scrollLeft += SCROLL_SPEED;
      }

      // if we've scrolled past half (since items are duplicated) — wrap back by subtracting half width
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
  }, [isHovered, isVisible]); // rerun when hover/page visibility changes

  // manual scroll (prev/next) — operates on the scrollable container
  const scrollByCard = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector(".testimonial-card");
    const gap = 24; // match your gap (gap-6)
    const step = card ? card.offsetWidth + gap : 340;
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

          <div className="flex items-center gap-3 md:ml-6">
            {/* Optional manual buttons (uncomment if you want visible controls) */}
            {/* <button onClick={() => scrollByCard('left')}>Prev</button>
            <button onClick={() => scrollByCard('right')}>Next</button> */}
          </div>
        </div>

        {/* Small screens (stacked) */}
        <div className="md:hidden grid grid-cols-1 gap-8">
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
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                  </div>
                </div>
                <p className="italic text-gray-200 text-base leading-relaxed">{t.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* md+ layout: static rating card on left, auto-scrolling testimonials on right */}
        <div
          className="hidden md:flex relative mt-8 gap-6 items-start"
          // hover on the whole area (including static card) will pause; if you want only the scroll area to pause,
          // move these handlers to the scrollable div below.
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Static Rating Card (non-scrolling) */}
          <div className="w-[320px] flex-shrink-0">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="bg-[#0A1224] border border-gray-800 p-6 flex flex-col justify-between text-center shadow-2xl h-full">
                <div>
                  <h3 className="text-5xl font-bold mb-2">4.8</h3>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  {/* <p className="text-gray-400 mb-6">( 3,700 Reviews )</p> */}
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
          </div>

          {/* Scrollable container (this is the actual scrollable element) */}
          <div
            className="flex-1 overflow-hidden"
            role="list"
            aria-label="Client testimonials carousel"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") scrollByCard("right");
              if (e.key === "ArrowLeft") scrollByCard("left");
            }}
          >
            <div
              ref={containerRef}
              className="testimonial-scroll flex gap-6 py-6 flex-nowrap"
              style={{
                overflowX: "auto",
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
              }}
            >
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
                        <div>
                          <p className="font-bold text-white">{t.name}</p>
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
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* subtle left/right gradient hint */}
          <div className="pointer-events-none absolute top-0 left-[320px] h-full w-16 bg-gradient-to-r from-[#050B18] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#050B18] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
