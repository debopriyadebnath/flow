import { ReactNode } from "react";


interface MoodBubbleProps {

  emoji: string;

  label: string;

  active?: boolean;

  onClick?: () => void;

}



export function MoodBubble({

  emoji,

  label,

  active,

  onClick,

}: MoodBubbleProps) {


return (

<button

onClick={onClick}

className={`
flex
flex-col
items-center
justify-center
h-24
w-24
rounded-full
transition
duration-300

${
active
?
"bg-gradient-to-br from-pink-300 to-purple-300 scale-110 shadow-lg"
:
"bg-white shadow hover:scale-105"
}

`}

>


<span className="text-4xl">
{emoji}
</span>


<span className="
mt-1
text-sm
font-medium
text-slate-700
">

{label}

</span>


</button>


)

}