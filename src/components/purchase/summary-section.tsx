"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SummarySectionProps {
  form: any;
  totalItemsAmount: number;
  totalExpenses: number;
  discount: number;
  grandTotal: number;
  amountPaid: number;
  outstandingAmount: number;
  paidAmount: number;
  dueAmount: number;
  isPending: boolean;
}

export const SummarySection = React.memo<SummarySectionProps>(
  ({
    totalItemsAmount,
    totalExpenses,
    discount,
    grandTotal,
    paidAmount,
    dueAmount,
    isPending,
  }) => {
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
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 pt-0">
          <div className="flex justify-between">
            <span>Total Stock Items</span>
            <span>PKR {totalItemsAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Expenses</span>
            <span>PKR {totalExpenses.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Discount</span>
            <span>PKR {discount.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Grand Total</span>
            <span>PKR {grandTotal.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-green-600">
            <span>Paid Amount</span>
            <span>PKR {paidAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>Due Amount</span>
            <span>PKR {dueAmount.toLocaleString()}</span>
          </div>
          <Button
            type="submit"
            className="w-full mt-4 p-6 text-sm"
            disabled={isPending}
          >
            {isPending ? "Creating Purchase..." : "Complete Purchase"}
          </Button>
        </CardContent>
      </Card>
    );
  }
);
