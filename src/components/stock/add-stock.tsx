"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useContext, useEffect, useState } from "react";
import { useSuppliersByBranchId } from "@/server/useSupplier";
import { createStockSchema, CreateStockTypes } from "@/types/stock.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { BusinessContext } from "@/provider/BusinessProvider";
import { useBranchStore } from "@/stores/branchStore";
import SupplierFormDialog from "../Dialog/supplier-form-dialog";
import SupplierForm from "../supplier-form";
import { useCreateStock } from "@/server/useStock";
import { Package, Truck, BarChart3 } from "lucide-react";
import { useRouter } from "next/navigation";

function AddStockPage() {
  const router = useRouter();

  const getBusiness = useContext(BusinessContext)?.business;
  const getBranchId = useBranchStore((state) => state.selectedBranchId);

  const { mutateAsync: CreateStock, isPending: isLoading } =
    useCreateStock(true);

  const { data: supplierData } = useSuppliersByBranchId(
    getBranchId ?? "",
    true,
    true
  );

  const form = useForm({
    resolver: zodResolver(createStockSchema),
    defaultValues: {
      productName: "",
      productType: "cylinder" as "cylinder" | "lpg_gas",
      cylinderSize: null,
      cylinderType: null,
      unit: "kg" as "kg" | "piece",
      supplierId: "",
      minStock: 20,
      businessId: getBusiness?.id || "",
      branchId: getBranchId || "",
      gasWeight: 0,
      quantity: 0,
      costPrice: 0,
      sellingPrice: 0,
    },
  });
  const productType = form.watch("productType");

  useEffect(() => {
    if (getBusiness && getBranchId) {
      form.setValue("businessId", getBusiness.id);
      form.setValue("branchId", getBranchId);
    }
  }, [getBusiness, getBranchId, form]);

  const handleSubmit = async (data: CreateStockTypes) => {
    try {
      await CreateStock(data);
      form.reset();
    } catch (error) {
      // Error already handled by mutation
    }
  };

  return (
    <div className="w-full space-y-6">
      <Button
        type="button"
        variant="outline"
        className="mb-6 rounded-lg flex items-center gap-2 text-gray-700 hover:bg-gray-100"
        onClick={() => router.back()}
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="font-medium">Back</span>
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Supplier Information Card */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg p-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <Truck className="h-5 w-5 text-blue-600" />
                Supplier Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-row items-end w-full space-x-3">
                <FormField
                  control={form.control}
                  name="supplierId"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Select Supplier *
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Choose a supplier" />
                          </SelectTrigger>
                          <SelectContent>
                            {supplierData?.map((supplier: any) => (
                              <SelectItem key={supplier.id} value={supplier.id}>
                                {supplier.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SupplierFormDialog title="Add new Supplier">
                  <SupplierForm businessId={getBusiness?.id} />
                </SupplierFormDialog>
              </div>
            </CardContent>
          </Card>

          {/* Product Details Card */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg p-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <Package className="h-5 w-5 text-green-600" />
                Product Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Product Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter product name"
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Product Type *
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cylinder">Cylinder</SelectItem>
                            <SelectItem value="lpg_gas">LPG Gas</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="unit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Unit *
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kg</SelectItem>
                            <SelectItem value="piece">Piece</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {productType === "lpg_gas" && (
                  <FormField
                    control={form.control}
                    name="gasWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Gas Weight (kg)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter gas weight"
                            className="h-11"
                            value={field.value?.toString() || ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value === ""
                                  ? 0
                                  : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              {/* Cylinder-specific fields */}
              {productType === "cylinder" && (
                <div className="space-y-4">
                  <h4 className="text-md font-medium text-gray-800">
                    Cylinder Specifications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="cylinderSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Cylinder Size
                          </FormLabel>
                          <FormControl>
                            <Select
                              value={field.value ?? undefined}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select cylinder size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="5kg">5kg</SelectItem>
                                <SelectItem value="12kg">12kg</SelectItem>
                                <SelectItem value="15kg">15kg</SelectItem>
                                <SelectItem value="45kg">45kg</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cylinderType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Cylinder Type
                          </FormLabel>
                          <FormControl>
                            <Select
                              value={field.value ?? undefined}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select cylinder type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="domestic">
                                  Domestic
                                </SelectItem>
                                <SelectItem value="commercial">
                                  Commercial
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Inventory & Pricing Card */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-t-lg p-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Inventory & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Initial Quantity *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter quantity"
                          className="h-11"
                          value={field.value?.toString() || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === "" ? 0 : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="minStock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Minimum Stock Level *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter minimum stock"
                          className="h-11"
                          value={field.value?.toString() || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === "" ? 0 : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="costPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Cost Price (PKR) *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter cost price"
                          className="h-11"
                          value={field.value?.toString() || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === "" ? 0 : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sellingPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Selling Price (PKR) *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter selling price"
                          className="h-11"
                          value={field.value?.toString() || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === "" ? 0 : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  Creating...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Create Stock Item
                </div>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default memo(AddStockPage);
