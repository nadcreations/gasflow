"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SummarySectionProps {
  form: UseFormReturn<any>;
  totalItemsAmount: number;
  totalExpenses: number;
  discount: number;
  grandTotal: number;
  amountPaid: number;
  outstandingAmount: number;
  isPending: boolean;
}

export const SummarySection = React.memo<SummarySectionProps>(
  ({
    totalItemsAmount,
    totalExpenses,
    discount,
    grandTotal,
    amountPaid,
    outstandingAmount,
    isPending,
  }) => {
    const subtotal = totalItemsAmount + totalExpenses;

    return (
      <Card
        className="rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-lg hover:shadow-xl transition-shadow z-50"
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.03)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-gray-700 font-medium drop-shadow">
            Sale Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 pt-0">
          <div className="flex justify-between text-sm">
            <span>Stock Items</span>
            <span>PKR {totalItemsAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Additional Expenses</span>
            <span>PKR {totalExpenses.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>PKR {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-red-600">
            <span>Discount (-)</span>
            <span>PKR {discount.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold text-lg">
            <span>Grand Total</span>
            <span>PKR {grandTotal.toLocaleString()}</span>
          </div>

          <Separator className="my-3" />

          {/* Payment Summary */}
          <div className="space-y-1">
            <div className="flex justify-between text-sm text-green-600">
              <span>Amount Paid</span>
              <span>PKR {amountPaid.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>Outstanding Balance</span>
              <span
                className={
                  outstandingAmount > 0 ? "text-orange-600" : "text-green-600"
                }
              >
                PKR {outstandingAmount.toLocaleString()}
              </span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-4 p-6 text-sm"
            disabled={isPending || grandTotal <= 0}
          >
            {isPending ? "Creating Sale..." : "Complete Sale"}
          </Button>
        </CardContent>
      </Card>
    );
  }
);

SummarySection.displayName = "SummarySection";
