import Link from "next/link";
import type { ReactNode } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiFileText,
} from "react-icons/fi";

import { CONTACT_INFO, CONTACT_NOTE, LINKS } from "@/constants";

const iconByLabel: Record<string, ReactNode> = {
  Email: <FiMail className="h-5 w-5" />,
  Phone: <FiPhone className="h-5 w-5" />,
  LinkedIn: <FiLinkedin className="h-5 w-5" />,
  GitHub: <FiGithub className="h-5 w-5" />,
};

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Let&apos;s Talk
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Get In Touch
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-md">
            <p className="max-w-xl text-base leading-8 text-slate-400">
              Have a question or want to work together? Reach out directly using
              the channels below.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ashish"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="yourname@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="I'd like to talk about..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/55 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
              >
                <FiSend className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,47,73,0.5),rgba(15,23,42,0.8))] p-8 shadow-[0_20px_60px_rgba(8,47,73,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Contact Note
            </p>
            <p className="mt-6 text-lg leading-9 text-slate-200">{CONTACT_NOTE}</p>

            <div className="mt-8 space-y-4">
              {CONTACT_INFO.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                    {iconByLabel[item.label] ?? <FiMail className="h-5 w-5" />}
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-slate-200">
                      {item.value}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-300/55 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              <FiFileText className="h-4 w-4" />
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
