"use client";

import { useEffect, useState } from "react";

import { GlassCard } from "@/components/hermony/glass-card";

import {
  createJournal,
  getJournals,
} from "@/services/journal";



export default function JournalPage(){


const [title,setTitle] = useState("");

const [content,setContent] = useState("");

const [journals,setJournals] = useState<any[]>([]);



async function loadJournals(){

const token =
localStorage.getItem("access");


if(!token) return;


const data =
await getJournals(token);


setJournals(data);

}



useEffect(()=>{

loadJournals();

},[]);





async function saveJournal(){


const token =
localStorage.getItem("access");


if(!token) return;



await createJournal(

token,

{
title,
content,
}

);



setTitle("");

setContent("");

loadJournals();


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

My Little Journal 📖

</h1>


<p className="
mt-3
text-slate-600
">

A safe space for your thoughts, feelings and reflections 🌸

</p>


</GlassCard>






<GlassCard>


<h2 className="
text-2xl
font-semibold
">

Today's reflection ✨

</h2>



<input

value={title}

onChange={(e)=>
setTitle(e.target.value)
}

placeholder="Title..."

className="
mt-5
w-full
rounded-2xl
border
p-4
outline-none
"

/>




<textarea

value={content}

onChange={(e)=>
setContent(e.target.value)
}

placeholder="Write your thoughts here..."

className="
mt-4
h-40
w-full
rounded-3xl
border
p-5
outline-none
"

/>



<button

onClick={saveJournal}

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

Save Memory 🌷

</button>



</GlassCard>







<GlassCard>


<h2 className="
text-2xl
font-semibold
">

Your memories 💗

</h2>




<div className="
mt-6
space-y-4
">


{
journals.length === 0 ? (

<p className="
text-slate-500
">

No entries yet. Start writing 🌸

</p>


) : (


journals.map((item)=>(


<div

key={item.id}

className="
rounded-3xl
bg-pink-50
p-5
"

>


<h3 className="
text-xl
font-semibold
text-pink-500
">

{item.title}

</h3>



<p className="
mt-2
text-slate-600
">

{item.content}

</p>



</div>


))


)

}



</div>



</GlassCard>





</div>


</main>

);


}