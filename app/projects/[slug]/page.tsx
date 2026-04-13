import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/app/lib/portfolio-data";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 pb-14 text-slate-100">
      <div className="mx-auto w-full max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-white/10"
        >
          ← Back to Projects
        </Link>

        <article className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-900/70 shadow-[0_30px_70px_-35px_rgba(14,165,233,0.45)]">
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={620}
            className="h-auto w-full border-b border-white/10 object-cover"
          />

          <div className="space-y-8 p-6 sm:p-8">
            <header>
              <h1 className="text-3xl font-extrabold text-white">
                {project.name}
              </h1>
              <p className="mt-3 leading-7 text-slate-300">
                {project.description}
              </p>
            </header>

            <section>
              <h2 className="text-xl font-bold text-white">
                Main Technology Stack
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">Project Links</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-bold text-slate-950 transition hover:brightness-110"
                  >
                    Live Project
                  </a>
                ) : (
                  <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
                    Live Project Unavailable
                  </span>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  GitHub Repository (Client)
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">Challenges Faced</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-slate-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                Potential Improvements and Future Plans
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-slate-300">
                {project.improvements.map((improvement) => (
                  <li key={improvement}>{improvement}</li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
