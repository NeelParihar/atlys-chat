import { forwardRef, createElement } from "react";
import type { HTMLAttributes, ElementType } from "react";
import { cn } from "../lib/cn";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ as: Component = "div", className, ...props }, ref) => {
    return createElement(Component, {
      ref,
      className: cn("bg-zinc-50 rounded-xl", className),
      ...props,
    });
  }
);

Card.displayName = "Card";
