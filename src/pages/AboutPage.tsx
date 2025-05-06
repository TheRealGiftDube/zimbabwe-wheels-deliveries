
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
            Your trusted delivery partner across Zimbabwe, connecting people with the things they need through reliable and efficient service.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-mydelivery-blue mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2021, MyDelivery began with a simple observation: there was a growing need for reliable, trackable delivery services in Zimbabwe. 
            </p>
            <p className="text-gray-700 mb-4">
              Starting with just 5 dedicated motorcycle couriers in Harare, we've since expanded to over 100 drivers covering major cities including Bulawayo, Gweru, and Mutare.
            </p>
            <p className="text-gray-700">
              Our mission is to transform last-mile logistics in Zimbabwe through technology, reliability and customer-focused service, making delivery accessible and affordable for everyone.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaXZlcnklMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" 
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
        
        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-mydelivery-blue mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Tatenda Makunike",
                role: "Founder & CEO",
                bio: "With over 15 years in logistics and supply chain management, Tatenda founded MyDelivery with a vision to transform delivery services in Zimbabwe.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              },
              {
                name: "Chido Murehwa",
                role: "Chief Operations Officer",
                bio: "Chido oversees our day-to-day operations, ensuring every delivery meets our high standards of efficiency and reliability.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              },
              {
                name: "Tendai Nyoni",
                role: "Chief Technology Officer",
                bio: "Leading our tech development, Tendai's expertise in mobile applications and tracking systems powers the technology behind MyDelivery.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              }
            ].map((person, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-mydelivery-green font-medium mb-3">{person.role}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Statistics */}
        <div className="bg-mydelivery-blue text-white rounded-lg py-12 px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">MyDelivery in Numbers</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Since our founding, we've grown rapidly to meet the delivery needs across Zimbabwe.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Drivers" },
              { number: "5", label: "Cities Covered" },
              { number: "50,000+", label: "Successful Deliveries" },
              { number: "98%", label: "On-time Rate" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-mydelivery-yellow mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
