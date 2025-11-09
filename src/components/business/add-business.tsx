"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  createBusinessSchema,
  CreateBusinessTypes,
} from "@/types/business.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { useCreateBusiness } from "@/server/usebusiness";
import { useCurrentUserProfile } from "@/server/useProfile";
import { Building2, Phone, MapPin, Globe } from "lucide-react";

export default function AddBusiness() {
  const { mutateAsync: CreateBusinessProfile, isPending: addBusinessLoading } =
    useCreateBusiness(true);

  const { data: currentProfile, isLoading: getProfileLoading } =
    useCurrentUserProfile();

  const form = useForm<CreateBusinessTypes>({
    resolver: zodResolver(createBusinessSchema),
    defaultValues: {
      name: "",
      countryCode: "",
      phone: "",
      address: "",
      isActive: true,
      profileId: "",
    },
  });

  useEffect(() => {
    if (currentProfile?.id) {
      form.setValue("profileId", currentProfile?.id);
    }
  }, [currentProfile]);

  const onSubmit = async (data: CreateBusinessTypes) => {
    try {
      const phoneWithCountryCode = `${data.countryCode}-${data.phone}`;
      const { countryCode, ...rest } = data;
      const submitData = { ...rest, phone: phoneWithCountryCode };

      await CreateBusinessProfile(submitData);

      // Reset form after successful creation
      form.reset();
    } catch (error) {
      // Error is already handled by the mutation's onError
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Professional Card Container */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Building2 className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-2">
            Create Your Business
          </h2>
          <p className="text-blue-100 text-center opacity-90">
            Enter your business details to start managing your operations
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Business Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      Business Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your business name"
                        {...field}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country and Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-600" />
                        Country
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 rounded-xl">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            <SelectItem value="+92">
                              🇵🇰 Pakistan (+92)
                            </SelectItem>
                            <SelectItem value="+1">
                              🇺🇸 United States (+1)
                            </SelectItem>
                            <SelectItem value="+91">🇮🇳 India (+91)</SelectItem>
                            <SelectItem value="+44">
                              🇬🇧 United Kingdom (+44)
                            </SelectItem>
                            <SelectItem value="+234">
                              🇳🇬 Nigeria (+234)
                            </SelectItem>
                            <SelectItem value="+81">🇯🇵 Japan (+81)</SelectItem>
                            <SelectItem value="+82">
                              🇰🇷 South Korea (+82)
                            </SelectItem>
                            <SelectItem value="+86">🇨🇳 China (+86)</SelectItem>
                            <SelectItem value="+62">
                              🇮🇩 Indonesia (+62)
                            </SelectItem>
                            <SelectItem value="+63">
                              🇵🇭 Philippines (+63)
                            </SelectItem>
                            <SelectItem value="+65">
                              🇸🇬 Singapore (+65)
                            </SelectItem>
                            <SelectItem value="+66">
                              🇹🇭 Thailand (+66)
                            </SelectItem>
                            <SelectItem value="+60">
                              🇲🇾 Malaysia (+60)
                            </SelectItem>
                            <SelectItem value="+880">
                              🇧🇩 Bangladesh (+880)
                            </SelectItem>
                            <SelectItem value="+84">
                              🇻🇳 Vietnam (+84)
                            </SelectItem>
                            <SelectItem value="+968">🇴🇲 Oman (+968)</SelectItem>
                            <SelectItem value="+971">
                              🇦🇪 United Arab Emirates (+971)
                            </SelectItem>
                            <SelectItem value="+974">
                              🇶🇦 Qatar (+974)
                            </SelectItem>
                            <SelectItem value="+966">
                              🇸🇦 Saudi Arabia (+966)
                            </SelectItem>
                            <SelectItem value="+964">🇮🇶 Iraq (+964)</SelectItem>
                            <SelectItem value="+98">🇮🇷 Iran (+98)</SelectItem>
                            <SelectItem value="+94">
                              🇱🇰 Sri Lanka (+94)
                            </SelectItem>
                            <SelectItem value="+855">
                              🇰🇭 Cambodia (+855)
                            </SelectItem>
                            <SelectItem value="+856">🇱🇦 Laos (+856)</SelectItem>
                            <SelectItem value="+95">
                              🇲🇲 Myanmar (+95)
                            </SelectItem>
                            <SelectItem value="+976">
                              🇲🇳 Mongolia (+976)
                            </SelectItem>
                            <SelectItem value="+993">
                              🇹🇲 Turkmenistan (+993)
                            </SelectItem>
                            <SelectItem value="+994">
                              🇦🇿 Azerbaijan (+994)
                            </SelectItem>
                            <SelectItem value="+996">
                              🇰🇬 Kyrgyzstan (+996)
                            </SelectItem>
                            <SelectItem value="+998">
                              🇺🇿 Uzbekistan (+998)
                            </SelectItem>
                            <SelectItem value="+7">
                              🇰🇿 Kazakhstan (+7)
                            </SelectItem>
                            <SelectItem value="+970">
                              🇵🇸 Palestine (+970)
                            </SelectItem>
                            <SelectItem value="+962">
                              🇯🇴 Jordan (+962)
                            </SelectItem>
                            <SelectItem value="+961">
                              🇱🇧 Lebanon (+961)
                            </SelectItem>
                            <SelectItem value="+965">
                              🇰🇼 Kuwait (+965)
                            </SelectItem>
                            <SelectItem value="+972">
                              🇮🇱 Israel (+972)
                            </SelectItem>
                            <SelectItem value="+90">🇹🇷 Turkey (+90)</SelectItem>
                            <SelectItem value="+373">
                              🇲🇩 Moldova (+373)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter phone number"
                          {...field}
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                          maxLength={(() => {
                            const code = form.watch("countryCode");
                            switch (code) {
                              case "+1": // United States
                              case "+91": // India
                              case "+44": // United Kingdom
                              case "+81": // Japan
                              case "+82": // South Korea
                              case "+86": // China
                              case "+62": // Indonesia
                              case "+63": // Philippines
                              case "+65": // Singapore
                              case "+66": // Thailand
                              case "+60": // Malaysia
                              case "+92": // Pakistan
                              case "+84": // Vietnam
                              case "+968": // Oman
                              case "+971": // United Arab Emirates
                              case "+974": // Qatar
                              case "+966": // Saudi Arabia
                              case "+964": // Iraq
                              case "+98": // Iran
                              case "+94": // Sri Lanka
                              case "+855": // Cambodia
                              case "+856": // Laos
                              case "+95": // Myanmar
                              case "+976": // Mongolia
                              case "+993": // Turkmenistan
                              case "+994": // Azerbaijan
                              case "+996": // Kyrgyzstan
                              case "+998": // Uzbekistan
                              case "+7": // Kazakhstan
                              case "+970": // Palestine
                              case "+962": // Jordan
                              case "+961": // Lebanon
                              case "+965": // Kuwait
                              case "+972": // Israel
                              case "+90": // Turkey
                              case "+373": // Moldova
                                return 10;
                              case "+234": // Nigeria
                                return 11;
                              case "+880": // Bangladesh
                                return 13;
                              default:
                                return 15;
                            }
                          })()}
                          inputMode="numeric"
                          pattern="\d*"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Address Field */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Business Address
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your complete business address"
                        {...field}
                        className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={
                    form.formState.isSubmitting ||
                    addBusinessLoading ||
                    getProfileLoading
                  }
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {form.formState.isSubmitting ||
                  addBusinessLoading ||
                  getProfileLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Creating Business...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Create Business
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Professional Footer */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          By creating a business, you agree to our{" "}
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}
