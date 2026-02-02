"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // żeby uniknąć hydration mismatch
    return (
      <button
        type="button"
        className="h-9 w-9 rounded-xl border cursor-pointer border-slate-200 bg-white"
        aria-label="Toggle theme"
      />
    );
  }

  const isDark =
    theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-xl cursor-pointer border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400"
      aria-label="Toggle theme"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
