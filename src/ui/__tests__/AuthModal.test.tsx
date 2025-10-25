import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthModal from "../AuthModal";

let mockSignIn: ReturnType<typeof vi.fn>;
let mockSignUp: ReturnType<typeof vi.fn>;

vi.mock("../../state/AuthContext", () => {
  return {
    useAuth: () => ({
      signIn: mockSignIn,
      signUp: mockSignUp,
    }),
  };
});

beforeEach(() => {
  mockSignIn = vi.fn().mockResolvedValue(undefined);
  mockSignUp = vi.fn().mockResolvedValue(undefined);
  vi.clearAllMocks();
});

describe("AuthModal", () => {
  it("renders when open and calls onClose after successful sign in", async () => {
    const onClose = vi.fn();
    render(<AuthModal open onClose={onClose} />);

    fireEvent.change(screen.getByPlaceholderText(/email or username/i), {
      target: { value: "demo@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    // allow promises to resolve
    await Promise.resolve();
    expect(onClose).toHaveBeenCalled();
  });

  it("stays open and shows signup UI when switching to Sign Up", () => {
    const onClose = vi.fn();
    const { container } = render(<AuthModal open onClose={onClose} />);
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    // Heading updates
    expect(
      screen.getByRole("heading", { name: /create an account to continue/i })
    ).toBeInTheDocument();

    // Repeat password field appears
    expect(
      screen.getByPlaceholderText(/enter your password again/i)
    ).toBeInTheDocument();

    // Submit button label updates
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();

    // Clicking the backdrop closes the modal
    fireEvent.click(container.firstChild as HTMLElement);
    expect(onClose).toHaveBeenCalled();
  });

  it("does not call onClose on invalid credentials (signIn rejects)", async () => {
    mockSignIn.mockRejectedValueOnce(new Error("invalid"));
    const onClose = vi.fn();
    render(<AuthModal open onClose={onClose} />);

    fireEvent.change(screen.getByPlaceholderText(/email or username/i), {
      target: { value: "bad@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "wrong" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    await Promise.resolve();
    expect(onClose).not.toHaveBeenCalled();
  });

  it("does not render when closed", () => {
    const { container } = render(<AuthModal open={false} onClose={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });
});
