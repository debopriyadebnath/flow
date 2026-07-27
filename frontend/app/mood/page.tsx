"use client";

import { useEffect, useState } from "react";

import { GlassCard } from "@/components/hermony/glass-card";
import { MoodBubble } from "@/components/hermony/mood-bubble";

import {
  createMood,
  getMoods,
} from "@/services/mood";



const moods = [

  {
    value: "happy",
    emoji: "😊",
    label: "Happy",
  },

  {
    value: "calm",
    emoji: "🌸",
    label: "Calm",
  },

  {
    value: "sad",
    emoji: "🌧️",
    label: "Sad",
  },

  {
    value: "anxious",
    emoji: "😰",
    label: "Anxious",
  },

  {
    value: "tired",
    emoji: "😴",
    label: "Tired",
  },

  {
    value: "excited",
    emoji: "✨",
    label: "Excited",
  },

];



export default function MoodPage(){


const [selectedMood,setSelectedMood]
=
useState("calm");


const [note,setNote]
=
useState("");


const [energy,setEnergy]
=
useState(7);


const [history,setHistory]
=
useState<any[]>([]);



async function loadMood(){

const token =
localStorage.getItem("access");


if(!token) return;


const data =
await getMoods(token);


setHistory(data);


}



useEffect(()=>{

loadMood();

},[]);





async function saveMood(){


const token =
localStorage.getItem("access");


if(!token) return;



await createMood(

token,

{

mood:selectedMood,

note,

energy_level:energy,

}

);



setNote("");

setEnergy(7);

loadMood();


}





return (


<main className="
min-h-screen
bg-[#fff8fc]
p-6
pb-32
">


<div className="
mx-auto
max-w-5xl
space-y-8
">



<GlassCard

className="
bg-gradient-to-br
from-pink-100
via-purple-50
to-blue-100
"

>


<h1 className="
text-5xl
font-bold
text-slate-800
">

How are you feeling today? 🌸

</h1>


<p className="
mt-3
text-slate-600
">

Your emotions are data. Let's understand them gently 💗

</p>



<div className="
mt-8
flex
flex-wrap
gap-5
">


{moods.map((item)=>(


<MoodBubble

key={item.value}

emoji={item.emoji}

label={item.label}

active={
selectedMood===item.value
}

onClick={()=>
setSelectedMood(item.value)
}

/>


))}


</div>


</GlassCard>





<GlassCard>


<h2 className="
text-2xl
font-semibold
">

Energy Level ⚡

</h2>



<p className="
mt-2
text-4xl
font-bold
text-pink-500
">

{energy}/10

</p>



<input

type="range"

min="1"

max="10"

value={energy}

onChange={(e)=>
setEnergy(
Number(e.target.value)
)
}

className="
mt-6
w-full
accent-pink-500
"

/>


</GlassCard>






<GlassCard>


<h2 className="
text-2xl
font-semibold
">

Tell me more 💭

</h2>



<textarea

value={note}

onChange={(e)=>
setNote(e.target.value)
}

placeholder="
Write about your day...
"

className="
mt-5
h-32
w-full
rounded-3xl
border
p-5
outline-none
"

/>



<button

onClick={saveMood}

className="
mt-5
rounded-3xl
bg-gradient-to-r
from-pink-400
to-purple-400
px-8
py-4
font-semibold
text-white
shadow-lg
"

>

Save my mood 🌷

</button>


</GlassCard>







<GlassCard>


<div className="
flex
justify-between
items-center
">


<h2 className="
text-2xl
font-semibold
">

Mood Journey 💗

</h2>


<span className="
rounded-full
bg-pink-100
px-4
py-2
">

🔥 {history.length} logs

</span>


</div>



<div className="
mt-6
space-y-4
">


{history.map((item)=>(


<div

key={item.id}

className="
rounded-3xl
bg-pink-50
p-5
"

>


<p className="
font-semibold
text-pink-500
">

{item.mood}

</p>


<p>
Energy: {item.energy_level}/10
</p>


<p className="
text-slate-500
">

{item.note}

</p>


</div>


))}


</div>


</GlassCard>



</div>


</main>


);


}