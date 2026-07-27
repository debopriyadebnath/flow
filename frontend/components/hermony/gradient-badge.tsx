interface BadgeProps {

  children: React.ReactNode;

}


export function GradientBadge({

  children,

}: BadgeProps) {


  return (

    <span

      className="
        inline-flex
        items-center
        rounded-full
        bg-gradient-to-r
        from-pink-200
        via-purple-200
        to-blue-200
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
      "

    >

      {children}

    </span>

  );

}