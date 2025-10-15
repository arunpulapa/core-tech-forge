import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-cover bg-center pt-28 text-white" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="container relative z-10 px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Future-Proof<br />Your Business.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar.
          </p>

          <div className="flex items-center gap-10 flex-wrap">
            <Button size="lg" className="bg-[#003cff] hover:bg-[#002db3] px-8 py-6 text-lg rounded-full">
              Contact Us
            </Button>

            <div className="text-left">
              <p className="text-3xl font-bold text-white">172k+</p>
              <p className="text-sm text-blue-400">Project Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
