
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building, TrendingUp, BarChart3, Truck, Package, 
  ShieldCheck, FileText, MessageSquare, CheckCircle, Store
} from 'lucide-react';

const BusinessSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-mydelivery-blue py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">
                Delivery Solutions for Your Business
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Partner with MyDelivery to optimize your logistics, reduce costs, and improve customer satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Boost your sales with reliable delivery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Same-day delivery for your customers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Secure and insured transportation</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-mydelivery-green hover:bg-mydelivery-green/90" size="lg">
                  Become a Partner
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="Business meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Solutions */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solutions Tailored to Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're a small local shop or a large corporation, we have flexible delivery solutions to meet your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-mydelivery-blue">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-mydelivery-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Retail Delivery</h3>
                <p className="text-gray-600 mb-6">
                  Same-day delivery for your retail store. Offer your customers the convenience of home delivery and expand your reach.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Scheduled or on-demand delivery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Real-time tracking for customers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Proof of delivery documentation</span>
                  </li>
                </ul>
                <Button className="w-full bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-mydelivery-green">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-green/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-mydelivery-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Restaurant Delivery</h3>
                <p className="text-gray-600 mb-6">
                  Expand your restaurant's reach with our dedicated food delivery service. No need to hire your own drivers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Temperature-controlled delivery bags</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Integration with your POS system</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Online ordering system available</span>
                  </li>
                </ul>
                <Button className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-mydelivery-yellow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-mydelivery-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Corporate Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Streamline your internal logistics and document delivery with our corporate messenger service.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Monthly billing with detailed reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2" />
                    <span>Confidential document handling</span>
                  </li>
                </ul>
                <Button className="w-full bg-mydelivery-yellow hover:bg-mydelivery-yellow/90 text-mydelivery-blue">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner With MyDelivery?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of businesses across Zimbabwe who trust us with their delivery needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-mydelivery-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2">Increase Sales</h3>
                <p className="text-gray-600">
                  Businesses typically see a 20-30% increase in sales after implementing delivery services.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-mydelivery-green/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-mydelivery-green" />
                </div>
                <h3 className="text-lg font-bold mb-2">Reduce Costs</h3>
                <p className="text-gray-600">
                  Outsourcing delivery is more cost-effective than maintaining your own fleet.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-mydelivery-yellow" />
                </div>
                <h3 className="text-lg font-bold mb-2">Detailed Analytics</h3>
                <p className="text-gray-600">
                  Access comprehensive delivery data to optimize your operations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-mydelivery-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Reliable delivery leads to happier customers and increased loyalty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Integration */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-mydelivery-blue mb-6">
                Seamless Integration
              </h2>
              <p className="text-gray-700 mb-6">
                Our delivery service integrates with your existing systems, whether you're using an e-commerce platform, POS system, or custom software.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                  <p className="text-gray-600">
                    Our robust API allows you to programmatically access our delivery network, schedule pickups, and track deliveries.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Delivery Dashboard</h3>
                  <p className="text-gray-600">
                    A user-friendly dashboard to manage all your deliveries in one place, with real-time status updates.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Branded Tracking</h3>
                  <p className="text-gray-600">
                    Provide a consistent brand experience with custom-branded tracking pages for your customers.
                  </p>
                </div>
              </div>
              <Button className="bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                Request Documentation
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-sm font-mono bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>{`// Example API call to schedule a delivery
fetch('https://api.mydelivery.co.zw/v1/deliveries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    pickup_address: '123 First Street, Harare',
    delivery_address: '456 Second Avenue, Harare',
    contact_name: 'John Doe',
    contact_phone: '+263 71 234 5678',
    package_size: 'small',
    pickup_time: '2023-07-15T14:00:00'
  })
})
.then(response => response.json())
.then(data => console.log(data));`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn how other businesses have transformed their operations with MyDelivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" 
                alt="Retail store" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">TechZone Electronics</h3>
                <p className="text-gray-500 text-sm mb-4">Retail • Harare</p>
                <p className="text-gray-600 mb-4">
                  "Partnering with MyDelivery allowed us to offer same-day delivery to our customers, which increased our sales by 35% in just three months."
                </p>
                <p className="text-right font-medium">- Sarah Moyo, Owner</p>
              </CardContent>
            </Card>
            
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
                alt="Restaurant" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Savanna Restaurant</h3>
                <p className="text-gray-500 text-sm mb-4">Food Service • Bulawayo</p>
                <p className="text-gray-600 mb-4">
                  "Before MyDelivery, we were limited to dine-in customers. Now, delivery accounts for 40% of our revenue, and our customer base has expanded significantly."
                </p>
                <p className="text-right font-medium">- Michael Ndlovu, Manager</p>
              </CardContent>
            </Card>
            
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" 
                alt="Office" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Legal Associates</h3>
                <p className="text-gray-500 text-sm mb-4">Legal Services • Harare</p>
                <p className="text-gray-600 mb-4">
                  "We use MyDelivery for confidential document delivery between our offices and to the courts. The reliability and tracking features have improved our workflow efficiency."
                </p>
                <p className="text-right font-medium">- David Manyika, Partner</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-mydelivery-blue hover:bg-mydelivery-blue/90">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-mydelivery-blue mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our business team will contact you to discuss a tailored delivery solution for your business.
              </p>
              <div className="bg-mydelivery-blue text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+263 771 996 668</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>business@mydelivery.co.zw</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>123 Samora Machel Avenue, Harare</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input id="company-name" placeholder="Your company name" required />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person
                    </label>
                    <Input id="contact-name" placeholder="Full name" required />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    <Input id="position" placeholder="Your role" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+263 7X XXX XXXX" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Type
                  </label>
                  <select 
                    id="business-type" 
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mydelivery-blue"
                    required
                  >
                    <option value="" disabled selected>Select your business type</option>
                    <option value="retail">Retail</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your delivery needs and requirements..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutionsPage;
