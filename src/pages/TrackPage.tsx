
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Package, Clock, User, Phone, Check, ArrowRight } from 'lucide-react';

const TrackPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setIsTracking(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Enter your tracking number to get real-time updates on your delivery
          </p>
        </div>
        
        <div className="max-w-xl mx-auto mb-8">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleTrack}>
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Enter tracking number (e.g., MD12345)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-mydelivery-green hover:bg-mydelivery-green/90"
                    disabled={!trackingId.trim()}
                  >
                    Track
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {isTracking && (
          <div className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-start justify-between mb-6 pb-6 border-b">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-mydelivery-green/10 p-2 rounded-full mr-3">
                          <Package className="h-5 w-5 text-mydelivery-green" />
                        </div>
                        <div>
                          <h2 className="font-bold text-lg">Order #MD12345</h2>
                          <p className="text-sm text-gray-600">Placed on May 6, 2025 at 10:30 AM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Badge status="active" label="In Transit" />
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-600">Estimated delivery at 11:45 AM</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <Button variant="outline" className="mb-2 w-full">
                        <Phone className="h-4 w-4 mr-2" /> Contact Driver
                      </Button>
                      <Button variant="outline" className="w-full">
                        <User className="h-4 w-4 mr-2" /> Contact Support
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                      <h3 className="font-bold mb-4 text-lg">Delivery Progress</h3>
                      
                      <div className="space-y-6 relative">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
                        
                        <TrackingStep
                          icon={<Package className="h-4 w-4 text-white" />}
                          title="Order Confirmed"
                          time="10:30 AM"
                          description="Your order has been received"
                          isCompleted={true}
                          isActive={false}
                        />
                        
                        <TrackingStep
                          icon={<Package className="h-4 w-4 text-white" />}
                          title="Pickup in Progress"
                          time="11:15 AM"
                          description="Driver is at the pickup location"
                          isCompleted={true}
                          isActive={false}
                        />
                        
                        <TrackingStep
                          icon={<Truck className="h-4 w-4 text-white" />}
                          title="In Transit"
                          time="11:22 AM"
                          description="Your order is on its way"
                          isCompleted={false}
                          isActive={true}
                        />
                        
                        <TrackingStep
                          icon={<MapPin className="h-4 w-4 text-white" />}
                          title="Out for Delivery"
                          time="--:--"
                          description="Driver is headed to your location"
                          isCompleted={false}
                          isActive={false}
                        />
                        
                        <TrackingStep
                          icon={<Check className="h-4 w-4 text-white" />}
                          title="Delivered"
                          time="--:--"
                          description="Package has been delivered"
                          isCompleted={false}
                          isActive={false}
                          isLast={true}
                        />
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <h3 className="font-bold mb-4 text-lg">Live Tracking</h3>
                      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-8 w-8 mx-auto text-mydelivery-blue mb-2" />
                          <p className="text-gray-600">Map would be displayed here with live tracking</p>
                          <p className="text-xs text-gray-500 mt-2">Powered by Google Maps</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">From</div>
                          <div className="bg-gray-100 rounded-lg p-3 flex items-start">
                            <MapPin className="h-5 w-5 text-mydelivery-green mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Central Restaurant</p>
                              <p className="text-sm text-gray-600">123 Samora Machel Ave, Harare</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-600 mb-1">To</div>
                          <div className="bg-gray-100 rounded-lg p-3 flex items-start">
                            <MapPin className="h-5 w-5 text-mydelivery-blue mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-gray-600">456 First Street, Avenues, Harare</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm text-gray-600 mb-1">Driver Information</div>
                        <div className="bg-gray-100 rounded-lg p-3 flex items-center">
                          <div className="w-12 h-12 bg-mydelivery-blue/10 rounded-full flex items-center justify-center mr-3">
                            <User className="h-6 w-6 text-mydelivery-blue" />
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">David Moyo</p>
                            <p className="text-sm text-gray-600">Courier • ★ 4.9</p>
                          </div>
                          <Button size="sm" variant="ghost" className="text-mydelivery-green">
                            <Phone className="h-4 w-4 mr-1" /> Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Tracking step component
interface TrackingStepProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast?: boolean;
}

const Truck = (props: any) => {
  return <Package {...props} />;
};

const TrackingStep = ({ 
  icon, 
  title, 
  time, 
  description, 
  isCompleted, 
  isActive,
  isLast = false 
}: TrackingStepProps) => {
  let bgColor = 'bg-gray-200';
  if (isActive) bgColor = 'bg-mydelivery-green';
  if (isCompleted) bgColor = 'bg-mydelivery-green';
  
  return (
    <div className="flex relative z-10">
      <div className={`w-6 h-6 rounded-full ${bgColor} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="ml-4">
        <div className="flex items-center">
          <h4 className="font-medium">{title}</h4>
          <span className="ml-2 text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Status Badge component
interface BadgeProps {
  status: 'active' | 'completed' | 'pending' | 'cancelled';
  label: string;
}

const Badge = ({ status, label }: BadgeProps) => {
  const styles = {
    active: "bg-mydelivery-green/10 text-mydelivery-green",
    completed: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    cancelled: "bg-red-100 text-red-800"
  };
  
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {label}
    </span>
  );
};

export default TrackPage;
