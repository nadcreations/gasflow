"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useContext, useEffect } from "react";
import { useSuppliersByBranchId } from "@/server/useSupplier";
import { updateStockSchema, UpdateStockTypes } from "@/types/stock.types";
import { BusinessContext } from "@/provider/BusinessProvider";
import { useBranchStore } from "@/stores/branchStore";
import SupplierFormDialog from "../Dialog/supplier-form-dialog";
import SupplierForm from "../supplier-form";
import { useUpdateStock, useStock } from "@/server/useStock";
import { useParams, useRouter } from "next/navigation";
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
import {
  Package,
  DollarSign,
  Truck,
  BarChart3,
  ArrowLeft,
  Save,
} from "lucide-react";

function EditStockPage() {
  const params = useParams();
  const router = useRouter();
  const stockId =
    typeof params?.stockId === "string"
      ? params.stockId
      : Array.isArray(params?.stockId)
      ? params.stockId[0]
      : "";

  const getBusiness = useContext(BusinessContext)?.business;
  const getBranchId = useBranchStore((state) => state.selectedBranchId);

  const { data: stock, isLoading: isStockLoading } = useStock(
    stockId,
    true,
    true
  );
  const { mutateAsync: updateStock, isPending: isUpdating } =
    useUpdateStock(true);

  const { data: supplierData } = useSuppliersByBranchId(
    getBranchId ?? "",
    true,
    !!stock?.id
  );

  const form = useForm({
    resolver: zodResolver(updateStockSchema),
    defaultValues: {
      id: "",
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
    if (stock && getBranchId && getBusiness && supplierData) {
      form.reset({
        id: stockId,
        productName: stock.productName ?? "",
        productType: (stock.productType ?? "cylinder") as
          | "cylinder"
          | "lpg_gas",
        cylinderSize: stock.cylinderSize ?? null,
        cylinderType: stock.cylinderType ?? null,
        unit: (stock.unit ?? "kg") as "kg" | "piece",
        supplierId: stock.supplierId ?? "",
        minStock: stock.minStock ?? 20,
        businessId: stock.businessId || getBusiness?.id || "",
        branchId: stock.branchId || getBranchId || "",
        gasWeight: stock.gasWeight ?? 0,
        quantity: stock.quantity ?? 0,
        costPrice: stock.costPrice ?? 0,
        sellingPrice: stock.sellingPrice ?? 0,
      });
    }
  }, [stock, getBranchId, getBusiness, supplierData, form, stockId]);

  const handleSubmit = async (data: UpdateStockTypes) => {
    try {
      await updateStock(data);
      router.push("/dashboard/stock");
    } catch (error) {
      // Error already handled by mutation
    }
  };

  if (isStockLoading || !supplierData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading stock data...</p>
        </div>
      </div>
    );
  }

  if (!stock) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Stock item not found
        </h2>
        <p className="text-muted-foreground mb-4">
          The requested stock item could not be found.
        </p>
        <Button
          onClick={() => router.push("/dashboard/stock")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Stock
        </Button>
      </div>
    );
  }

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
                          value={field.value || ""}
                          defaultValue={field.value || ""}
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
                          value={field.value || ""}
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
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
                          value={field.value || ""}
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
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
                              value={field.value ?? ""}
                              onValueChange={field.onChange}
                              defaultValue={field.value ?? ""}
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
                              value={field.value ?? ""}
                              onValueChange={field.onChange}
                              defaultValue={field.value ?? ""}
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
                        Current Quantity *
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

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/stock")}
              className="px-6 py-3 flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Stock
            </Button>
            <Button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              disabled={isUpdating}
            >
              {isUpdating ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  Updating...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Update Stock
                </div>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default memo(EditStockPage);
