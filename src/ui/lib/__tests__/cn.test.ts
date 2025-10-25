import { describe, it, expect } from "vitest";
import { cn } from "../cn";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", false && "b", undefined, "c")).toBe("a c");
  });
});
