import Link from "next/link";

import { CERTIFICATIONS, TIMELINE_ITEMS } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Background
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Training & Achievements
          </h2>
        </div>

        <div className="space-y-14">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Training & Achievements
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
            {TIMELINE_ITEMS.map((item, index) => (
              <article
                key={`${item.title}-${item.date}-${index}`}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
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
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Certifications
            </p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              My Credentials
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {CERTIFICATIONS.map((certification) => (
                <Link
                  key={certification.title}
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-b from-cyan-300/10 to-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_20px_45px_rgba(6,182,212,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/70">
                    <img
                      src={certification.image}
                      alt={`${certification.title} certificate preview`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="mt-2 text-base font-semibold text-white">
                      {certification.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">{certification.org}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
