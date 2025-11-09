"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { memo } from "react";
import { useCreateSupplier, useUpdateSupplier } from "@/server/useSupplier";
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
import { SupplierTypes, CreateSupplierInput } from "@/types/supplier.types";

interface SupplierFormProps {
  supplier?: SupplierTypes | null;
  businessId?: string;
  branchId?: string;
  onSuccess?: () => void;
}

type SupplierFormData = Omit<CreateSupplierInput, "id">;

function SupplierForm({
  supplier,
  onSuccess,
  branchId,
  businessId,
}: SupplierFormProps) {
  const isEditMode = !!supplier;
  const { mutateAsync: createSupplier, isPending: isCreating } =
    useCreateSupplier(true);
  const { mutateAsync: updateSupplier, isPending: isUpdating } =
    useUpdateSupplier(true);
  const isLoading = isCreating || isUpdating;

  const form = useForm<SupplierFormData>({
    defaultValues: {
      name: supplier?.name || "",
      email: supplier?.email || "",
      phone: supplier?.phone || "",
      address: supplier?.address || "",
      status: supplier?.status || "active",
      creditLimit: supplier?.creditLimit || 0,
      paymentTerms: supplier?.paymentTerms || "",
      businessType: supplier?.businessType || "",
      contactPerson: supplier?.contactPerson || "",
    },
  });

  async function onSubmit(data: SupplierFormData) {
    try {
      if (!data.name?.trim()) {
        form.setError("name", { message: "Name is required" });
        return;
      }
      if (!data.phone?.trim()) {
        form.setError("phone", { message: "Phone is required" });
        return;
      }
      if (isEditMode && supplier) {
        await updateSupplier({ ...supplier, ...data });
        onSuccess?.();
      } else {
        // For create, only send the form data (CreateSupplierInput)
        const createPayload: CreateSupplierInput = {
          name: data.name,
          phone: data.phone,
          email: data.email || "",
          address: data.address || "",
          status: data.status,
          creditLimit: data.creditLimit || 0,
          paymentTerms: data.paymentTerms || "",
          businessType: data.businessType || "",
          contactPerson: data.contactPerson || "",
          businessId: businessId || "",
          branchId: branchId || "",
        };
        await createSupplier(createPayload);
        onSuccess?.();
      }
    } catch (error) {
      // Error already handled by mutation
    }
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? "Edit Supplier" : "Add a new Supplier"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supplier Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter supplier name"
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

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="paymentTerms"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Payment Terms (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Net 30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Business Type (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Retailer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter contact person name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            {isEditMode ? "Update Supplier" : "Create Supplier"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default memo(SupplierForm);
