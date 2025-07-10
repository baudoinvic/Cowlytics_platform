import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Cowlytics
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading the revolution in smart livestock management with
              cutting-edge IoT technology and AI-powered analytics for modern
              farmers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Cowlytics, we're dedicated to revolutionizing livestock
                management through innovative technology that enhances animal
                welfare, increases farm productivity, and promotes sustainable
                agriculture practices.
              </p>
              <p className="text-gray-600 text-lg">
                We believe that by providing farmers with real-time insights and
                predictive analytics, we can help create a more efficient,
                humane, and profitable agricultural ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">10,000+</h3>
                  <p className="text-gray-600">Active Users</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">50+</h3>
                  <p className="text-gray-600">Countries</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Cowlytics
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of technology to create
                  solutions that transform traditional farming practices.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every product we create and every
                  service we provide to our farming community.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to promoting sustainable agriculture that
                  benefits both farmers and the environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020 by a team of agricultural engineers and
                technology experts, Cowlytics emerged from a simple observation:
                traditional livestock management methods were not keeping pace
                with modern farming needs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founders, having grown up on farms themselves, understood
                the daily challenges faced by livestock farmers. They envisioned
                a world where technology could provide farmers with the insights
                needed to make better decisions about their animals' health,
                breeding, and overall management.
              </p>
              <p className="text-lg text-gray-600">
                Today, Cowlytics serves thousands of farmers across the globe,
                helping them improve their operations while ensuring the highest
                standards of animal welfare. Our journey continues as we develop
                new technologies and expand our reach to support the global
                farming community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
