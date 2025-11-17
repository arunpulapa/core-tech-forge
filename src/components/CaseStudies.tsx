import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const cases = [
    {
      image: caseStudy1,
      title: "Enhancing Supply Chain Efficiency",
      company: "LogiChain Partners",
      metric: "Improved Delivery Accuracy",
      description:
        "Inefficient inventory tracking and delayed shipments were causing client dissatisfaction and revenue loss.",
    },
    {
      image: caseStudy2,
      title: "Transforming Online Retail With AI",
      company: "ShopSphere Inc.",
      metric: "Increased Sales",
      description:
        "Low customer engagement and declining sales due to outdated systems and lack of personalized recommendations.",
    },
    {
      image: caseStudy3,
      title: "Securing Healthcare Systems",
      company: "HealthPro Systems",
      metric: "Reduced Operational Cost",
      description:
        "Outdated IT infrastructure and non-compliance with data security regulations hindered operational efficiency.",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="case-studies"
      className="py-20 bg-section-bg text-foreground overflow-hidden gradient-mesh"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`neon-text-secondary font-semibold mb-4 transform opacity-0 translate-y-6 transition-all duration-700 ${
              visible ? "animate-text-delay1" : ""
            }`}
          >
            | Case Studies
          </p>
          <h2
            className={`text-5xl md:text-6xl font-extrabold mb-4 leading-tight transform opacity-0 translate-y-6 transition-all duration-700 ${
              visible ? "animate-text-delay2" : ""
            }`}
          >
            Real Solutions, <br /> <span className="neon-text-primary">Real Impact</span>.
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-3xl mx-auto transform opacity-0 translate-y-6 transition-all duration-700 ${
              visible ? "animate-text-delay3" : ""
            }`}
          >
           Our team is dedicated to providing seamless solutions, combining expertise and innovation to help your business thrive in a constantly evolving digital landscape
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((item, index) => {
            const delay = 300 * index + 500; // start after header animation

            return (
              <Card
                key={index}
                className={`glass-card neon-border-secondary hover:neon-border-primary border-none text-left transform opacity-0 translate-y-10 transition-all duration-700 group`}
                style={
                  visible
                    ? {
                        animation: `caseIn 700ms cubic-bezier(.2,.9,.3,1) forwards`,
                        animationDelay: `${delay}ms`,
                      }
                    : undefined
                }
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-2 mt-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:neon-text-primary transition-colors">{item.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-secondary font-medium mb-4">
                    <span className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> {item.company}
                    </span>
                    <span className="text-muted-foreground">|</span>
                    <span className="flex items-center gap-1 text-accent">
                      <ExternalLink className="w-4 h-4" /> {item.metric}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <a
                    href="#"
                    className="text-secondary font-semibold flex items-center gap-2 hover:text-primary transition-colors group-hover:animate-pulse-glow"
                  >
                    Read More <span className="text-lg">+</span>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes caseIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-5px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* staggered text animations */
        .animate-text-delay1 {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition-delay: 0.2s;
        }
        .animate-text-delay2 {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition-delay: 0.4s;
        }
        .animate-text-delay3 {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition-delay: 0.6s;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-text-delay1, .animate-text-delay2, .animate-text-delay3,
          .case-appear, .case-appear * { animation: none !important; transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
