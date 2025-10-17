import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Scroll-triggered animation
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#050B18] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20" ref={containerRef}>
        {/* Header Section */}
        <div
          className={`mb-16 flex flex-col lg:flex-row justify-between items-start gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              Simplifying Tech<br />Through FAQs.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-400 text-lg">
              Mauris hendrerit urna sit amet sem sagittis, eu consequat nisi
              fermentum. Fusce dui ligula, rutrum ac felis sit amet, sollicitudin
              accumsan justo. Suspendisse potenti.
            </p>
          </div>
        </div>

        {/* Accordion Section - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold mb-4">General Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  What services does your company offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Web & Mobile Development, UI/UX Design, Testing, Deployment, and IT Consulting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  Who can benefit from your services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Startups, enterprises, nonprofits, and everyone in between.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  Do you offer customizable solutions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Yes, all services are tailored to your unique business needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Column 2 */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold mb-4">Technical Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="tech-1">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  What technologies do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  React, Angular, Node.js, Python, AWS, Azure, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-2">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  Can you integrate existing systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Yes, we ensure seamless integration with minimal disruption.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-3">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  Do you provide on-site support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Both remote and on-site support are available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
