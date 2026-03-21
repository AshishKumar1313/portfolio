import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section id="education" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Academics
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Educational Background
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((item, index) => (
            <article
              key={`${item.institution}-${item.year}-${item.label}-${index}`}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {item.institution}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{item.location}</p>
              <p className="mt-6 text-base font-medium text-slate-200">
                {item.degree}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-slate-300">
                  {item.year}
                </span>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
                  {item.score}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
