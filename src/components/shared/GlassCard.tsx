import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-lg bg-white/10 dark:bg-slate-900/10 border border-white/20 dark:border-slate-800/20 rounded-2xl p-6 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
