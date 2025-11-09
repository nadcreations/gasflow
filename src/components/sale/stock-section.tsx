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
  onStockSelect?: (stockId: string, itemIndex: number) => void;
}

export const StockSection = React.memo<StockSectionProps>(
  ({ form, stockData = [], onStockSelect }) => {
    const {
      fields: itemFields,
      append: addItem,
      remove: removeItem,
    } = useFieldArray({
      control: form.control,
      name: "saleItems",
    });

    const handleStockChange = (stockId: string, index: number) => {
      if (onStockSelect) {
        onStockSelect(stockId, index);
      }
    };

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
                name={`saleItems.${index}.stockId`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock Name</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleStockChange(value, index);
                      }}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Stock" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {stockData
                          ?.filter((stock: any) => stock.quantity > 0)
                          .map((stock: any, idx: number) => (
                            <SelectItem key={stock.id || idx} value={stock.id}>
                              <div className="flex flex-col">
                                <span>{stock.productName}</span>
                                <span className="text-xs text-muted-foreground">
                                  Available: {stock.quantity} | Price: PKR{" "}
                                  {stock.sellingPrice}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        {stockData?.filter((stock: any) => stock.quantity <= 0)
                          .length > 0 && (
                          <div className="px-2 py-1 text-xs text-muted-foreground">
                            {
                              stockData?.filter(
                                (stock: any) => stock.quantity <= 0
                              ).length
                            }{" "}
                            items out of stock
                          </div>
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`saleItems.${index}.quantity`}
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
                          const numValue = Number(value);
                          const stockId = form.getValues(
                            `saleItems.${index}.stockId`
                          );
                          const selectedStock = stockData?.find(
                            (s: any) => s.id === stockId
                          );
                          const maxQuantity = selectedStock?.quantity || 0;

                          if (numValue > maxQuantity && maxQuantity > 0) {
                            form.setError(`saleItems.${index}.quantity`, {
                              message: `Maximum available quantity is ${maxQuantity}`,
                            });
                            return;
                          } else {
                            form.clearErrors(`saleItems.${index}.quantity`);
                          }

                          field.onChange(value === "" ? "" : numValue);
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
                  name={`saleItems.${index}.unitPrice`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Unit Price (Selling)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          value={
                            field.value !== undefined && field.value !== null
                              ? String(field.value)
                              : ""
                          }
                          readOnly
                          className="bg-gray-100 cursor-not-allowed"
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

StockSection.displayName = "StockSection";
