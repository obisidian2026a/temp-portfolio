import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-lg shadow-slate-950/40">
        <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
        <p className="mt-2 text-slate-300">
          The project page you are looking for does not exist.
        </p>
        <Link
          href="/#projects"
          className="mt-5 inline-flex rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
