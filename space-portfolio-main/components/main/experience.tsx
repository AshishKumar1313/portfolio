import Link from "next/link";

import { CERTIFICATIONS, TIMELINE_ITEMS } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Background
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Training & Achievements
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            {TIMELINE_ITEMS.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                  {item.date}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-400">{item.org}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Certifications
            </p>
            <div className="mt-6 space-y-4">
              {CERTIFICATIONS.map((certification, index) => (
                <div
                  key={certification.title}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white">
                      {certification.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{certification.org}</p>
                  </div>
                  <Link
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                  >
                    Verify
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
