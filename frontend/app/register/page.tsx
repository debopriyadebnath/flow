import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-4 py-12">
      <div className="w-full space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Create your HERmony account</h1>
          <p className="text-sm text-slate-600">Start tracking your cycle, mood, and wellness in one private place.</p>
        </header>
        <RegisterForm />
      </div>
    </main>
  );
}