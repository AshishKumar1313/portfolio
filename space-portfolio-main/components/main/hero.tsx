import Image from "next/image";
import Link from "next/link";

import { HERO, LINKS } from "@/constants";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-20"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(94,234,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
            {HERO.badge}
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            {HERO.title[0]}
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {HERO.title[1]}
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-slate-300 sm:text-xl">
            {HERO.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {HERO.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={HERO.primaryCta.href}
              className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_35px_rgba(14,165,233,0.35)] transition hover:-translate-y-0.5"
            >
              {HERO.primaryCta.label}
            </Link>
            <Link
              href={HERO.secondaryCta.href}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {HERO.secondaryCta.label}
            </Link>
            <Link
              href={LINKS.resume}
              target="_blank"
              className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-6 py-3 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/40 hover:bg-indigo-300/15"
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-3 shadow-[0_20px_80px_rgba(2,132,199,0.28)] backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.2),transparent_40%,rgba(99,102,241,0.18))]" />
            <Image
              src={HERO.image}
              alt="Ashish Kumar"
              width={520}
              height={700}
              priority
              className="relative z-10 h-auto w-[280px] rounded-[1.6rem] object-cover sm:w-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
