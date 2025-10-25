import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-9 w-9 inline-flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";
