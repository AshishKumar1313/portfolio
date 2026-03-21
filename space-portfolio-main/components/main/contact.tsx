import Link from "next/link";

import { CONTACT_INFO, CONTACT_NOTE } from "@/constants";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Let&apos;s Talk
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
            Have a question or want to work together? Reach out directly using
            the channels below.
          </p>

          <div className="mt-8 space-y-4">
            {CONTACT_INFO.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">{item.value}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,47,73,0.5),rgba(15,23,42,0.8))] p-8 shadow-[0_20px_60px_rgba(8,47,73,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Contact Note
          </p>
          <p className="mt-6 text-lg leading-9 text-slate-200">
            {CONTACT_NOTE}
          </p>
          <p className="mt-6 text-base leading-8 text-slate-400">
            Looking forward to hearing from you and building something strong
            together.
          </p>
        </div>
      </div>
    </section>
  );
};
