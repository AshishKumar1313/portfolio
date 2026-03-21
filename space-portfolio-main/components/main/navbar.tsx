'use client';

import { useState } from "react";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-5 py-3 shadow-[0_12px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl">
        <Link href="#home" className="text-lg font-black tracking-[0.2em] text-white">
          ASHISH<span className="text-cyan-300">.</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white lg:hidden"
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-[0_12px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-sm font-medium text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200"
                aria-label={name}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
