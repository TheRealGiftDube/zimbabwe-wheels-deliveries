
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Package, Truck, User, Clock, Search } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Manage orders, drivers, and restaurants</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search orders..."
                className="pl-9 h-10 rounded-md border border-input bg-white px-3 py-2 text-sm"
              />
            </div>
            <Button variant="outline">
              Refresh
            </Button>
            <Button className="bg-mydelivery-green hover:bg-mydelivery-green/90">
              New Order
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Active Orders"
            value="12"
            description="Currently in progress"
            icon={<Package className="h-5 w-5" />}
            color="bg-blue-500"
          />
          <StatCard
            title="Completed Today"
            value="48"
            description="Successfully delivered"
            icon={<Truck className="h-5 w-5" />}
            color="bg-green-500"
          />
          <StatCard
            title="Active Drivers"
            value="8"
            description="Currently online"
            icon={<User className="h-5 w-5" />}
            color="bg-mydelivery-blue"
          />
          <StatCard
            title="Average Delivery"
            value="32 min"
            description="Today's average"
            icon={<Clock className="h-5 w-5" />}
            color="bg-mydelivery-yellow"
          />
        </div>
        
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-lg mb-6">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Orders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <Card>
              <CardHeader>
                <CardTitle>Active Orders</CardTitle>
                <CardDescription>
                  Currently in progress orders requiring attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-gray-500 border-b">
                        <th className="pb-3">Order ID</th>
                        <th className="pb-3">Customer</th>
                        <th className="pb-3">Type</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Driver</th>
                        <th className="pb-3">Placed At</th>
                        <th className="pb-3">ETA</th>
                        <th className="pb-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(5)].map((_, i) => (
                        <tr key={i} className="border-b">
                          <td className="py-4 font-medium">MD1234{i}</td>
                          <td className="py-4">John Doe</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${i % 2 === 0 ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                              {i % 2 === 0 ? 'Parcel' : 'Food'}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                              In Transit
                            </span>
                          </td>
                          <td className="py-4">David M.</td>
                          <td className="py-4">10:30 AM</td>
                          <td className="py-4">11:45 AM</td>
                          <td className="py-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">View</Button>
                              <Button size="sm" variant="outline">Reassign</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Orders</CardTitle>
                <CardDescription>
                  Orders waiting to be assigned to drivers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Package className="mx-auto h-12 w-12 mb-4 text-gray-400" />
                  <p>No pending orders at the moment</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <p className="text-sm text-gray-500 mb-4">Placeholder for completed orders tab</p>
          </TabsContent>
          
          <TabsContent value="all">
            <p className="text-sm text-gray-500 mb-4">Placeholder for all orders tab</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, description, icon, color }: StatCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
          <div className={`${color} p-3 rounded-full`}>
            {React.cloneElement(icon as React.ReactElement, {
              className: "h-5 w-5 text-white"
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboard;
