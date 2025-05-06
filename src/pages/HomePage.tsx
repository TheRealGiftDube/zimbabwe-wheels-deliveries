
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, Clock, MapPin, Star, User, Bell, Calendar } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-mydelivery-blue py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-pattern absolute inset-0"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Fast & Reliable Delivery Across Zimbabwe
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Connect with our network of motorcycle couriers for quick parcel deliveries and food orders. Track in real-time and pay with cash.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services/parcel">
                  <Button size="lg" className="bg-mydelivery-green hover:bg-mydelivery-green/90 text-white w-full sm:w-auto">
                    Send a Parcel
                  </Button>
                </Link>
                <Link to="/services/food">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Order Food
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-2 text-white">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-mydelivery-green flex items-center justify-center border-2 border-mydelivery-blue">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm">
                  Over <strong>2,500+</strong> happy customers
                </span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaXZlcnklMjBtb3RvcmN5Y2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" 
                  alt="Delivery Motorcycle" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-green flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Order #MD12345</p>
                    <p className="text-sm font-medium">Arriving in 10 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Fast, reliable, and secure delivery services for all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover border-t-4 border-t-mydelivery-green">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-green/10 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-mydelivery-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Parcel Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Send parcels and packages across the city with our fast and reliable courier service. Real-time tracking included.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-mydelivery-green/10 flex items-center justify-center mr-2">
                      <Clock className="h-3 w-3 text-mydelivery-green" />
                    </div>
                    <span className="text-sm">Fast delivery within hours</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-mydelivery-green/10 flex items-center justify-center mr-2">
                      <MapPin className="h-3 w-3 text-mydelivery-green" />
                    </div>
                    <span className="text-sm">Real-time GPS tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-mydelivery-green/10 flex items-center justify-center mr-2">
                      <Calendar className="h-3 w-3 text-mydelivery-green" />
                    </div>
                    <span className="text-sm">Schedule pickups in advance</span>
                  </li>
                </ul>
                <Link to="/services/parcel">
                  <Button className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90">
                    Send a Parcel
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-t-4 border-t-mydelivery-yellow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-mydelivery-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Food Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Order from your favorite restaurants and have the food delivered hot and fresh to your location.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mr-2">
                      <Star className="h-3 w-3 text-mydelivery-yellow" />
                    </div>
                    <span className="text-sm">Partner with top restaurants</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mr-2">
                      <Bell className="h-3 w-3 text-mydelivery-yellow" />
                    </div>
                    <span className="text-sm">Order notifications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mr-2">
                      <Clock className="h-3 w-3 text-mydelivery-yellow" />
                    </div>
                    <span className="text-sm">Fast delivery times</span>
                  </li>
                </ul>
                <Link to="/services/food">
                  <Button className="w-full bg-mydelivery-yellow hover:bg-mydelivery-yellow/90 text-mydelivery-blue">
                    Order Food
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Three simple steps to get your delivery or food order
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Place Your Order",
                description: "Select parcel delivery or food order and fill in the details",
                color: "bg-mydelivery-green"
              },
              {
                step: 2,
                title: "Track in Real-time",
                description: "Follow your delivery on the map with live updates",
                color: "bg-mydelivery-yellow"
              },
              {
                step: 3,
                title: "Receive & Pay",
                description: "Get your delivery and pay with cash on delivery",
                color: "bg-mydelivery-blue"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full ${item.color} text-white flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-mydelivery-green py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-2">Ready to get started?</h2>
              <p className="text-white/80">
                Join thousands of satisfied customers across Zimbabwe
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-mydelivery-green hover:bg-white/90 w-full sm:w-auto">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
