import { ReactNode } from "react";


interface GlassCardProps {

  children: ReactNode;

  className?: string;

}



export function GlassCard({

  children,

  className = "",

}: GlassCardProps) {


  return (

    <div

      className={`
        rounded-[2rem]
        border
        border-white/50
        bg-white/60
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(249,197,209,0.25)]
        p-6
        ${className}
      `}

    >

      {children}

    </div>

  );

}