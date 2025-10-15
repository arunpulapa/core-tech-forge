import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <AboutSection/>
      <Services />
      <CaseStudies />
      <Testimonials />
      {/* <Pricing /> */}
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
