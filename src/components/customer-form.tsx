"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { memo } from "react";
import { useCreateCustomer, useUpdateCustomer } from "@/server/useCustomer";
import { useCurrentUserProfile } from "@/server/useProfile";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { CustomerTypes } from "@/types/customer.types";
import { useBranchStore } from "@/stores/branchStore";

interface CustomerFormProps {
  businessId: string;
  branchId?: string;
  customer?: CustomerTypes | null;
  onSuccess?: () => void;
}

// Define form type to match our form fields exactly
type CustomerFormData = {
  name: string;
  email?: string;
  phone: string;
  address?: string;
  cnic: string;
  status: "active" | "inactive";
  creditLimit?: number;
  branchId: string;
};

function CustomerForm({
  branchId,
  customer,
  onSuccess,
  businessId,
}: CustomerFormProps) {
  const { data: ProfileUser } = useCurrentUserProfile();
  const isLoggedIn = !!ProfileUser;

  const getBranchId = useBranchStore((state) => state.selectedBranchId);
  const isEditMode = !!customer;

  const { mutateAsync: CreateNewCustomer, isPending: isCreating } =
    useCreateCustomer(isLoggedIn);

  const { mutateAsync: UpdateCustomer, isPending: isUpdating } =
    useUpdateCustomer(isLoggedIn);

  const isLoading = isCreating || isUpdating;

  const form = useForm<CustomerFormData>({
    defaultValues: {
      name: customer?.name || "",
      email: customer?.email || "",
      phone: customer?.phone || "",
      address: customer?.address || "",
      cnic: customer?.cnic || "",
      status: customer?.status || "active",
      creditLimit: customer?.creditLimit || 0,
      branchId: branchId || getBranchId || customer?.branchId || "",
    },
  });

  async function onSubmit(data: CustomerFormData) {
    try {
      // Basic client-side validation
      if (!data.name?.trim()) {
        form.setError("name", { message: "Name is required" });
        return;
      }
      if (!data.phone?.trim()) {
        form.setError("phone", { message: "Phone is required" });
        return;
      }
      if (!data.cnic?.trim()) {
        form.setError("cnic", { message: "CNIC is required" });
        return;
      }

      if (isEditMode && customer) {
        // Update existing customer - pass only the editable fields
        const updatePayload = {
          ...customer, // Keep all existing customer data
          ...data, // Override with form data
        };
        await UpdateCustomer(updatePayload);
        onSuccess?.();
      } else {
        const extendedData = {
          ...data,
          businessId: businessId,
        };

        // Create new customer
        await CreateNewCustomer({
          ...extendedData,
        });
        onSuccess?.();
      }
    } catch (error) {
      // Error already handled by mutation
    }
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? "Edit Customer" : "Add a new Customer"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter customer name"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter phone number"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="cnic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNIC</FormLabel>
                <FormControl>
                  <Input placeholder="12345-1234567-1" {...field} required />
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
                <FormLabel>Address (Optional)</FormLabel>
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
              name="status"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="creditLimit"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Credit Limit (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      {...field}
                      value={
                        field.value === 0 || field.value === undefined
                          ? ""
                          : field.value
                      }
                      onChange={(e) => {
                        const val = e.target.value;
                        field.onChange(val === "" ? 0 : Number(val));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
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
            ) : null}
            {isEditMode ? "Update Customer" : "Create Customer"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default memo(CustomerForm);
