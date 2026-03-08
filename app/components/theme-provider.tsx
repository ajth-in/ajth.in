"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = stored ?? (systemDark ? "dark" : "light");

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  const applyTheme = (t: Theme) => {
    document.documentElement.setAttribute("data-theme", t);
    if (t === "dark") {
      document.documentElement.style.colorScheme = "dark";
      document.documentElement.style.backgroundColor = "#1c1b1b";
      document.documentElement.style.color = "white";
    } else {
      document.documentElement.style.colorScheme = "light";
      document.documentElement.style.backgroundColor = "white";
      document.documentElement.style.color = "black";
    }
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  // Prevent hydration flash — the inline script in layout
  // handles the initial DOM state before React hydrates
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Inline script to prevent flash of wrong theme.
 * This runs before React hydrates, reading localStorage
 * or falling back to the system preference.
 */
export const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    if (t === 'dark') {
      document.documentElement.style.colorScheme = 'dark';
      document.documentElement.style.backgroundColor = '#1c1b1b';
      document.documentElement.style.color = 'white';
    } else {
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.style.backgroundColor = 'white';
      document.documentElement.style.color = 'black';
    }
  } catch(e) {}
})();
`;
