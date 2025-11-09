"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useCreateProfile, useProfile } from "@/server/useProfile";
import { getAuth } from "firebase/auth";

// Zod schema for validation
const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  country: z.string().min(2, "Country is required"),
  city: z.string().min(2, "City is required"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfileForm() {
  const getUser = getAuth();
  const { mutateAsync: CreateUserProfile, isPending } = useCreateProfile(
    Boolean(getUser)
  );

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
    },
  });

  // Prevent form submission if user is not logged in
  React.useEffect(() => {
    setTimeout(() => {
      if (!getUser.currentUser) {
        form.setError("email", {
          type: "manual",
          message: "User must be logged in.",
        });
      } else {
        form.clearErrors("email");
        form.setValue("name", getUser.currentUser.displayName || "");
        form.setValue("email", getUser.currentUser.email || "");
      }
    }, 1000);
  }, [getUser.currentUser, form]);

  async function onSubmit(data: ProfileFormValues) {
    // handle submit
    await CreateUserProfile({
      email: data.email,
      country: data.country,
      city: data.city,
      uid: getUser.currentUser?.uid || "",
      emailVerified: getUser.currentUser?.emailVerified || false,
      displayName: data.name,
      phoneNumber: data.phone,
      disabled: false,
    });
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
          {/* Logo and Header Section */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur-lg opacity-20 transition-opacity duration-300"></div>
              <div className="relative flex size-28 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 shadow-lg overflow-hidden">
                <Image
                  src={"/images/Gasflow.png"}
                  width={400}
                  height={400}
                  alt="Gasflow Logo"
                  priority
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Complete Your Profile
              </h1>
              <p className="text-gray-600">
                Finish setting up your Gasflow account
              </p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field - Read Only */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          readOnly
                          className="h-11 rounded-lg border-gray-200 bg-gray-50 text-gray-600 cursor-not-allowed focus:border-gray-200 focus:ring-0"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 font-medium" />
                    </FormItem>
                  )}
                />

                {/* Email Field - Read Only */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          readOnly
                          className="h-11 rounded-lg border-gray-200 bg-gray-50 text-gray-600 cursor-not-allowed focus:border-gray-200 focus:ring-0"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 font-medium" />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                          className="h-11 rounded-lg border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 font-medium" />
                    </FormItem>
                  )}
                />

                {/* Country Field */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Country
                      </FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="h-11 rounded-lg border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-lg border border-gray-200 shadow-lg">
                          <SelectItem
                            value="Pakistan"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            Pakistan
                          </SelectItem>
                          <SelectItem
                            value="USA"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            United States
                          </SelectItem>
                          <SelectItem
                            value="Canada"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            Canada
                          </SelectItem>
                          <SelectItem
                            value="UK"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            United Kingdom
                          </SelectItem>
                          <SelectItem
                            value="Australia"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            Australia
                          </SelectItem>
                          <SelectItem
                            value="Germany"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            Germany
                          </SelectItem>
                          <SelectItem
                            value="France"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            France
                          </SelectItem>
                          <SelectItem
                            value="India"
                            className="hover:bg-green-50 focus:bg-green-50"
                          >
                            India
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs text-red-500 font-medium" />
                    </FormItem>
                  )}
                />
              </div>

              {/* City Field - Full Width */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your city"
                        {...field}
                        className="h-11 rounded-lg border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500 font-medium" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <svg
                        className="animate-spin mr-2 h-4 w-4 inline-block"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Setting up your profile...
                    </>
                  ) : (
                    "Complete Setup & Go to Dashboard"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          {/* Additional Info */}
          <div className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                className="w-3 h-3 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-600 font-medium">
                Your information is secure and encrypted
              </span>
            </div>
            By completing your profile, you agree to our{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
            >
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
