import React from "react";

import type { ReactElement } from "react";

export interface StepperProps {
  activeStep: number;
  children: ReactElement<StepProps>[] | ReactElement<StepProps>;
  className?: string;
}

export interface StepProps {
  completed?: boolean;
  active?: boolean;
  children: React.ReactNode;
  index?: number;
  isLast?: boolean;
}

export interface StepLabelProps {
  children: React.ReactNode;
}

export const Stepper: React.FC<StepperProps> = ({
  activeStep,
  children,
  className,
}) => {
  const steps = React.Children.toArray(children) as ReactElement<StepProps>[];

  return (
    <div className={className}>
      <ol className="flex items-center w-full">
        {steps.map((child, idx) =>
          React.cloneElement(child, {
            completed: idx < activeStep,
            active: idx === activeStep,
            index: idx,
            isLast: idx === steps.length - 1,
            key: idx,
          })
        )}
      </ol>
    </div>
  );
};

export const Step: React.FC<StepProps> = ({
  completed,
  active,
  children,
  index,
  isLast,
}) => (
  <li className="flex items-center w-full relative">
    {/* Step circle */}
    <div
      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
                ${
                  completed
                    ? "border-green-600 bg-green-100 text-green-600"
                    : ""
                }
                ${
                  active
                    ? "border-purple-600 bg-purple-100 text-purple-600"
                    : ""
                }
                ${
                  !completed && !active
                    ? "border-gray-300 bg-white text-gray-400"
                    : ""
                }
                font-semibold z-10
            `}
    >
      {index !== undefined ? index + 1 : ""}
    </div>
    {/* Step label */}
    <div className="ml-2">{children}</div>
    {/* Line/arrow between steps */}
    {!isLast && (
      <div
        className={`flex-1 h-1 mx-2 
                    ${
                      completed
                        ? "bg-green-600"
                        : active
                        ? "bg-purple-600"
                        : "bg-gray-300"
                    }
                    rounded
                `}
      />
    )}
  </li>
);

export const StepLabel: React.FC<StepLabelProps> = ({ children }) => (
  <span className="text-sm font-medium">{children}</span>
);
