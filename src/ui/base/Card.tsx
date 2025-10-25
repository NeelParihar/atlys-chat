import { forwardRef, createElement } from "react";
import type { HTMLAttributes, ElementType } from "react";
import { cn } from "../lib/cn";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Set to true to disable the default appear animation */
  disableAppearAnimation?: boolean;
}

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    { as: Component = "div", className, disableAppearAnimation, ...props },
    ref
  ) => {
    return createElement(Component, {
      ref,
      className: cn(
        "bg-zinc-100 rounded-2xl",
        !disableAppearAnimation && "animate-fade-in-up",
        className
      ),
      ...props,
    });
  }
);

Card.displayName = "Card";
