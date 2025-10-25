import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { Card } from "../Card";

describe("Card", () => {
  it("renders as div by default", () => {
    const { container } = render(<Card>Content</Card>);
    expect(within(container).getByText("Content").closest("div")).toBeTruthy();
  });

  it("supports custom element via as prop", () => {
    const { container } = render(<Card as="section">Content</Card>);
    expect(
      within(container).getByText("Content").closest("section")
    ).toBeTruthy();
  });
});
