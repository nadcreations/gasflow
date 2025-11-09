"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  showLabel?: boolean;
}

export function BackButton({
  href,
  label = "Back",
  className,
  variant = "ghost",
  showLabel = true,
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <Button
      variant={variant}
      onClick={handleBack}
      className={cn(
        "gap-2 hover:bg-gray-100 transition-colors",
        !showLabel && "w-10 h-10 p-0",
        className
      )}
      aria-label="Go back"
    >
      <ArrowLeft className="h-4 w-4" />
      {showLabel && <span className="hidden sm:inline">{label}</span>}
    </Button>
  );
}
