"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { css } from "styled-system/css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2rem",
        height: "2rem",
        borderRadius: "md",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        color: { base: "neutral.600", _dark: "neutral.400" },
        transition: "all 0.2s",
        _hover: {
          backgroundColor: "surface.glass.hover",
          color: { base: "neutral.900", _dark: "neutral.100" },
        },
      })}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
