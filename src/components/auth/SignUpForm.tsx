
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Check, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import GoogleSignInButton from './GoogleSignInButton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

// Password strength checking
const passwordStrengthSchema = z.object({
  hasLowerCase: z.boolean(),
  hasUpperCase: z.boolean(),
  hasNumber: z.boolean(),
  hasSymbol: z.boolean(),
  hasMinLength: z.boolean(),
});

type PasswordStrength = z.infer<typeof passwordStrengthSchema>;

// Define form validation schema
const signUpSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-z]/, { message: "Password must contain at least 1 lowercase letter" })
      .regex(/[A-Z]/, { message: "Password must contain at least 1 uppercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least 1 number" })
      .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least 1 special character" }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpValues = z.infer<typeof signUpSchema>;

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSymbol: false,
    hasMinLength: false,
  });
  const { toast } = useToast();
  
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  // Password strength checker
  useEffect(() => {
    const password = form.watch("password");
    if (password) {
      setPasswordStrength({
        hasLowerCase: /[a-z]/.test(password),
        hasUpperCase: /[A-Z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSymbol: /[^a-zA-Z0-9]/.test(password),
        hasMinLength: password.length >= 8,
      });
    } else {
      setPasswordStrength({
        hasLowerCase: false,
        hasUpperCase: false,
        hasNumber: false,
        hasSymbol: false,
        hasMinLength: false,
      });
    }
  }, [form.watch("password")]);

  const allCriteriaPass = Object.values(passwordStrength).every(value => value === true);
  const passwordsMatch = form.watch("password") === form.watch("confirmPassword") && form.watch("confirmPassword") !== "";

  const onSubmit = async (data: SignUpValues) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Sign up successful",
        description: "Welcome to MyDelivery! Please check your email to verify your account.",
      });
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message || "An error occurred during sign up",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const PasswordStrengthIndicator = ({ 
    label, 
    passed 
  }: { 
    label: string, 
    passed: boolean 
  }) => (
    <div className="flex items-center gap-2">
      {passed ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <X className="h-4 w-4 text-red-500" />
      )}
      <span className={cn(
        "text-sm",
        passed ? "text-green-500" : "text-muted-foreground"
      )}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-xs text-gray-500 cursor-help">
                          Password requirements
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="p-4">
                        <div className="space-y-2">
                          <PasswordStrengthIndicator label="At least 8 characters" passed={passwordStrength.hasMinLength} />
                          <PasswordStrengthIndicator label="At least 1 lowercase letter" passed={passwordStrength.hasLowerCase} />
                          <PasswordStrengthIndicator label="At least 1 uppercase letter" passed={passwordStrength.hasUpperCase} />
                          <PasswordStrengthIndicator label="At least 1 number" passed={passwordStrength.hasNumber} />
                          <PasswordStrengthIndicator label="At least 1 special character" passed={passwordStrength.hasSymbol} />
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                    />
                    <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                      {allCriteriaPass && (
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <div className="space-y-1 mt-2">
                  <PasswordStrengthIndicator label="At least 8 characters" passed={passwordStrength.hasMinLength} />
                  <PasswordStrengthIndicator label="At least 1 lowercase letter" passed={passwordStrength.hasLowerCase} />
                  <PasswordStrengthIndicator label="At least 1 uppercase letter" passed={passwordStrength.hasUpperCase} />
                  <PasswordStrengthIndicator label="At least 1 number" passed={passwordStrength.hasNumber} />
                  <PasswordStrengthIndicator label="At least 1 special character" passed={passwordStrength.hasSymbol} />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                    />
                    <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                      {passwordsMatch && field.value && (
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 p-0"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        tabIndex={-1}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90" 
            disabled={isLoading || !allCriteriaPass || !passwordsMatch}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
      </Form>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <GoogleSignInButton />
    </div>
  );
};

export default SignUpForm;
