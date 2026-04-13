"use client";

import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [active, setActive]   = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pill, setPill]       = useState({ left: 0, width: 0, opacity: 0 });
  const navRef  = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  /* active section tracker */
  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const io  = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  /* sliding pill position */
  useEffect(() => {
    const key = hovered ?? active;
    const el  = linkRefs.current[key];
    const nav = navRef.current;
    if (!el || !nav) { setPill((p) => ({ ...p, opacity: 0 })); return; }
    const nRect = nav.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    setPill({ left: eRect.left - nRect.left, width: eRect.width, opacity: 1 });
  }, [hovered, active]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50 flex flex-col items-center">

      {/* ── Desktop floating pill ── */}
      <nav
        ref={navRef}
        className="pointer-events-auto relative hidden w-auto md:flex"
        onMouseLeave={() => setHovered(null)}
      >
        {/* glass capsule */}
        <div className="absolute inset-0 rounded-full border border-white/[0.1] bg-[rgba(10,15,30,0.55)] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl" />

        {/* hover / active highlight pill */}
        <span
          aria-hidden
          className="absolute top-[5px] bottom-[5px] rounded-full bg-white/[0.1] transition-all duration-200 ease-out"
          style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
        />

        <div className="relative flex items-center gap-0.5 px-2 py-[5px]">
          {navItems.map(({ label, href }) => {
            const id       = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={id}
                href={href}
                ref={(el) => { linkRefs.current[id] = el; }}
                onMouseEnter={() => setHovered(id)}
                className={`relative z-10 rounded-full px-4 py-2 text-[0.78rem] font-medium tracking-wide transition-colors duration-150 select-none ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* ── Mobile pill ── */}
      <div className="pointer-events-auto w-[88vw] max-w-xs md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-full border border-white/[0.1] bg-[rgba(10,15,30,0.65)] px-5 py-3 backdrop-blur-2xl"
          aria-label="Toggle menu"
        >
          <span className="text-sm font-semibold capitalize text-white">{active}</span>
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            className={`text-slate-400 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
          >
            <path d="M2 4.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {menuOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/[0.1] bg-[rgba(10,15,30,0.85)] backdrop-blur-2xl">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
