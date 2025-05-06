
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, Briefcase, Award, CheckCircle, MapPin, Clock, Calendar, 
  DollarSign, GraduationCap, Zap, ShieldCheck, Heart
} from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-mydelivery-blue py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">
                Join the MyDelivery Team
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Be part of Zimbabwe's fastest-growing delivery network. We're looking for dedicated individuals to join our team of drivers and office staff.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Competitive earnings for drivers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Flexible working hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white">Training and career growth opportunities</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-mydelivery-green hover:bg-mydelivery-green/90" size="lg">
                  Apply as a Driver
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg">
                  View All Positions
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1616372383709-de4e63a70c9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlbGl2ZXJ5JTIwbW90b3JjeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt="Delivery driver with motorcycle" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join MyDelivery?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we provide a supportive environment where you can grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-green/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-mydelivery-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Compensation</h3>
                <p className="text-gray-600">
                  Earn competitive pay with opportunities for bonuses and incentives based on performance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-mydelivery-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Choose shifts that work for you, with full-time and part-time opportunities available.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-mydelivery-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Training & Development</h3>
                <p className="text-gray-600">
                  Comprehensive training and skill development to help advance your career.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-green/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-mydelivery-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">
                  As we expand, internal promotion opportunities become available for dedicated team members.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-yellow/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-mydelivery-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Comprehensive safety training, equipment, and protocols to keep our team members safe.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-mydelivery-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Impact</h3>
                <p className="text-gray-600">
                  Be part of a service that connects businesses with customers and makes a difference in your community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find the right fit for your skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-mydelivery-blue mr-2" />
                      <h3 className="text-xl font-bold">Motorcycle Delivery Driver</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-sm bg-mydelivery-blue/10 text-mydelivery-blue px-2 py-1 rounded">
                        Full-time
                      </span>
                      <span className="text-sm bg-mydelivery-green/10 text-mydelivery-green px-2 py-1 rounded">
                        Harare
                      </span>
                      <span className="text-sm bg-mydelivery-yellow/10 text-mydelivery-yellow px-2 py-1 rounded">
                        Multiple Positions
                      </span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                    Apply Now
                  </Button>
                </div>
                
                <p className="text-gray-700 mb-4">
                  We're looking for reliable motorcycle riders to join our delivery team. As a delivery driver, you'll be responsible for picking up and delivering parcels and food orders to customers across the city.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Requirements:</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li>Valid motorcycle license</li>
                        <li>At least 1 year of riding experience</li>
                        <li>Own smartphone with internet access</li>
                        <li>Good knowledge of city streets</li>
                        <li>Customer service orientation</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Benefits:</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li>Competitive pay per delivery</li>
                        <li>Performance-based incentives</li>
                        <li>Flexible scheduling</li>
                        <li>Safety training and equipment</li>
                        <li>Fuel allowance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-mydelivery-blue mr-2" />
                      <h3 className="text-xl font-bold">Customer Support Specialist</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-sm bg-mydelivery-blue/10 text-mydelivery-blue px-2 py-1 rounded">
                        Full-time
                      </span>
                      <span className="text-sm bg-mydelivery-green/10 text-mydelivery-green px-2 py-1 rounded">
                        Harare
                      </span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                    Apply Now
                  </Button>
                </div>
                
                <p className="text-gray-700 mb-4">
                  We're seeking a customer-focused support specialist to handle inquiries, resolve issues, and ensure a positive experience for our customers and delivery partners.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Requirements:</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li>Excellent communication skills</li>
                        <li>Problem-solving ability</li>
                        <li>Computer literacy</li>
                        <li>Customer service experience preferred</li>
                        <li>Ability to work in a fast-paced environment</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Benefits:</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li>Competitive salary</li>
                        <li>Medical insurance</li>
                        <li>Performance bonuses</li>
                        <li>Career advancement opportunities</li>
                        <li>Training and development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-mydelivery-blue mr-2" />
                      <h3 className="text-xl font-bold">Operations Coordinator</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-sm bg-mydelivery-blue/10 text-mydelivery-blue px-2 py-1 rounded">
                        Full-time
                      </span>
                      <span className="text-sm bg-mydelivery-green/10 text-mydelivery-green px-2 py-1 rounded">
                        Harare
                      </span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                    Apply Now
                  </Button>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Join our operations team to help coordinate deliveries, manage routes, and ensure efficient operations across our delivery network.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Requirements:</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li>Bachelor's degree in logistics, business, or related field</li>
                        <li>Strong organizational skills</li>
                        <li>Experience with operations management</li>
                        <li>Proficiency in Microsoft Office suite</li>
                        <li>Problem-solving ability</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mydelivery-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold">Benefits:</h4>
                      <ul className="list-disc ml-5 text-gray-600">
                        <li>Competitive salary</li>
                        <li>Medical insurance</li>
                        <li>Performance bonuses</li>
                        <li>Career advancement opportunities</li>
                        <li>Professional development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Driver Recruitment */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-mydelivery-blue mb-6">
                Become a MyDelivery Driver
              </h2>
              <p className="text-gray-700 mb-6">
                Join our network of professional drivers and enjoy flexible working hours, competitive earnings, and the freedom to manage your own schedule.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-green flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Apply Online</h3>
                    <p className="text-gray-600">Fill out our online application form with your details and experience.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-green flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Document Verification</h3>
                    <p className="text-gray-600">Submit your license, ID, and other required documents for verification.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-green flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Training</h3>
                    <p className="text-gray-600">Complete our training program to learn about the app, safety procedures, and customer service.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-green flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Start Earning</h3>
                    <p className="text-gray-600">Get activated on the platform and start accepting delivery requests.</p>
                  </div>
                </div>
              </div>
              <Button className="bg-mydelivery-green hover:bg-mydelivery-green/90" size="lg">
                Apply as a Driver
              </Button>
            </div>
            <div>
              <Card className="overflow-hidden">
                <div className="bg-mydelivery-blue text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Driver Requirements</h3>
                  <p>To qualify as a MyDelivery driver, you'll need:</p>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>Valid motorcycle license (minimum 1 year)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>Access to a reliable motorcycle</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>Smartphone with internet connection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>National ID and proof of address</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>Clean driving record</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>Good knowledge of city streets</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>Strong customer service skills</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-mydelivery-green mr-3" />
                      <span>Age 18 or older</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the application form below and join our team of delivery professionals
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="+263 7X XXX XXXX" required />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <select 
                        id="city" 
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mydelivery-blue"
                        required
                      >
                        <option value="" disabled selected>Select your city</option>
                        <option value="harare">Harare</option>
                        <option value="bulawayo">Bulawayo</option>
                        <option value="chitungwiza">Chitungwiza</option>
                        <option value="mutare">Mutare</option>
                        <option value="gweru">Gweru</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="id-number" className="block text-sm font-medium text-gray-700 mb-1">
                        National ID Number
                      </label>
                      <Input id="id-number" placeholder="Your ID number" required />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Position Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                        Position Applied For
                      </label>
                      <select 
                        id="position" 
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mydelivery-blue"
                        required
                      >
                        <option value="" disabled selected>Select a position</option>
                        <option value="driver">Motorcycle Delivery Driver</option>
                        <option value="customer-support">Customer Support Specialist</option>
                        <option value="operations">Operations Coordinator</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                        Availability
                      </label>
                      <select 
                        id="availability" 
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mydelivery-blue"
                        required
                      >
                        <option value="" disabled selected>Select availability</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="weekends">Weekends Only</option>
                        <option value="evenings">Evenings Only</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Relevant Experience
                    </label>
                    <Textarea 
                      id="experience" 
                      placeholder="Briefly describe your relevant work experience..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                </div>
                
                {/* For drivers only section */}
                <div>
                  <h3 className="text-xl font-bold mb-4">For Drivers Only</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="license-number" className="block text-sm font-medium text-gray-700 mb-1">
                        Driver's License Number
                      </label>
                      <Input id="license-number" placeholder="Your license number" />
                    </div>
                    <div>
                      <label htmlFor="license-type" className="block text-sm font-medium text-gray-700 mb-1">
                        License Type
                      </label>
                      <select 
                        id="license-type" 
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mydelivery-blue"
                      >
                        <option value="" disabled selected>Select license type</option>
                        <option value="class-a">Class A (Motorcycle)</option>
                        <option value="class-b">Class B (Light Motor Vehicle)</option>
                        <option value="class-c">Class C (Heavy Motor Vehicle)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Type
                      </label>
                      <Input id="vehicle-type" placeholder="e.g., Honda CBF125" />
                    </div>
                    <div>
                      <label htmlFor="vehicle-year" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Year
                      </label>
                      <Input id="vehicle-year" placeholder="e.g., 2019" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Additional Information</h3>
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to join MyDelivery?
                    </label>
                    <Textarea 
                      id="comments" 
                      placeholder="Tell us why you're interested in joining our team..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    className="h-4 w-4 text-mydelivery-blue focus:ring-mydelivery-blue border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-mydelivery-blue hover:underline">terms and conditions</a>
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
