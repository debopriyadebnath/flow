"use client";

import Link from "next/link";

import {
  Home,
  CalendarDays,
  Heart,
  BookOpen,
  Sparkles,
  User,
  Stethoscope,
} from "lucide-react";



const navItems = [

  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },


  {
    name: "Cycle",
    href: "/cycles",
    icon: CalendarDays,
  },


  {
    name: "Mood",
    href: "/mood",
    icon: Heart,
  },


  {
    name: "Journal",
    href: "/journal",
    icon: BookOpen,
  },


  {
    name: "Health",
    href: "/health",
    icon: Stethoscope,
  },


  {
    name: "AI",
    href: "/ai",
    icon: Sparkles,
  },


  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },


];




export function Navbar(){


return (

<nav

className="
fixed
bottom-5
left-1/2
z-50
flex
-translate-x-1/2
items-center
gap-1
rounded-[2rem]
border
border-white/60
bg-white/70
px-4
py-3
shadow-xl
backdrop-blur-xl
"

>



{
navItems.map((item)=>{


const Icon = item.icon;



return (

<Link

key={item.name}

href={item.href}

className="
group
flex
flex-col
items-center
rounded-2xl
px-3
py-2
text-xs
text-slate-600
transition-all
duration-300
hover:bg-pink-100
hover:text-pink-500
"

>


<Icon

size={21}

className="
transition-transform
group-hover:scale-110
"

/>



<span className="mt-1">

{item.name}

</span>



</Link>


)


})

}



</nav>


);


}