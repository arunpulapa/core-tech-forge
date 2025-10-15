import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="bg-[#050B18] text-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="mb-16 flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              Simplifying Tech<br />Through FAQs.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-muted-foreground text-lg text-gray-400">
              Mauris hendrerit urna sit amet sem sagittis, eu consequat nisi fermentum.
              Fusce dui ligula, rutrum ac felis sit amet, sollicitudin accumsan justo.
              Suspendisse potenti.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">General Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  What services does your company offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in posuere elit...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  Who can benefit from your services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Startups, enterprises, nonprofits, and everything in between.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  Do you offer customizable solutions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Yes, our services are tailor-made to your business needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  What industries do you specialize in?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  Healthcare, FinTech, E-commerce, EdTech, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  How can I get a consultation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  You can schedule via our contact page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Technical Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="tech-1">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  What technologies do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  We work with React, Node.js, AWS, Azure, Python, and more.
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
                  We offer both remote and on-site support services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Pricing And Packages</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pricing-1">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  What are your pricing packages?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  We offer flexible pricing—monthly retainers, hourly rates, or fixed project costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pricing-2">
                <AccordionTrigger className="text-left font-semibold text-white border-b border-gray-700 py-3">
                  What support services do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  24/7 monitoring, troubleshooting, and maintenance.
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
