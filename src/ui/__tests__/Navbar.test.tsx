import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { renderWithRouter } from "../../test/utils";

vi.mock("../../state/AuthContext", () => {
  return {
    useAuth: () => ({
      isAuthenticated: false,
      userEmail: null,
      signOut: vi.fn(),
    }),
  };
});

describe("Navbar", () => {
  it("shows Login button when not authenticated", () => {
    renderWithRouter(<Navbar onLoginClick={() => {}} />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
