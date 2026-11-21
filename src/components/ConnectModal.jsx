export default function ConnectModal({
  isOpen,
  onClose,
  profile,
  githubUrl,
  location,
}) {
  if (!isOpen) return null;

  const email = profile?.email || "erfatjahan456@gmail.com";
  const phone = profile?.phone || "+8801835899546";
  const linkedinUrl =
    profile?.linkedinUrl || "https://www.linkedin.com/in/most-erfat-jahan";
  const github = profile?.githubUrl || githubUrl || "https://github.com/erfatjahan";
  const currentLocation = location || profile?.location || "Chattogram, Bangladesh";

  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent("Portfolio Inquiry")}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#0b101b] p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <p className="text-xs text-slate-400">
Have a project or opportunity in mind?Feel free to reach out anytime.            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/15 px-3 py-1 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Close ✕
          </button>
        </div>

        <div className="mt-5 space-y-3 text-sm">
          {/* Email */}
          <a
            href={gmailHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 transition hover:border-amber-200/40"
          >
            <span className="flex items-center gap-2.5 text-slate-400">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-amber-200 stroke-2"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>Email</span>
            </span>
            <span className="truncate font-medium text-amber-200 hover:underline">
              {email}
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 transition hover:border-amber-200/40"
          >
            <span className="flex items-center gap-2.5 text-slate-400">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-amber-200 stroke-2"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>Phone</span>
            </span>
            <span className="font-medium text-slate-200">{phone}</span>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 transition hover:border-amber-200/40"
          >
            <span className="flex items-center gap-2.5 text-slate-400">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-amber-200"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5A1.99 1.99 0 1 0 5.27 7.48 1.99 1.99 0 0 0 5.25 3.5ZM20.44 13.02c0-3.27-1.75-4.79-4.08-4.79-1.88 0-2.72 1.03-3.19 1.76V8.5H9.8c.04.95 0 11 0 11h3.37v-6.14c0-.33.02-.66.12-.89.27-.66.87-1.35 1.89-1.35 1.33 0 1.86 1.02 1.86 2.51V19.5h3.4v-6.48Z" />
              </svg>
              <span>LinkedIn</span>
            </span>
            <span className="truncate font-medium text-amber-200 hover:underline">
              {linkedinUrl.replace(/^https?:\/\/(www\.)?/, "")}
            </span>
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 transition hover:border-amber-200/40"
          >
            <span className="flex items-center gap-2.5 text-slate-400">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-amber-200"
                aria-hidden="true"
              >
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
              </svg>
              <span>GitHub</span>
            </span>
            <span className="truncate font-medium text-amber-200 hover:underline">
              {github.replace(/^https?:\/\//, "")}
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#070b12] px-4 py-3">
            <span className="text-slate-400">Location</span>
            <span className="font-medium text-slate-200">{currentLocation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}