
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, Package, Bell, MapPin } from 'lucide-react';

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
            
            <div className="pl-4 ml-4 border-l flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </Button>
              <Link to="/login">
                <Button className="bg-mydelivery-green hover:bg-mydelivery-green/90 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            </div>
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
              <div className="pt-3 mt-3 border-t">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button className="bg-mydelivery-green hover:bg-mydelivery-green/90 w-full flex items-center justify-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
