import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="ghost" size="lg">
        Ghost
      </Button>
    );
    const btn = screen.getByRole("button", { name: /ghost/i });
    expect(btn.className).toMatch(/hover:bg-slate-100/);
    expect(btn.className).toMatch(/px-4/);
  });
});
