"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useContext } from "react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { createBranchSchema, CreateBranchTypes } from "@/types/branch.types";
import { useCreateBranch } from "@/server/usebranch";
import { BusinessContext } from "@/provider/BusinessProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function AddBranchPage() {
  const router = useRouter();
  const providerData = useContext(BusinessContext);

  const { mutateAsync: CreateBranch, isPending: isLoading } =
    useCreateBranch(true);

  const form = useForm({
    resolver: zodResolver(createBranchSchema),
    defaultValues: {
      name: "",
      countryCode: "",
      address: "",
      phone: "",
      isActive: true,
      businessId: providerData?.business.id ?? "",
    },
  });
  const onSubmit = async (data: CreateBranchTypes) => {
    const combineCountryCodeandPhone = `${data.countryCode}-${data.phone}`;
    await CreateBranch({
      ...data,
      phone: combineCountryCodeandPhone,
    });
  };

  return (
    <div className="md:w-xl mx-auto">
      <Button
        type="button"
        variant="outline"
        className="mb-6 rounded-lg flex items-center gap-2 text-gray-700 hover:bg-gray-100"
        onClick={() => router.back()}
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="font-medium">Back</span>
      </Button>
      <h1 className="text-2xl font-bold mb-6">Add Branch</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-8 rounded-lg shadow"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter branch name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="flex-[0.1]">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full border rounded px-3 py-2 bg-background">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+92">Pakistan (+92)</SelectItem>
                        <SelectItem value="+91">India (+91)</SelectItem>
                        <SelectItem value="+880">Bangladesh (+880)</SelectItem>
                        <SelectItem value="+977">Nepal (+977)</SelectItem>
                        <SelectItem value="+94">Sri Lanka (+94)</SelectItem>
                        <SelectItem value="+93">Afghanistan (+93)</SelectItem>
                        <SelectItem value="+975">Bhutan (+975)</SelectItem>
                        <SelectItem value="+960">Maldives (+960)</SelectItem>
                        <SelectItem value="+98">Iran (+98)</SelectItem>
                        <SelectItem value="+964">Iraq (+964)</SelectItem>
                        <SelectItem value="+86">China (+86)</SelectItem>
                        <SelectItem value="+84">Vietnam (+84)</SelectItem>
                        <SelectItem value="+855">Cambodia (+855)</SelectItem>
                        <SelectItem value="+66">Thailand (+66)</SelectItem>
                        <SelectItem value="+62">Indonesia (+62)</SelectItem>
                        <SelectItem value="+60">Malaysia (+60)</SelectItem>
                        <SelectItem value="+65">Singapore (+65)</SelectItem>
                        <SelectItem value="+82">South Korea (+82)</SelectItem>
                        <SelectItem value="+81">Japan (+81)</SelectItem>
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
                <FormItem className="w-full">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      {...field}
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

          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="w-8 h-0 rounded-3xl"
                  />
                </FormControl>
                <FormLabel className="mb-0">Active Branch</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Branch"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
