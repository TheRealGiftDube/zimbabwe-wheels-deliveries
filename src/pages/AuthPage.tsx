
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import AuthForm from '@/components/auth/AuthForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const AuthPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { session } = useAuth();
  
  // If user is already logged in, redirect to homepage
  if (session) {
    return <Navigate to="/" replace />;
  }

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
        
        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              Sign in or create a new account to use MyDelivery services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
