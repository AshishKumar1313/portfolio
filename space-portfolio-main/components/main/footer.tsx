import Link from "next/link";

import { CONTACT_INFO, SOCIALS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="px-6 pb-10 pt-6 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-950/60 px-6 py-8 text-slate-300 shadow-[0_20px_60px_rgba(2,6,23,0.25)] backdrop-blur-md md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Ashish Kumar
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Full-stack developer focused on thoughtful UI, solid engineering,
            and AI-powered products that solve real problems.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
                aria-label={name}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            {CONTACT_INFO.slice(0, 2).map((item) => (
              <Link key={item.label} href={item.href}>
                {item.value}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
