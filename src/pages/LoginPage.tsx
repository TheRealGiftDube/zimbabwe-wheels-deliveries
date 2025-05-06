
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, User } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const { toast } = useToast();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would connect to a backend service to send an OTP
    toast({
      title: "OTP Sent",
      description: `A verification code has been sent to ${phoneNumber}`,
    });
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would verify the OTP with a backend service
    toast({
      title: "Success",
      description: "Login successful!",
    });
    // Would navigate to dashboard or home page after successful login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-mydelivery-green rounded-full p-3">
              <Package className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Welcome to MyDelivery</h1>
          <p className="text-gray-600 mt-2">Sign in to continue</p>
        </div>
        
        <Tabs defaultValue="customer" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="customer">Customer</TabsTrigger>
            <TabsTrigger value="driver">Driver</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          
          <TabsContent value="customer">
            <Card>
              <CardHeader>
                <CardTitle>Customer Login</CardTitle>
                <CardDescription>
                  Login with your phone number to track orders and manage deliveries
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isOtpSent ? (
                  <form onSubmit={handleSendOtp}>
                    <div className="grid w-full gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+263 77 123 4567"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <Button type="submit" className="bg-mydelivery-green hover:bg-mydelivery-green/90">
                        Send Verification Code
                      </Button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp}>
                    <div className="grid w-full gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="otp">Verification Code</Label>
                        <Input
                          id="otp"
                          placeholder="Enter 6-digit code"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <div className="text-sm text-right">
                          <button 
                            type="button" 
                            className="text-mydelivery-green hover:underline"
                            onClick={() => setIsOtpSent(false)}
                          >
                            Change phone number
                          </button>
                        </div>
                      </div>
                      <Button type="submit" className="bg-mydelivery-green hover:bg-mydelivery-green/90">
                        Verify & Login
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-gray-600 text-center">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-mydelivery-green hover:underline font-medium">
                    Sign up
                  </Link>
                </div>
                <Button variant="outline" className="w-full">
                  Continue as Guest
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="driver">
            <Card>
              <CardHeader>
                <CardTitle>Driver Login</CardTitle>
                <CardDescription>
                  Login to your driver account to manage deliveries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid w-full gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="driver-id">Driver ID</Label>
                      <Input id="driver-id" placeholder="Enter your Driver ID" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="driver-password">Password</Label>
                      <Input id="driver-password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button type="submit" className="bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                      Login as Driver
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>
                  Login to the admin dashboard to manage the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid w-full gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input id="admin-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input id="admin-password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button type="submit" className="bg-mydelivery-blue hover:bg-mydelivery-blue/90">
                      Login as Admin
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
