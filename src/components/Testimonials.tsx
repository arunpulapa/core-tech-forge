import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      image: client1,
      name: "Husain Bakar",
      role: "COO of HealthPro Systems",
      quote:
        "Their Secure Telemedicine Platform Transformed Patient Care, Reducing Wait Times By 40%. A True Partner In Innovation!",
    },
    {
      image: client2,
      name: "Lisa Gimenez",
      role: "Director of FinEdge Group",
      quote:
        "Their Blockchain Solution Streamlined Our Transactions And Eliminated Fraud Risks. Exceptional Expertise And Flawless Execution!",
    },
    {
      image: client3,
      name: "Michael Roberts",
      role: "CTO of VisionTech Global",
      quote:
        "An incredible experience from start to finish. The team delivered beyond expectations with precision and creativity.",
    },
  ];

  return (
    <section className="bg-[#050B18] text-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 mb-16">
          <div>
            <p className="text-blue-500 font-semibold mb-4">| Testimonials</p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Trusted By <br /> Global Leaders.
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-xl">
            Mauris hendrerit urna sit amet sem sagittis, eu consequat nisi
            fermentum. Fusce dui ligula, rutrum ac felis sit amet, sollicitudin
            accumsan justo. Suspendisse potenti.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Rating Card */}
          <Card className="bg-[#0A1224] border border-gray-800 p-8 flex flex-col justify-center text-center">
            <h3 className="text-6xl font-bold mb-2">4.9</h3>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
              ))}
            </div>
            <p className="text-gray-400 mb-8">( 3,700 Reviews )</p>
            <h4 className="text-2xl font-bold mb-6 leading-tight">
              Client Voices, <br /> Powerful Results.
            </h4>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded-full w-fit mx-auto"
            >
              More Testimonials
            </a>
          </Card>

          {/* Client Testimonials */}
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#081020] to-[#0E1B35] border border-gray-800 p-8 relative overflow-hidden group"
            >
              <CardContent className="p-0">
                <Quote className="absolute top-6 right-6 text-blue-700 opacity-30 h-10 w-10" />
                <div className="flex items-center mb-6 gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                  />
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-blue-400">{t.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-200 text-lg leading-relaxed">
                  {t.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === 0 ? "w-6 bg-blue-500" : "w-2 bg-gray-500/50"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
