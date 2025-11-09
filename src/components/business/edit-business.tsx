"use client";
import React, { useContext, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Textarea } from "../ui/textarea";
import { useBusiness, useUpdateBusiness } from "@/server/usebusiness";
import { useCurrentUserProfile } from "@/server/useProfile";
import { useRouter } from "next/navigation";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  updateBusinessSchema,
  UpdateBusinessTypes,
} from "@/types/business.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BusinessContext } from "@/provider/BusinessProvider";
import { toast } from "sonner";

export default function EditBusiness() {
  const router = useRouter();

  const getBusinessContext = useContext(BusinessContext);
  const getBusinessId =
    typeof getBusinessContext?.business === "string"
      ? getBusinessContext.business
      : getBusinessContext?.business?.id ?? "";

  const { mutateAsync: updateBusiness, isPending: updateLoading } =
    useUpdateBusiness(true);

  const getBusiness = useBusiness(getBusinessId, true).data;

  const form = useForm({
    resolver: zodResolver(updateBusinessSchema),
    defaultValues: {
      name: "",
      countryCode: "",
      phone: "",
      address: "",
    },
  });

  useEffect(() => {
    if (getBusiness) {
      form.reset({
        name: getBusiness.name || "",
        address: getBusiness.address || "",
        countryCode: getBusiness.phone.split("-")[0],
        phone: getBusiness.phone.split("-")[1],
      });
    }
  }, [getBusiness, form]);

  const onSubmit = async (data: UpdateBusinessTypes) => {
    const phoneWithCountryCode = `${data.countryCode}-${data.phone}`;
    const { countryCode, ...rest } = data;
    // Get the businessId and the current business object
    const businessId = getBusiness?.id;
    if (!businessId) {
      toast.error("Business ID is required to update the business.");
      return;
    }
    // Use existing values for billingCycleDate and createdAt, or provide defaults if not available
    const submitData = {
      ...rest,
      phone: phoneWithCountryCode,
      id: businessId,
      name: data.name,
      address: data.address,
      isActive: data.isActive,
      countryCode: data.countryCode,
    };
    await updateBusiness(submitData);
    router.push("/business"); // Redirect after update
  };

  const countryCode = useWatch({
    control: form.control,
    name: "countryCode", // <-- Add this back
  });

  return (
    <div className="w-full md:max-w-xl mx-auto mt-10 p-2 md:p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Business</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Business Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => {
                return (
                  <FormItem className="flex-1 space-x-2">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+92">Pakistan (+92)</SelectItem>
                          <SelectItem value="+1">United States (+1)</SelectItem>
                          <SelectItem value="+91">India (+91)</SelectItem>
                          <SelectItem value="+44">
                            United Kingdom (+44)
                          </SelectItem>
                          <SelectItem value="+234">Nigeria (+234)</SelectItem>
                          <SelectItem value="+81">Japan (+81)</SelectItem>
                          <SelectItem value="+82">South Korea (+82)</SelectItem>
                          <SelectItem value="+86">China (+86)</SelectItem>
                          <SelectItem value="+62">Indonesia (+62)</SelectItem>
                          <SelectItem value="+63">Philippines (+63)</SelectItem>
                          <SelectItem value="+65">Singapore (+65)</SelectItem>
                          <SelectItem value="+66">Thailand (+66)</SelectItem>
                          <SelectItem value="+60">Malaysia (+60)</SelectItem>
                          <SelectItem value="+880">
                            Bangladesh (+880)
                          </SelectItem>
                          <SelectItem value="+84">Vietnam (+84)</SelectItem>
                          <SelectItem value="+968">Oman (+968)</SelectItem>
                          <SelectItem value="+971">
                            United Arab Emirates (+971)
                          </SelectItem>
                          <SelectItem value="+974">Qatar (+974)</SelectItem>
                          <SelectItem value="+966">
                            Saudi Arabia (+966)
                          </SelectItem>
                          <SelectItem value="+964">Iraq (+964)</SelectItem>
                          <SelectItem value="+98">Iran (+98)</SelectItem>
                          <SelectItem value="+94">Sri Lanka (+94)</SelectItem>
                          <SelectItem value="+855">Cambodia (+855)</SelectItem>
                          <SelectItem value="+856">Laos (+856)</SelectItem>
                          <SelectItem value="+95">Myanmar (+95)</SelectItem>
                          <SelectItem value="+976">Mongolia (+976)</SelectItem>
                          <SelectItem value="+993">
                            Turkmenistan (+993)
                          </SelectItem>
                          <SelectItem value="+994">
                            Azerbaijan (+994)
                          </SelectItem>
                          <SelectItem value="+996">
                            Kyrgyzstan (+996)
                          </SelectItem>
                          <SelectItem value="+998">
                            Uzbekistan (+998)
                          </SelectItem>
                          <SelectItem value="+7">Kazakhstan (+7)</SelectItem>
                          <SelectItem value="+970">Palestine (+970)</SelectItem>
                          <SelectItem value="+962">Jordan (+962)</SelectItem>
                          <SelectItem value="+961">Lebanon (+961)</SelectItem>
                          <SelectItem value="+965">Kuwait (+965)</SelectItem>
                          <SelectItem value="+972">Israel (+972)</SelectItem>
                          <SelectItem value="+90">Turkey (+90)</SelectItem>
                          <SelectItem value="+373">Moldova (+373)</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      {...field}
                      maxLength={(() => {
                        const code = form.watch("countryCode");
                        switch (code) {
                          case "+1":
                          case "+91":
                          case "+44":
                          case "+81":
                          case "+82":
                          case "+86":
                          case "+62":
                          case "+63":
                          case "+65":
                          case "+66":
                          case "+60":
                          case "+92":
                          case "+84":
                          case "+968":
                          case "+971":
                          case "+974":
                          case "+966":
                          case "+964":
                          case "+98":
                          case "+94":
                          case "+855":
                          case "+856":
                          case "+95":
                          case "+976":
                          case "+993":
                          case "+994":
                          case "+996":
                          case "+998":
                          case "+7":
                          case "+970":
                          case "+962":
                          case "+961":
                          case "+965":
                          case "+972":
                          case "+90":
                          case "+373":
                            return 10;
                          case "+234":
                            return 11;
                          case "+880":
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
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting || updateLoading}
            className="w-full"
          >
            {form.formState.isSubmitting || updateLoading
              ? "Updating..."
              : "Update Business"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
