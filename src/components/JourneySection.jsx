export default function JourneySection({ highlights }) {
  return (
    <section id="journey" className="py-20">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        <span className="text-amber-200">Education &amp; Highlights</span>
        {/* <span className="text-amber-200">.</span> */}
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.period}
            className="rounded-2xl border border-white/10 bg-[#0c121d] p-6"
          >
            <p className="font-mono text-xs text-amber-200">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {item.role}
            </h3>
            <p className="text-sm text-slate-400">{item.org}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {item.points.map((pt) => {
                const text = typeof pt === "string" ? pt : pt.text;
                const link = typeof pt === "object" ? pt.link : null;
                const linkLabel = typeof pt === "object" ? pt.linkLabel : "Certificate";

                return (
                  <li key={text} className="flex gap-2">
                    <span className="text-amber-200">•</span>
                    <span>
                      {text}{" "}
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-amber-200 underline underline-offset-4 transition hover:text-amber-100"
                        >
                          ({linkLabel})
                        </a>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}