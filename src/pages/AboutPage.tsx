
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
            Zimbabwe's newest delivery startup, beginning our journey to reshape local logistics.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-mydelivery-blue mb-4">Our Beginning</h2>
            <p className="text-gray-700 mb-4">
              Founded in early 2025, MyDelivery started with a simple vision: to build a more accessible delivery service for Zimbabwe.
            </p>
            <p className="text-gray-700 mb-4">
              We've taken our first steps in Harare, where we're learning and adapting every day. Though we're small now, we're laying the groundwork for something bigger.
            </p>
            <p className="text-gray-700">
              Our roadmap includes expansion to Bulawayo, Gweru, and Mutare as we grow, with the goal of creating a nationwide delivery network that truly serves Zimbabweans everywhere.
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
                description: "We believe that punctuality matters. Every delivery, no matter how small, deserves to arrive on time."
              },
              {
                icon: Shield,
                title: "Security",
                description: "Your packages are safe with us. As we grow, we plan to introduce insurance coverage for added peace of mind."
              },
              {
                icon: Users,
                title: "Community",
                description: "We're creating meaningful employment opportunities for motorcycle riders in our community."
              },
              {
                icon: MapPin,
                title: "Accessibility",
                description: "Our goal is to make reliable delivery services available to everyone in Zimbabwe, starting from Harare."
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
          <h2 className="text-3xl font-bold text-mydelivery-blue mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Tatenda Makunike",
                role: "Founder & Driver",
                bio: "As both founder and our first driver, Tatenda is building MyDelivery from the ground up, handling every delivery personally while developing our vision."
              },
              {
                name: "Position Open",
                role: "Future Operations Lead",
                bio: "We're looking for passionate individuals to join our team as we grow and expand our operations across Zimbabwe."
              },
              {
                name: "Position Open",
                role: "Future Technology Developer",
                bio: "As we grow, we'll be expanding our technical capabilities to create a seamless delivery experience for all Zimbabweans."
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
              We're just at the beginning of our journey, but our vision for transforming Zimbabwe's delivery landscape is clear and ambitious.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mydelivery-blue/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-mydelivery-yellow mb-3">Growing Our Network</h3>
              <p className="text-gray-200">
                Starting with our single-driver operation in Harare, we plan to expand our team and reach in the coming months.
                Our roadmap includes bringing MyDelivery to all major cities in Zimbabwe, creating a reliable nationwide network.
              </p>
            </div>
            <div className="bg-mydelivery-blue/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-mydelivery-yellow mb-3">Innovating Service</h3>
              <p className="text-gray-200">
                As we grow, we'll introduce new features like real-time tracking, expanded delivery options, and business accounts.
                Every delivery teaches us something new, and we're committed to constantly improving our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
