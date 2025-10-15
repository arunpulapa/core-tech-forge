import {
  Globe,
  Smartphone,
  Wrench,
  Users,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Building responsive, scalable, and high-performance websites tailored to your business goals.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Crafting engaging mobile experiences through native and cross-platform solutions.",
    },
    {
      icon: Wrench,
      title: "Testing & Maintenance",
      description:
        "Ensuring flawless performance through continuous testing, updates, and technical support.",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description:
        "Providing strategic technology guidance to streamline your business operations.",
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description:
        "Leverage machine learning and intelligent automation to enhance efficiency.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity & Compliance",
      description:
        "Protecting your data and infrastructure with top-tier security measures and monitoring.",
    },
  ];

  return (
    <section id="services" className="bg-[#050B18] text-white py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center md:text-left max-w-3xl mb-16">
          <p className="text-blue-500 font-semibold mb-4">| Our Services</p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Future-Ready <br /> IT Solutions.
          </h2>
          <p className="text-gray-400 text-lg">
            Empower your business with cutting-edge digital services designed to
            accelerate growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#0A1224] border border-gray-800 hover:border-blue-500 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-4 bg-[#081020] rounded-2xl group-hover:bg-blue-600 transition-all">
                    <service.icon className="h-8 w-8 text-blue-400 group-hover:text-white transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-semibold mt-4 inline-flex items-center group-hover:text-blue-400 transition-all"
                  >
                    Learn More →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
