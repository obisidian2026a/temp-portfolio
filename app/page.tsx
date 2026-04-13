import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/scroll-to-top";
import ContactForm from "./components/contact-form";
import {
  aboutMe,
  contact,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from "./lib/portfolio-data";

/* ─── inline SVG social icons ─────────────────────────────────────── */
const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/imran-binhasan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/imran-binhasan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    url: "https://x.com/imran-binhasan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ─── shared section heading ───────────────────────────────────────── */
function SectionLabel({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-400">{tag}</p>
      <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <Navbar />

      {/* ════════════════════════════════════════════════════════
          HERO — full viewport, content vertically centred
      ════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {/* subtle radial glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[15%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />
          <div className="absolute right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-violet-500/[0.07] blur-[110px]" />
          <div className="absolute bottom-[10%] left-[40%] h-[300px] w-[300px] rounded-full bg-indigo-500/[0.05] blur-[100px]" />
        </div>

        <div className="w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">

            {/* ── Left: text ── */}
            <div className="space-y-7">
              {/* availability badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.08] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                Available for full-stack roles
              </span>

              {/* headline */}
              <div className="space-y-2">
                <p className="text-base font-medium text-slate-500">Hi, I&apos;m</p>
                <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                  <span className="text-white">{profile.name.split(" ")[0]}</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                    {profile.name.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
                <p className="text-lg font-semibold text-slate-300 sm:text-xl">
                  {profile.designation}
                </p>
              </div>

              <p className="max-w-lg text-[0.95rem] leading-7 text-slate-400">
                {profile.intro}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_0_0_rgba(34,211,238,0)] transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.3)]"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                  </svg>
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/[0.15] bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Get In Touch
                </a>
              </div>

              {/* social icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: photo ── */}
            <div className="mx-auto w-full max-w-[340px] lg:mx-0">
              <div className="relative">
                <div aria-hidden className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-400/15 via-transparent to-violet-400/15 blur-3xl" />
                {/* 1px gradient border */}
                <div className="relative rounded-[1.75rem] bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-px">
                  <div className="overflow-hidden rounded-[calc(1.75rem-1px)]">
                    <Image
                      src={profile.photo}
                      alt={profile.name}
                      width={400}
                      height={480}
                      priority
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                {/* badge */}
                <div className="absolute -bottom-3 -right-3 rounded-xl border border-white/[0.12] bg-slate-900/90 px-4 py-2 text-center shadow-xl backdrop-blur-xl">
                  <p className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-400">Experience</p>
                  <p className="text-[1.1rem] font-black text-white">2+ Years</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* scroll cue */}
        <div aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600">
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em]">Scroll</span>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 animate-bounce">
            <path d="M8 2v12M3 9l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          REMAINING SECTIONS
      ════════════════════════════════════════════════════════ */}
      <main className="mx-auto w-full max-w-6xl space-y-24 px-4 pb-24 sm:px-6 lg:px-8">

        {/* ── ABOUT ─────────────────────────────────────────── */}
        <section id="about" className="scroll-mt-24 space-y-12">
          <SectionLabel tag="About" title="Who I Am" />

          {/* intro cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {aboutMe.map((p) => (
              <article
                key={p}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-[0.9rem] leading-7 text-slate-400 backdrop-blur-sm"
              >
                {p}
              </article>
            ))}
          </div>

          {/* education + experience */}
          <div className="grid gap-6 lg:grid-cols-2">

            {/* Education */}
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/[0.12] text-cyan-400">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((item) => (
                  <article key={item.degree} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <h4 className="text-[0.9rem] font-semibold text-white">{item.degree}</h4>
                    <p className="mt-0.5 text-xs font-medium text-cyan-400">{item.institution} · {item.period}</p>
                    <p className="mt-2 text-xs leading-6 text-slate-500">{item.details}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/[0.12] text-violet-400">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Experience</h3>
              </div>
              <div className="space-y-3">
                {experience.map((item) => (
                  <article key={`${item.role}-${item.company}`} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-[0.9rem] font-semibold text-white">{item.role}</h4>
                      <span className="shrink-0 rounded-full bg-violet-400/[0.12] px-2 py-0.5 text-[0.65rem] font-semibold text-violet-300">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-cyan-400">{item.company} · {item.location}</p>
                    <p className="text-[0.65rem] uppercase tracking-wider text-slate-600">{item.period}</p>
                    <p className="mt-1.5 text-xs leading-6 text-slate-500">{item.details}</p>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── SKILLS ────────────────────────────────────────── */}
        <section id="skills" className="scroll-mt-24">
          <SectionLabel tag="Stack" title="Skills & Tools" />
          <div className="grid gap-5 md:grid-cols-3">
            {skillCategories.map((cat) => (
              <article
                key={cat.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2 transition hover:border-white/[0.12] hover:bg-white/[0.07]"
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={18}
                        height={18}
                        className="h-4 w-4 shrink-0 object-contain"
                      />
                      <span className="truncate text-[0.76rem] font-medium text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ──────────────────────────────────────── */}
        <section id="projects" className="scroll-mt-24">
          <SectionLabel tag="Showcase" title="Projects" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.15)]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={340}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[0.95rem] font-semibold text-white">{project.name}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-6 text-slate-400 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full border border-cyan-400/[0.2] bg-cyan-400/[0.07] px-2.5 py-0.5 text-[0.68rem] font-medium text-cyan-300">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-1.5 text-[0.78rem] font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300"
                    >
                      View Details
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3 w-3">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10">
            {/* glows */}
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-violet-500/[0.05] blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.4fr]">

              {/* ── Left: info ── */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-400">Contact</p>
                  <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Let&apos;s Build<br />Something Great
                  </h2>
                  <p className="mt-3 text-[0.9rem] leading-7 text-slate-400">
                    Open to freelance projects, full-time roles, and collaborative work.
                    Drop a message or reach out directly.
                  </p>
                </div>

                {/* contact links */}
                <div className="space-y-2.5">
                  {[
                    {
                      label: "Email",
                      value: contact.email,
                      href: `mailto:${contact.email}`,
                      icon: (
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                          <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Phone",
                      value: contact.phone,
                      href: `tel:${contact.phone}`,
                      icon: (
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                        </svg>
                      ),
                    },
                    {
                      label: "WhatsApp",
                      value: contact.whatsapp,
                      href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
                      blank: true,
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.853L.057 23.571a.5.5 0 00.609.61l5.79-1.495A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.523-5.176-1.432l-.369-.22-3.833.988 1.012-3.735-.24-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                      ),
                    },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.blank ? "_blank" : undefined}
                      rel={c.blank ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/[0.1] text-cyan-400 transition group-hover:bg-cyan-400/[0.18]">
                        {c.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">{c.label}</p>
                        <p className="truncate text-[0.85rem] font-medium text-slate-200">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* social row */}
                <div className="flex items-center gap-2 pt-1">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Right: form ── */}
              <ContactForm />

            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <span className="text-[0.78rem] text-slate-600">
            © {new Date().getFullYear()} {profile.name} · Built with Next.js & Tailwind CSS
          </span>
          <ScrollToTop />
        </div>
      </footer>
    </div>
  );
}
