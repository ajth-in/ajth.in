"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonStar, Sun } from "lucide-react";
const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <Button
      variant={"link"}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? (
        <Sun className="text-yellow-200" />
      ) : (
        <MoonStar className="text-blue-700" />
      )}
    </Button>
  );
};
export default ThemeSwitch;
