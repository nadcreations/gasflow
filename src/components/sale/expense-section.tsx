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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

interface ExpenseSectionProps {
  form: UseFormReturn<any>;
}

export const ExpenseSection = React.memo<ExpenseSectionProps>(({ form }) => {
  const {
    fields: expenseFields,
    append: addExpense,
    remove: removeExpense,
  } = useFieldArray({
    control: form.control,
    name: "saleExpenses",
  });

  return (
    <>
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
            Additional Sale Expenses
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {expenseFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <FormField
                control={form.control}
                name={`saleExpenses.${index}.expenseType`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expense Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value || ""}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select expense type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Delivery">Delivery</SelectItem>
                          <SelectItem value="Installation">
                            Installation
                          </SelectItem>
                          <SelectItem value="Service">Service</SelectItem>
                          <SelectItem value="Transportation">
                            Transportation
                          </SelectItem>
                          <SelectItem value="Fuel">Fuel</SelectItem>
                          <SelectItem value="Labor">Labor</SelectItem>
                          <SelectItem value="Miscellaneous">
                            Miscellaneous
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`saleExpenses.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Home delivery" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-2 items-end">
                <FormField
                  control={form.control}
                  name={`saleExpenses.${index}.amount`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Amount</FormLabel>
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
                    </FormItem>
                  )}
                />
                {expenseFields.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="hidden md:flex"
                    onClick={() => removeExpense(index)}
                    aria-label="Remove item"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                )}
              </div>
              {expenseFields.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  className="flex md:hidden w-full bg-red-100 hover:bg-red-500"
                  onClick={() => removeExpense(index)}
                  aria-label="Remove item"
                >
                  <X className="h-4 w-4 text-red-500 mr-2" />
                  Remove Expense {index + 1}
                </Button>
              )}
              {index < expenseFields.length - 1 && (
                <Separator className="mt-4 col-span-1 md:col-span-3" />
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              addExpense({ description: "", expenseType: "", amount: 0 })
            }
          >
            + Add Expense
          </Button>
        </CardContent>
      </Card>

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
            Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sale Notes</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[80px]"
                    placeholder="Write any notes about this sale..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </>
  );
});

ExpenseSection.displayName = "ExpenseSection";
