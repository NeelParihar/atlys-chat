import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type ToolbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-8 w-8 inline-flex items-center justify-center rounded-md text-slate-600 hover:bg-white hover:shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
);

ToolbarButton.displayName = "ToolbarButton";
