"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BackButton } from "./back-button";

interface ResponsivePageContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showBackButton?: boolean;
  backButtonHref?: string;
  className?: string;
  containerClassName?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function ResponsivePageContainer({
  children,
  title,
  description,
  showBackButton = false,
  backButtonHref,
  className,
  containerClassName,
  maxWidth = "full",
}: ResponsivePageContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-green-50",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8",
          maxWidthClasses[maxWidth],
          containerClassName
        )}
      >
        {/* Header Section with Back Button */}
        {(showBackButton || title) && (
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              {showBackButton && <BackButton href={backButtonHref} />}
              {title && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    {title}
                  </h1>
                  {description && (
                    <p className="text-sm sm:text-base text-gray-600 mt-1">
                      {description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Content - Scrollable */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
