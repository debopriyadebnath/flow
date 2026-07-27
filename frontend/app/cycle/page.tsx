"use client";

import { useEffect, useState } from "react";

import {
  createCycle,
  getCycles,
} from "@/services/cycles";


export default function CyclesPage() {


  const [lastPeriodStart, setLastPeriodStart] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  const [cycles, setCycles] = useState<any[]>([]);

  const [message, setMessage] = useState("");



  async function loadCycles(){

    const token = localStorage.getItem("access");

    if(!token) return;


    const data = await getCycles(token);

    setCycles(data);

  }



  useEffect(()=>{

    loadCycles();

  },[]);





  async function handleSubmit(
    e: React.FormEvent
  ){

    e.preventDefault();


    const token = localStorage.getItem("access");

    if(!token) return;



    try{

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


      setLastPeriodStart("");
      
      loadCycles();


    }catch(error){

      console.log(error);

      setMessage(
        "Something went wrong"
      );

    }

  }





  return (

    <main className="
      min-h-screen
      bg-pink-50
      px-6
      py-10
    ">


      <div className="
        mx-auto
        max-w-3xl
        space-y-8
      ">


        <div className="
          rounded-[2rem]
          bg-white
          p-8
          shadow
        ">


          <h1 className="
            text-4xl
            font-semibold
            text-slate-900
          ">
            Track your cycle 🌸
          </h1>


          <p className="
            mt-2
            text-slate-600
          ">
            Add your period details to get personalised insights.
          </p>




          <form
            onSubmit={handleSubmit}
            className="
              mt-8
              space-y-5
            "
          >



            <div>

              <label className="
                font-medium
              ">
                Last period start date
              </label>


              <input

                type="date"

                value={lastPeriodStart}

                onChange={(e)=>
                  setLastPeriodStart(e.target.value)
                }

                required

                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  p-3
                "

              />

            </div>





            <div>

              <label className="
                font-medium
              ">
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

                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  p-3
                "

              />

            </div>





            <div>

              <label className="
                font-medium
              ">
                Period length (days)
              </label>


              <input

                type="number"

                value={periodLength}

                onChange={(e)=>
                  setPeriodLength(
                    Number(e.target.value)
                  )
                }

                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  p-3
                "

              />

            </div>




            <button
              className="
                w-full
                rounded-2xl
                bg-pink-500
                py-3
                font-semibold
                text-white
              "
            >
              Save Cycle
            </button>



          </form>



          {message && (

            <p className="
              mt-4
              text-pink-600
            ">
              {message}
            </p>

          )}



        </div>





        <div className="
          rounded-[2rem]
          bg-white
          p-8
          shadow
        ">


          <h2 className="
            text-2xl
            font-semibold
          ">
            Your cycle history 💗
          </h2>



          <div className="
            mt-5
            space-y-3
          ">


            {cycles.length === 0 ? (

              <p className="text-slate-500">
                No cycles added yet.
              </p>

            ) : (


              cycles.map((cycle)=>(

                <div
                  key={cycle.id}
                  className="
                    rounded-2xl
                    bg-pink-50
                    p-4
                  "
                >

                  <p>
                    Start: {cycle.last_period_start}
                  </p>

                  <p>
                    Cycle length: {cycle.cycle_length_days} days
                  </p>

                  <p>
                    Period length: {cycle.period_length_days} days
                  </p>


                </div>

              ))

            )}


          </div>



        </div>



      </div>


    </main>

  );

}