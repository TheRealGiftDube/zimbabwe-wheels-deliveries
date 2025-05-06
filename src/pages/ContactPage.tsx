
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-mydelivery-blue mb-6">Contact Us</h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-t-4 border-t-mydelivery-green">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-mydelivery-green/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-mydelivery-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Our customer support team is available to help you.</p>
              <a href="tel:+2637719966668" className="text-lg font-medium text-mydelivery-green">
                +263 771 996 668
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-mydelivery-yellow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-mydelivery-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll respond promptly.</p>
              <a href="mailto:info@mydelivery.co.zw" className="text-lg font-medium text-mydelivery-yellow">
                info@mydelivery.co.zw
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-mydelivery-blue">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-mydelivery-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-4">We're available to assist you:</p>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-mydelivery-blue mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide details about your inquiry..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-mydelivery-blue mb-6">Our Office Locations</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold flex items-center mb-3">
                  <MapPin className="h-5 w-5 mr-2 text-mydelivery-green" />
                  Harare (Headquarters)
                </h3>
                <p className="text-gray-600 pl-7">
                  123 Samora Machel Avenue<br />
                  Harare Central<br />
                  Zimbabwe
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold flex items-center mb-3">
                  <MapPin className="h-5 w-5 mr-2 text-mydelivery-yellow" />
                  Bulawayo
                </h3>
                <p className="text-gray-600 pl-7">
                  78 Fort Street<br />
                  Bulawayo<br />
                  Zimbabwe
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Map Location</h3>
                <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-mydelivery-blue rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Interested in partnering with MyDelivery for your business? We offer custom delivery solutions for businesses of all sizes.
          </p>
          <Button className="bg-white text-mydelivery-blue hover:bg-gray-100">
            Learn More About Business Solutions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
