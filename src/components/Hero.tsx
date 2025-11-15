import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/herobg.mp4";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mount animations
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Slow down video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // half speed
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      aria-label="Hero section - Future Proof Your Business"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover top-0 left-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background/95 pointer-events-none" />

      {/* Hero Content */}
      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              className={`fade-slide ${
                mounted ? "show delay-2" : ""
              } text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight`}
            >
              Future-Proof{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Your Business
              </span>.
            </h1>

            <p
              className={`fade-slide ${
                mounted ? "show delay-3" : ""
              } text-gray-300 text-lg md:text-xl max-w-2xl`}
            >
              We build secure, scalable software that powers growth — from AI-driven
              automation to resilient cloud platforms. Partner with a team that ships
              quality and drives measurable impact.
            </p>

            <div
              className={`fade-slide ${
                mounted ? "show delay-3" : ""
              } flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4`}
            >
              <Button
                size="lg"
                className="bg-[#003cff] hover:bg-[#002db3] px-6 py-3 text-lg rounded-full shadow-lg transform-gpu hover:-translate-y-0.5 transition"
                aria-label="Contact us"
              >
                Contact Us
              </Button>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 mt-2 sm:mt-0 text-sm text-gray-200 hover:text-white transition"
              >
                Request a demo
              </a>
            </div>
          </div>

          {/* Right Decorative */}
          <div className="hidden lg:flex lg:col-span-5 justify-center relative hero-right-visual">
            {/* Floating decorative circle */}
            <div className="absolute -right-10 -top-12 w-44 h-44 rounded-full bg-gradient-to-tr from-blue-600/30 to-indigo-400/20 blur-3xl float-slow pointer-events-none" />
            {/* Glass overlay at bottom */}
            <div className="absolute -left-12 bottom-6 w-48 h-28 rounded-xl bg-gradient-to-l from-indigo-600/20 to-transparent blur-xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Fade-slide animation */}
      <style>{`
        .fade-slide {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.2,.9,.3,1);
        }
        .fade-slide.show {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }

        /* Floating animation for decorative circle */
        .float-slow {
          animation: floatY 6s ease-in-out infinite;
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
