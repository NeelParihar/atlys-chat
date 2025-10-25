import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "danger";
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-9 w-9 inline-flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors",
          variant === "ghost" && "hover:bg-transparent",
          variant === "primary" &&
            " text-slate-700 hover:bg-zinc-100",
          variant === "danger" && "bg-red-600 text-white hover:bg-red-700",
          className
        )}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";
