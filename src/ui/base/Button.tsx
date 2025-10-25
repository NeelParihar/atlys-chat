import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors";

    const variantClasses: Record<ButtonVariant, string> = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      ghost: "hover:bg-slate-100 text-slate-700",
    };

    const sizeClasses: Record<ButtonSize, string> = {
      sm: "px-2.5 py-1.5",
      md: "px-3 py-2",
      lg: "px-4 py-2.5 text-base",
      icon: "h-9 w-9 rounded-full p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(
          base,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
