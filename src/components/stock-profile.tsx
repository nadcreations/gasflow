"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useEffect } from "react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import SupplierFormDialog from "./Dialog/supplier-form-dialog";
import SupplierForm from "./supplier-form";
import { useSuppliersByBranchId } from "@/server/useSupplier";
import { useCurrentUserProfile } from "@/server/useProfile";
import { usePathname, useRouter } from "next/navigation";
import { useStock } from "@/server/useStock";
import { createStockSchema, updateStockSchema } from "@/types/stock.types";

function StockProfileForm({
  onSubmit,
  isLoading,
  businessId,
  branchId,
  title = "Add new Stock",
  isEditOrRead = false,
}: {
  onSubmit: (data: any) => void;
  isLoading: boolean;
  businessId?: string;
  branchId: string;
  title?: string;
  isEditOrRead?: boolean;
}) {
  const formSchema = isEditOrRead ? updateStockSchema : createStockSchema;
  const { data: ProfileUser } = useCurrentUserProfile();
  const { data: supplierData } = useSuppliersByBranchId(
    branchId || "",
    !!ProfileUser,
    true
  );
  const pathname = usePathname();
  const router = useRouter();
  const stockId = pathname?.split("/edit/")[1] || "";
  const { data: stockData } = useStock(stockId, !!stockId, isEditOrRead);

  const form = useForm({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      productName: "",
      productType: "cylinder" as const,
      cylinderSize: "12kg" as const,
      cylinderType: "commercial" as const,
      gasWeight: 0,
      quantity: 1,
      unit: "kg" as const,
      supplierId: "",
      costPrice: 1,
      sellingPrice: 1,
      minStock: 20,
      businessId: businessId || "",
      branchId: branchId || "",
    },
  });

  useEffect(() => {
    if (stockData && supplierData) {
      // Prepare stockData for form fields
      const converted: Partial<any> = {
        ...stockData,
        gasWeight:
          stockData.gasWeight === undefined || stockData.gasWeight === null
            ? 0
            : typeof stockData.gasWeight === "string"
            ? Number(stockData.gasWeight)
            : stockData.gasWeight,
        quantity:
          stockData.quantity === undefined || stockData.quantity === null
            ? 1
            : typeof stockData.quantity === "string"
            ? Number(stockData.quantity)
            : stockData.quantity,
        costPrice:
          stockData.costPrice === undefined || stockData.costPrice === null
            ? 1
            : typeof stockData.costPrice === "string"
            ? Number(stockData.costPrice)
            : stockData.costPrice,
        sellingPrice:
          stockData.sellingPrice === undefined ||
          stockData.sellingPrice === null
            ? 1
            : typeof stockData.sellingPrice === "string"
            ? Number(stockData.sellingPrice)
            : stockData.sellingPrice,
        minStock:
          stockData.minStock === undefined || stockData.minStock === null
            ? 20
            : typeof stockData.minStock === "string"
            ? Number(stockData.minStock)
            : stockData.minStock,
        productType: stockData.productType ?? "cylinder",
        cylinderSize: stockData.cylinderSize ?? "12kg",
        cylinderType: stockData.cylinderType ?? "commercial",
        unit: stockData.unit ?? "kg",
        supplierId: stockData.supplierId ?? "",
        businessId: stockData.businessId ?? businessId ?? "",
        branchId: stockData.branchId ?? branchId ?? "",
      };
      form.reset(converted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stockData, !!supplierData]);

  useEffect(() => {
    if (businessId && isEditOrRead) form.setValue("businessId", businessId);
  }, [businessId, form, isEditOrRead]);

  const productType = form.watch("productType");

  useEffect(() => {
    if (productType === "cylinder") {
      form.setValue("gasWeight", 0);
    } else if (productType === "lpg_gas") {
      form.setValue("cylinderSize", null as any);
      form.setValue("cylinderType", null as any);
    }
  }, [productType, form]);

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            onSubmit(isEditOrRead ? { ...data, id: stockId } : data)
          )}
          className="space-y-5"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-end w-full space-x-3">
              <FormField
                control={form.control}
                name="supplierId"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Select Supplier</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a supplier" />
                        </SelectTrigger>
                        <SelectContent>
                          {supplierData?.map((supplier: any, index: number) => (
                            <SelectItem key={index} value={supplier.id}>
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
                <SupplierForm businessId={businessId} />
              </SupplierFormDialog>
            </div>
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Product Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full border rounded px-3 py-2 bg-background">
                        <SelectValue placeholder="Select type" />
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
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Unit</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full border rounded px-3 py-2 bg-background">
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
          </div>
          {productType === "cylinder" && (
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="cylinderSize"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Cylinder Size</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value ?? undefined}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full border rounded px-3 py-2 bg-background">
                          <SelectValue placeholder="Select size" />
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
                  <FormItem className="flex-1">
                    <FormLabel>Cylinder Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value ?? undefined}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full border rounded px-3 py-2 bg-background">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="domestic">Domestic</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          {productType !== "cylinder" && (
            <FormField
              control={form.control}
              name="gasWeight"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Gas Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter gas weight"
                      value={
                        field.value === undefined || field.value === null
                          ? ""
                          : Number(field.value)
                      }
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === ""
                            ? undefined
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
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      value={
                        field.value === undefined || field.value === null
                          ? ""
                          : field.value
                      }
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === ""
                            ? undefined
                            : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="costPrice"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Cost Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter cost price"
                      value={
                        field.value === undefined || field.value === null
                          ? ""
                          : field.value
                      }
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === ""
                            ? undefined
                            : Number(e.target.value)
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
                <FormItem className="flex-1">
                  <FormLabel>Selling Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter selling price"
                      value={
                        field.value === undefined || field.value === null
                          ? ""
                          : field.value
                      }
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === ""
                            ? undefined
                            : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="w-full flex justify-between items-center"
                >
                  <span>Advance Alert for Stock</span>
                  <span className="ml-2">&#9660;</span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex gap-4 my-4">
                  <FormField
                    control={form.control}
                    name="minStock"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Min Stock Alert</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter min stock"
                            value={
                              field.value === undefined || field.value === null
                                ? ""
                                : field.value
                            }
                            onChange={(e) =>
                              field.onChange(
                                e.target.value === ""
                                  ? undefined
                                  : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
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
            {isEditOrRead ? "Update Stock" : "Create Stock"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default memo(StockProfileForm);
