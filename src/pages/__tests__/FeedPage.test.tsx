import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import FeedPage from "../FeedPage";
import { renderWithRouter } from "../../test/utils";

vi.mock("../../state/AuthContext", () => {
  return {
    useAuth: () => ({
      isAuthenticated: false,
    }),
  };
});

describe("FeedPage", () => {
  it("opens auth modal when unauthenticated user publishes", () => {
    renderWithRouter(<FeedPage />);
    fireEvent.click(screen.getByRole("button", { name: "Publish" }));
    expect(
      screen.getByRole("heading", { name: /sign in to continue/i })
    ).toBeInTheDocument();
  });
});
