import { LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../state/AuthContext";
import { IconButton } from "./base/IconButton";

export default function Navbar({
  onLoginClick,
}: {
  onLoginClick?: () => void;
}) {
  const { isAuthenticated, userEmail, signOut } = useAuth();
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur">
      <div className="mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <div className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center">
            <span className="sr-only">Logo</span>
            <div className="h-2 w-2 rounded-full bg-slate-900" />
          </div>
          <span>foo-rum</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          {isAuthenticated ? (
            <>
              <span className="hidden sm:block text-slate-600 mr-2">
                {userEmail}
              </span>
              <IconButton onClick={() => signOut()} aria-label="Sign out">
                <LogOut className="h-5 w-5" />
              </IconButton>
            </>
          ) : onLoginClick ? (
            <button
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
              onClick={onLoginClick}
              aria-label="Login"
            >
              <LogIn className="h-5 w-5" />
              <span className="hidden sm:block">Login</span>
            </button>
          ) : (
            <Link
              to="/signin"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
            >
              <LogIn className="h-5 w-5" />
              <span className="hidden sm:block">Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
