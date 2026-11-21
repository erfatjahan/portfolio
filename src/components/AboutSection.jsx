export default function AboutSection({ stackPills }) {
  return (
    <section
      id="about"
      className="grid gap-10 border-b border-white/10 py-20 md:grid-cols-12 md:items-center"
    >
      <div className="space-y-4 md:col-span-5">
        <h2 className="text-3xl font-bold tracking-tight text-amber-200 sm:text-4xl">
          About
        </h2>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Engineering with clarity
        </h2>
        <blockquote className="rounded-xl border border-white/10 bg-[#0c121d] p-5 text-sm leading-relaxed text-slate-300">
          I am a Computer Science and Engineering graduate focused on full-stack
          web development, backend APIs, relational databases, and applied deep
          learning. I enjoy taking ideas from prototype to a working, documented
          application. Whether building a low-light image enhancement workflow
          with FastAPI and PyTorch or structuring relational schemas and
          role-based access, I prioritize maintainability and clear debugging.
        </blockquote>
      </div>

      <div className="space-y-5 text-sm leading-relaxed text-slate-300 md:col-span-7">
        <div>
          <p className="mb-3 font-mono text-xs tracking-wider text-amber-200 uppercase">
            Core Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {stackPills.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-[#0c121d] px-3.5 py-1.5 text-xs font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}