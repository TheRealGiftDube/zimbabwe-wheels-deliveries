
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Package, Facebook, Twitter, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mydelivery-blue text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-mydelivery-green rounded-full p-2">
                <Package className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">MyDelivery</span>
            </div>
            <p className="text-gray-300 mb-4">
              Fast and reliable motorcycle courier service for both parcel deliveries and food purchases across Zimbabwe.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/mydeliveryzw" className="text-white hover:text-mydelivery-yellow transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/mydeliveryzw" className="text-white hover:text-mydelivery-yellow transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/mydeliveryzw" className="text-white hover:text-mydelivery-yellow transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-300 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/parcel" className="text-gray-300 hover:text-white transition-colors">
                  Parcel Delivery
                </Link>
              </li>
              <li>
                <Link to="/services/food" className="text-gray-300 hover:text-white transition-colors">
                  Food Delivery
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-300 hover:text-white transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Become a Driver
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="h-5 w-5 text-mydelivery-yellow" />
              <span className="text-gray-300">+263 771 996 668</span>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="h-5 w-5 text-mydelivery-yellow" />
              <a href="mailto:info@mydelivery.co.zw" className="text-gray-300 hover:text-white transition-colors">
                info@mydelivery.co.zw
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Join our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="py-2 px-3 rounded-l-md text-black flex-1"
                  aria-label="Email for newsletter"
                />
                <Button
                  className="bg-mydelivery-yellow text-mydelivery-blue hover:bg-mydelivery-yellow/90 rounded-l-none"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MyDelivery Zimbabwe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
