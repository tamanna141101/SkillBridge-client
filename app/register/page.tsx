import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-violet-100 px-5 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white bg-white p-8 shadow-xl shadow-blue-100">
        <Link href="/" className="text-2xl font-extrabold text-slate-900">
          Skill<span className="text-blue-600">Bridge</span>
        </Link>

        <h1 className="mt-10 text-3xl font-bold text-slate-900">
          Create your account
        </h1>
        <p className="mt-2 text-slate-500">
          Start learning and building your future with us.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

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
              placeholder="Create a password"
              required
              minLength={8}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Register as
            </label>
            <select
              required
              defaultValue="student"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            Create account
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-blue-600 hover:underline">
            Log in
          </Link>
        </p>

        <Link href="/" className="mt-6 block text-center text-sm text-slate-400 hover:text-blue-600">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}