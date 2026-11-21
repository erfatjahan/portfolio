import { useState } from "react";

export default function ProjectsSection({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const [brokenImages, setBrokenImages] = useState({});
  const featured = projects.slice(0, 3);

  const handleImageError = (id) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="work" className="border-b border-white/10 py-20">
     <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-amber-200 sm:text-4xl">
          Featured Projects
        </h2>
        <p className="font-mono text-xs tracking-widest text-white uppercase">
          Selected Work
        </p>
        <p className="max-w-2xl text-sm text-slate-400">
          Selected engineering work covering AI-powered web applications,backend
          APIs,databases,and research models.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featured.map((project) => {
          const hasImage = Boolean(project.image) && !brokenImages[project.id];

          return (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c121d] p-6 transition hover:border-amber-200/40"
            >
              <div>
                <div
                  className={`relative mb-5 flex h-44 items-end overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent} p-4`}
                >
                  {hasImage ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={() => handleImageError(project.id)}
                      className="absolute inset-0 h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-center px-4 text-left">
                      <span className="text-xs font-medium text-amber-200/90">
                        Preview Ready
                      </span>
                      <span className="mt-1 text-base font-semibold text-white">
                        {project.title}
                      </span>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <span className="relative z-10 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs text-slate-200 backdrop-blur-sm">
                    {project.tag} · {project.period}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4 text-sm">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-amber-200 transition hover:text-amber-100"
                >
                  GitHub →
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition hover:text-white"
                >
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
{/* 
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowAll(true)}
          className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:border-amber-200/50 hover:text-white"
        >
          View All Projects ({projects.length}) →
        </button>
      </div> */}

      {showAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0b101b] p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">All Projects</h3>
              <button
                onClick={() => setShowAll(false)}
                className="rounded-lg border border-white/15 px-3 py-1 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
              >
                Close ✕
              </button>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-white/10 bg-[#070b12] p-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">{project.title}</h4>
                    <span className="text-xs text-amber-200">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex gap-4 text-xs">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-200 hover:underline"
                    >
                      Repository →
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white"
                    >
                      Live / Docs
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}