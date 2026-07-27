"use client";

import { useEffect, useState } from "react";

import {
  HeartPulse,
  Sparkles,
  Droplets,
  Moon,
  Dumbbell,
} from "lucide-react";


import {
  getPCOSProfile,
  updatePCOSProfile,
  getSymptoms,
  addSymptom,
  deleteSymptom,
} from "@/services/pcos";



export default function HealthPage() {


  const [pcosEnabled, setPcosEnabled] = useState(false);

  const [loading, setLoading] = useState(true);

  const [symptoms, setSymptoms] = useState<any[]>([]);
  const [wellnessScore, setWellnessScore] = useState(0);


  function normalizeSymptoms(value: unknown) {

    if (Array.isArray(value)) {

      return value;

    }


    if (
      value &&
      typeof value === "object"
    ) {

      const response = value as {
        results?: unknown;
        symptoms?: unknown;
      };


      if (Array.isArray(response.results)) {

        return response.results;

      }


      if (Array.isArray(response.symptoms)) {

        return response.symptoms;

      }

    }


    return [];

  }



  const symptomList = [
    "Irregular Periods",
    "Acne",
    "Hair Growth",
    "Hair Loss",
    "Weight Changes",
    "Mood Changes",
  ];





  useEffect(() => {

    async function loadPCOS() {

      const token = localStorage.getItem("access");


      if(token){

        try{

          const data = await getPCOSProfile(token);

          setPcosEnabled(data.is_enabled);
          setWellnessScore(data.wellness_score || 0);



          const symptomData = await getSymptoms(token);

          setSymptoms(normalizeSymptoms(symptomData));



        }catch(error){

          console.log(error);

        }

      }


      setLoading(false);

    }


    loadPCOS();


  }, []);







  async function togglePCOS(){


    const value = !pcosEnabled;


    setPcosEnabled(value);


    const token = localStorage.getItem("access");


    if(token){


      await updatePCOSProfile(

        token,

        {

          is_enabled:value,

          irregular_periods:false,

          acne:false,

          hair_growth:false,

          hair_loss:false,

          weight_changes:false,

          mood_changes:false,

          sleep_hours:0,

          water_intake_ml:0,

          exercise_minutes:0,

          notes:""

        }

      );


    }


  }







  async function toggleSymptom(item:string){


    const token = localStorage.getItem("access");


    if(!token) return;



    const currentSymptoms = Array.isArray(symptoms) ? symptoms : [];


    const existing = currentSymptoms.find(

      (s:any)=>s.symptom === item

    );



    if(existing){


      await deleteSymptom(

        token,

        existing.id

      );


      setSymptoms(

        currentSymptoms.filter(

          (s:any)=>s.id !== existing.id

        )

      );



    }

    else{


      const newSymptom = await addSymptom(

        token,

        item

      );


      setSymptoms([

        ...currentSymptoms,

        newSymptom

      ]);


    }


  }







  if(loading){

    return (

      <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-pink-50
      ">

        Loading 🌸

      </main>

    );

  }







  return (

    <main className="
    min-h-screen
    bg-gradient-to-br
    from-pink-50
    via-purple-50
    to-rose-100
    p-6
    ">


      <div className="
      mx-auto
      max-w-3xl
      space-y-6
      ">



        <section className="
        rounded-3xl
        bg-white/70
        p-6
        shadow-xl
        ">


          <div className="flex items-center gap-3">


            <div className="
            rounded-2xl
            bg-pink-100
            p-3
            ">

              <HeartPulse className="text-pink-500"/>

            </div>



            <div>

              <h1 className="
              text-2xl
              font-bold
              ">

                Health Harmony 🌸

              </h1>


              <p className="text-sm text-slate-500">

                Understand your body, one step at a time ✨

              </p>


            </div>


          </div>


        </section>







        <section className="
        rounded-3xl
        bg-white/70
        p-6
        shadow-xl
        ">


          <div className="
          flex
          justify-between
          items-center
          ">


            <div>

              <h2 className="font-semibold text-lg">

                PCOS Wellness Mode

              </h2>

            </div>



            <button

              onClick={togglePCOS}

              className={`
              rounded-full
              px-5
              py-2
              font-medium

              ${
                pcosEnabled

                ? "bg-pink-500 text-white"

                : "bg-pink-100 text-pink-600"

              }

              `}

            >

              {pcosEnabled ? "ON ✨" : "OFF"}

            </button>


          </div>


        </section>







        {pcosEnabled && (

        <>


        <section className="
        rounded-3xl
        bg-white/70
        p-6
        shadow-xl
        ">


          <h2 className="font-semibold mb-4">

            Symptoms today 💗

          </h2>



          <div className="
          flex
          flex-wrap
          gap-3
          ">


          {

          symptomList.map((item)=>(


            <button

            key={item}

            onClick={()=>toggleSymptom(item)}


            className={`

            rounded-full

            px-4

            py-2

            text-sm


            ${
              symptoms.some(
                (s:any)=>s.symptom===item
              )

              ?

              "bg-purple-500 text-white"

              :

              "bg-purple-100 text-purple-700"

            }

            `}


            >

              {item}

            </button>


          ))

          }


          </div>


        </section>








        <section className="
        grid
        md:grid-cols-3
        gap-4
        ">


          <div className="
          bg-white/70
          rounded-3xl
          p-5
          shadow
          ">

            <Moon className="text-purple-500"/>

            <p className="mt-2 font-medium">
              Sleep
            </p>

          </div>





          <div className="
          bg-white/70
          rounded-3xl
          p-5
          shadow
          ">

            <Droplets className="text-blue-400"/>

            <p className="mt-2 font-medium">
              Hydration
            </p>

          </div>





          <div className="
          bg-white/70
          rounded-3xl
          p-5
          shadow
          ">


            <Dumbbell className="text-green-500"/>

            <p className="mt-2 font-medium">
              Movement
            </p>


          </div>


        </section>







        <section className="
        rounded-3xl
        bg-gradient-to-r
        from-pink-200
        to-purple-200
        p-6
        ">


          <div className="flex gap-2 items-center">


            <Sparkles className="text-pink-600"/>


            <h2 className="font-bold">

              Wellness Score

            </h2>


          </div>



          <div className="
          mt-4
          h-4
          bg-white
          rounded-full
          ">


            <div
className="
h-full
bg-pink-500
rounded-full
transition-all
duration-700
"
style={{
  width: `${wellnessScore}%`
}}
/>


          </div>
<p className="
mt-3
font-semibold
text-pink-600
">
{wellnessScore}% Wellness Score ✨
</p>

        </section>



        </>

        )}



      </div>


    </main>

  );

}