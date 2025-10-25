import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import PostCard from "../PostCard";

describe("PostCard", () => {
  const post = {
    id: "1",
    author: { name: "Alice", avatarUrl: "https://example.com/a.png" },
    createdAt: new Date().toISOString(),
    content: "Hello world",
    moodEmoji: "😊",
  };

  it("renders content and author", () => {
    render(<PostCard post={post} onAction={() => {}} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("triggers onAction when like clicked", async () => {
    const onAction = vi.fn();
    const { container } = render(<PostCard post={post} onAction={onAction} />);
    await within(container).getByRole("button", { name: "Like" }).click();
    expect(onAction).toHaveBeenCalledWith("like");
  });
});
