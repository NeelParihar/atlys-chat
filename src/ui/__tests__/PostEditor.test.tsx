import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PostEditor from "../PostEditor";

describe("PostEditor", () => {
  it("publishes text when clicking send", () => {
    const onPublish = vi.fn();
    const onNotImplemented = vi.fn();
    render(
      <PostEditor
        placeholder="Type here"
        onPublish={onPublish}
        onNotImplemented={onNotImplemented}
      />
    );
    const textarea = screen.getByPlaceholderText("Type here");
    fireEvent.change(textarea, { target: { value: "New post" } });
    fireEvent.click(screen.getByRole("button", { name: "Publish" }));
    expect(onPublish).toHaveBeenCalledWith("New post");
  });
});
