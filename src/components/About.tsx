import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#030b17] text-white py-20">
      <div className="container mx-auto px-4 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/736x/02/61/96/026196c12bf94ebae9533c5d06e20bfe.jpg"
            alt="Tech Experts"
            className="rounded-md w-full h-[550px] object-cover"
          />
          <div className="absolute bottom-[-60px] left-10 bg-transparent">
            <img
              src="https://i.pinimg.com/736x/21/ce/96/21ce960479fc576304613e852c7d4f59.jpg"
              alt="Team Working"
              className="rounded-md w-[280px] h-[220px] object-cover border-4 border-[#030b17]"
            />
          </div>

          <div className="absolute bottom-[-120px] left-14 text-center">
            <h2 className="text-5xl font-extrabold text-white">2+</h2>
            <p className="text-blue-500 text-lg font-semibold uppercase tracking-wide">
              Year Of Experiences
            </p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="lg:pl-16">
          <p className="text-blue-500 font-medium mb-2">| About Ak NextGen</p>

          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Experts In Tech <br /> Evolution.
          </h2>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            As an IT Solution and Services Company, we have a value in fulfilling
            our clients’ satisfaction.
          </p>

          {/* Innovation Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Innovation And Adaptability
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Driving continuous innovation to deliver cutting-edge, tailored
              solutions that evolve with technology and your needs.
            </p>
          </div>

          {/* Customer-Centric Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Customer-Centric Excellence
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Putting you at the heart of every solution to ensure unparalleled
              service, reliability, and value.
            </p>
          </div>

          {/* Right Column Content */}
          <div className="mt-10">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            {/* Progress Bars */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-white">IT Support</span>
                  <span className="text-blue-400 font-semibold">86%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full w-[86%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-white">IT Security</span>
                  <span className="text-blue-400 font-semibold">94%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full w-[94%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-white">Cloud Support</span>
                  <span className="text-blue-400 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full w-[90%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
