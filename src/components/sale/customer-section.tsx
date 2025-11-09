"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import CustomerFormDialog from "@/components/Dialog/customer-form-dialog";
import CustomerForm from "@/components/customer-form";
import { useBranchStore } from "@/stores/branchStore";

interface CustomerSectionProps {
  form: UseFormReturn<any>;
  customerData?: any[];
  selectedBranchId?: string;
}

export function CustomerSection({
  form,
  customerData = [],
  selectedBranchId = "",
}: CustomerSectionProps) {
  const selectedBusinessId = useBranchStore(
    (state) => state.selectedBusinessId
  );

  return (
    <Card
      className="rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-lg hover:shadow-xl transition-shadow z-50"
      style={{
        boxShadow:
          "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.03)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <CardHeader>
        <CardTitle className="text-base text-gray-700 font-medium drop-shadow">
          New Sale Order
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="customerId"
            render={({ field }) => (
              <FormItem className="flex-1 mx-1">
                <FormLabel>Customer (Optional)</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select customer (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="None">Walk-in Customer</SelectItem>
                      {customerData?.map(
                        (customer: {
                          id: string;
                          name: string;
                          phone?: string;
                        }) => (
                          <SelectItem key={customer.id} value={customer.id}>
                            <div className="flex flex-col">
                              <span>{customer.name}</span>
                              {customer.phone && (
                                <span className="text-xs text-muted-foreground">
                                  {customer.phone}
                                </span>
                              )}
                            </div>
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CustomerFormDialog title="Add new Customer">
            <CustomerForm
              businessId={selectedBusinessId || ""}
              branchId={selectedBranchId}
            />
          </CustomerFormDialog>
        </div>
        <FormField
          control={form.control}
          name="saleDate"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Sale Date</FormLabel>
              <FormControl>
                <DatePicker date={field.value} setDate={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
