"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/services/auth";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setError(null);
    try {
      await register({
        email: String(formData.get("email") || ""),
        password: String(formData.get("password") || ""),
        first_name: String(formData.get("first_name") || ""),
        last_name: String(formData.get("last_name") || ""),
      });
      router.push("/profile");
    } catch {
      setError("Unable to create your account right now.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="first_name">First name</label>
          <input id="first_name" name="first_name" type="text" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="last_name">Last name</label>
          <input id="last_name" name="last_name" type="text" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30" />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required minLength={8} className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30" />
      </div>
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}
      <Button type="submit" className="w-full">Create account</Button>
    </form>
  );
}