import { Button } from "@/components/ui/button";

type ProfileCardProps = {
  name: string;
  email: string;
  bloodGroup?: string;
  summary?: string;
};

export function ProfileCard({ name, email, bloodGroup, summary }: ProfileCardProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Profile</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">{name}</h2>
        <p className="text-sm text-slate-600">{email}</p>
      </div>
      <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">Blood group: {bloodGroup || "Not set"}</div>
        <div className="rounded-2xl bg-slate-50 p-4">Status: Private wellness profile</div>
      </div>
      {summary ? <p className="text-sm leading-6 text-slate-600">{summary}</p> : null}
      <Button variant="secondary" className="w-full">Edit profile</Button>
    </section>
  );
}