"use client";

import { useEffect, useState } from "react";

import { getCycles } from "@/services/cycles";

export default function CyclePage() {
  const [cycles, setCycles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCycles() {
      try {
        const token = localStorage.getItem("access");

        if (!token) return;

        const data = await getCycles(token);
        setCycles(data);

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    }

    fetchCycles();
  }, []);


  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <div className="mx-auto max-w-4xl space-y-6">

        <h1 className="text-3xl font-semibold text-slate-900">
          🌙 Cycle Tracker
        </h1>


        {loading ? (
          <div className="rounded-3xl bg-white p-6">
            Loading cycle data...
          </div>
        ) : cycles.length === 0 ? (

          <div className="rounded-3xl bg-white p-6">
            No cycle added yet.
          </div>

        ) : (

          cycles.map((cycle) => (
            <div
              key={cycle.id}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-medium">
                Current Cycle
              </h2>

              <p className="mt-2 text-slate-600">
                Period started: {cycle.last_period_start}
              </p>

              <p className="text-slate-600">
                Cycle length: {cycle.cycle_length_days} days
              </p>

              <p className="text-slate-600">
                Period length: {cycle.period_length_days} days
              </p>

            </div>
          ))

        )}

      </div>
    </main>
  );
}