import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  userEmail: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const DEMO_USERS: Record<string, string> = {
  "demo@example.com": "password123",
  "test@user.com": "testpass",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("auth:user");
    if (saved) setUserEmail(saved);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: !!userEmail,
      userEmail,
      async signIn(email: string, password: string) {
        const isDemo = DEMO_USERS[email] === password;
        if (!isDemo) throw new Error("invalid");
        localStorage.setItem("auth:user", email);
        setUserEmail(email);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async signUp(email: string, _password: string) {
        // In-memory fake signup; accept any email and store
        localStorage.setItem("auth:user", email);
        setUserEmail(email);
      },
      signOut() {
        localStorage.removeItem("auth:user");
        setUserEmail(null);
      },
    }),
    [userEmail]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
