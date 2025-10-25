import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconButton } from "../IconButton";

describe("IconButton", () => {
  it("calls onClick", async () => {
    const onClick = vi.fn();
    render(
      <IconButton aria-label="Icon" onClick={onClick}>
        <span>*</span>
      </IconButton>
    );
    await screen.getByRole("button", { name: "Icon" }).click();
    expect(onClick).toHaveBeenCalled();
  });
});
