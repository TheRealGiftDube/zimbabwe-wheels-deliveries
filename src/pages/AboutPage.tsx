
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Package, Clock, MapPin, Shield, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-mydelivery-blue mb-6">About MyDelivery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zimbabwe's newest delivery service, connecting people with the things they need through innovative solutions.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-mydelivery-blue mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in early 2025, MyDelivery was born from a simple vision: to transform how local deliveries work in Zimbabwe.
            </p>
            <p className="text-gray-700 mb-4">
              Starting with a focused operation in Harare, we're building the foundation for what will become Zimbabwe's most reliable delivery network. Our journey has just begun, and we're excited about the road ahead.
            </p>
            <p className="text-gray-700">
              With plans for expansion to Bulawayo, Gweru, and Mutare on our roadmap, we're committed to creating a delivery service that truly meets the needs of Zimbabweans across the country.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center p-8">
            <Package className="h-32 w-32 text-mydelivery-blue opacity-50" />
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-mydelivery-blue mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Reliability",
                description: "We understand that time matters. Our commitment to on-time delivery drives everything we do."
              },
              {
                icon: Shield,
                title: "Security",
                description: "Every package is treated with care, with plans to implement insurance coverage as we grow."
              },
              {
                icon: Users,
                title: "Community",
                description: "We're proud to create employment opportunities and contribute to our local communities."
              },
              {
                icon: MapPin,
                title: "Accessibility",
                description: "Our vision is to make delivery services available to everyone across Zimbabwe."
              }
            ].map((value, index) => (
              <Card key={index} className="border-t-4 border-t-mydelivery-green">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-mydelivery-green/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-mydelivery-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Leadership Team with Silhouettes */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-mydelivery-blue mb-8 text-center">Our Vision Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Tatenda Makunike",
                role: "Founder & CEO",
                bio: "With a passion for innovation and logistics, Tatenda founded MyDelivery with a clear vision to transform delivery services across Zimbabwe."
              },
              {
                name: "Chido Murehwa",
                role: "Operations Lead",
                bio: "Chido oversees our operational strategies, focused on building scalable systems that will support our ambitious growth plans."
              },
              {
                name: "Tendai Nyoni",
                role: "Technology Strategist",
                bio: "Leading our technology vision, Tendai is developing the digital roadmap that will power MyDelivery's expansion across Zimbabwe."
              }
            ].map((person, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                    <Users className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-mydelivery-green font-medium mb-3">{person.role}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Future Vision */}
        <div className="bg-mydelivery-blue text-white rounded-lg py-12 px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Vision for Tomorrow</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              While we're just taking our first steps, our ambitions for transforming Zimbabwe's delivery landscape are bold and clear.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mydelivery-blue/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-mydelivery-yellow mb-3">Expanding Our Reach</h3>
              <p className="text-gray-200">
                From our starting point in Harare, we're mapping our expansion to Zimbabwe's major cities and beyond. 
                Our goal is to build a nationwide network that makes delivery accessible to all Zimbabweans, 
                regardless of where they live.
              </p>
            </div>
            <div className="bg-mydelivery-blue/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-mydelivery-yellow mb-3">Innovation in Service</h3>
              <p className="text-gray-200">
                We're committed to innovation in how deliveries are handled in Zimbabwe. From digital 
                tracking to specialized handling options, we're building capabilities that will set new 
                standards for delivery services in our country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
