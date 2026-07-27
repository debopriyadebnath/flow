"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/services/auth";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setError(null);

    try {
      const response = await register({
        email: String(formData.get("email") || ""),
        password: String(formData.get("password") || ""),
        first_name: String(formData.get("first_name") || ""),
        last_name: String(formData.get("last_name") || ""),
      });


      // Save JWT tokens
      localStorage.setItem(
        "access",
        response.tokens.access
      );

      localStorage.setItem(
        "refresh",
        response.tokens.refresh
      );


      // Save user details
      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );


      // Update auth context
      setUser(response.user);


      router.push("/dashboard");


    } catch (caughtError) {

      if (axios.isAxiosError(caughtError)) {

        const responseData = caughtError.response?.data;


        const serverMessage =
          typeof responseData === "object" &&
          responseData !== null &&
          "message" in responseData
            ? String(responseData.message)

            : typeof responseData === "object" &&
              responseData !== null &&
              "detail" in responseData
              ? String(responseData.detail)

              : null;


        setError(
          serverMessage ||
          "Unable to create your account right now."
        );

        return;
      }


      setError(
        "Unable to create your account right now."
      );
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur"
    >

      <div className="grid gap-4 md:grid-cols-2">

        <div>
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            First name
          </label>

          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30"
          />
        </div>


        <div>
          <label
            htmlFor="last_name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Last name
          </label>

          <input
            id="last_name"
            name="last_name"
            type="text"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30"
          />
        </div>

      </div>


      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
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
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/30"
        />
      </div>


      {error && (
        <p className="text-sm text-rose-600">
          {error}
        </p>
      )}


      <Button type="submit" className="w-full">
        Create account
      </Button>

    </form>
  );
}