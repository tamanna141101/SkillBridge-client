import Link from "next/link";

const courses = [
  {
    category: "Web Development",
    title: "Complete Web Development",
    description: "Learn HTML, CSS, JavaScript and build modern websites.",
    level: "Beginner",
    lessons: "24 lessons",
    color: "from-blue-500 to-indigo-600",
    icon: "⌘",
  },
  {
    category: "Programming",
    title: "Python Programming",
    description: "Start programming with Python and strengthen your logic.",
    level: "Beginner",
    lessons: "18 lessons",
    color: "from-violet-500 to-purple-600",
    icon: "🐍",
  },
  {
    category: "UI/UX Design",
    title: "UI/UX Design Fundamentals",
    description: "Understand design principles and create better interfaces.",
    level: "Intermediate",
    lessons: "16 lessons",
    color: "from-pink-500 to-rose-500",
    icon: "✦",
  },
];

const features = [
  {
    icon: "◈",
    title: "Learn at your pace",
    description: "Access your lessons whenever you are ready. Learning should fit your life.",
  },
  {
    icon: "◎",
    title: "Learn from tutors",
    description: "Explore courses created by tutors who want to share their knowledge.",
  },
  {
    icon: "↗",
    title: "Track your progress",
    description: "Keep your learning organised and move towards your goals.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-bold text-white shadow-lg shadow-blue-200">
              S
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Skill<span className="text-blue-600">Bridge</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="text-blue-600">Home</Link>
            <a href="#courses" className="transition hover:text-blue-600">Explore Courses</a>
            <a href="#about" className="transition hover:text-blue-600">About</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              Get Started <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute -right-32 -top-24 -z-10 h-96 w-96 rounded-full bg-violet-200/50 blur-3xl" />
        <div className="absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Your journey to new skills starts here
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.12] tracking-tight text-slate-950 md:text-6xl">
              Build skills.
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Shape your future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Discover practical courses, learn from passionate tutors, and
              take the next step towards your personal and professional goals.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Start Learning <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#courses"
                className="rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
              >
                Explore Courses
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="font-bold text-blue-600">✓</span> Learn anytime
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-blue-600">✓</span> Practical lessons
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-blue-600">✓</span> Tutor-led courses
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-100 to-violet-100 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-7 shadow-2xl shadow-indigo-200 md:p-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white">
                  YOUR LEARNING SPACE
                </span>
                <span className="text-2xl text-white">✦</span>
              </div>

              <div className="py-12 text-center text-white">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 text-6xl shadow-inner">
                  🎓
                </div>
                <h2 className="text-3xl font-bold">Learn something new.</h2>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-blue-100">
                  Small steps every day can lead to extraordinary progress.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
                  <p className="text-2xl font-bold">Learn</p>
                  <p className="mt-1 text-xs text-blue-100">New skills</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
                  <p className="text-2xl font-bold">Grow</p>
                  <p className="mt-1 text-xs text-blue-100">Every day</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-7 top-1/3 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <span className="text-2xl">📚</span>
              <p className="mt-1 text-sm font-bold text-slate-800">Keep learning</p>
              <p className="text-xs text-slate-500">One lesson at a time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Explore & discover
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Explore popular courses
              </h2>
              <p className="mt-3 max-w-xl text-slate-600">
                Find a subject that inspires you and start building your skills.
              </p>
            </div>
            <Link href="/courses" className="font-semibold text-blue-600 hover:text-blue-800">
              View all courses <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/70"
              >
                <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${course.color}`}>
                  <span className="text-7xl font-black text-white/90 transition duration-300 group-hover:scale-110">
                    {course.icon}
                  </span>
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    {course.category}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {course.title}
                  </h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                    {course.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-xs font-medium text-slate-500">
                    <span>{course.level}</span>
                    <span>{course.lessons}</span>
                  </div>
                  <Link
                    href="/courses"
                    className="mt-5 flex w-full items-center justify-center rounded-xl bg-slate-50 py-3 text-sm font-semibold text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white"
                  >
                    Explore course <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">
            Course cards are temporary design previews. Published courses will load from the API in the next step.
          </p>
        </div>
      </section>

      {/* About / Features */}
      <section id="about" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why SkillBridge?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              A better way to grow your skills
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A learning platform designed to connect curious students with
              knowledgeable tutors.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-3xl font-bold text-blue-700">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 px-7 py-14 text-center shadow-xl shadow-indigo-100 md:px-16 md:py-16">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to start your learning journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Join SkillBridge and take your first step towards learning something meaningful.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Create your account <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
          <Link href="/" className="text-lg font-extrabold text-slate-900">
            Skill<span className="text-blue-600">Bridge</span>
          </Link>
          <p className="text-sm text-slate-500">
            Learn. Grow. Build your future.
          </p>
          <p className="text-xs text-slate-400">
            © 2026 SkillBridge. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}