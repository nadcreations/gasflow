"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import SupplierFormDialog from "@/components/Dialog/supplier-form-dialog";
import SupplierForm from "@/components/supplier-form";

interface SupplierSectionProps {
  form: UseFormReturn<any>;
  supplierData?: any[];
  selectedBusinessId?: string;
}

export function SupplierSection({
  form,
  supplierData = [],
  selectedBusinessId = "",
}: SupplierSectionProps) {
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
          New Purchase Order
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Purchase Number Field */}
        <FormField
          control={form.control}
          name="purchaseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purchase Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Auto-generated"
                  disabled
                  className="bg-gray-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Purchase Type Field - Auto-calculated based on payments */}
        <FormField
          control={form.control}
          name="purchaseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purchase Type (Auto-calculated)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled
                  className="bg-gray-50"
                  value={
                    field.value === "cash"
                      ? "Cash Purchase"
                      : field.value === "credit"
                      ? "Credit Purchase"
                      : field.value === "partial"
                      ? "Partial Payment"
                      : "Not Set"
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row items-end">
          <FormField
            control={form.control}
            name="supplierId"
            render={({ field }) => (
              <FormItem className="flex-1 mx-1">
                <FormLabel>Supplier Name</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      {supplierData?.map(
                        (supplier: { id: string; name: string }) => (
                          <SelectItem key={supplier.id} value={supplier.id}>
                            {supplier.name}
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
          <SupplierFormDialog title="Add new Supplier">
            <SupplierForm businessId={selectedBusinessId} />
          </SupplierFormDialog>
        </div>
        <FormField
          control={form.control}
          name="purchaseDate"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Purchase Date</FormLabel>
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
