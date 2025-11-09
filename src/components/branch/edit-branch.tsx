"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useContext, useEffect } from "react";
import { createBranchSchema, CreateBranchTypes } from "@/types/branch.types";
import { useUpdateBranch, useBranch } from "@/server/usebranch";
import { BusinessContext } from "@/provider/BusinessProvider";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditBranchPage() {
  const providerData = useContext(BusinessContext);
  const router = useRouter();
  const getBranchId = useParams().id;
  const branchId = Array.isArray(getBranchId)
    ? getBranchId[0]
    : getBranchId ?? "";

  const { data: branch, isLoading: isBranchLoading } = useBranch(
    branchId,
    true
  );

  const { mutateAsync: updateBranch, isPending: isLoading } =
    useUpdateBranch(true);

  const form = useForm<CreateBranchTypes>({
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

  useEffect(() => {
    if (branch) {
      form.reset({
        name: branch.name,
        countryCode: branch.phone.split("-")[0],
        address: branch.address,
        phone: branch.phone.split("-")[1],
        isActive: branch.isActive,
        businessId: branch.businessId,
      });
    }
  }, [branch, form]);

  const onSubmit = async (data: CreateBranchTypes) => {
    if (!branchId) return;
    const combineCountryCodeandPhone = `${data.countryCode}-${data.phone}`;

    await updateBranch({
      id: branchId,
      ...data,
      phone: combineCountryCodeandPhone,
    });
    router.push("/dashboard/branch");
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
      <h1 className="text-2xl font-bold mb-6">Edit Branch</h1>

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

          <div className="flex flex-col md:flex-row gap-4">
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
            name="isActive"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    value={field.value === true ? "true" : "false"}
                    onValueChange={(value) => {
                      if (value === "true") {
                        field.onChange(true);
                      } else {
                        field.onChange(false);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Active</SelectItem>
                      <SelectItem value="false">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || isBranchLoading}
          >
            {isLoading ? "Updating..." : "Update Branch"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
