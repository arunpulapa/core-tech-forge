import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Cloud Infrastructure Setup",
        "Basic Security Protocols",
        "Email Support",
        "Monthly Performance Reports",
        "Up to 50 Users",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "$2,499",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced Cloud Solutions",
        "Enhanced Cybersecurity",
        "24/7 Priority Support",
        "Weekly Analytics",
        "Up to 200 Users",
        "Custom Integrations",
        "Dedicated Account Manager",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$4,999",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Full Cloud Infrastructure",
        "Enterprise Security Suite",
        "24/7 Premium Support",
        "Real-time Monitoring",
        "Unlimited Users",
        "Custom Development",
        "On-site Consultations",
        "SLA Guarantee",
      ],
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for your unique needs",
      features: [
        "Fully Customized Services",
        "Dedicated Infrastructure",
        "White-label Solutions",
        "Multi-region Support",
        "Advanced AI/ML Integration",
        "Executive Support Team",
        "Compliance Management",
        "Strategic Planning",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan that scales with your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                plan.highlighted
                  ? "border-primary border-2 shadow-2xl"
                  : "hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-10">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-primary hover:opacity-90"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
