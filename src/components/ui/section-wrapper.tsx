import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
}
