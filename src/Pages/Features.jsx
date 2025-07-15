import {
  Activity,
  Zap,
  Shield,
  BarChart3,
  Users,
  Phone,
  MapPin,
  Bell,
  Smartphone,
  Clock,
  Heart,
  Thermometer,
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const mainFeatures = [
    {
      icon: Activity,
      title: "Health Monitoring",
      description:
        "24/7 continuous monitoring of vital signs, body temperature, and activity levels for early disease detection.",
      benefits: [
        "Real-time health alerts",
        "Early disease detection",
        "Comprehensive health reports",
      ],
    },
    {
      icon: BarChart3,
      title: "AI Analytics",
      description:
        "Advanced machine learning algorithms analyze patterns to predict health issues and optimize farm productivity.",
      benefits: [
        "Predictive health insights",
        "Productivity optimization",
        "Data-driven decisions",
      ],
    },
    {
      icon: Shield,
      title: "Geo-Fencing",
      description:
        "Set virtual boundaries and receive instant alerts when livestock move outside designated areas.",
      benefits: ["Theft prevention", "Grazing management", "Location tracking"],
    },
    {
      icon: Users,
      title: "Breeding Optimization",
      description:
        "Advanced estrus detection and reproductive health monitoring for improved breeding outcomes.",
      benefits: [
        "Heat detection accuracy",
        "Pregnancy monitoring",
        "Genetic tracking",
      ],
    },
    {
      icon: Zap,
      title: "Long Battery Life",
      description:
        "Ultra-efficient design provides up to 5 years of operation without battery replacement.",
      benefits: [
        "5+ years battery life",
        "Solar charging option",
        "Low maintenance",
      ],
    },
    {
      icon: Phone,
      title: "Mobile Integration",
      description:
        "Access all data through our intuitive mobile app with real-time notifications and alerts.",
      benefits: [
        "iOS & Android apps",
        "Real-time notifications",
        "Remote monitoring",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Precise location tracking with satellite connectivity",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description:
        "Customizable notifications for various health and behavior events",
    },
    {
      icon: Smartphone,
      title: "Cloud Integration",
      description: "Secure cloud storage with data backup and synchronization",
    },
    {
      icon: Clock,
      title: "Historical Data",
      description:
        "Access to historical trends and patterns for better insights",
    },
    {
      icon: Heart,
      title: "Welfare Monitoring",
      description: "Comprehensive animal welfare tracking and reporting",
    },
    {
      icon: Thermometer,
      title: "Environmental Sensors",
      description:
        "Monitor environmental conditions affecting livestock health",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#1C4F7B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl  font-bold mb-6">
              Comprehensive
              <br />
              Livestock Features
            </h1>
            <p className="mb-8 max-w-2xl mx-auto">
              Discover how our cutting-edge IoT technology revolutionizes
              livestock management with real-time monitoring, AI-powered
              insights, and comprehensive health tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-6 text-2xl">Core Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our smart ear tags combine multiple sensors and AI technology to
              provide comprehensive livestock monitoring solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-[#1C4F7B]" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Additional Capabilities</h2>
            <p className="text-gray-600">
              Even more features to enhance your livestock management experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-[#1C4F7B]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Technical Specifications
            </h2>
            <p className="text-gray-600">
              Industry-leading hardware and software specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "5+ Years", subtitle: "Battery Life" },
              { title: "IP67", subtitle: "Water Resistance" },
              { title: "±1°C", subtitle: "Temperature Accuracy" },
              { title: "99.9%", subtitle: "Uptime Reliability" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow"
              >
                <h3 className="text-2xl font-bold text-[#1C4F7B] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
