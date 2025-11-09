"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";

import { useEffect } from "react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { createBranchSchema } from "@/types/branch.types";

type BranchFormValues = z.infer<typeof createBranchSchema>;

export default function BranchProfileForm({
  onSubmit,
  isLoading,
  businessId,
}: {
  onSubmit: (data: any) => void;
  isLoading: boolean;
  businessId?: string;
}) {
  const form = useForm<BranchFormValues>({
    resolver: zodResolver(createBranchSchema),
    defaultValues: {
      name: "",
      countryCode: "",
      phone: "",
      address: "",
      isActive: true,
      businessId: "",
    },
  });

  useEffect(() => {
    if (businessId) {
      form.setValue("businessId", businessId);
    }
  }, [businessId, form]);

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Add a new Branch</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Branch Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter branch name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full border rounded px-3 py-2 bg-background">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+92">Pakistan (+92)</SelectItem>
                        <SelectItem value="+91">India (+91)</SelectItem>
                        <SelectItem value="+880">Bangladesh (+880)</SelectItem>
                        <SelectItem value="+977">Nepal (+977)</SelectItem>
                        <SelectItem value="+94">Sri Lanka (+94)</SelectItem>
                        <SelectItem value="+93">Afghanistan (+93)</SelectItem>
                        <SelectItem value="+975">Bhutan (+975)</SelectItem>
                        <SelectItem value="+960">Maldives (+960)</SelectItem>
                        <SelectItem value="+98">Iran (+98)</SelectItem>
                        <SelectItem value="+964">Iraq (+964)</SelectItem>
                        <SelectItem value="+86">China (+86)</SelectItem>
                        <SelectItem value="+84">Vietnam (+84)</SelectItem>
                        <SelectItem value="+855">Cambodia (+855)</SelectItem>
                        <SelectItem value="+66">Thailand (+66)</SelectItem>
                        <SelectItem value="+62">Indonesia (+62)</SelectItem>
                        <SelectItem value="+60">Malaysia (+60)</SelectItem>
                        <SelectItem value="+65">Singapore (+65)</SelectItem>
                        <SelectItem value="+82">South Korea (+82)</SelectItem>
                        <SelectItem value="+81">Japan (+81)</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col">
                <FormLabel>Active</FormLabel>
                <FormControl>
                  <div className="pt-2">
                    <div className="flex items-center justify-between bg-muted rounded-md p-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Toggling this switch will set your branch as active or
                          inactive. When inactive, you cannot use this branch
                          for sale, purchase, or add/remove items from stock.
                        </p>
                      </div>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="ml-4"
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <svg
                className="animate-spin mr-2 h-4 w-4 inline-block"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            ) : null}
            Create branch
          </Button>
        </form>
      </Form>
    </div>
  );
}
