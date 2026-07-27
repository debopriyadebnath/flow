"use client";

import { useEffect, useState } from "react";

import {
  createMood,
  getMoods,
} from "@/services/mood";


export default function MoodPage() {

  const [mood, setMood] = useState("calm");
  const [note, setNote] = useState("");
  const [energy, setEnergy] = useState(5);

  const [moods, setMoods] = useState<any[]>([]);


  async function loadMoods() {

    const token = localStorage.getItem("access");

    if (!token) return;


    const data = await getMoods(token);

    setMoods(data);

  }



  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    const token = localStorage.getItem("access");

    if (!token) return;


    await createMood(
      token,
      {
        mood,
        note,
        energy_level: energy,
      }
    );


    setNote("");
    setEnergy(5);


    loadMoods();

  }



  useEffect(() => {

    loadMoods();

  }, []);



  return (

    <main className="min-h-screen bg-pink-50 p-6">


      <div className="mx-auto max-w-2xl space-y-6">


        <div className="rounded-3xl bg-white p-8 shadow">


          <h1 className="text-3xl font-semibold">
            How are you feeling today? 🌸
          </h1>



          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >


            <select
              value={mood}
              onChange={(e)=>setMood(e.target.value)}
              className="w-full rounded-xl border p-3"
            >

              <option value="happy">
                😊 Happy
              </option>

              <option value="calm">
                🌸 Calm
              </option>

              <option value="sad">
                😔 Sad
              </option>

              <option value="anxious">
                😰 Anxious
              </option>

              <option value="angry">
                😡 Angry
              </option>

              <option value="tired">
                😴 Tired
              </option>

            </select>



            <textarea
              placeholder="Write something about your day..."
              value={note}
              onChange={(e)=>setNote(e.target.value)}
              className="w-full rounded-xl border p-3"
            />



            <div>

              <label>
                Energy level: {energy}/10
              </label>

              <input
                type="range"
                min="1"
                max="10"
                value={energy}
                onChange={(e)=>setEnergy(Number(e.target.value))}
                className="w-full"
              />

            </div>



            <button
              className="w-full rounded-xl bg-pink-500 py-3 text-white"
            >
              Save Mood
            </button>


          </form>


        </div>




        <div className="rounded-3xl bg-white p-8 shadow">


          <h2 className="text-xl font-semibold">
            Previous moods 💗
          </h2>



          <div className="mt-4 space-y-3">


            {moods.map((item)=>(
              
              <div
                key={item.id}
                className="rounded-xl bg-pink-50 p-4"
              >

                <p className="font-medium">
                  {item.mood}
                </p>

                <p>
                  Energy: {item.energy_level}/10
                </p>

                <p className="text-sm text-gray-600">
                  {item.note}
                </p>

              </div>

            ))}


          </div>


        </div>


      </div>


    </main>

  );

}