
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Package, Phone, ArrowRight, Clock, Navigation, User } from 'lucide-react';

const DriverInterface = () => {
  const [isOnline, setIsOnline] = useState(true);
  
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-mydelivery-blue/10 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-mydelivery-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">David Moyo</h2>
                  <p className="text-sm text-gray-600">Driver ID: MD-DRV-001</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {isOnline ? 'Online' : 'Offline'}
                </span>
                <Switch
                  checked={isOnline}
                  onCheckedChange={setIsOnline}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-gray-600">Today's Orders</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-2xl font-bold">$48</p>
                <p className="text-xs text-gray-600">Today's Earnings</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-xs text-gray-600">Rating</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-2xl font-bold">32km</p>
                <p className="text-xs text-gray-600">Distance Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="current">Current Job</TabsTrigger>
            <TabsTrigger value="available">Available (3)</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-mydelivery-green">In Progress</Badge>
                  <p className="text-sm text-gray-600">Order #MD12345</p>
                </div>
                <CardTitle className="mt-2">Food Delivery</CardTitle>
                <CardDescription>
                  Estimated time: 15 minutes remaining
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 bg-gray-200 rounded-lg h-36 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto text-mydelivery-blue mb-2" />
                    <p className="text-gray-600">Map would be displayed here</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-mydelivery-green/10 rounded-full flex items-center justify-center mr-3">
                      <Package className="h-5 w-5 text-mydelivery-green" />
                    </div>
                    <div>
                      <p className="font-medium">Pickup Location</p>
                      <p className="text-sm text-gray-600">Central Restaurant, 123 Samora Machel Ave</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="ml-auto"
                    >
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Delivery Location</p>
                      <p className="text-sm text-gray-600">John Doe, 456 First Street, Avenues</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="ml-auto"
                    >
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">Time Information</p>
                      <p className="text-sm text-gray-600">Pickup: 11:15 AM • ETA: 11:45 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-gray-600" />
                      <div>
                        <p className="font-medium">Customer</p>
                        <p className="text-sm text-gray-600">John Doe</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600">
                      <Phone className="h-4 w-4 mr-1" /> Call
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-mydelivery-green hover:bg-mydelivery-green/90">
                      Mark as Picked Up
                    </Button>
                    <Button variant="outline">
                      Report Issue
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="available">
            <div className="space-y-4">
              {[1, 2, 3].map((job) => (
                <Card key={job}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Badge className="bg-mydelivery-yellow text-mydelivery-blue">
                          {job % 2 === 0 ? 'Food Delivery' : 'Parcel'}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">Order #MD1234{job}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$5.50</p>
                        <p className="text-xs text-gray-600">Delivery Fee</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-3">
                      <MapPin className="h-5 w-5 text-mydelivery-green mr-2 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Pickup</p>
                        <p className="font-medium">Central Restaurant</p>
                        <p className="text-sm text-gray-600">123 Samora Machel Ave, Harare</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Deliver to</p>
                        <p className="font-medium">Customer Name</p>
                        <p className="text-sm text-gray-600">456 First Street, Avenues, Harare</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Distance: 3.{job} km</p>
                        <p className="text-sm text-gray-600">Est. time: 15 min</p>
                      </div>
                      <Button className="bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                        Accept Job
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="text-center py-12 text-gray-500">
              <Package className="mx-auto h-12 w-12 mb-4 text-gray-400" />
              <p>History will appear here</p>
              <p className="text-sm mt-2">You've completed 48 deliveries today</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DriverInterface;
