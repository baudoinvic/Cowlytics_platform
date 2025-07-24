import { Activity, Zap, Shield, BarChart3, Users, Phone } from "lucide-react";
import breed from "../assets/breed.PNG";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <section className="bg-[#002240] text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Smart 
                Livestock Monitoring
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8">
                Real-time health insights <br className="hidden lg:block" />
                with precision ear tags
              </p>
              <Link to="/about">
                <button className="bg-white text-blue-600 font-semibold border border-blue-600 px-6 py-3 rounded-lg shadow-sm hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={breed}
                alt="Smart Livestock Monitoring"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={breed}
                alt="Smart Livestock Monitoring"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-16">FEATURES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Activity className="h-8 w-8 text-[#1C4F7B] mr-3" />
                  <h3 className="text-xl font-semibold">Health Monitoring</h3>
                </div>
                <p className="text-gray-600">
                  Body temperature and activity tracking for comprehensive
                  health insights
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-[#1C4F7B] mr-3" />
                  <h3 className="text-xl font-semibold">AI Analytics</h3>
                </div>
                <p className="text-gray-600">
                  Advanced algorithms for health insights and productivity
                  optimization
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-[#1C4F7B] mr-3" />
                  <h3 className="text-xl font-semibold">Geo-Fencing</h3>
                </div>
                <p className="text-gray-600">
                  Set customizable virtual boundaries and alerts for livestock
                  security
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-[#1C4F7B] mr-3" />
                  <h3 className="text-xl font-semibold">
                    Breeding Optimization
                  </h3>
                </div>
                <p className="text-gray-600">
                  Estrus detection and reproductive health tracking for better
                  outcomes
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-[#1C4F7B] mr-3" />
                  <h3 className="text-xl font-semibold">Long Battery Life</h3>
                </div>
                <p className="text-gray-600">
                  Ultra-efficient design provides extended operation without
                  frequent charging
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Phone className="h-8 w-8 text-[#1C4F7B] mr-3" />
                  <h3 className="text-xl font-semibold">Ultra Battery Life</h3>
                </div>
                <p className="text-gray-600">
                  Ultra-efficient design provides extended operation in harsh
                  conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">ABOUT US</h2>
              <h3 className="text-lg font-semibold mb-4 text-[#1C4F7B]">
                Revolutionizing Livestock Management
              </h3>
              <p className="text-gray-600 mb-6">
                We are proudly providing farmers worldwide with accessible,
                affordable, and cutting-edge technology that improves animal
                welfare and farm productivity as well.
              </p>
              <p className="text-gray-600">
                Providing farmers we provide farmers worldwide with accessible,
                affordable, and cutting technology that improves animal welfare.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1C4F7B]">
                Revolutionizing Livestock Management
              </h3>
              <p className="text-gray-600">
                Providing farmers we provide farmers worldwide with accessible,
                affordable, and cutting edge technology that improves animal
                welfare, productivity, and farm management efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Advanced Technology</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge IoT sensors and AI-powered analytics provide
              real-time insights into your livestock's health, behavior, and
              location.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 text-center hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-[#1C4F7B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Real-Time Monitoring
                </h3>
                <p className="text-gray-600">
                  24/7 continuous monitoring of vital signs, activity levels,
                  and behavioral patterns
                </p>
              </div>
            </div>

            <div className="p-8 text-center hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-[#1C4F7B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Predictive Analytics
                </h3>
                <p className="text-gray-600">
                  AI-powered predictions for health issues, breeding cycles, and
                  optimal feeding times
                </p>
              </div>
            </div>

            <div className="p-8 text-center hover:shadow-lg transition-shadow bg-white shadow-md rounded-lg">
              <div className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-[#1C4F7B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Mobile Integration
                </h3>
                <p className="text-gray-600">
                  Access all data and alerts through our intuitive mobile app,
                  anywhere, anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
