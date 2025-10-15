import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const CaseStudies = () => {
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

  return (
    <section id="case-studies" className="py-20 bg-[#050B16] text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Real Solutions, Real Impact.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Mauris hendrerit urna sit amet sem sagittis, eu consequat nisi
            fermentum. Fusce dui ligula, rutrum ac felis sit amet,
            sollicitudinaccums justo. Suspendisse potenti.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="bg-transparent border-none text-left hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-0 mt-6">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-blue-400 font-medium mb-4">
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> {item.company}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> {item.metric}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors"
                >
                  Read More <span className="text-lg">+</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
