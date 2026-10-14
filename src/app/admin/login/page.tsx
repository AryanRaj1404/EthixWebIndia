"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Invalid credentials");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[80vh] bg-[radial-gradient(circle_at_top,_rgba(153,27,27,0.10),_transparent_30%),linear-gradient(180deg,#fff8f2_0%,#f7f4ef_100%)] px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#991b1b]/15 bg-white px-4 py-2 text-sm font-medium text-[#991b1b] shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Protected admin access
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Admin Login
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Sign in to view and manage enquiry leads from the Ethixweb website.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-black">Secure access</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Only the configured admin email and password can enter the dashboard.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-black">Lead control</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Update statuses, review enquiries, and keep responses organized.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
          <div className="rounded-[1.5rem] bg-[#111111] p-6 text-white">
            <p className="text-sm text-white/60">Ethixweb admin</p>
            <h2 className="mt-2 text-2xl font-semibold">
              Sign in to continue
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Use the admin credentials from your .env file.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <input
                  className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#991b1b]"
                  placeholder="admin@ethixweb.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <input
                  className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#991b1b]"
                  placeholder="••••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>

            {error && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#991b1b] px-4 py-3 font-semibold text-white transition hover:bg-[#7f1d1d] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}