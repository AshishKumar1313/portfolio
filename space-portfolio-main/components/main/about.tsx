import { ABOUT_PARAGRAPHS, INTERESTS, QUICK_FACTS } from "@/constants";

export const About = () => {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Quick Facts
            </p>
            <div className="mt-5 space-y-4">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Interests
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Who I Am
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
