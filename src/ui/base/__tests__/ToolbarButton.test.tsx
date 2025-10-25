import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolbarButton } from "../ToolbarButton";

describe("ToolbarButton", () => {
  it("renders with aria-label", () => {
    render(
      <ToolbarButton aria-label="Bold">
        <span>B</span>
      </ToolbarButton>
    );
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
  });
});
