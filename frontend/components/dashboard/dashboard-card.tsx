import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  tone?: "rose" | "lavender" | "sky" | "mint" | "gold";
};

const toneStyles: Record<NonNullable<DashboardCardProps["tone"]>, string> = {
  rose: "from-rose-50 to-white text-rose-700 ring-rose-100",
  lavender: "from-violet-50 to-white text-violet-700 ring-violet-100",
  sky: "from-sky-50 to-white text-sky-700 ring-sky-100",
  mint: "from-emerald-50 to-white text-emerald-700 ring-emerald-100",
  gold: "from-amber-50 to-white text-amber-700 ring-amber-100",
};

export function DashboardCard({ title, value, subtitle, icon, tone = "lavender" }: DashboardCardProps) {
  return (
    <article className={`rounded-3xl border border-black/5 bg-gradient-to-br p-5 shadow-sm ring-1 ${toneStyles[tone]}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="rounded-2xl bg-white/80 p-3 shadow-sm">{icon}</div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{subtitle}</p>
    </article>
  );
}