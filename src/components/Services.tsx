import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, Wrench, Users, Cpu, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Globe, title: "Web Development", description: "Building responsive, scalable, and high-performance websites tailored to your business goals." },
  { icon: Smartphone, title: "Mobile App Development", description: "Crafting engaging mobile experiences through native and cross-platform solutions." },
  { icon: Wrench, title: "Testing & Maintenance", description: "Ensuring flawless performance through continuous testing, updates, and technical support." },
  { icon: Users, title: "IT Consulting", description: "Providing strategic technology guidance to streamline your business operations." },
  { icon: Cpu, title: "AI & Automation", description: "Leverage machine learning and intelligent automation to enhance efficiency." },
  { icon: ShieldCheck, title: "Cybersecurity & Compliance", description: "Protecting your data and infrastructure with top-tier security measures and monitoring." },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative bg-[#050B18] text-white py-24 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left max-w-3xl mb-12 mx-auto md:mx-0">
          <p className="text-blue-500 font-semibold mb-4">| Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Future-Ready <br /> IT Solutions.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">
            Empower your business with cutting-edge digital services designed to accelerate growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 500; // stagger delay in ms

            return (
              <Card
                key={service.title}
                className={`bg-[#0A1224] border border-gray-800 transform transition-all duration-500 opacity-0`}
                style={
                  visible
                    ? {
                        animation: `cardIn 600ms cubic-bezier(.2,.9,.3,1) forwards`,
                        animationDelay: `${delay}ms`,
                      }
                    : undefined
                }
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-2xl bg-[#081020] group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-sky-400 transition-all duration-400">
                      <Icon className="h-7 w-7 text-blue-400 group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    <div className="mt-3 flex items-center justify-between w-full">
                      {/* <a href="#contact" className="text-blue-400 hover:text-white font-semibold inline-flex items-center gap-2">
                        Learn More →
                      </a> */}
                      <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-green-500 group-hover:translate-y-[-2px] transition-transform duration-300">
                        Trusted
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes cardIn {
          0% { opacity: 0; transform: translateY(40px) scale(0.97); }
          60% { transform: translateY(-6px) scale(1.02); opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .group:hover { transform: translateY(-4px); }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Services;
