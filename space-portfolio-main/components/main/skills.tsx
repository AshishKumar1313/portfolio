import { SKILL_GROUPS } from "@/constants";

export const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What I Work With
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            The stack I reach for when building frontend systems, backend services,
            and AI-oriented projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.25)] backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
