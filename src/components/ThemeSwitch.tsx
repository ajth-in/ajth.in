"use client";
import { useTheme } from "next-themes";
import { CloudMoon, CloudSun, MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="w-[40px] h-[36px]" />;
  }
  return (
    <Button
      variant={"link"}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? (
        <CloudSun className="text-yellow-200" />
      ) : (
        <CloudMoon className="text-blue-700" />
      )}
    </Button>
  );
};
export default ThemeSwitch;
