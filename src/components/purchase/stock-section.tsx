"use client";

import React from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

interface StockSectionProps {
  form: UseFormReturn<any>;
  stockData?: any[];
}

export const StockSection = React.memo<StockSectionProps>(
  ({ form, stockData = [] }) => {
    const {
      fields: itemFields,
      append: addItem,
      remove: removeItem,
    } = useFieldArray({
      control: form.control,
      name: "purchaseItems",
    });

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
            Stock Items
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {itemFields.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end relative"
            >
              <FormField
                control={form.control}
                name={`purchaseItems.${index}.stockId`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock Name</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Stock" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {stockData?.map((stock: any, idx: number) => (
                          <SelectItem key={stock.id || idx} value={stock.id}>
                            {stock.productName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`purchaseItems.${index}.quantity`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        value={
                          field.value !== undefined && field.value !== null
                            ? String(field.value)
                            : ""
                        }
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value === "" ? "" : Number(value));
                        }}
                        min={1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 items-end">
                <FormField
                  control={form.control}
                  name={`purchaseItems.${index}.unitPrice`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Unit Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          value={
                            field.value !== undefined && field.value !== null
                              ? String(field.value)
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(value === "" ? "" : Number(value));
                          }}
                          min={0}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {itemFields.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="hidden md:flex"
                    onClick={() => removeItem(index)}
                    aria-label="Remove item"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                )}
              </div>
              {itemFields.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  className="flex md:hidden w-full bg-red-100 hover:bg-red-500"
                  onClick={() => removeItem(index)}
                  aria-label="Remove item"
                >
                  <X className="h-4 w-4 text-red-500 mr-2" />
                  Remove Item {index + 1}
                </Button>
              )}
              {index < itemFields.length - 1 && (
                <Separator className="mt-4 col-span-1 md:col-span-3" />
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              addItem({
                stockId: "",
                quantity: 1,
                unitPrice: 0,
                totalPrice: 0,
              })
            }
          >
            + Add Item
          </Button>
        </CardContent>
      </Card>
    );
  }
);
