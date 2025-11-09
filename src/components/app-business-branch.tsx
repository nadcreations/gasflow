"use client";
import React, { useContext, useEffect } from "react";
import { Landmark } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useBranchesByBusinessId } from "@/server/usebranch";
import { useBranchStore } from "@/stores/branchStore";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { BusinessContext } from "@/provider/BusinessProvider";
import { Separator } from "./ui/separator";

export default function AppBusinessBranch() {
  const router = useRouter();

  const providerData = useContext(BusinessContext);
  const business = providerData?.business;

  const { data: branches, isLoading: branchLoading } = useBranchesByBusinessId(
    providerData?.business.id ?? "",
    true
  );

  const selectedBranchId = useBranchStore((state) => state.selectedBranchId);

  const setSelectedBranchId = useBranchStore(
    (state) => state.setSelectedBranchId
  );
  // const selectedBusinessId = useBranchStore(
  //   (state) => state.selectedBusinessId
  // );
  const setSelectedBusinessId = useBranchStore(
    (state) => state.setSelectedBusinessId
  );

  useEffect(() => {
    if (!selectedBranchId && (branches?.length ?? 0) > 0) {
      if (business) {
        setSelectedBusinessId(business.id);
      }
      setSelectedBranchId(branches![0].id); // Set first branch as default
    }
  }, [branches, selectedBranchId, setSelectedBranchId]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 my-5 md:mt-3">
      {/* Left: Landmark Icon and Business Details */}
      <div className="flex items-center gap-4">
        <Landmark size={30} className="text-primary" />
        <div>
          <div className="font-semibold text-base">{business?.name}</div>
          <div className="text-xs text-muted-foreground hidden md:block">
            {business?.address}
          </div>
          {/* <div className="text-sm text-muted-foreground">{business.phone}</div> */}
        </div>
      </div>
      <Separator
        orientation="horizontal"
        className="my-4 md:hidden data-[orientation=vertical]:h-4"
      />
      {(branches ?? []).length > 0 ? (
        <div className="flex items-center gap-2 mt-2">
          <label htmlFor="branch-switcher" className="font-medium text-sm">
            Branch:
          </label>
          <Select
            value={selectedBranchId?.toString() ?? ""}
            onValueChange={(val) => setSelectedBranchId(val.toString())}
          >
            <SelectTrigger id="branch-switcher" className="w-60 h-9">
              <SelectValue placeholder="Select branch" />
            </SelectTrigger>
            <SelectContent>
              {branches?.map((branch) => (
                <SelectItem key={branch.id} value={branch.id.toString()}>
                  <div className="flex flex-row items-center gap-2">
                    <Landmark size={18} className="text-primary" />
                    <span className="font-medium text-sm">{branch.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <Button
          type="button"
          onClick={() => {
            // Replace with your actual navigation or modal logic
            router.push("/dashboard/branch");
          }}
        >
          Setup your branch
        </Button>
      )}
    </div>
  );
}
