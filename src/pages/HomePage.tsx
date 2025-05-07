
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, Phone } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with just 3 key elements */}
      <section className="relative bg-mydelivery-blue py-24 md:py-32 flex-1 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-pattern absolute inset-0"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* 1. Phone Number - Front and Center */}
            <div className="mb-14">
              <div className="bg-white rounded-full py-4 px-8 shadow-lg inline-flex items-center justify-center gap-3">
                <Phone className="h-8 w-8 text-mydelivery-green animate-pulse" />
                <span className="text-3xl md:text-4xl font-bold text-mydelivery-blue">
                  0771 99 666 8
                </span>
              </div>
              <p className="text-white mt-3 text-xl">Call us now for fast delivery anywhere in Zimbabwe!</p>
            </div>

            {/* 2 & 3. Service Selection - Send Parcel or Order Food */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What would you like to do today?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              {/* Parcel Delivery Card */}
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-t-mydelivery-green overflow-hidden">
                <CardContent className="p-0">
                  <Link to="/services/parcel" className="block">
                    <div className="bg-mydelivery-green/10 p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-mydelivery-green mx-auto flex items-center justify-center mb-4">
                        <Package className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Send a Parcel</h3>
                      <p className="text-gray-600">
                        Fast delivery across Zimbabwe
                      </p>
                    </div>
                    <div className="p-6 bg-white">
                      <Button className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90">
                        Send Now
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>

              {/* Food Delivery Card */}
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-t-mydelivery-yellow overflow-hidden">
                <CardContent className="p-0">
                  <Link to="/services/food" className="block">
                    <div className="bg-mydelivery-yellow/10 p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-mydelivery-yellow mx-auto flex items-center justify-center mb-4">
                        <Truck className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Order Food</h3>
                      <p className="text-gray-600">
                        Delivered hot and fresh
                      </p>
                    </div>
                    <div className="p-6 bg-white">
                      <Button className="w-full bg-mydelivery-yellow hover:bg-mydelivery-yellow/90 text-mydelivery-blue">
                        Order Now
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
