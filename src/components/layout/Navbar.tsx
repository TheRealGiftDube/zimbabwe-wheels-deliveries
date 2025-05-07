
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Package, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-mydelivery-green rounded-full p-2">
              <Package className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">MyDelivery</span>
          </Link>
          
          {/* Phone number in navbar */}
          <div className="hidden md:flex items-center">
            <Phone className="h-5 w-5 text-mydelivery-green mr-2" />
            <span className="font-bold">0771 99 666 8</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services/parcel" 
              className={`nav-item ${isActive('/services/parcel') ? 'active' : ''}`}
            >
              Parcel Delivery
            </Link>
            <Link 
              to="/services/food" 
              className={`nav-item ${isActive('/services/food') ? 'active' : ''}`}
            >
              Food Delivery
            </Link>
            <Link 
              to="/track" 
              className={`nav-item ${isActive('/track') ? 'active' : ''}`}
            >
              Track Order
            </Link>
            <Link 
              to="/about" 
              className={`nav-item ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`nav-item ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services/parcel" 
                className={`nav-item ${isActive('/services/parcel') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Parcel Delivery
              </Link>
              <Link 
                to="/services/food" 
                className={`nav-item ${isActive('/services/food') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Food Delivery
              </Link>
              <Link 
                to="/track" 
                className={`nav-item ${isActive('/track') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Track Order
              </Link>
              <Link 
                to="/about" 
                className={`nav-item ${isActive('/about') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center mt-2 pt-2 border-t">
                <Phone className="h-5 w-5 text-mydelivery-green mr-2" />
                <span className="font-bold">0771 99 666 8</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
