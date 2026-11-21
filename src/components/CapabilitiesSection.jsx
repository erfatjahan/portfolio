function getCapabilityIcon(code) {
  switch (code) {
    case "01": // Backend & APIs
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
          <rect x="2" y="3" width="20" height="7" rx="2" />
          <rect x="2" y="14" width="20" height="7" rx="2" />
          <path d="M6 6.5h.01M6 17.5h.01" />
        </svg>
      );
    case "02": // Frontend Interfaces
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 18v3" />
        </svg>
      );
    case "03": // AI & Image Processing (Robot Icon)
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
          <path d="M12 2v3" />
          <circle cx="12" cy="2" r="1" className="fill-current" />
          <rect x="4" y="5" width="16" height="14" rx="4" />
          <circle cx="9" cy="11.5" r="1.3" className="fill-current" />
          <circle cx="15" cy="11.5" r="1.3" className="fill-current" />
          <path d="M8.5 15.5h7" />
          <path d="M2 11h2M20 11h2" />
        </svg>
      );
    default: // Problem Solving & CS
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 7l-2 10" />
        </svg>
      );
  }
}

export default function CapabilitiesSection({ capabilities }) {
  return (
    <section id="capabilities" className="border-b border-white/10 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-amber-200 sm:text-4xl">
        Capabilities
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {capabilities.map((cap) => (
          <div
            key={cap.code}
            className="rounded-2xl border border-white/10 bg-[#0c121d] p-6 transition hover:border-amber-200/30"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-amber-200/20 bg-amber-200/10 text-amber-200">
              {getCapabilityIcon(cap.code)}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {cap.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {cap.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}