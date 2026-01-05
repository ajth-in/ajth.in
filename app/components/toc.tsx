"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "0px 0px -80% 0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block lg:fixed top-[300px] max-w-[240px]">
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
          On this page
        </h3>

        <div className="relative border-l border-neutral-800">
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li
                  key={item.id}
                  style={{ paddingLeft: (item.level - 1) * 16 }}
                  className="relative"
                >
                  {isActive && (
                    <div className="absolute left-[-1px] top-0 h-full w-[2px] bg-white transition-all duration-300" />
                  )}

                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "block text-[13px] leading-relaxed transition-colors duration-200  pl-2",
                      isActive
                        ? "text-white font-medium"
                        : "text-neutral-400 hover:text-neutral-200 line-clamp-2"
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
