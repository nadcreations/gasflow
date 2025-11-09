"use client";
import React from "react";
import {
  Check,
  Building2,
  CreditCard,
  LayoutDashboard,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingProgressProps {
  currentStep: "profile" | "business" | "plans" | "dashboard";
  className?: string;
}

const steps = [
  {
    id: "profile",
    name: "Profile Setup",
    description: "Complete your personal information",
    icon: User,
  },
  {
    id: "business",
    name: "Business Setup",
    description: "Add your business details",
    icon: Building2,
  },
  {
    id: "plans",
    name: "Choose Plan",
    description: "Select your subscription plan",
    icon: CreditCard,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "Start managing your business",
    icon: LayoutDashboard,
  },
];

const OnboardingProgress: React.FC<OnboardingProgressProps> = ({
  currentStep,
  className,
}) => {
  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <div className={cn("w-full max-w-4xl mx-auto px-4", className)}>
      {/* Mobile Progress Bar */}
      <div className="md:hidden mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStepIndex + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(((currentStepIndex + 1) / steps.length) * 100)}%
            Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
            }}
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-gray-900">
            {steps[currentStepIndex]?.name}
          </h3>
          <p className="text-sm text-gray-600">
            {steps[currentStepIndex]?.description}
          </p>
        </div>
      </div>

      {/* Desktop Progress Steps */}
      <div className="hidden md:block">
        <nav aria-label="Onboarding Progress">
          <ol className="flex items-center justify-between">
            {steps.map((step, stepIndex) => {
              const isCompleted = stepIndex < currentStepIndex;
              const isCurrent = stepIndex === currentStepIndex;
              const Icon = step.icon;

              return (
                <li key={step.id} className="relative flex-1">
                  {stepIndex !== steps.length - 1 && (
                    <div
                      className={cn(
                        "absolute top-4 left-1/2 w-full h-0.5 -ml-px transition-colors duration-500",
                        isCompleted || (isCurrent && stepIndex > 0)
                          ? "bg-gradient-to-r from-blue-600 to-purple-600"
                          : "bg-gray-200"
                      )}
                      style={{
                        left: "calc(50% + 20px)",
                        width: "calc(100% - 40px)",
                      }}
                    />
                  )}

                  <div className="relative flex flex-col items-center group">
                    <div
                      className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300",
                        isCompleted
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white"
                          : isCurrent
                          ? "bg-blue-50 border-blue-600 text-blue-600"
                          : "bg-white border-gray-300 text-gray-400"
                      )}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>

                    <div className="mt-3 text-center max-w-32">
                      <p
                        className={cn(
                          "text-sm font-medium transition-colors duration-300",
                          isCompleted || isCurrent
                            ? "text-gray-900"
                            : "text-gray-500"
                        )}
                      >
                        {step.name}
                      </p>
                      <p
                        className={cn(
                          "text-xs mt-1 transition-colors duration-300",
                          isCompleted || isCurrent
                            ? "text-gray-600"
                            : "text-gray-400"
                        )}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default OnboardingProgress;
