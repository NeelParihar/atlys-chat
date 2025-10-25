import { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "../state/AuthContext";
import { IconButton } from "./base/IconButton";
import { Card } from "./base/Card";
import { Button } from "./base/Button";

export default function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password123");
  if (!open) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "signin") await signIn(email, password);
    else await signUp(email, password);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/20 p-4">
      <Card className="w-full max-w-md p-5 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {mode === "signin" ? "Sign in" : "Sign up"}
          </h2>
          <IconButton onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </IconButton>
        </div>
        <form className="space-y-4" onSubmit={submit}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <Button className="w-full" type="submit">
            Continue
          </Button>
        </form>
        <p className="text-sm text-slate-600 mt-4 text-center">
          {mode === "signin" ? (
            <>
              No account?{" "}
              <button
                className="text-indigo-600 hover:underline"
                onClick={() => setMode("signup")}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Have an account?{" "}
              <button
                className="text-indigo-600 hover:underline"
                onClick={() => setMode("signin")}
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </Card>
    </div>
  );
}
