"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type AuthMode = "sign-in" | "sign-up";

type AuthModalContextValue = {
  isOpen: boolean;
  mode: AuthMode;
  openSignIn: () => void;
  openSignUp: () => void;
  close: () => void;
  switchMode: () => void;
};

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("sign-in");

  const openSignIn = useCallback(() => {
    setMode("sign-in");
    setIsOpen(true);
  }, []);

  const openSignUp = useCallback(() => {
    setMode("sign-up");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const switchMode = useCallback(() => {
    setMode((prev) => (prev === "sign-in" ? "sign-up" : "sign-in"));
  }, []);

  const value = useMemo(
    () => ({ isOpen, mode, openSignIn, openSignUp, close, switchMode }),
    [isOpen, mode, openSignIn, openSignUp, close, switchMode]
  );

  return <AuthModalContext.Provider value={value}>{children}</AuthModalContext.Provider>;
}

export function useAuthModal(): AuthModalContextValue {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return context;
}



