import Link from "next/link";

import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What I&apos;ve Built
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {project.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex w-max rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:text-white"
              >
                View Project
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
