

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Activity, Zap, Shield, BarChart3, Users, Phone } from "lucide-react";
// import { Link } from "react-router-dom";



// const Home = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             <div className="lg:w-1/2 mb-10 lg:mb-0">
//               <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//                 Smart
//                 <br />
//                 Livestock
//                 <br />
//                 Monitoring
//               </h1>
//               <p className="text-xl mb-8 text-blue-100">
//                 Real-time health insights
//                 <br />
//                 with precision ear tags
//               </p>
//               <Button
//                 size="lg"
//                 className="bg-white text-blue-600 hover:bg-blue-50"
//               >
//                 Learn More
//               </Button>
//             </div>
//             <div className="lg:w-1/2">
//               <img
//                 src="/lovable-uploads/08f6e8f0-ae02-45fc-aa7e-58385b7f2fa1.png"
//                 alt="Smart Livestock Monitoring"
//                 className="w-full max-w-md mx-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">FEATURES</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   <Activity className="h-8 w-8 text-blue-600 mr-3" />
//                   <h3 className="text-xl font-semibold">Health Monitoring</h3>
//                 </div>
//                 <p className="text-gray-600">
//                   Body temperature and activity tracking for comprehensive
//                   health insights
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
//                   <h3 className="text-xl font-semibold">AI Analytics</h3>
//                 </div>
//                 <p className="text-gray-600">
//                   Advanced algorithms for health insights and productivity
//                   optimization
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   <Shield className="h-8 w-8 text-blue-600 mr-3" />
//                   <h3 className="text-xl font-semibold">Geo-Fencing</h3>
//                 </div>
//                 <p className="text-gray-600">
//                   Set customizable virtual boundaries and alerts for livestock
//                   security
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   <Users className="h-8 w-8 text-blue-600 mr-3" />
//                   <h3 className="text-xl font-semibold">
//                     Breeding Optimization
//                   </h3>
//                 </div>
//                 <p className="text-gray-600">
//                   Estrus detection and reproductive health tracking for better
//                   outcomes
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   <Zap className="h-8 w-8 text-blue-600 mr-3" />
//                   <h3 className="text-xl font-semibold">Long Battery Life</h3>
//                 </div>
//                 <p className="text-gray-600">
//                   Ultra-efficient design provides extended operation without
//                   frequent charging
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   <Phone className="h-8 w-8 text-blue-600 mr-3" />
//                   <h3 className="text-xl font-semibold">Ultra Battery Life</h3>
//                 </div>
//                 <p className="text-gray-600">
//                   Ultra-efficient design provides extended operation in harsh
//                   conditions
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">
//                 Revolutionizing Livestock Management
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 We are proudly providing farmers worldwide with accessible,
//                 affordable, and cutting-edge technology that improves animal
//                 welfare and farm productivity as well.
//               </p>
//               <p className="text-gray-600">
//                 Providing farmers we provide farmers worldwide with accessible,
//                 affordable, and cutting technology that improves animal welfare.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">
//                 Revolutionizing Livestock Management
//               </h3>
//               <p className="text-gray-600">
//                 Providing farmers we provide farmers worldwide with accessible,
//                 affordable, and cutting edge technology that improves animal
//                 welfare, productivity, and farm management efficiency.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technology Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-6">Advanced Technology</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our cutting-edge IoT sensors and AI-powered analytics provide
//               real-time insights into your livestock's health, behavior, and
//               location.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="p-8 text-center hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                   <Activity className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">
//                   Real-Time Monitoring
//                 </h3>
//                 <p className="text-gray-600">
//                   24/7 continuous monitoring of vital signs, activity levels,
//                   and behavioral patterns
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-8 text-center hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                   <BarChart3 className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">
//                   Predictive Analytics
//                 </h3>
//                 <p className="text-gray-600">
//                   AI-powered predictions for health issues, breeding cycles, and
//                   optimal feeding times
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="p-8 text-center hover:shadow-lg transition-shadow">
//               <CardContent className="p-0">
//                 <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                   <Phone className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">
//                   Mobile Integration
//                 </h3>
//                 <p className="text-gray-600">
//                   Access all data and alerts through our intuitive mobile app,
//                   anywhere, anytime
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import { Activity, Zap, Shield, BarChart3, Users, Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Smart
                <br />
                Livestock
                <br />
                Monitoring
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Real-time health insights
                <br />
                with precision ear tags
              </p>
              <button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Learn More
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/08f6e8f0-ae02-45fc-aa7e-58385b7f2fa1.png"
                alt="Smart Livestock Monitoring"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">FEATURES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Activity className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Health Monitoring</h3>
                </div>
                <p className="text-gray-600">
                  Body temperature and activity tracking for comprehensive
                  health insights
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">AI Analytics</h3>
                </div>
                <p className="text-gray-600">
                  Advanced algorithms for health insights and productivity
                  optimization
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Geo-Fencing</h3>
                </div>
                <p className="text-gray-600">
                  Set customizable virtual boundaries and alerts for livestock
                  security
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
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

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Long Battery Life</h3>
                </div>
                <p className="text-gray-600">
                  Ultra-efficient design provides extended operation without
                  frequent charging
                </p>
              </div>
            </div>

            <div className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="flex items-center mb-4">
                  <Phone className="h-8 w-8 text-blue-600 mr-3" />
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
              <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
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
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Advanced Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge IoT sensors and AI-powered analytics provide
              real-time insights into your livestock's health, behavior, and
              location.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-blue-600" />
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

            <div className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
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

            <div className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
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