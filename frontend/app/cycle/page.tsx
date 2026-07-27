"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createCycle } from "@/services/cycles";


export default function CyclePage() {

  const router = useRouter();

  const [lastPeriodStart, setLastPeriodStart] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");



  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    const token = localStorage.getItem("access");


    if (!token) {
      setMessage("Please login again");
      return;
    }


    try {

      setLoading(true);


      await createCycle(
        token,
        {
          last_period_start: lastPeriodStart,
          cycle_length_days: cycleLength,
          period_length_days: periodLength,
          is_active: true,
        }
      );


      setMessage(
        "Cycle saved successfully 🌸"
      );


      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);



    } catch (error) {

      console.log(error);

      setMessage(
        "Unable to save cycle"
      );


    } finally {

      setLoading(false);

    }

  }



  return (

    <main className="min-h-screen bg-pink-50 px-6 py-10">


      <div className="mx-auto max-w-xl">


        <div className="rounded-3xl bg-white p-8 shadow">


          <h1 className="text-3xl font-semibold">
            Track your cycle 🌸
          </h1>


          <p className="mt-2 text-slate-600">
            Add your period details to get personalized insights.
          </p>



          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >


            <div>

              <label className="mb-2 block font-medium">
                Last period start date
              </label>


              <input
                type="date"
                value={lastPeriodStart}
                onChange={(e)=>
                  setLastPeriodStart(e.target.value)
                }
                required
                className="w-full rounded-2xl border px-4 py-3"
              />

            </div>




            <div>

              <label className="mb-2 block font-medium">
                Average cycle length (days)
              </label>


              <input
                type="number"
                value={cycleLength}
                onChange={(e)=>
                  setCycleLength(
                    Number(e.target.value)
                  )
                }
                className="w-full rounded-2xl border px-4 py-3"
              />

            </div>




            <div>

              <label className="mb-2 block font-medium">
                Period duration (days)
              </label>


              <input
                type="number"
                value={periodLength}
                onChange={(e)=>
                  setPeriodLength(
                    Number(e.target.value)
                  )
                }
                className="w-full rounded-2xl border px-4 py-3"
              />

            </div>




            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-pink-500 py-3 text-white font-medium"
            >

              {loading
                ? "Saving..."
                : "Save Cycle"
              }

            </button>



            {
              message && (
                <p className="text-center text-sm">
                  {message}
                </p>
              )
            }


          </form>


        </div>


      </div>


    </main>

  );

}