// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center">
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Ready to revolutionize your livestock management? Get in touch
//               with our team and discover how Cowlytics can transform your
//               farming operations.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <Card className="p-8">
//               <CardHeader className="px-0 pt-0">
//                 <CardTitle className="text-2xl font-bold">
//                   Send us a Message
//                 </CardTitle>
//                 <p className="text-gray-600">
//                   Fill out the form below and we'll get back to you within 24
//                   hours.
//                 </p>
//               </CardHeader>
//               <CardContent className="px-0 pb-0">
//                 <form className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label
//                         htmlFor="firstName"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         First Name
//                       </label>
//                       <Input id="firstName" placeholder="John" />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="lastName"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         Last Name
//                       </label>
//                       <Input id="lastName" placeholder="Doe" />
//                     </div>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Phone Number
//                     </label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       placeholder="+1 (555) 123-4567"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="company"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Farm/Company Name
//                     </label>
//                     <Input id="company" placeholder="Your Farm Name" />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       rows={4}
//                       placeholder="Tell us about your livestock management needs..."
//                     />
//                   </div>
//                   <Button className="w-full bg-blue-600 hover:bg-blue-700">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Contact Information */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
//                 <p className="text-gray-600 text-lg mb-8">
//                   We're here to help you succeed. Whether you have questions
//                   about our products, need technical support, or want to discuss
//                   a custom solution, our team is ready to assist.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <Card className="p-6">
//                   <CardContent className="p-0">
//                     <div className="flex items-start space-x-4">
//                       <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
//                         <MapPin className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg mb-2">
//                           Our Office
//                         </h3>
//                         <p className="text-gray-600">
//                           123 Agriculture Drive
//                           <br />
//                           Farm Tech City, FT 12345
//                           <br />
//                           United States
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="p-6">
//                   <CardContent className="p-0">
//                     <div className="flex items-start space-x-4">
//                       <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
//                         <Phone className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg mb-2">
//                           Phone Support
//                         </h3>
//                         <p className="text-gray-600">
//                           Main: +1 (555) 123-4567
//                           <br />
//                           Support: +1 (555) 987-6543
//                           <br />
//                           Available 24/7
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="p-6">
//                   <CardContent className="p-0">
//                     <div className="flex items-start space-x-4">
//                       <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
//                         <Mail className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg mb-2">Email Us</h3>
//                         <p className="text-gray-600">
//                           General: info@cowlytics.com
//                           <br />
//                           Support: support@cowlytics.com
//                           <br />
//                           Sales: sales@cowlytics.com
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="p-6">
//                   <CardContent className="p-0">
//                     <div className="flex items-start space-x-4">
//                       <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
//                         <Clock className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg mb-2">
//                           Business Hours
//                         </h3>
//                         <p className="text-gray-600">
//                           Monday - Friday: 8:00 AM - 6:00 PM
//                           <br />
//                           Saturday: 9:00 AM - 4:00 PM
//                           <br />
//                           Sunday: Closed (Emergency support available)
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to revolutionize your livestock management? Get in touch with
            our team and discover how Cowlytics can transform your farming
            operations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1">Send us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm/Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Farm Name"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your livestock management needs..."
                  className="w-full border border-gray-300 rounded px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                We're here to help you succeed. Whether you have questions about
                our products, need technical support, or want to discuss a
                custom solution, our team is ready to assist.
              </p>
            </div>

            {[
              {
                icon: <MapPin className="h-6 w-6 text-blue-600" />,
                title: "Our Office",
                content: (
                  <>
                    123 Agriculture Drive
                    <br />
                    Farm Tech City, FT 12345
                    <br />
                    United States
                  </>
                ),
              },
              {
                icon: <Phone className="h-6 w-6 text-blue-600" />,
                title: "Phone Support",
                content: (
                  <>
                    Main: +1 (555) 123-4567
                    <br />
                    Support: +1 (555) 987-6543
                    <br />
                    Available 24/7
                  </>
                ),
              },
              {
                icon: <Mail className="h-6 w-6 text-blue-600" />,
                title: "Email Us",
                content: (
                  <>
                    General: info@cowlytics.com
                    <br />
                    Support: support@cowlytics.com
                    <br />
                    Sales: sales@cowlytics.com
                  </>
                ),
              },
              {
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                title: "Business Hours",
                content: (
                  <>
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed (Emergency support available)
                  </>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

