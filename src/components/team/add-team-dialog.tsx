"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { createTeamSchema, CreateTeamInput } from "@/types/team.types";
import { useCreateTeam } from "@/server/useTeam";
import { useCurrentUserProfile } from "@/server/useProfile";
import { useBranchStore } from "@/stores/branchStore";
import { useBusinessByProfileId } from "@/server/usebusiness";

interface AddTeamDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddTeamDialog({ open, onOpenChange }: AddTeamDialogProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const { data: ProfileUser } = useCurrentUserProfile();
  const { data: currentBusiness } = useBusinessByProfileId(
    ProfileUser?.id || "",
    !!ProfileUser
  );
  const selectedBranchId = useBranchStore((state) => state.selectedBranchId);

  const createTeamMutation = useCreateTeam(!!ProfileUser);

  const form = useForm<CreateTeamInput>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "Team",
      businessId: currentBusiness?.id || "",
      branchId: selectedBranchId || "",
      active: true,
    },
  });

  React.useEffect(() => {
    if (currentBusiness?.id && selectedBranchId) {
      form.setValue("businessId", currentBusiness.id);
      form.setValue("branchId", selectedBranchId);
    }
  }, [currentBusiness?.id, selectedBranchId, form]);

  React.useEffect(() => {
    if (open) {
      form.reset({
        name: "",
        email: "",
        password: "",
        role: "Team",
        businessId: currentBusiness?.id || "",
        branchId: selectedBranchId || "",
        active: true,
      });
    }
  }, [open, currentBusiness?.id, selectedBranchId, form]);

  const onSubmit = (data: CreateTeamInput) => {
    createTeamMutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        onOpenChange(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-blue-600" />
            Add Team Member
          </DialogTitle>
          <DialogDescription>
            Add a new team member who will have access to the Android app.
            They'll be able to log in using these credentials.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter team member's full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be 8-20 characters long
                  </p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="active"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Active Status</FormLabel>
                    <p className="text-sm text-muted-foreground">
                      Team member can access the Android app when active
                    </p>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={createTeamMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={createTeamMutation.isPending}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {createTeamMutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Adding...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Add Member
                  </div>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
