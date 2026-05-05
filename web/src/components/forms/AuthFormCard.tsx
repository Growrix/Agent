"use client";

import { useState } from "react";
import { allContent } from "@/lib/content";

type AuthFormCardProps = {
  mode: "sign-in" | "sign-up";
};

export const AuthFormCard = ({ mode }: AuthFormCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const title = mode === "sign-in" ? allContent.auth.signInTitle : allContent.auth.signUpTitle;

  return (
    <section className="page-shell py-10">
      <div className="panel mx-auto max-w-xl p-6">
        <h1 className="heading-display text-4xl">{title}</h1>
        <form className="mt-6 space-y-4">
          <label className="block text-sm" htmlFor="auth-email">{allContent.auth.email}</label>
          <input
            className="focusable w-full rounded-xl border p-3"
            id="auth-email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
          <label className="block text-sm" htmlFor="auth-password">{allContent.auth.password}</label>
          <input
            className="focusable w-full rounded-xl border p-3"
            id="auth-password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
          {mode === "sign-up" ? (
            <>
              <label className="block text-sm" htmlFor="auth-confirm-password">{allContent.auth.confirmPassword}</label>
              <input
                className="focusable w-full rounded-xl border p-3"
                id="auth-confirm-password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                type="password"
                value={confirmPassword}
              />
            </>
          ) : null}
          <button className="focusable rounded-full bg-emerald-800 px-5 py-2 text-white" type="submit">
            {mode === "sign-in" ? allContent.nav.signIn : allContent.nav.signUp}
          </button>
        </form>
      </div>
    </section>
  );
};
