import { useState } from "react";
import { LogIn } from "lucide-react";
import { useAuth } from "../state/AuthContext";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  if (!open) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (mode === "signin") {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      onClose();
    } catch {
      // Show a concise error message for invalid credentials
      setError("Email or password is incorrect");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mx-auto w-full max-w-lg">
        <Card as="section" className="p-2  rounded-[28px]">
          <div className=" rounded-[28px] bg-white p-8  sm:p-14">
            <div className="flex justify-center">
              <div className="h-12 w-12 rounded-full bg-zinc-100 ring-1 ring-black/5 grid place-items-center">
                <LogIn className="h-6 w-6 text-slate-900" />
              </div>
            </div>

            <div className="text-center mt-2 mb-8">
              <h2 className="text-base sm:text-xl font-bold tracking-tight">
                {mode === "signin"
                  ? "Sign in to continue"
                  : "Create an account to continue"}
              </h2>
              <p className="mt-2 text-slate-500 text-sm">
                {mode === "signin"
                  ? "Sign in to access all the features on this app"
                  : "Create an account to access all the features on this app"}
              </p>
            </div>

            <form className="space-y-6" onSubmit={submit}>
              {error && (
                <div className="rounded-lg bg-red-50 text-red-700 text-sm px-3 py-2">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-base font-semibold mb-2">
                  Email or username
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email or username"
                  className={`w-full rounded-xl bg-zinc-100 px-4 py-3 text-slate-700 placeholder:text-slate-400 outline-none ${
                    error ? "ring-2 ring-red-400" : ""
                  }`}
                />
              </div>
              <div>
                <label className="block text-base font-semibold mb-2">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className={`w-full rounded-xl bg-zinc-100 px-4 py-3 text-slate-700 placeholder:text-slate-400 outline-none ${
                    error ? "ring-2 ring-red-400" : ""
                  }`}
                />
              </div>
              {mode === "signup" && (
                <div>
                  <label className="block text-base font-semibold mb-2">
                    Repeat password
                  </label>
                  <input
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    type="password"
                    placeholder="Enter your password again"
                    className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-slate-700 placeholder:text-slate-400 outline-none"
                  />
                </div>
              )}
              <Button
                className="w-full rounded-xl text-base py-3 bg-indigo-600 hover:bg-indigo-600/90"
                type="submit"
              >
                {mode === "signin" ? "Sign In" : "Sign Up"}
              </Button>
            </form>
          </div>

          <p className="text-slate-600 py-4 text-center">
            {mode === "signin" ? (
              <>
                <span className="mr-2">Do not have an account?</span>
                <button
                  className="text-indigo-600 font-semibold"
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <span className="mr-2">Already have an account?</span>
                <button
                  className="text-indigo-600 font-semibold"
                  onClick={() => setMode("signin")}
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </Card>
      </div>
    </div>
  );
}
