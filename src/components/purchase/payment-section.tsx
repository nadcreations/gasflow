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
import { DatePicker } from "@/components/ui/date-picker";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

interface PaymentSectionProps {
  form: UseFormReturn<any>;
  grandTotal: number;
}

export const PaymentSection = React.memo<PaymentSectionProps>(
  ({ form, grandTotal }) => {
    const {
      fields: paymentFields,
      append: addPayment,
      remove: removePayment,
    } = useFieldArray({
      control: form.control,
      name: "purchaseWithPayment.payments",
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
            Payment Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentFields.map((payment, index) => (
            <div key={payment.id} className="flex flex-col gap-2 mb-2">
              <FormField
                control={form.control}
                name={`purchaseWithPayment.payments.${index}.paymentDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Date</FormLabel>
                    <FormControl>
                      <DatePicker date={field.value} setDate={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`purchaseWithPayment.payments.${index}.amountPaid`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        value={
                          field.value !== undefined && field.value !== null
                            ? String(field.value)
                            : ""
                        }
                        min={0}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value === "" ? 0 : Number(value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`purchaseWithPayment.payments.${index}.paymentMethod`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value || ""}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="bank_transfer">
                            Bank Transfer
                          </SelectItem>
                          <SelectItem value="easypaisa">Easypaisa</SelectItem>
                          <SelectItem value="jazzcash">JazzCash</SelectItem>
                          <SelectItem value="cheque">Cheque</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remove Button */}
              {paymentFields.length > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-fit px-3 mt-1 self-start"
                  onClick={() => removePayment(index)}
                  aria-label="Remove payment"
                >
                  <X className="h-4 w-4 text-red-500 mr-1" />
                  Remove Payment
                </Button>
              )}

              {/* Separator - only show if not last item */}
              {index < paymentFields.length - 1 && <Separator />}
            </div>
          ))}

          {/* Add Payment Button */}
          <Button
            type="button"
            variant="outline"
            className="mt-2 w-full"
            onClick={() => {
              addPayment({
                paymentMethod: "",
                amountPaid: 0,
                paymentDate: new Date().toISOString(),
              });
            }}
          >
            + Add Payment
          </Button>

          {/* Payment Summary */}
          <div className="pt-4 space-y-2">
            <div className="flex justify-between font-semibold">
              <span>Total Amount Paid</span>
              <span>
                PKR{" "}
                {(() => {
                  const payments =
                    form.watch("purchaseWithPayment.payments") || [];
                  const totalPaid = payments.reduce(
                    (sum: number, payment: any) =>
                      sum + (Number(payment?.amountPaid) || 0),
                    0
                  );
                  return totalPaid.toLocaleString();
                })()}
              </span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Outstanding Balance</span>
              <span>
                PKR{" "}
                {(() => {
                  const payments =
                    form.watch("purchaseWithPayment.payments") || [];
                  const totalPaid = payments.reduce(
                    (sum: number, payment: any) =>
                      sum + (Number(payment?.amountPaid) || 0),
                    0
                  );
                  const outstanding = Math.max(0, grandTotal - totalPaid);
                  return outstanding.toLocaleString();
                })()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);
