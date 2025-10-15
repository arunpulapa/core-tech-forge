import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import caseStudy4 from "@/assets/case-study-4.jpg";

const CaseStudies = () => {
  const cases = [
    {
      image: caseStudy1,
      title: "Enterprise Digital Transformation",
      description: "Helped a Fortune 500 company migrate to cloud infrastructure, improving efficiency by 40%.",
      category: "Cloud Migration",
    },
    {
      image: caseStudy2,
      title: "Global Cloud Infrastructure",
      description: "Designed and deployed scalable cloud architecture serving 5 million+ users globally.",
      category: "Infrastructure",
    },
    {
      image: caseStudy3,
      title: "Advanced Cybersecurity Framework",
      description: "Implemented zero-trust security model protecting sensitive data for healthcare provider.",
      category: "Security",
    },
    {
      image: caseStudy4,
      title: "Custom ERP Development",
      description: "Built comprehensive enterprise resource planning system for manufacturing sector.",
      category: "Software Development",
    },
  ];

  const clients = ["Microsoft", "Amazon", "Google", "IBM", "Oracle", "SAP"];

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world success stories showcasing our expertise and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <Button variant="secondary" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-bold text-xl opacity-60 hover:opacity-100 cursor-pointer"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
