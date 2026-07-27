"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setError(null);

    try {
      const response = await login({
        email: String(formData.get("email") || ""),
        password: String(formData.get("password") || ""),
      });

      if (!response?.tokens) {
        throw new Error("Invalid response from server");
      }

      localStorage.setItem("access", response.tokens.access);
      localStorage.setItem("refresh", response.tokens.refresh);

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      router.push("/dashboard");

    } catch {
      setError("Unable to sign in. Check your email and password.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur"
    >
      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="email"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30"
        />
      </div>


      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="password"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30"
        />
      </div>


      {error ? (
        <p className="text-sm text-rose-600">
          {error}
        </p>
      ) : null}


      <Button type="submit" className="w-full">
        Sign in
      </Button>

    </form>
  );
}