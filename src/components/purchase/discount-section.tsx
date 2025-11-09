"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface DiscountSectionProps {
  form: any;
}

export const DiscountSection = React.memo<DiscountSectionProps>(({ form }) => {
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
          Discount
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="PKR"
                  {...field}
                  value={
                    field.value !== undefined && field.value !== null
                      ? String(field.value)
                      : ""
                  }
                  min={0}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
});
