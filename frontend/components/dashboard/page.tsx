"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);


  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-10">

      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-white p-8 shadow-sm border">

          <p className="text-sm uppercase tracking-widest text-pink-500">
            HERmony
          </p>


          <h1 className="mt-3 text-4xl font-semibold text-slate-900">
            👋 Hello, {user?.first_name || "there"}
          </h1>


          <p className="mt-3 text-slate-600">
            Welcome back! Here is your wellness space.
          </p>

        </div>


        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-sm border">
            <h2 className="font-semibold">
              🌙 Cycle Tracker
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Track your period and symptoms.
            </p>
          </div>


          <div className="rounded-3xl bg-white p-6 shadow-sm border">
            <h2 className="font-semibold">
              💗 Mood
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Log your daily emotions.
            </p>
          </div>


          <div className="rounded-3xl bg-white p-6 shadow-sm border">
            <h2 className="font-semibold">
              📖 Journal
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Write your private thoughts.
            </p>
          </div>

        </div>


      </div>

    </main>
  );
}