"use client";

import React from "react";
import { useFieldArray } from "react-hook-form";
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

interface ExpenseSectionProps {
  form: any;
}

export const ExpenseSection = React.memo<ExpenseSectionProps>(({ form }) => {
  const { fields: expenseFields, append: addExpense } = useFieldArray({
    control: form.control,
    name: "purchaseExpenses",
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
            Additional Purchase Expenses
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
                name={`purchaseExpenses.${index}.expenseType`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expense Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select expense type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Transportation">
                            Transportation
                          </SelectItem>
                          <SelectItem value="Fuel">Fuel</SelectItem>
                          <SelectItem value="Loading">Loading</SelectItem>
                          <SelectItem value="Unloading">Unloading</SelectItem>
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
                name={`purchaseExpenses.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Transportation" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-2 items-end">
                <FormField
                  control={form.control}
                  name={`purchaseExpenses.${index}.amount`}
                  render={({ field }) => (
                    <FormItem>
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
                    onClick={() => {
                      form.unregister(`purchaseExpenses.${index}`);
                      form.setValue(
                        "purchaseExpenses",
                        expenseFields.filter((_, i) => i !== index)
                      );
                    }}
                    aria-label="Remove item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                )}
              </div>
              {expenseFields.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="flex md:hidden w-full bg-red-100 hover:bg-red-500"
                  onClick={() => {
                    form.unregister(`purchaseExpenses.${index}`);
                    form.setValue(
                      "purchaseExpenses",
                      expenseFields.filter((_, i) => i !== index)
                    );
                  }}
                  aria-label="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Remove Item {index + 1}
                </Button>
              )}
              <Separator className="mt-4 col-span-1 md:col-span-3" />
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
                <FormLabel>Purchase Notes</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Write any notes about this purchase..."
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
