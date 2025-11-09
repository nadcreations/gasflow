import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "default" | "lg";
  asChild?: boolean;
}

export function GradientButton({
  children,
  className,
  onClick,
  size = "default",
  asChild,
}: GradientButtonProps) {
  return (
    <Button
      onClick={onClick}
      size={size}
      asChild={asChild}
      className={cn(
        "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white border-0",
        className
      )}
    >
      {children}
    </Button>
  );
}
