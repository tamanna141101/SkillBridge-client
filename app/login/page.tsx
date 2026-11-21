import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-violet-100 px-5 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white bg-white p-8 shadow-xl shadow-blue-100">
        <Link href="/" className="text-2xl font-extrabold text-slate-900">
          Skill<span className="text-blue-600">Bridge</span>
        </Link>

        <h1 className="mt-10 text-3xl font-bold text-slate-900">
          Welcome back!
        </h1>
        <p className="mt-2 text-slate-500">
          Log in to continue your learning journey.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            Log in
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link href="/register" className="font-bold text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <Link href="/" className="mt-6 block text-center text-sm text-slate-400 hover:text-blue-600">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}