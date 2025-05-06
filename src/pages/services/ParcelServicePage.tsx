
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, TrendingUp, Clock, Shield, MapPin, BarChart3, Truck } from 'lucide-react';

const ParcelServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-mydelivery-blue py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Fast & Secure Parcel Delivery</h1>
              <p className="text-xl text-gray-200 mb-8">
                Send parcels across Zimbabwe with our reliable motorcycle courier service. Real-time tracking and same-day delivery available.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Same-day delivery in major cities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Real-time tracking on every parcel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Insurance coverage up to $100</span>
                </div>
              </div>
              <Button className="mt-8 bg-mydelivery-green hover:bg-mydelivery-green/90" size="lg">
                Send a Parcel Now
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZSUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="Parcel delivery service" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sending parcels with MyDelivery is quick and easy. Follow these simple steps:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Book Your Delivery",
                description: "Use our app or website to schedule a pickup for your parcel",
                icon: Package,
                color: "bg-mydelivery-blue"
              },
              {
                step: 2,
                title: "We Collect",
                description: "Our driver arrives at your location to collect the parcel",
                icon: Truck,
                color: "bg-mydelivery-green"
              },
              {
                step: 3,
                title: "Track in Real-time",
                description: "Follow your parcel's journey on our app with live updates",
                icon: MapPin,
                color: "bg-mydelivery-yellow"
              },
              {
                step: 4,
                title: "Delivered",
                description: "Your parcel is delivered safely to the recipient",
                icon: Shield,
                color: "bg-mydelivery-blue"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="bg-gray-200 text-gray-800 text-sm font-medium rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Options */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Delivery Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the service that best fits your needs and budget
            </p>
          </div>
          
          <Tabs defaultValue="standard" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="express">Express</TabsTrigger>
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="economy">Economy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="express">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-mydelivery-green mr-3" />
                    <h3 className="text-2xl font-bold">Express Delivery</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our fastest delivery option guarantees delivery within 2 hours in the same city.
                    Perfect for urgent documents and time-sensitive parcels.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-green/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-green rounded-full"></div>
                          </div>
                          <span className="text-sm">Delivery within 2 hours</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-green/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-green rounded-full"></div>
                          </div>
                          <span className="text-sm">Priority handling</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-green/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-green rounded-full"></div>
                          </div>
                          <span className="text-sm">Real-time tracking</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-green/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-green rounded-full"></div>
                          </div>
                          <span className="text-sm">Insurance up to $100</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Pricing</h4>
                      <p className="text-3xl font-bold text-mydelivery-blue mb-2">$10.00</p>
                      <p className="text-sm text-gray-600">Base price for packages up to 2kg</p>
                      <p className="text-sm text-gray-600 mt-2">+$2.00 per additional kg</p>
                    </div>
                  </div>
                  <Button className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90">
                    Choose Express Delivery
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="standard">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Package className="h-6 w-6 text-mydelivery-blue mr-3" />
                    <h3 className="text-2xl font-bold">Standard Delivery</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our most popular option with same-day delivery for packages sent before noon, 
                    or next-day delivery if sent later.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-blue/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-blue rounded-full"></div>
                          </div>
                          <span className="text-sm">Same-day or next-day delivery</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-blue/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-blue rounded-full"></div>
                          </div>
                          <span className="text-sm">Standard handling</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-blue/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-blue rounded-full"></div>
                          </div>
                          <span className="text-sm">Real-time tracking</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-blue/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-blue rounded-full"></div>
                          </div>
                          <span className="text-sm">Insurance up to $50</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Pricing</h4>
                      <p className="text-3xl font-bold text-mydelivery-blue mb-2">$6.00</p>
                      <p className="text-sm text-gray-600">Base price for packages up to 2kg</p>
                      <p className="text-sm text-gray-600 mt-2">+$1.50 per additional kg</p>
                    </div>
                  </div>
                  <Button className="w-full bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                    Choose Standard Delivery
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="economy">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-6 w-6 text-mydelivery-yellow mr-3" />
                    <h3 className="text-2xl font-bold">Economy Delivery</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our most affordable option for packages that aren't time-sensitive.
                    Delivery within 2-3 business days.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-yellow/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-yellow rounded-full"></div>
                          </div>
                          <span className="text-sm">2-3 business days delivery</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-yellow/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-yellow rounded-full"></div>
                          </div>
                          <span className="text-sm">Standard handling</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-yellow/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-yellow rounded-full"></div>
                          </div>
                          <span className="text-sm">Basic tracking</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-4 h-4 bg-mydelivery-yellow/20 rounded-full flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-mydelivery-yellow rounded-full"></div>
                          </div>
                          <span className="text-sm">Insurance up to $25</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Pricing</h4>
                      <p className="text-3xl font-bold text-mydelivery-blue mb-2">$3.50</p>
                      <p className="text-sm text-gray-600">Base price for packages up to 2kg</p>
                      <p className="text-sm text-gray-600 mt-2">+$1.00 per additional kg</p>
                    </div>
                  </div>
                  <Button className="w-full bg-mydelivery-yellow hover:bg-mydelivery-yellow/90 text-mydelivery-blue">
                    Choose Economy Delivery
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our parcel delivery service
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What items can I send with MyDelivery?",
                answer: "You can send most personal items, documents, and packages under 10kg with our service. We don't deliver dangerous goods, perishable foods without proper packaging, illegal items, or cash."
              },
              {
                question: "How do I track my parcel?",
                answer: "Once your delivery is confirmed, you'll receive a tracking link via SMS and email. You can use this link to view real-time updates on your parcel's journey."
              },
              {
                question: "Are there size or weight restrictions?",
                answer: "Yes, our standard motorcycle courier service can carry packages up to 10kg and maximum dimensions of 40cm x 40cm x 30cm. For larger items, please contact our customer service."
              },
              {
                question: "Is my package insured?",
                answer: "All deliveries include basic insurance coverage. Express packages are covered up to $100, Standard up to $50, and Economy up to $25. Additional coverage can be purchased."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash on collection, mobile money payments (EcoCash, OneMoney), bank transfers, and credit/debit cards through our secure payment gateway."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParcelServicePage;
