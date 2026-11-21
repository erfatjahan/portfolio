import { useState } from "react";

export default function Hero({ profile }) {
  const [showPhone, setShowPhone] = useState(false);

  const quickLinks = [
    {
      name: "GitHub",
      href: profile.githubUrl,
      external: true,
      posClass: "top-4 left-10",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: profile.linkedinUrl,
      external: true,
      posClass: "top-24 right-6",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5A1.99 1.99 0 1 0 5.27 7.48 1.99 1.99 0 0 0 5.25 3.5ZM20.44 13.02c0-3.27-1.75-4.79-4.08-4.79-1.88 0-2.72 1.03-3.19 1.76V8.5H9.8c.04.95 0 11 0 11h3.37v-6.14c0-.33.02-.66.12-.89.27-.66.87-1.35 1.89-1.35 1.33 0 1.86 1.02 1.86 2.51V19.5h3.4v-6.48Z" />
        </svg>
      ),
    },
   {
      name: "Email",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        profile.email
      )}&su=${encodeURIComponent("Portfolio Inquiry")}`,
      external: true,
      posClass: "bottom-20 right-10",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      name: "Call",
      href: `tel:${profile.phone}`,
      external: false,
      isPhone: true,
      posClass: "bottom-4 left-16",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="grid items-center gap-12 border-b border-white/10 py-16 md:grid-cols-12 md:py-24"
    >
      <div className="space-y-6 md:col-span-7">
        <p className="text-xl text-amber-200/80">{profile.roleLabel}</p>
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
          {profile.headlineMain}{" "}
          <span className="text-slate-400">{profile.headlineMuted}</span>
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300">
          {profile.bio}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-amber-200/60 hover:bg-white/10"
          >
            Explore Projects
          </a>
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-white/35 hover:text-white"
          >
            View or Download CV
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:col-span-5 md:h-80 md:w-80">
        <div className="absolute inset-0 rounded-full border border-amber-200/20" />
        <div className="absolute inset-8 rounded-full border border-amber-200/15" />

        {quickLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            onClick={
              item.isPhone
                ? () => setShowPhone((prev) => !prev)
                : undefined
            }
            aria-label={item.isPhone ? `${item.name}: ${profile.phone}` : item.name}
            className={`group absolute flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/45 bg-[#0c121d] text-amber-200 shadow-lg transition hover:scale-110 hover:border-amber-200 hover:bg-amber-200 hover:text-slate-950 ${item.posClass}`}
          >
            {item.icon}
            <span
              className={`pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-amber-200/30 bg-[#0b101b] px-2.5 py-1 text-xs font-medium text-amber-200 shadow transition ${
                item.isPhone && showPhone
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {item.isPhone ? profile.phone : item.name}
            </span>
          </a>
        ))}

        {showPhone && (
          <div className="absolute -bottom-10 flex items-center gap-2 rounded-full border border-amber-200/30 bg-[#0c121d] px-4 py-1.5 text-xs font-medium text-amber-200 shadow-md">
            <span>Phone: {profile.phone}</span>
          </div>
        )}
      </div>
    </section>
  );
}