"use client";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const shouldUseLight = savedTheme ? savedTheme === "light" : prefersLight;

    document.documentElement.classList.toggle("light-theme", shouldUseLight);
    setIsLight(shouldUseLight);
  }, []);

  const onToggle = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.classList.toggle("light-theme", nextIsLight);
    window.localStorage.setItem("theme", nextIsLight ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-[60] rounded-full border border-cyan-300/45 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_12px_30px_rgba(2,6,23,0.35)] backdrop-blur-md transition hover:bg-slate-900/90"
      aria-label="Toggle color theme"
    >
      {isLight ? "Dark" : "Light"}
    </button>
  );
};

