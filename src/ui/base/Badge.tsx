import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-slate-100 px-2 text-xs font-medium text-slate-600",
        className
      )}
      {...props}
    />
  );
}
