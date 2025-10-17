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
import AboutUs from "@/components/About";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <AboutUs />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Projects />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
