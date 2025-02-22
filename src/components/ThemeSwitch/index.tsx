"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
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
