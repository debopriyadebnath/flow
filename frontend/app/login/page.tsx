import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-4 py-12">
      <div className="w-full space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Welcome back</h1>
          <p className="text-sm text-slate-600">Sign in to continue your wellness rhythm.</p>
        </header>
        <LoginForm />
      </div>
    </main>
  );
}