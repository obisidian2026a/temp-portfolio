"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-500">
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            placeholder="Your name"
            required
            className="rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none ring-0 transition focus:border-cyan-400/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyan-400/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-500">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="your@email.com"
            required
            className="rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none ring-0 transition focus:border-cyan-400/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyan-400/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-subject" className="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-500">
          Subject
        </label>
        <input
          id="cf-subject"
          type="text"
          placeholder="What's this about?"
          className="rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none ring-0 transition focus:border-cyan-400/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyan-400/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-500">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          required
          className="resize-none rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none ring-0 transition focus:border-cyan-400/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyan-400/20"
        />
      </div>

      <button
        type="submit"
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_0_0_rgba(34,211,238,0)] transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.25)] sm:self-start"
      >
        Send Message
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.114A28.897 28.897 0 003.105 2.289z" />
        </svg>
      </button>
    </form>
  );
}
