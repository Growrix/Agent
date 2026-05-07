import Link from "next/link";

export default function SignInPage() {
  return (
    <main id="main-content" className="mx-auto flex min-h-[70svh] w-full max-w-md items-center px-4 py-16">
      <div className="w-full rounded-2xl border border-theme bg-surface-raised p-6">
        <h1 className="text-3xl font-semibold text-foreground">Sign In</h1>
        <form className="mt-4 space-y-3">
          <input className="w-full rounded-xl border border-theme px-4 py-3" placeholder="email@example.com" />
          <input className="w-full rounded-xl border border-theme px-4 py-3" type="password" placeholder="Password" />
          <button type="button" className="w-full rounded-xl bg-primary-600 px-4 py-3 text-theme-inverse">Sign In</button>
        </form>
        <Link href="/sign-up" className="mt-3 inline-flex text-sm text-primary-600 underline-offset-4 hover:underline">Create an account</Link>
      </div>
    </main>
  );
}



