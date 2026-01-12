"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BlogNavProps = {
  prev?: {
    href?: string;
    label?: string;
  };
  next?: {
    href?: string;
    label?: string;
  };
};

export function BlogNavigation({ prev, next }: BlogNavProps) {
  if (!prev?.href && !next?.href) return null;

  return (
    <nav
      aria-label="Blog navigation"
      className="mt-12 flex items-center justify-between gap-4 max-w-xl"
    >
      {prev?.href ? (
        <Link
          href={prev.href}
          className="group inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>{prev.label ?? "Previous Section"}</span>
        </Link>
      ) : (
        <div />
      )}

      {next?.href ? (
        <Link
          href={next.href}
          className="group inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
        >
          <span>{next.label ?? "Next Section"}</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
