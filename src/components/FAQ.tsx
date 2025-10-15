import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What IT services do you offer?",
      answer: "We provide comprehensive IT services including cloud solutions, cybersecurity, custom software development, data analytics, IT consultancy, mobile app development, AI/ML integration, and DevOps services. Our solutions are tailored to meet your specific business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Simple implementations can take 2-4 weeks, while comprehensive solutions may require 3-6 months. We provide detailed timelines during our initial consultation and maintain transparent communication throughout the project lifecycle.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer 24/7 support packages for all our clients. Our support includes proactive monitoring, regular updates, security patches, performance optimization, and dedicated technical assistance. We ensure your systems remain secure, efficient, and up-to-date.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across multiple industries including healthcare, finance, e-commerce, manufacturing, education, and technology sectors. Our team adapts our solutions to meet industry-specific compliance requirements and best practices.",
    },
    {
      question: "How do you ensure data security?",
      answer: "Security is our top priority. We implement industry-leading security protocols including encryption, multi-factor authentication, regular security audits, compliance with standards like ISO 27001 and SOC 2, and continuous monitoring. We follow zero-trust architecture principles and conduct regular penetration testing.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in seamless integration with existing infrastructure and third-party systems. Our team conducts thorough assessments of your current setup and develops integration strategies that minimize disruption while maximizing efficiency and compatibility.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border-2 hover:border-primary transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
