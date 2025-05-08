
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
            Zimbabwe's newest delivery partner, connecting people with the things they need through innovative and customer-focused service.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-mydelivery-blue mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in early 2025, MyDelivery emerged from a vision to transform local delivery services in Zimbabwe. 
            </p>
            <p className="text-gray-700 mb-4">
              Starting with a focused operation in Harare, we're building the foundation for what will become Zimbabwe's most reliable delivery network. Our journey has just begun, but our commitment to excellence is already making an impact.
            </p>
            <p className="text-gray-700">
              With ambitious expansion plans for Bulawayo, Gweru, and Mutare in the coming years, we're on a mission to revolutionize Zimbabwe's delivery landscape through accessible, affordable, and reliable service.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/placeholder.svg" 
              alt="MyDelivery courier with motorcycle" 
              className="w-full h-auto"
            />
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
                description: "We understand that time matters. Our commitment to on-time delivery is unwavering."
              },
              {
                icon: Shield,
                title: "Security",
                description: "Your parcels are treated with the utmost care, with insurance coverage on every delivery."
              },
              {
                icon: Users,
                title: "Community",
                description: "We're proud to create employment opportunities and contribute to our local communities."
              },
              {
                icon: MapPin,
                title: "Accessibility",
                description: "Making delivery services available to everyone, in urban centers and beyond."
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
                bio: "With a passion for innovation and logistics, Tatenda founded MyDelivery with a clear vision to transform delivery services across Zimbabwe.",
                image: "/placeholder.svg"
              },
              {
                name: "Chido Murehwa",
                role: "Operations Lead",
                bio: "Chido oversees our operational strategies, focused on building scalable systems that will support our ambitious growth plans.",
                image: "/placeholder.svg"
              },
              {
                name: "Tendai Nyoni",
                role: "Technology Strategist",
                bio: "Leading our technology roadmap, Tendai is developing cutting-edge solutions that will power MyDelivery's expansion across Zimbabwe.",
                image: "/placeholder.svg"
              }
            ].map((person, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-mydelivery-green font-medium mb-3">{person.role}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Future Vision instead of Statistics */}
        <div className="bg-mydelivery-blue text-white rounded-lg py-12 px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Vision for Tomorrow</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              While we're just getting started, our ambitions for transforming Zimbabwe's delivery landscape are bold and clear.
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
                We're investing in technology and training to create delivery experiences that exceed expectations. 
                From real-time tracking to specialized handling, we're building capabilities that will set new 
                standards for delivery service in Zimbabwe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
